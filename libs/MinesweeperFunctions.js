// @flow
import {getRandomArrayNumber} from '../libs/CommonFunctions'

export let createEmptyArray = (height: number, width: number): Array<*> => {
  let data = []
  for (let i = 0; i < height; i++) {
    data.push([])
    for (let j = 0; j < width; j++) {
      data[i][j] = {
        x: i,
        y: j,
        isMine: false,
        neighbour: 0,
        isRevealed: false,
        isEmpty: false,
        isFlagged: false
      }
    }
  }
  return data
}

export let plantMines = (data: Array<*>, height: number, width: number, mines: number): Array<*> => {
  let randomx = 0
  let randomy = 0
  let minesPlanted = 0
  while (minesPlanted < mines) {
    randomx = getRandomArrayNumber(width)
    randomy = getRandomArrayNumber(height)
    if (!(data[randomx][randomy].isMine)) {
      data[randomx][randomy].isMine = true
      minesPlanted++
    }
  }
  return data
}

export let getNeighbours = (data: Array<*>, height: number, width: number): Array<*> => {
  let updatedData = data
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (data[i][j].isMine !== true) {
        let mine = 0
        let area = traverseBoard(data[i][j].x, data[i][j].y, data, height, width)
        area.map(value => {
          if (value.isMine) { mine++ }
        })
        if (mine === 0) { updatedData[i][j].isEmpty = true }
        updatedData[i][j].neighbour = mine
      }
    }
  }
  return updatedData
}

export let traverseBoard = (x: number, y: number, data: Array<*>, height: number, width: number): Array<*> => {
  let el = []
  // up
  if (x > 0) el.push(data[x - 1][y])
  // down
  if (x < height - 1) el.push(data[x + 1][y])
  // left
  if (y > 0) el.push(data[x][y - 1])
  // right
  if (y < width - 1) el.push(data[x][y + 1])
  // top left
  if (x > 0 && y > 0) el.push(data[x - 1][y - 1])
  // top right
  if (x > 0 && y < width - 1) el.push(data[x - 1][y + 1])
  // bottom right
  if (x < height - 1 && y < width - 1) el.push(data[x + 1][y + 1])
  // bottom left
  if (x < height - 1 && y > 0) el.push(data[x + 1][y - 1])
  return el
}

export let getFlags = (data: *): Array<*> => {
  let mineArray = []
  data.map(datarow => {
    datarow.map((dataitem) => {
      if (dataitem.isFlagged) mineArray.push(dataitem)
    })
  })
  return mineArray
}

export let getMines = (data: *): Array<*> => {
  let mineArray = []
  data.map(datarow => {
    datarow.map((dataitem) => {
      if (dataitem.isMine) {
        mineArray.push(dataitem)
      }
    })
  })
  return mineArray
}

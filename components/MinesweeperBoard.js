// @flow
import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import MinesweeperCell from './MinesweeperCell'
import TextView from './TextView'
import ButtonWrapper from './ButtonWrapper'
import * as MSHelper from '../libs/MinesweeperFunctions'

type Props = {
  height: number,
  width: number,
  mines: number
}

type State = {
  boardData: Array<*>,
  gameWon: boolean,
  mineCount: number
}

export default class MinesweeperBoard extends Component <Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      boardData: this.initBoardData(),
      gameWon: false,
      mineCount: this.props.mines
    }
  }

  render (): React$Element<View> {
    let {mineCount, gameWon} = this.state
    return <View style={[styles.container]}>
      <View style={styles.infoBox}>
        <TextView text={'Minecount: ' + mineCount.toString()} />
        <TextView text={'Game Won: ' + gameWon.toString()} />
      </View>
      <View style={styles.boardContainer}>
        {this.renderBoard()}
      </View>
      {this.renderButton()}
    </View>
  }

  renderBoard = (): Array<*> => {
    let {boardData} = this.state
    return boardData.map((datarow) => {
      return datarow.map((dataitem) => {
        /* eslint-disable react/jsx-no-bind */
        return (
          <MinesweeperCell
            onPress={() => this.onCellPress(dataitem.x, dataitem.y)}
            onLongPress={() => this.onCellLongPress(dataitem.x, dataitem.y)}
            value={dataitem}
            key={dataitem.x + dataitem.y}
          />
        )
        /* eslint-enable react/jsx-no-bind */
      })
    })
  }

  renderButton = () => {
    return <ButtonWrapper onPress={this.resetGame} style={styles.gameButton}>
      <TextView text={'Restart'} />
    </ButtonWrapper>
  }

  resetGame = (): * => this.setState({mineCount: this.props.mines, boardData: this.initBoardData()})

  initBoardData = (): Array<*> => {
    let {height, width, mines} = this.props
    let data = MSHelper.createEmptyArray(height, width)
    data = MSHelper.plantMines(data, height, width, mines)
    data = MSHelper.getNeighbours(data, height, width)
    return data
  }

  onCellPress = (x: number, y: number): * => {
    let {boardData} = this.state
    let {mines} = this.props
    let win = false
    if (boardData[x][y].isRevealed) return null
    if (this.state.boardData[x][y].isMine) this.revealBoard()
    let updatedData = this.state.boardData
    updatedData[x][y].isFlagged = false
    updatedData[x][y].isRevealed = true
    if (updatedData[x][y].isEmpty) updatedData = this.revealEmpty(x, y, updatedData)
    if (this.getHidden(updatedData).length === mines) {
      win = true
      this.revealBoard()
    }
    return this.setState({
      boardData: updatedData,
      mineCount: mines - MSHelper.getFlags(updatedData).length,
      gameWon: win
    })
  }

  getHidden = (data: *): Array<*> => {
    let mineArray = []
    data.map(datarow => {
      datarow.map((dataitem) => {
        if (!dataitem.isRevealed) mineArray.push(dataitem)
      })
    })
    return mineArray
  }

  revealEmpty = (x: *, y: *, data: *) => {
    let {height, width} = this.props
    let area = MSHelper.traverseBoard(x, y, data, height, width)
    area.map(value => {
      if (!value.isFlagged && !value.isRevealed && (value.isEmpty || !value.isMine)) {
        data[value.x][value.y].isRevealed = true
        if (value.isEmpty) {
          this.revealEmpty(value.x, value.y, data)
        }
      }
    })
    return data
  }

  onCellLongPress = (x: number, y: number): * => {
    let updatedData = this.state.boardData
    let mines = this.state.mineCount
    let win = false
    if (updatedData[x][y].isRevealed) return
    if (updatedData[x][y].isFlagged) {
      updatedData[x][y].isFlagged = false
      mines++
    } else {
      updatedData[x][y].isFlagged = true
      mines--
    }
    if (mines === 0) {
      const mineArray = MSHelper.getMines(updatedData)
      const FlagArray = MSHelper.getFlags(updatedData)
      if (JSON.stringify(mineArray) === JSON.stringify(FlagArray)) {
        this.revealBoard()
        // NOTE: YOU WIN STUFF
      }
    }
    this.setState({
      boardData: updatedData,
      mineCount: mines,
      gameWon: win
    })
  }

  revealBoard = (): * => {
    let updatedData = this.state.boardData
    updatedData.map((datarow) => {
      datarow.map((dataitem) => {
        dataitem.isRevealed = true
      })
    })
    this.setState({
      boardData: updatedData
    })
  }
}

export let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  infoBox: {
    height: 50,
    width: '100%'
  },
  boardContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  }
})

// @flow
import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import MinesweeperCell from './MinesweeperCell'
import TextView from './TextView'
import TheButton from './TheButton'
import * as MSHelper from '../libs/MinesweeperFunctions'
import commonStyles from '../libs/CommonStyles'
import {getText} from '../libs/TextHelper'
import {vibrationFeedback} from '../libs/CommonFunctions'
import Config from '../libs/Config'

type Props = {
  height: number,
  width: number,
  mines: number
}

type State = {
  boardData: Array<*>,
  gameWon: boolean,
  gameLost: boolean,
  mineCount: number,
  gameActive: boolean,
  gameTime: number
}

let timer
export default class MinesweeperBoard extends Component <Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      boardData: this.initBoardData(),
      gameWon: false,
      gameLost: false,
      mineCount: this.props.mines,
      gameActive: false,
      gameTime: 0
    }
  }

  componentWillUnmount () {
    clearInterval(timer)
  }

  render (): React$Element<View> {
    let {mineCount} = this.state
    return <View style={styles.container}>
      <View style={styles.infoBox}>
        <TextView text={getText('ms_minecount', [mineCount.toString()])} style={styles.mineCountText} />
      </View>
      <View style={styles.boardContainer}>
        {this.renderBoard()}
      </View>
      {this.renderGameStatus()}
      {this.renderGameTip()}
      {this.renderButton()}
    </View>
  }

  renderBoard = (): Array<View> => {
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
    return <TheButton onPress={this.resetGame} langKey='general_restart' />
  }

  renderGameStatus = () => {
    let {gameWon, gameLost} = this.state
    switch (true) {
      case gameWon: return this.renderGameWon()
      case gameLost: return this.renderGameLost()
      default: return this.renderDefaultStatus()
    }
  }

  renderGameWon = () => {
    return <View>
      <TextView langKey={'general_winner_excl'} style={styles.statusText} />
      <TextView text={'🏆'} style={styles.gameStatusIcon} />
    </View>
  }

  renderGameLost = () => {
    return <View>
      <TextView langKey={'general_looser_excl'} style={styles.statusText} />
      <TextView text={'☠️'} style={styles.gameStatusIcon} />
    </View>
  }

  renderDefaultStatus = () => {
    let {gameTime, gameActive} = this.state
    return <View>
      <TextView style={styles.statusText} text={gameActive ? gameTime.toString() : ''} />
      <TextView text={'💣'} style={styles.gameStatusIcon} />
    </View>
  }

  renderGameTip = () => {
    let {gameWon, gameLost} = this.state
    if (!gameWon && !gameLost) return <TextView langKey={'ms_set_flag_tip'} style={styles.tip} />
    if (gameLost) return <TextView langKey={'try_again'} style={styles.tip} />
    return <View />
  }

  resetGame = (): * => {
    clearInterval(timer)
    this.setState({
      mineCount: this.props.mines,
      boardData: this.initBoardData(),
      gameWon: false,
      gameLost: false,
      gameTime: 0,
      gameActive: false
    })
  }

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
    let lost = true
    if (Config.enableMineSweeperTimer) this.toggleGameTimer()
    if (boardData[x][y].isRevealed) return null
    if (this.state.boardData[x][y].isMine) this.revealBoard(lost)
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

  toggleGameTimer = () => {
    let {gameActive, gameLost, gameWon} = this.state
    if (!gameActive) {
      this.setState({gameActive: true})
      let time = 0
      timer = setInterval(() => {
        ++time
        this.setState({gameTime: time})
        if (gameWon || gameLost) clearInterval(timer)
      }, 1000)
    }
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
    vibrationFeedback()
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
        win = true
      }
    }
    this.setState({
      boardData: updatedData,
      mineCount: mines,
      gameWon: win
    })
  }

  revealBoard = (lost?: boolean): * => {
    let updatedData = this.state.boardData
    updatedData.map((datarow) => {
      datarow.map((dataitem) => {
        dataitem.isRevealed = true
      })
    })
    if (lost) {
      vibrationFeedback()
      this.setState({gameLost: true})
    }
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: commonStyles.space
  },
  boardContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  statusText: {
    minHeight: 60,
    fontSize: 25,
    padding: commonStyles.space,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  gameStatusIcon: {
    fontSize: 60,
    textAlign: 'center'
  },
  tip: {
    textAlign: 'center',
    marginTop: commonStyles.space
  },
  mineCountText: {
    fontSize: 20
  },
  timerIcon: {
    fontSize: 18,
    padding: commonStyles.smallSpace
  }
})

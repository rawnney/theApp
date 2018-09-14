// @flow
import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {primaryColor} from '../libs/ColorThemeHelper'
import {TILES} from '../libs/Consts'
import MinesweeperBoard from './MinesweeperBoard'

type Props = {
}

type State = {
  height: number,
  width: number,
  mines: number
}

export default class MinesweeperView extends Component <Props, State> {
  state = {
    height: TILES,
    width: TILES,
    mines: 10
  }

  render (): React$Element<View> {
    let {height, width, mines} = this.state
    return <View style={[styles.container, {backgroundColor: primaryColor()}]}>
      <MinesweeperBoard height={height} width={width} mines={mines} reset={this.resetGame()} />
    </View>
  }
  resetGame = (): * => this.state
}

export let styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

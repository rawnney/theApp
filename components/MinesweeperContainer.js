// @flow
import React, {Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'
import {getDefaultNavigationOptions} from '../libs/DefaultNavHeader'
import MinesweeperView from './MinesweeperView'
import {noExitWithTitle} from '../libs/NavigationOptions'

type State = {
}

type Props = {
}

class MinesweeperContainer extends Component <Props, State> {
  state = {isLoading: true}
  static routeName = 'MinesweeperContainer'
  static navigationOptions = getDefaultNavigationOptions(noExitWithTitle('title_minesweeper'))

  render (): React$Element<View> {
    return <MinesweeperView />
  }
}

export default connect(state => state)(MinesweeperContainer)

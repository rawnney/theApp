// @flow
import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {borderColor, secondaryColor, warningColor} from '../libs/ColorThemeHelper'
import {TILES} from '../libs/Consts'
import ButtonWrapper from './ButtonWrapper'
import commonStyles from '../libs/CommonStyles'
import TextView from './TextView'

type Props = {
  value: Object,
  onPress: Function,
  onLongPress: Function
}

type State = {
}

export default class MinesweeperCell extends Component<Props, State> {
  render (): React$Element<View> {
    let {onPress, onLongPress} = this.props
    return <ButtonWrapper onPress={onPress} onLongPress={onLongPress}>
      <View style={[{borderColor: borderColor()}, this.valueStyle(), styles.cell]}>
        <TextView text={this.renderValue()} />
      </View>
    </ButtonWrapper>
  }

  renderValue = (): string => {
    let {value} = this.props
    let {isRevealed, isMine, neighbour, isFlagged} = value
    switch (true) {
      case !isRevealed: return isFlagged ? '🚩' : ''
      case isMine: return '💣'
      case neighbour === 0: return ''
      default: return neighbour
    }
  }

  valueStyle = (): Object => {
    let {value} = this.props
    if (value.isFlagged) return {backgroundColor: warningColor()}
    if (value.isRevealed) return {backgroundColor: secondaryColor()}
    return {}
  }
}

export let styles = StyleSheet.create({
  cell: {
    justifyContent: 'center',
    alignItems: 'center',
    width: commonStyles.windowWidth / TILES,
    height: commonStyles.windowHeight / TILES - commonStyles.windowWidth / TILES,
    borderWidth: 1
  }
})

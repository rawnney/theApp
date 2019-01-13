// @flow
import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {primaryColor, borderColor} from '../libs/ColorThemeHelper'
import commonStyles from '../libs/CommonStyles'
import IconButton from './IconButton'
import LineBreak from './LineBreak'
import {LOCATION_ARROW, CHART_BAR, COG} from '../consts/Icons'

type Props = {}

type State = {}

export default class CrimeBottomNavigationBar extends Component <Props, State> {
  state = {}

  render (): React$Element<View> {
    return <View style={[styles.container, {backgroundColor: primaryColor(), borderColor: borderColor()}]}>
      <IconButton name={LOCATION_ARROW} onPress={this.doNothing} style={styles.barButton} />
      <LineBreak vertical />
      <IconButton name={CHART_BAR} onPress={this.doNothing} style={styles.barButton} />
      <LineBreak vertical />
      <IconButton name={COG} onPress={this.doNothing} style={styles.barButton} />
    </View>
  }

  doNothing = () => {}
}

export let styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: commonStyles.buttonHeight,
    borderTopWidth: 0.5,
    width: '100%',
    flexDirection: 'row'
  },
  barButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

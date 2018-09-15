// @flow
import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {getDefaultNavigationOptions} from '../libs/DefaultNavHeader'
import {withTitle} from '../libs/NavigationOptions'
import {primaryColor} from '../libs/ColorThemeHelper'

type State = {}

type Props = {
  navigation: Object
}

class CrimeStatisticsContainer extends Component <Props, State> {
  static routeName = 'CrimeStatisticsContainer'
  static navigationOptions = getDefaultNavigationOptions(withTitle('title_crime_statistics'))

  render (): React$Element<View> {
    return <View style={[styles.container, {backgroundColor: primaryColor()}]}>
      <View />
    </View>
  }
}

export let styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default connect(state => state)(CrimeStatisticsContainer)

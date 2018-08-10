// @flow
import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import colors from '../libs/Colors'
import defaultNavHeader from './DefaultNavHeader'
import {connect} from 'react-redux'
import {goTo} from '../libs/NavigationHelper'
import HomeView from './HomeView'

class HomeContainer extends Component<*> {
  static routeName = 'HomeContainer'
  static navigationOptions = {
    ...defaultNavHeader,
    headerLeft: <View />
  }

  render (): React$Element<*> {
    return <HomeView onPressListItem={this.onPressListItem} />
  }

  onPressListItem = (routeName) => {
    let {navigation} = this.props
    goTo(navigation, routeName)
  }
}

export let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10
  },
  contentContainer: {
    minWidth: '100%'
  }
})

export default connect(state => state)(HomeContainer)

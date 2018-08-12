// @flow
import React, {Component} from 'react'
import {View} from 'react-native'
import defaultNavHeader from './DefaultNavHeader'
import {connect} from 'react-redux'
import {goTo} from '../libs/NavigationHelper'
import HomeView from './HomeView'

type Props = {
  navigation: NavigationState
}

type State = {}

class HomeContainer extends Component<Props, State> {
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

export default connect(state => state)(HomeContainer)

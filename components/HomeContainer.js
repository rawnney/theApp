// @flow
import React, {Component} from 'react'
import {getDefaultNavigationOptions} from './DefaultNavHeader'
import {connect} from 'react-redux'
import {noBackButton} from '../consts/NavigationOptions'
import {goTo} from '../libs/NavigationHelper'
import HomeView from './HomeView'

type Props = {
  navigation: NavigationState
}

type State = {}

class HomeContainer extends Component<Props, State> {
  static routeName = 'HomeContainer'
  static navigationOptions = getDefaultNavigationOptions(noBackButton)

  render (): React$Element<*> {
    return <HomeView onPressListItem={this.onPressListItem} />
  }

  onPressListItem = (routeName) => {
    let {navigation} = this.props
    goTo(navigation, routeName)
  }
}

export default connect(state => state)(HomeContainer)

// @flow
import React, {Component} from 'react'
import {getDefaultNavigationOptions} from '../libs/DefaultNavHeader'
import {connect} from 'react-redux'
import {noButtons} from '../consts/NavigationOptions'
import {goTo} from '../libs/NavigationHelper'
import HomeView from './HomeView'

type Props = {
  navigation: Object
}

type State = {}

class HomeContainer extends Component<Props, State> {
  static routeName = 'HomeContainer'
  static navigationOptions = getDefaultNavigationOptions(noButtons)

  render (): React$Element<*> {
    return <HomeView onPressListItem={this.onPressListItem} />
  }

  onPressListItem = (routeName) => {
    let {navigation} = this.props
    goTo(navigation, routeName)
  }
}

export default connect(state => state)(HomeContainer)

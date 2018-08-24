// @flow
import React, {Component} from 'react'
import {getDefaultNavigationOptions} from '../libs/DefaultNavHeader'
import {connect} from 'react-redux'
import {noButtons} from '../libs/NavigationOptions'
import HomeView from './HomeView'

type Props = {
  navigation: Object
}

type State = {}

class HomeContainer extends Component<Props, State> {
  static routeName = 'HomeContainer'
  static navigationOptions = getDefaultNavigationOptions(noButtons)

  render (): React$Element<*> {
    let {navigation} = this.props
    return <HomeView navigation={navigation} />
  }
}

export default connect(state => state)(HomeContainer)

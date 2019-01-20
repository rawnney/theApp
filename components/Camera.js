// @flow
import React, {Component} from 'react'
import {View} from 'react-native'
// $FlowFixMe
import {RNCamera} from 'react-native-camera'

type Props = {
}

type State = {
}

export default class Camera extends Component<Props, State> {
  render (): React$Element<View> {
    return <RNCamera ref={'camera'} type={RNCamera.Constants.Type.front} {...this.props} />
  }
}

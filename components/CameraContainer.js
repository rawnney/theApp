// @flow
import React, {Component} from 'react'
import {StyleSheet, View, Image} from 'react-native'
import Camera from './Camera'
import TheButton from './TheButton'
import {getDefaultNavigationOptions} from '../libs/DefaultNavHeader'
import {noExit} from '../libs/NavigationOptions'
import {primaryColor} from '../libs/ColorThemeHelper'
import {connect} from 'react-redux'
import Store from '../libs/Store'
import * as Actions from '../libs/Actions'

type Props = {
  user: User,
  navigation: Object
}

type State = {
  photoData: Object
}

let camera
class CameraContainer extends Component<Props, State> {
  static routeName = 'CameraContainer'
  static navigationOptions = getDefaultNavigationOptions(noExit)
  state = {
    photoData: undefined
  }
  render (): React$Element<View> {
    let {photoData} = this.state
    switch (true) {
      case !!photoData: return this.renderPhoto()
      case !photoData: return this.renderCamera()
      default: return <View />
    }
  }

  renderCamera = () => {
    return <View style={styles.container}>
      {/* $FlowFixMe */}
      <Camera
        ref={this.setRef}
        style={styles.preview}
        mirrorImage={false}
        captureAudio={false}
      />
      <TheButton onPress={this.takePicture} text={'Take Photo'} />
    </View>
  }

  renderPhoto = () => {
    let {photoData} = this.state
    if (photoData) {
      return <View style={styles.container}>
        <Image source={{uri: photoData.uri}} style={[styles.preview, {backgroundColor: primaryColor()}]} />
        <TheButton onPress={this.uploadPicture} text={'Upload photo'} />
      </View>
    }
    return <View />
  }

  setRef = (cam: *) => camera = cam

  takePicture = () => {
    const options = {quality: 0.3}
    camera.refs.camera.takePictureAsync(options)
      .then((data) => this.setState({photoData: data}))
  }

  uploadPicture = () => {
    let {user, navigation} = this.props
    let {photoData} = this.state
    Store.dispatch(Actions.updateUser({...user, profilePic: photoData}))
    navigation.goBack()
  }
}

export default connect(state => state)(CameraContainer)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})

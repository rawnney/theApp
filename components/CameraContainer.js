// @flow
import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {RNCamera} from 'react-native-camera'
import TheButton from './TheButton'
import {getDefaultNavigationOptions} from '../libs/DefaultNavHeader'
import {noExit} from '../libs/NavigationOptions'

type Props = {
}

type State = {
  photoData: Object
}

let camera

export default class CameraContainer extends Component<State, Props> {
  static routeName = 'CameraContainer'
  static navigationOptions = getDefaultNavigationOptions(noExit)
  state = {
    photoData: {}
  }
  render (): React$Element<View> {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={'camera'}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
          captureAudio={false}
        />
        <TheButton onPress={this.takePicture} text={'Take Photo'} />
      </View>
    )
  }

  takePicture = () => {
    if (!this.camera) return
    const options = {quality: 0.5}
    camera.refs.camera.takePictureAsync(options)
      .then((data) => this.setState({photoData: data}))
      .then((data) => console.warn('Pic taken')) // data.uri
  }

  takePicture2 = async function () {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await camera.takePictureAsync(options)
      console.warn(data.uri)
    }
  }
}

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

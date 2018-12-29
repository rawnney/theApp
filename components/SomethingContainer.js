// @flow
import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {getDefaultNavigationOptions} from '../libs/DefaultNavHeader'
import {noExitWithTitle} from '../libs/NavigationOptions'
import {primaryColor, secondaryColor, primaryTextColor, secondaryTextColor, warningColor} from '../libs/ColorThemeHelper'
import LinearGradient from 'react-native-linear-gradient'
import TheButton from './TheButton'
import colors from '../libs/Colors'

type Props = {}
type State = {
  shimmer: boolean,
  colorArr: Array<*>
}

let interval

export default class SomethingContainer extends Component <Props, State> {
  static routeName = 'SomethingContainer'
  static navigationOptions = getDefaultNavigationOptions(noExitWithTitle('something'))
  state = {shimmer: false, colorArr: []}

  componentDidMount () {
    if (primaryColor() !== undefined) {
      this.setState({
        colorArr: [primaryColor(), secondaryColor(), primaryTextColor(), secondaryTextColor(), warningColor()]
      })
    }
  }

  componentWillUnmount () {
    if (interval) clearInterval(interval)
  }

  render (): React$Element<View> {
    return <View style={[styles.container, {backgroundColor: primaryColor()}]}>
      <View>
        {this.renderGradient()}
      </View>
      <TheButton onPress={this.toggleShimmer} text={'Shimmer'} style={styles.button} withBorder />
    </View>
  }

  renderGradient = () => {
    let {shimmer, colorArr} = this.state
    return <LinearGradient colors={!shimmer ? colorArr : this.getFreaky()} style={styles.gradient} />
  }

  toggleShimmer = () => {
    let {shimmer} = this.state
    this.setState({shimmer: !shimmer})
    if (interval) clearInterval(interval)
    if (!interval) this.getFreaky()
  }

  getFreaky = () => {
    let {colorArr} = this.state
    let colorz = [...colorArr]
    interval = setInterval(() => {
      colorz.push(colors.black)
    }, 200)
  }
}

export let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gradient: {
    // flex: 1
    height: '100%',
    width: '100%'
  },
  button: {
    position: 'absolute',
    bottom: 0
  }
})

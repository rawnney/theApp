// @flow
import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import defaultNavHeader from './DefaultNavHeader'
import colors from '../libs/Colors'

type State = {}

type Props = {
  crime: Object,
  navigation: Object
}

class CrimeExtendedContainer extends Component <Props, State> {
  static routeName = 'CrimesContainer'
  static navigationOptions = {
    ...defaultNavHeader,
    headerTitle: 'Crime details'
  }

  render (): React$Element<View> {
    let {params} = this.props.navigation.state
    return <View style={styles.container}>
      <Text>{params}</Text>
    </View>
  }
}

export let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  }
})

export default connect(state => state)(CrimeExtendedContainer)

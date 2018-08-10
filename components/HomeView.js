// @flow
import React, {Component} from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native'
import colors from '../libs/Colors'
import defaultNavHeader from './DefaultNavHeader'
import HomeListButton from './HomeListButton'
import WeatherContainer from './WeatherContainer'
import UserSettingsContainer from './UserSettingsContainer'
import CrimesContainer from './CrimesContainer'
import {connect} from 'react-redux'

type Props = {
  onPressListItem: Function
}
type State = {}

class HomeView extends Component<Props, State> {
  static navigationOptions = {
    ...defaultNavHeader
  }

  render (): React$Element<*> {
    /* eslint-disable react/jsx-no-bind */
    return <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>TheApp</Text>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <HomeListButton onPress={() => this.onPressListItem(UserSettingsContainer.routeName)} title='Settings' />
          <HomeListButton onPress={() => this.onPressListItem(WeatherContainer.routeName)} title='Weather' />
          <HomeListButton onPress={() => this.onPressListItem(CrimesContainer.routeName)} title='Crimes near you' />
        </ScrollView>
      </View>
    </View>
    /* eslint-enable react/jsx-no-bind */
  }

  onPressListItem = (routeName: string) => {
    let {onPressListItem} = this.props
    if (onPressListItem) onPressListItem(routeName)
  }
}

export default connect(state => state)(HomeView)

let styles = StyleSheet.create({
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

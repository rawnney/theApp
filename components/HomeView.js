// @flow
import React, {Component} from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native'
import colors from '../libs/Colors'
import ListButton from './ListButton'
import WeatherContainer from './WeatherContainer'
import UserSettingsContainer from './UserSettingsContainer'
import CrimesContainer from './CrimesContainer'
import commonStyle from '../libs/CommonStyles'

type Props = {
  onPressListItem: Function,
  user: User
}
type State = {}

export default class HomeView extends Component<Props, State> {
  render (): React$Element<*> {
    let {user} = this.props
    /* eslint-disable react/jsx-no-bind */
    return <View style={[styles.container, {backgroundColor: user.colorTheme.backgroundColor}]}>
      <View style={styles.wrapper}>
        <Text style={[styles.title, {color: user.colorTheme.color}]}>TheApp</Text>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <ListButton onPress={() => this.onPressListItem(UserSettingsContainer.routeName)} text='Settings' />
          <ListButton onPress={() => this.onPressListItem(WeatherContainer.routeName)} text='Weather' />
          <ListButton onPress={() => this.onPressListItem(CrimesContainer.routeName)} text='Crimes near you' />
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

export let styles = StyleSheet.create({
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
    margin: commonStyle.space
  },
  contentContainer: {
    minWidth: '100%'
  }
})

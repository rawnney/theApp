// @flow

import React, {Component} from 'react'
import {View, StyleSheet, ScrollView, DeviceEventEmitter} from 'react-native'
import {themeBgColor} from '../libs/ColorThemeHelper'
import commonStyle from '../libs/CommonStyles'
import ListButton from './ListButton'
import Store from '../libs/Store'
import * as Actions from '../libs/Actions'
import {setLanguage} from '../libs/TextHelper'

type Props = {
  user: User
}

type State = {
  user: User
}

export default class LanguageSettingsContainer extends Component<State, Props> {
  state = {user: this.props.user}
  render (): React$Element<*> {
    return <View style={[styles.container, themeBgColor()]}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <ListButton onPress={this.setLangEnglish} langKey='lang_settings_english' lineBreakTop />
        <ListButton onPress={this.setLangSwedish} langKey='lang_settings_swedish' />
      </ScrollView>
    </View>
  }

  setUserLang = (userLanguage: string): Promise<Object> => {
    let {user} = this.state
    let updatedUser = {...user, userLanguage}
    return new Promise((resolve, reject) => {
      this.setState({user: updatedUser})
      if (!userLanguage) reject(new Error('No userLanguage'))
      setLanguage(userLanguage)
      DeviceEventEmitter.emit('onLangChange', userLanguage)
      resolve(user)
    })
  }

  setLangEnglish = () => {
    let lang = 'en'
    this.setUserLang(lang)
      .then((lang) => {
        let {user} = this.state
        return Store.dispatch(Actions.updateUser(user))
      })
  }

  setLangSwedish = () => {
    let lang = 'sv'
    this.setUserLang(lang)
      .then((lang) => {
        let {user} = this.state
        return Store.dispatch(Actions.updateUser(user))
      })
  }
}

export let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentContainer: {
    minWidth: '100%',
    paddingTop: commonStyle.space
  }
})

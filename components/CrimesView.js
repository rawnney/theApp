// @flow
import React, {Component} from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import CrimeListItem from './CrimeListItem'
import {themeBgColor} from '../libs/ColorThemeHelper'

type Props = {
  crimes: Object,
  onPressCrime?: Function
}

type State = {}

export default class CrimesView extends Component <Props, State> {
  render (): React$Element<View> {
    return <View style={[styles.container, themeBgColor()]}>
      <ScrollView>
        {this.renderCrimeList()}
      </ScrollView>
    </View>
  }

  renderCrimeList = () => {
    let {crimes} = this.props
    let crimeList = crimes.map((item, key) => {
      /* eslint-disable react/jsx-no-bind */
      return <CrimeListItem
        key={item.id}
        onPress={() => this.onPressCrime(item)}
        type={item.title_type}
        date={item.pubdate_iso8601}
        location={item.title_location}
        description={item.description} />
      /* eslint-enable react/jsx-no-bind */
    })
    return crimeList
  }

  onPressCrime = (item: Object) => {
    let {onPressCrime} = this.props
    if (onPressCrime) onPressCrime(item)
  }
}

export let styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

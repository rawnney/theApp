// @flow
import React, {Component} from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import colors from '../libs/Colors'
import CrimeListItem from './CrimeListItem'

type Props = {
  crimes: Object,
  onPressCrime?: Function
}

type State = {}

export default class CrimesView extends Component <Props, State> {
  render (): React$Element<View> {
    return <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.wrapper}>
        {this.renderCrimeList()}
      </ScrollView>
    </View>
  }

  renderCrimeList = () => {
    let {crimes} = this.props
    console.log(crimes)
    let crimeList = crimes.map((item, key) => {
      return (
        <CrimeListItem
          key={item.id}
          onPress={this.onPressCrime}
          type={item.title_type}
          date={item.pubdate_iso8601}
          location={item.title_location}
          description={item.description} />
      )
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
    flex: 1,
    backgroundColor: colors.white
  },
  wrapper: {
    paddingTop: 20
  }
})

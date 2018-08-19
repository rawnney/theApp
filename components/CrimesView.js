// @flow
import React, {Component} from 'react'
import {View, StyleSheet, ScrollView, RefreshControl} from 'react-native'
import CrimeListItem from './CrimeListItem'
import {themeBgColor} from '../libs/ColorThemeHelper'

type Props = {
  crimes: Object,
  onPressCrime: Function,
  refreshCrimes: Function
}

type State = {
  crimes: Object,
  isRefreshing: boolean
}

export default class CrimesView extends Component <Props, State> {
  state = {isRefreshing: false, crimes: {}}

  componentWillMount () {
    let {crimes} = this.props
    if (crimes) this.setState({crimes: crimes})
  }

  componentWillReceiveProps (nextProps: Object) {
    if (this.props.crimes !== nextProps.crimes) {
      this.setState({crimes: nextProps.crimes})
    }
  }

  render (): React$Element<View> {
    let {refreshCrimes} = this.props
    return <View style={[styles.container, themeBgColor()]}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={refreshCrimes} />}>
        {this.renderCrimeList()}
      </ScrollView>
    </View>
  }

  renderCrimeList = () => {
    let {crimes} = this.state
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

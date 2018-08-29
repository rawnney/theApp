// @flow
import React, {Component} from 'react'
import {View, StyleSheet, ScrollView, RefreshControl, Image} from 'react-native'
import CrimeListItem from './CrimeListItem'
import {themeBgColor, themeTxtColorString} from '../libs/ColorThemeHelper'
import Images from '../libs/Images'
import SearchBar from './SearchBar'
import LineBreak from './LineBreak'
import commonStyles from '../libs/CommonStyles'
let {crimescenetape, bloodsplash} = Images

type Props = {
  crimes: Object,
  onPressCrime: Function,
  refreshCrimes: Function
}

type State = {
  allCrimes: Object,
  isRefreshing: boolean,
  text?: string,
  filteredCrimes?: Object
}

export default class CrimesView extends Component <Props, State> {
  state = {isRefreshing: false, allCrimes: {}, filteredCrimes: {}}

  componentWillMount () {
    let {crimes} = this.props
    if (crimes) this.setState({allCrimes: crimes, filteredCrimes: crimes})
  }

  componentWillReceiveProps (nextProps: Props) {
    if (this.props.crimes !== nextProps.crimes) {
      this.setState({allCrimes: nextProps.crimes})
    }
  }

  render (): React$Element<View> {
    let {refreshCrimes} = this.props
    let {isRefreshing} = this.state
    return <View style={[styles.container, themeBgColor()]}>
      <SearchBar onChangeText={this.filterList} style={styles.searchBar} placeholder={'Stockholm, theft, today...'} />
      <LineBreak />
      <ScrollView
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={refreshCrimes} tintColor={themeTxtColorString()} />}>
        <Image source={crimescenetape} style={styles.crimescenetape} />
        <Image source={bloodsplash} style={styles.bloodsplash} />
        {this.renderCrimeList()}
      </ScrollView>
    </View>
  }

  renderCrimeList = () => {
    let {filteredCrimes} = this.state
    if (!filteredCrimes) return <View />
    let listItems = filteredCrimes.map((item, key) => {
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
    return listItems
  }

  filterList = (text: string) => {
    let {allCrimes} = this.state
    if (!allCrimes) return allCrimes
    let filteredCrimes = allCrimes.filter(item => {
      let type = item.title_type.toLowerCase()
      let location = item.title_location.toLowerCase()
      let combine = type + location
      let combineReverse = location + type
      let formTxt = text.toLowerCase().replace(/[ ,.]/g, '')
      if (combine.toLowerCase().includes(formTxt)) return true
      if (combineReverse.toLowerCase().includes(formTxt)) return true
      return false
    })
    return this.setState({filteredCrimes: filteredCrimes})
  }

  onPressCrime = (item: Object) => {
    let {onPressCrime} = this.props
    if (onPressCrime) onPressCrime(item)
  }
}

export let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchBar: {
    paddingTop: commonStyles.space,
    paddingBottom: commonStyles.space
  },
  crimescenetape: {
    position: 'absolute',
    height: 30,
    resizeMode: 'stretch',
    width: '130%',
    top: -110,
    left: -50,
    transform: [{rotate: '20deg'}]
  },
  bloodsplash: {
    position: 'absolute',
    height: 200,
    width: '100%',
    top: -310
  }
})

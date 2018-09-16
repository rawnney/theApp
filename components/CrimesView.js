// @flow
import React, {Component} from 'react'
import {View, StyleSheet, ScrollView, RefreshControl, Image} from 'react-native'
import CrimeListItem from './CrimeListItem'
import {primaryColor, primaryTextColor} from '../libs/ColorThemeHelper'
import Images from '../libs/Images'
import SearchBar from './SearchBar'
import LineBreak from './LineBreak'
import commonStyles from '../libs/CommonStyles'
import {randomKey} from '../libs/CommonFunctions'
import TextView from './TextView'
// import TheButton from './TheButton'
let {crimescenetape, bloodsplash} = Images

type Props = {
  crimes: Array<Object>,
  onPressCrime: Function,
  refreshCrimes: Function
  // getCrimesWithParams: Function
}

type State = {
  crimes: Array<Object>,
  isRefreshing: boolean,
  filteredCrimes?: Array<Object>
  // extendedSearch: Array<Object>,
  // text: string
}

export default class CrimesView extends Component <Props, State> {
  state = {isRefreshing: false, crimes: [], filteredCrimes: []} // extendedSearch: [], text: ''

  componentWillMount () {
    let {crimes} = this.props
    if (crimes) this.setState({crimes: crimes, filteredCrimes: crimes})
  }

  componentWillReceiveProps (nextProps: Props) {
    if (this.props.crimes !== nextProps.crimes) {
      this.setState({crimes: nextProps.crimes})
    }
  }

  render (): React$Element<View> {
    let {refreshCrimes} = this.props
    let {isRefreshing, filteredCrimes} = this.state // text={text}
    // $FlowFixMe
    let noCrimeOnSearch = filteredCrimes.length === 0
    return <View style={[styles.container, {backgroundColor: primaryColor()}]}>
      <SearchBar onChangeText={this.filterList} style={styles.searchBar} placeholder={'Stöld, Trafikbrott, Rån...'} />
      <LineBreak />
      <ScrollView
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={refreshCrimes} tintColor={primaryTextColor()} />}
        contentContainerStyle={styles.scroll}>
        <Image source={crimescenetape} style={styles.crimescenetape} />
        <Image source={bloodsplash} style={styles.bloodsplash} />
        {noCrimeOnSearch ? this.renderNoSearchResults() : this.renderCrimeList()}
      </ScrollView>
    </View>
  }

  renderCrimeList = () => {
    let {filteredCrimes} = this.state
    if (!filteredCrimes) return <View />
    let listItems = filteredCrimes.map((item, key) => {
      /* eslint-disable react/jsx-no-bind */
      return <CrimeListItem
        key={randomKey()}
        onPress={() => this.onPressCrime(item)}
        type={item.title_type}
        date={item.pubdate_iso8601}
        location={item.title_location}
        description={item.description} />
      /* eslint-enable react/jsx-no-bind */
    })
    return listItems
  }

  renderNoSearchResults = () => {
    return <View style={styles.noSearchResultsContainer}>
      <TextView text={'No crimes found 🧐'} style={styles.noSearchResultText} />
      {/* <TextView text={'Extend your search to the whole of sweden?'} style={[styles.noSearchResultText, styles.searchQuestion]} /> */}
      {/* <TheButton onPress={this.extendedSearch} text={'Yes'} /> */}
    </View>
  }

  doNothing = () => {}

  filterList = (text: string) => {
    let {crimes} = this.state
    // this.setState({text: text})
    if (!crimes) return this.props.crimes
    let filteredCrimes = crimes.filter(crime => {
      let type = crime.title_type.toLowerCase()
      let location = crime.title_location.toLowerCase()
      let combine = type + location
      let combineReverse = location + type
      let formTxt = text.toLowerCase().replace(/[ ,.]/g, '')
      if (combine.toLowerCase().includes(formTxt)) return true
      if (combineReverse.toLowerCase().includes(formTxt)) return true
      return false
    })
    return this.setState({filteredCrimes: filteredCrimes})
  }

  // console.log(filteredCrimes.length === 0)
  // if (filteredCrimes.length === 0) {
  //   return this.extendedSearch()
  // } else {
  //   return this.setState({filteredCrimes: filteredCrimes})
  // }

  // extendedSearch = () => {
  //   let {text} = this.state
  //   let {getCrimesWithParams} = this.props
  //   if (getCrimesWithParams) this.setState({extendedSearch: getCrimesWithParams(text)})
  // }

  // extendedSearch = () => {
  //   let {text} = this.state
  //   let {getCrimesWithParams} = this.props
  //   if (getCrimesWithParams) this.setState({crimes: getCrimesWithParams(text)})
  // }

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
  },
  noSearchResultText: {
    margin: commonStyles.space,
    fontSize: 20,
    textAlign: 'center',
    maxWidth: '90%',
    lineHeight: 30
  },
  noSearchResultsContainer: {
    alignSelf: 'center',
    position: 'absolute',
    top: 100
  },
  searchQuestion: {
    fontSize: 16
  }
})

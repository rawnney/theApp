// @flow
import React, {Component} from 'react'
import {View, StyleSheet, ActivityIndicator} from 'react-native'
import CrimeListItem from './CrimeListItem'
import {primaryColor} from '../libs/ColorThemeHelper'
import SearchBar from './SearchBar'
import LineBreak from './LineBreak'
import commonStyles from '../libs/CommonStyles'
import TextView from './TextView'
import InfiniteScroll from './InfiniteScroll'

type Props = {
  crimes: Array<Object>,
  onPressCrime: Function,
  refreshCrimes: Function,
  getCrimesWithParams: Function,
  isLoading: boolean,
  onEndReached: Function
}

type State = {
  crimes: Array<Object>,
  isRefreshing: boolean,
  text: string
}

export let keyExtractor = (item: Object, index: number) => index.toString()

export default class CrimeSearchView extends Component <Props, State> {
  state = {isRefreshing: false, crimes: [], text: ''}

  componentWillReceiveProps (nextProps: Props) {
    if (this.props.crimes !== nextProps.crimes) {
      this.setState({crimes: nextProps.crimes})
    }
  }

  render (): React$Element<View> {
    let {isLoading} = this.props
    let {isRefreshing, text, crimes} = this.state
    return <View style={[styles.container, {backgroundColor: primaryColor()}]}>
      <SearchBar onChangeText={this.searchCrime} text={text} style={styles.searchBar} placeholder={'Stöld, Trafikbrott, Rån...'} />
      <LineBreak />
      {isLoading && crimes.length === 0 ? <ActivityIndicator style={styles.indicator} size='large' /> : <View />}
      {!text && crimes.length === 0 ? this.renderSearchForSomething() : <View />}
      {text && !isLoading && crimes.length === 0 ? this.renderNoSearchResults() : <View />}
      <InfiniteScroll
        renderItem={this.renderItem}
        onEndReached={this.onEndReached}
        onRefresh={this.refreshCrimes}
        refreshing={isRefreshing}
        keyExtractor={keyExtractor}
        data={crimes}
        extraData={crimes}
      />}
    </View>
  }

  renderItem = ({item, index}: Object) => {
    /* eslint-disable react/jsx-no-bind */
    return <CrimeListItem
      key={item.id}
      onPress={() => this.onPressCrime(item)}
      type={item.title_type}
      date={item.pubdate_iso8601}
      location={item.title_location}
      description={item.description} />
    /* eslint-enable react/jsx-no-bind */
  }

  renderSearchForSomething = () => {
    return <View style={styles.infoTextWrapper}>
      <TextView text={'Search for something 🤓'} style={styles.infoText} />
    </View>
  }

  renderNoSearchResults = () => {
    return <View style={styles.infoTextWrapper}>
      <TextView text={'No crimes found 🧐'} style={styles.infoText} />
    </View>
  }

  searchCrime = (text: string) => {
    this.setState({text: text})
    let {getCrimesWithParams} = this.props
    if (getCrimesWithParams) getCrimesWithParams(text)
  }

  refreshCrimes = () => {
    let {refreshCrimes} = this.props
    let {text} = this.state
    if (refreshCrimes) refreshCrimes(text)
  }

  onEndReached = (page: number) => {
    let {onEndReached} = this.props
    if (onEndReached) onEndReached(page)
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
  },
  infoTextWrapper: {
    flex: 1,
    alignSelf: 'center',
    top: 100
  },
  infoText: {
    margin: commonStyles.space,
    fontSize: 18,
    textAlign: 'center',
    maxWidth: '90%',
    lineHeight: 30
  },
  searchQuestion: {
    fontSize: 16
  },
  indicator: {
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 150,
    marginBottom: 300
  }
})

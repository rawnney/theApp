// @flow
import React, {Component} from 'react'
import {View, StyleSheet, ScrollView, RefreshControl, Image} from 'react-native'
import CrimeListItem from './CrimeListItem'
import {themeBgColor, themeTxtColorString} from '../libs/ColorThemeHelper'
import TextInput from './TextInput'
import colors from '../libs/Colors'
import {SEARCH, CROSS} from '../consts/Icons'
import Images from '../libs/Images'
let {crimescenetape, bloodsplash} = Images

type Props = {
  crimes: Object,
  onPressCrime: Function,
  refreshCrimes: Function
}

type State = {
  crimes: Object,
  isRefreshing: boolean,
  text?: string
}

export default class CrimesView extends Component <Props, State> {
  state = {isRefreshing: false, crimes: {}, text: ''}

  componentWillMount () {
    let {crimes} = this.props
    if (crimes) this.setState({crimes: crimes})
  }

  componentWillReceiveProps (nextProps: Props) {
    if (this.props.crimes !== nextProps.crimes) {
      this.setState({crimes: nextProps.crimes})
    }
  }

  render (): React$Element<View> {
    let {refreshCrimes} = this.props
    let {isRefreshing, text} = this.state
    return <View style={[styles.container, themeBgColor()]}>
      <TextInput
        style={styles.searchbar}
        leftIcon={SEARCH}
        rightIcon={CROSS}
        hasXButton text={text}
        onChangeText={this.onChangeText}
      />
      <ScrollView
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={refreshCrimes} tintColor={themeTxtColorString()} />}>
        <Image source={crimescenetape} style={styles.crimescenetape} />
        <Image source={bloodsplash} style={styles.bloodsplash} />
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

  onChangeText = () => {
    let {text} = this.state
    // let {onChangeText} = this.props
    this.setState({text})
    // console.log(this.state.text)
    // onChangeText(text)
  }

  onPressCrime = (item: Object) => {
    let {onPressCrime} = this.props
    if (onPressCrime) onPressCrime(item)
  }

  // onPressX = () => {
  //   var {onChangeText, onPressX, onPressXWhenEmpty} = this.props
  //   var {text} = this.state
  //   if (onPressX) onPressX()
  //   if (text.length < 1 && onPressXWhenEmpty) onPressXWhenEmpty()
  //   this.setState({text: ''}, onChangeText(''))
  // }
}

export let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchbar: {
    borderColor: colors.black,
    borderBottomWidth: 1
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

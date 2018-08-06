// @flow
import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import defaultNavHeader from './DefaultNavHeader'
import {getPosition} from '../libs/PositionHelper'
import {getCrimes} from '../libs/CrimeHelper'
import {LIDINGO_COORDS} from '../consts/Coordinates'
import {BROTTSPLATSKARTAN_LIDINGO} from '../consts/ApiUrls'
import colors from '../libs/Colors'

type State = {
  position: Object,
  crimes: Object,
  isLoading: boolean
}

type Props = {}

class CrimesNearYouContainer extends Component <Props, State> {
  state = {crimes: {}, position: {}, isLoading: true}
  static routeName = 'CrimesNearYouContainer'
  static navigationOptions = {
    ...defaultNavHeader,
    headerTitle: 'Crimes near you'
  }

  componentDidMount () {
    this.setPositionAndCrimes()
  }
  render (): React$Element<View> {
    // console.log(this.state.crimes.data)
    let {isLoading} = this.state
    if (isLoading) return <Text style={styles.loading}>Loading...</Text>
    // CrimesNearYouView med props som mappar upp title_type, pubdate_iso8601 och title_location
    return <View />
  }

  setPositionAndCrimes = () => {
    getPosition()
      .then(data => this.setState({position: data}))
      .then(() => {
        let {position} = this.state
        getCrimes(position, LIDINGO_COORDS, BROTTSPLATSKARTAN_LIDINGO)
          .then(data => this.setState({crimes: data}))
          .then(() => {
            let {position, crimes, isLoading} = this.state
            if (position && crimes) this.setState({isLoading: !isLoading})
          })
      })
  }
}

export let styles = StyleSheet.create({
  loading: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.white,
    paddingTop: '50%',
    textAlign: 'center'
  }
})

export default connect(state => state)(CrimesNearYouContainer)

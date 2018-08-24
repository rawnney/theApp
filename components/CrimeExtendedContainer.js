// @flow
import React, {Component} from 'react'
import {ScrollView, View, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {getDefaultNavigationOptions} from '../libs/DefaultNavHeader'
import {withTitle} from '../consts/NavigationOptions'
import moment from '../libs/Moment'
import {capitalize} from '../libs/CommonFunctions'
import {themeBgColor} from '../libs/ColorThemeHelper'
import {getCrimeIcon, formatContent} from '../libs/CrimeHelper'
import commonStyles from '../libs/CommonStyles'
import Icon from './Icon'
import TextView from './TextView'
import LineBreak from './LineBreak'
import Fonts from '../libs/Fonts'

type State = {}

type Props = {
  crime: Object,
  navigation: Object
}

class CrimeExtendedContainer extends Component <Props, State> {
  static routeName = 'CrimeExtendedContainer'
  static navigationOptions = getDefaultNavigationOptions(withTitle('Crimedetail'))

  render (): React$Element<View> {
    let {crime} = this.props.navigation.state.params
    return <View style={[styles.container, themeBgColor()]}>
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.iconTypeWrapper}>
            <Icon name={crime.title_type ? getCrimeIcon(crime.title_type) : ''} iconStyle={styles.icon} />
            <TextView style={styles.type} text={crime.title_type} />
          </View>
          <TextView style={styles.location} text={this.renderLocations()} />
          <TextView style={styles.date} text={moment(crime.pubdate_iso8601).format('DD MMM YYYY HH:MM')} />
          <TextView text={formatContent(crime.description)} style={styles.description} />
          <TextView text={formatContent(crime.content)} />
        </View>
        <LineBreak />
      </ScrollView>
    </View>
  }

  renderLocations = () => {
    let {crime} = this.props.navigation.state.params
    if (!crime.locations) return crime.title_location
    if (crime.locations[0].name === '' || crime.locations[0].prio !== 1) return crime.title_location
    return (crime.title_location + ', ' + capitalize(crime.locations[0].name))
  }
}

export let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    paddingBottom: commonStyles.space,
    paddingTop: commonStyles.space,
    marginLeft: commonStyles.space,
    marginRight: commonStyles.space
  },
  iconTypeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: commonStyles.smallSpace
  },
  icon: {
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
    padding: 0,
    marginRight: commonStyles.smallSpace
  },
  description: {
    paddingBottom: commonStyles.smallSpace
  },
  type: {
    ...Fonts.semiBold,
    fontSize: 20
  },
  location: {
    ...Fonts.semiBold,
    fontSize: 16,
    marginBottom: 5
  },
  date: {
    ...Fonts.light,
    fontSize: 16,
    marginBottom: commonStyles.smallSpace
  }
})

export default connect(state => state)(CrimeExtendedContainer)

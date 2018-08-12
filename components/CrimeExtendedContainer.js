// @flow
import React, {Component} from 'react'
import {ScrollView, Text, View, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {getDefaultNavigationOptions} from './DefaultNavHeader'
import colors from '../libs/Colors'
import moment from 'moment'
import {capitalize} from '../libs/CommonFunctions'
import {getCrimeIcon} from '../libs/CrimeHelper'
import commonStyles from '../libs/CommonStyles'
import Icon from './Icon'

type State = {}

type Props = {
  crime: Object,
  navigation: Object
}

class CrimeExtendedContainer extends Component <Props, State> {
  static routeName = 'CrimeExtendedContainer'
  static navigationOptions = getDefaultNavigationOptions()

  render (): React$Element<View> {
    let {crime} = this.props.navigation.state.params
    return <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.wrapper}>
        <View style={styles.iconTypeWrapper}>
          <Icon name={crime.title_type ? getCrimeIcon(crime.title_type) : ''} iconStyle={styles.icon} />
          <Text style={styles.type}>{crime.title_type}</Text>
        </View>
        <Text style={styles.date}>{moment(crime.pubdate_iso8601).format('DD MMM YYYY HH:MM')}</Text>
        <Text style={styles.location}>{this.renderLocations()}</Text>
        <Text style={styles.content}>{formatContent(crime.content ? crime.content : crime.description)}</Text>
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

function formatContent (string: string): string {
  let find1 = '\n'
  let find3 = '<p>'
  let find2 = '</p>'
  let find4 = '<strong>'
  let find5 = '</strong>'
  let find6 = '<br />'
  string = string.replace(new RegExp(find1, 'g'), '\n \n')
  string = string.replace(new RegExp(find2, 'g'), '')
  string = string.replace(new RegExp(find3, 'g'), '')
  string = string.replace(new RegExp(find4, 'g'), '')
  string = string.replace(new RegExp(find5, 'g'), '')
  string = string.replace(new RegExp(find6, 'g'), '\n')
  return string
}

export let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  wrapper: {
    paddingTop: commonStyles.space,
    paddingBottom: commonStyles.space,
    marginLeft: commonStyles.space,
    marginRight: commonStyles.space,
    borderBottomWidth: 0.5,
    borderColor: colors.gray
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
  type: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  date: {
    fontWeight: '200',
    marginBottom: 3
  },
  location: {
    fontWeight: '600',
    marginBottom: 5
  },
  content: {

  }
})

export default connect(state => state)(CrimeExtendedContainer)

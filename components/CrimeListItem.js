// @flow
import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import ButtonWrapper from './ButtonWrapper'
import moment from '../libs/Moment'
import {getCrimeIcon} from '../libs/CrimeHelper'
import Icon from './Icon'
import commonStyles from '../libs/CommonStyles'
import LineBreak from './LineBreak'
import TextView from './TextView'

type Props = {
  onPress?: Function,
  id?: string,
  type?: string,
  date?: string,
  lat?: string,
  lng?: string,
  location?: string,
  content?: string,
  description?: string
}

export default class CrimeListItem extends Component <Props> {
  render (): React$Element<View> {
    let {onPress, type, date, location, description} = this.props
    return <ButtonWrapper onPress={onPress}>
      <View style={styles.wrapper}>
        <View style={styles.iconTypeWrapper}>
          <Icon name={type ? getCrimeIcon(type) : ''} iconStyle={styles.icon} />
          <TextView style={styles.type} text={type} />
        </View>
        <TextView style={styles.date} text={moment(date).format('DD MMM YYYY HH:MM')} />
        <TextView style={styles.location} text={location} />
        <TextView text={description} />
      </View>
      <LineBreak />
    </ButtonWrapper>
  }
}

export let styles = StyleSheet.create({
  wrapper: {
    paddingTop: commonStyles.space,
    paddingBottom: commonStyles.space,
    marginLeft: commonStyles.space,
    marginRight: commonStyles.space
  },
  iconTypeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: commonStyles.smallSpace
  },
  type: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  icon: {
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
    padding: 0,
    marginRight: commonStyles.smallSpace
  },
  date: {
    fontWeight: '200',
    marginBottom: 3
  },
  location: {
    fontWeight: '600',
    marginBottom: 5
  }
})

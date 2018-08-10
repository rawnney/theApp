// @flow
import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import ButtonWrapper from './ButtonWrapper'
import colors from '../libs/Colors'
import moment from 'moment'
import {getCrimeIcon} from '../libs/CrimeHelper'
import Icon from './Icon'

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
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.iconTypeWrapper}>
            <Icon name={type ? getCrimeIcon(type) : ''} iconStyle={styles.icon} />
            <Text style={styles.type}>{type}</Text>
          </View>
          <Text style={styles.date}>{moment(date).format('DD MMM YYYY HH:MM')}</Text>
          <Text style={styles.location}>{location}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </ButtonWrapper>
  }
}

export let styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white
  },
  wrapper: {
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    borderBottomWidth: 0.5,
    borderColor: colors.gray
  },
  iconTypeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
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
    marginRight: 10
  },
  date: {
    fontWeight: '200',
    marginBottom: 3
  },
  location: {
    fontWeight: '600',
    marginBottom: 5
  },
  description: {}
})

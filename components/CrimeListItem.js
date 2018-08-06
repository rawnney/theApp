// @flow
import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import ButtonWrapper from './ButtonWrapper'
import colors from '../libs/Colors'

type Props = {
  onPress?: Function,
  id?: string,
  type?: string,
  date?: string,
  lat?: string,
  lng?: string,
  location?: string,
  content?: string,
  description?: string,
  image?: Image

}

export default class CrimeListItem extends Component <Props> {
  render (): React$Element<View> {
    let {onPress, id, type, date, lat, lng, location, content, description} = this.props
    return <ButtonWrapper onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text>{id}</Text>
          <Text>{type}</Text>
          <Text>{date}</Text>
          <Text>{lat}</Text>
          <Text>{lng}</Text>
          <Text>{location}</Text>
          <Text>{content}</Text>
          <Text>{description}</Text>
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
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center'
  }
})

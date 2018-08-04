// @flow
import React, {Component} from 'react'
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native'
import FontAwesome, {Icons} from 'react-native-fontawesome'

type Props = {}
type State = {}

export default class Icon extends Component<Props, State> {
  render ():* {
    return (
      <View>
        <TouchableHighlight>
          <Text style={styles.wrapper}>
            <FontAwesome>{Icons.chevronDown}</FontAwesome>
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export let styles = StyleSheet.create({
  wrapper: {
    margin: 10,
    fontSize: 15,
    textAlign: 'left'
  }
})

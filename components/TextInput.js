// @flow
import React, {Component} from 'react'
import {TextInput} from 'react-native'

type Props = {}

type State = {
  text: string
}

export default class TheAppTextInput extends Component<Props, State> {
  state = {text: 'Placeholder'}

  render (): React$Element<*> {
    return (
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    )
  }
}


export let styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  indicator: {
    padding: 30
  },
  text: {
    fontSize: 25
  }
})



{height: 40, borderColor: 'gray', borderWidth: 1}

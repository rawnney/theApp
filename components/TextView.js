// @flow
import React, {Component} from 'react'
import {View, StyleSheet, DeviceEventEmitter} from 'react-native'
import {primaryTextColor} from '../libs/ColorThemeHelper'
import ScalableText from 'react-native-text'
import Fonts from '../libs/Fonts'
import {getText} from '../libs/TextHelper'
import {capitalize, isEmulator} from '../libs/CommonFunctions'

type Props = {
  text?: string,
  langKey?: string,
  values?: Array<*>,
  textTransform?: 'uppercase'|'capitalize'|'lowercase',
  style?: StyleSheet
}

type State = {
  text: string
}

export default class TextView extends Component <Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {text: this.getText(props) || ''}
  }

  componentDidMount () {
    DeviceEventEmitter.addListener('onLangChange', () => this.setState({text: this.getText(this.props)}))
  }

  componentWillReceiveProps (nextProps: *, nextState: *) {
    this.setState({text: this.getText(nextProps)})
  }

  shouldComponentUpdate (nextProps: *, nextState: *): boolean {
    return true
  }

  render (): React$Element<View> {
    let {style} = this.props
    var {text} = this.state
    return <View>
      <ScalableText style={[{...Fonts.regular}, {color: primaryTextColor()}, style]}>
        {text.toString()}
      </ScalableText>
    </View>
  }

  getText (props: Props): string {
    var {text, langKey, values, textTransform} = props
    text = text || this.getTextFromLangKey(langKey, values)
    if (textTransform === 'uppercase') text = text.toUpperCase()
    if (textTransform === 'capitalize') text = capitalize(text)
    if (textTransform === 'lowercase') text = text.toLowerCase()
    return text
  }

  getTextFromLangKey (langKey: string = '', values: Array<*> = []): string {
    var text = getText(langKey, values)
    // eslint-disable-next-line
    if (isEmulator() && text === '' && langKey !== '') console.warn(`Cant find text id: ${langKey}`)
    return text
  }
}

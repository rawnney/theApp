// @flow
import React, {Component} from 'react'
import {View, StyleSheet, DeviceEventEmitter} from 'react-native'
import {themeTxtColor} from '../libs/ColorThemeHelper'
import ScalableText from 'react-native-text'
import Fonts from '../libs/Fonts'
import {getText} from '../libs/TextHelper'
import {capitalize} from '../libs/CommonFunctions'
import {isDev} from '../libs/Config'

type Props = {
  text?: string,
  langKey?: string,
  // eslint-disable-next-line
  values?: any[],
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
      <ScalableText style={[{...Fonts.regular}, themeTxtColor(), style]}>
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
  // eslint-disable-next-line
  getTextFromLangKey (langKey: string = '', values: Array<any> = []): string {
    var text = getText(langKey, values)
    // eslint-disable-next-line
    if (isDev() && text === '' && langKey !== '') console.warn(`Cant find text id: ${langKey}`)
    return text
  }
}

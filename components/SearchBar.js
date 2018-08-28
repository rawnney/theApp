// // @flow
export let hej = 'lol'
// import React, {Component} from 'react'
// import {StyleSheet, View} from 'react-native'
// import TextInput from './TextInput'
// import commonStyles from '../libs/CommonStyles'
// import colors from '../libs/Colors'
//
// type Props = {
//   onChangeText?: Function,
//   style?: StyleSheet,
//   placeholder?: string,
//   text?: string,
//   focused?: boolean,
//   onFocus?: Function
// }
//
// type State = {
//   text: string,
//   focused: boolean
// }
//
// // NOTE: onChangeTextForParentComp = ({text}: string) => {setState then do something}
// export default class SearchBar extends Component<Props, State> {
//   state = {text: '', focused: false}
//
//   // componentWillReceiveProps (nextProps: Props) {
//   //   if (nextProps.focused !== this.props.focused) this.setState({focused: nextProps.focused})
//   // }
//
//   // onFocus={this.onFocus}
//   render (): React$Element<*> {
//     let {style, placeholder} = this.props
//     let {focused, text} = this.state
//     return (
//       <View>
//         <TextInput
//           style={[styles.searchBar, style]}
//           onChangeText={this.onChangeText}
//           text={text}
//           placeholder={placeholder}
//         />
//       </View>
//     )
//   }
//
//   onChangeText = (text: string) => {
//     let {onChangeText} = this.props
//     this.setState(() => {
//       if (onChangeText) onChangeText({text})
//     })
//   }
//
//   onFocus = () => {
//     // let {onFocus} = this.props
//     this.setState({focused: true})
//     // if (onFocus) onFocus()
//   }
// }
//
// export let styles = StyleSheet.create({
//   searchBar: {
//     padding: commonStyles.space,
//     backgroundColor: colors.red,
//     color: colors.white
//   }
// })

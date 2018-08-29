// @flow
import Store from '../libs/Store'
import {KEYBOARD_COLOR_DEFAULT} from './Consts'

export function themeBgColor (): Object {
  let bgColor = Store.getState().user.colorTheme.backgroundColor
  return {backgroundColor: bgColor}
}

export function themeBgColorString (): string {
  let bgColor = Store.getState().user.colorTheme.backgroundColor
  return bgColor
}

export function themeTxtColor (): Object {
  let color = Store.getState().user.colorTheme.color
  return {color: color}
}

export function themeTxtColorString (): string {
  let color = Store.getState().user.colorTheme.color
  return color
}

export function themeBorderColor (): Object {
  let color = Store.getState().user.colorTheme.color
  return {borderColor: color, borderWidth: 1}
}

export function themeBarTint (): string {
  let barTint = Store.getState().user.colorTheme.headerBarTint
  return barTint
}

export function themeKeyBoardColor (): string {
  let keyBoardColor = Store.getState().user.colorTheme.keyBoardColor
  if (!keyBoardColor) return KEYBOARD_COLOR_DEFAULT
  return keyBoardColor
}

// @flow
import Store from '../libs/Store'

export function primaryColor (): string { return Store.getState().user.colorTheme.primary }
export function secondaryColor (): string { return Store.getState().user.colorTheme.secondary }
export function primaryTextColor (): string { return Store.getState().user.colorTheme.primaryText }
export function secondaryTextColor (): string { return Store.getState().user.colorTheme.secondaryText }
export function warningColor (): string { return Store.getState().user.colorTheme.warning }
export function borderColor (): string { return Store.getState().user.colorTheme.secondaryText }
export function headerBarTint (): string { return Store.getState().user.colorTheme.headerBarTint }
export function keyBoardAppearance (): string { return Store.getState().user.colorTheme.keyboardAppearance }
export function disabledColor (): string { return Store.getState().user.colorTheme.disabled }

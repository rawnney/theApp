// @flow
import Store from '../libs/Store'

export let primaryColor = (): string => Store.getState().user.colorTheme.primary
export let secondaryColor = (): string => Store.getState().user.colorTheme.secondary
export let primaryTextColor = (): string => Store.getState().user.colorTheme.primaryText
export let secondaryTextColor = (): string => Store.getState().user.colorTheme.secondaryText
export let warningColor = (): string => Store.getState().user.colorTheme.warning
export let borderColor = (): string => Store.getState().user.colorTheme.secondaryText
export let headerBarTint = (): string => Store.getState().user.colorTheme.headerBarTint
export let keyBoardAppearance = (): string => Store.getState().user.colorTheme.keyboardAppearance
export let disabledColor = (): string => Store.getState().user.colorTheme.disabled

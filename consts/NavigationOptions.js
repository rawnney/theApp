// @flow

export let STATUS_BAR_LIGHT = 'light-content'
export let STATUS_BAR_DARK = 'dark-content'
export let options = {noBackButton: false, noExitButton: false, headerTitle: '', headerStyle: {}}
export let noBackButton = true
export let noExitButton = true
export let noBack = {...options, noBackButton}
export let noExit = {...options, noExitButton}
export let noButtons = {...options, noBackButton, noExitButton}
export function withTitle (headerTitle: string): Object { return {...options, headerTitle} }
export function noBackWithTitle (headerTitle: string): Object { return {...options, noBackButton, headerTitle} }
export function noExitWithTitle (headerTitle: string): Object { return {...options, noExitButton, headerTitle} }
export function noButtonsWithTitle (headerTitle: string): Object { return {...options, noBackButton, noExitButton, headerTitle} }

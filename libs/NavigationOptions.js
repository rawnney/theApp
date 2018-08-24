// @flow
let noBackButton = true
let noExitButton = true
export let options = {noBackButton: false, noExitButton: false, headerTitle: '', headerStyle: {}}
export let noBack = {...options, noBackButton}
export let noExit = {...options, noExitButton}
export let noButtons = {...options, noBackButton, noExitButton}
export function withTitle (headerTitle: string): Object { return {...options, headerTitle} }
export function noBackWithTitle (headerTitle: string): Object { return {...options, noBackButton, headerTitle} }
export function noExitWithTitle (headerTitle: string): Object { return {...options, noExitButton, headerTitle} }
export function noButtonsWithTitle (headerTitle: string): Object { return {...options, noBackButton, noExitButton, headerTitle} }

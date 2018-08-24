// @flow
import {getText} from '../libs/TextHelper'
let noBackButton = true
let noExitButton = true
export let options = {noBackButton: false, noExitButton: false, headerTitle: '', headerStyle: {}}
export let noBack = {...options, noBackButton}
export let noExit = {...options, noExitButton}
export let noButtons = {...options, noBackButton, noExitButton}
export function withTitle (headerTitle: string): Object { return {...options, headerTitle: getText(headerTitle)} }
export function noBackWithTitle (headerTitle: string): Object { return {...options, noBackButton, headerTitle: getText(headerTitle)} }
export function noExitWithTitle (headerTitle: string): Object { return {...options, noExitButton, headerTitle: getText(headerTitle)} }
export function noButtonsWithTitle (headerTitle: string): Object { return {...options, noBackButton, noExitButton, headerTitle: getText(headerTitle)} }

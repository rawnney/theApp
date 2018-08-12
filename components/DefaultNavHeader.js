// @flow
import React from 'react'
import TestNavHeader from './TestNavHeader'

export let getDefaultNavigationOptions = (noBackButton?: boolean, noExitButton?: boolean, headerStyle?: Object, headerTitle?: string) => {
  if (!noBackButton) noBackButton = false
  if (!noExitButton) noExitButton = false
  if (!headerStyle) headerStyle = {}
  if (!headerTitle) headerTitle = ''
  return {header: () => <TestNavHeader noBackButton={noBackButton} noExitButton={noExitButton} headerStyle={headerStyle} headerTitle={headerTitle} />}
}

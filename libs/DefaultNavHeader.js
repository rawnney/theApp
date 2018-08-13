// @flow
import React from 'react'
import CustomNavHeader from '../components/CustomNavHeader'

export let getDefaultNavigationOptions = (noBackButton?: boolean, noExitButton?: boolean, headerStyle?: Object, headerTitle?: string) => {
  if (!noBackButton) noBackButton = false
  if (!noExitButton) noExitButton = false
  if (!headerStyle) headerStyle = {}
  if (!headerTitle) headerTitle = ''
  return {header: () => <CustomNavHeader noBackButton={noBackButton} noExitButton={noExitButton} headerStyle={headerStyle} headerTitle={headerTitle} />}
}

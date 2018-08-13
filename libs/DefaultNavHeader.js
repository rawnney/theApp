// @flow
import React from 'react'
import CustomNavHeader from '../components/CustomNavHeader'

export let getDefaultNavigationOptions = (customOptions: Object) => {
  let {noBackButton, noExitButton, headerStyle, headerTitle} = customOptions
  return {header: () => <CustomNavHeader noBackButton={noBackButton} noExitButton={noExitButton} headerStyle={headerStyle} headerTitle={headerTitle} />}
}

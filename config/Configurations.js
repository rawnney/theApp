// @flow

export let baseFeatureConfig = {
  enableColorTheme: false
}

// let baseConfiguration = {}

let Development = {
  // ...baseConfiguration,
  name: 'Development',
  features: {
    ...baseFeatureConfig
    // enableColorTheme: true
  }
}

let Staging = {
  // ...baseConfiguration,
  name: 'Staging',
  features: {
    ...baseFeatureConfig
  }
}

let Production = {
  // ...baseConfiguration,
  name: 'Production',
  features: {
    ...baseFeatureConfig
  }
}

export default {
  Development,
  Staging,
  Production
}

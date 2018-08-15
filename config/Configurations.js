// @flow

export let baseFeatureConfig = {
  enableColorTheme: true
}

// let baseConfiguration = {}

let Development = {
  // ...baseConfiguration,
  name: 'Development',
  features: {
    ...baseFeatureConfig
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

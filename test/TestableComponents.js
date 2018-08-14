import User from '../testdata/User'

let user = User
let position = user.position

let testableComponents = [
  {
    key: '../components/BackButton',
    propsArray: [{name: 'string', iconStyle: {}, wrapperStyle: {}, navigation: {}, onPress: jest.fn()}]
  },
  {
    key: '../components/ButtonWrapper',
    propsArray: [{disable: true, wrapperStyle: {}, buttonStyle: {}, onPress: jest.fn()}]
  },
  {
    key: '../components/CrimeExtendedContainer',
    propsArray: [{crime: {}, navigation: {}}]
  },
  {
    key: '../components/CrimeListItem',
    propsArray: [{onPress: jest.fn(), id: 'string', type: 'string', date: 'string', lat: 'string', lng: 'string', location: 'string', content: 'string', description: 'string'}]
  },
  {
    key: '../components/CrimesContainer',
    propsArray: [{navigation: {}}]
  },
  {
    key: '../components/CrimesView',
    propsArray: [{crimes: {}, onPressCrime: jest.fn()}]
  },
  {
    key: '../components/HomeContainer',
    propsArray: [{navigation: {}}]
  },
  {
    key: '../components/HomeView',
    propsArray: [{navigation: {}}]
  },
  {
    key: '../components/Icon',
    propsArray: [{name: 'string', iconStyle: {}}]
  },
  {
    key: '../components/IconButton',
    propsArray: [{name: 'string', iconStyle: {}, onPress: jest.fn(), wrapperStyle: {}}]
  },
  {
    key: '../components/LineBreak',
    propsArray: [{style: {}}]
  },
  {
    key: '../components/ListButton',
    propsArray: [{text: 'string', buttomStyle: {}, onPress: jest.fn(), disable: true, wrapperStyle: {}}]
  },
  {
    key: '../components/LoadingScreen',
    propsArray: [{textStyle: {}, loadingWrapper: {}}]
  },
  {
    key: '../components/CustomNavHeader',
    propsArray: [{noBackButton: true, noExitButton: true, headerStyle: {}, headerTitle: 'string'}]
  },
  {
    key: '../components/TextView',
    propsArray: [{text: 'string', style: {}}]
  },
  {
    key: '../components/UserSettingsContainer',
    propsArray: [{user, navigation: {}}]
  },
  {
    key: '../components/UserSettingsView',
    propsArray: [{user, navigation: {}}]
  },
  {
    key: '../components/WeatherContainer',
    propsArray: [{position, weather: {}, tip: 'string', isLoading: true}]
  },
  {
    key: '../components/WeatherView',
    propsArray: [{weather: {}, tip: 'string'}]
  },
  {
    key: '../components/ExitButton',
    propsArray: [{name: 'string', onPress: jest.fn(), iconStyle: {}, wrapperStyle: {}, navigation: {}}]
  },
  {
    key: '../components/ColorThemeContainer',
    propsArray: [{user}]
  },
  {
    key: '../components/ColorThemeView',
    propsArray: [{user}]
  }
]

export let TestableComponents = testableComponents

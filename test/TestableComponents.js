// @flow
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
    propsArray: [{disable: true, wrapperStyle: {}, onPress: jest.fn(), onLongPress: jest.fn(), children: [] || {}}]
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
    propsArray: [{text: 'string', langKey: 'string', buttomStyle: {}, onPress: jest.fn(), disable: true, wrapperStyle: {}, lineBreakTop: true}]
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
    propsArray: [{text: 'string', langKey: 'string', values: [], textTransform: 'uppercase', style: {}}]
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
  },
  {
    key: '../components/Compass',
    propsArray: [{}]
  },
  {
    key: '../components/NativeSensors',
    propsArray: [{sensorsFound: {}, Accelerometer: {}, Gyroscope: {}}]
  },
  {
    key: '../components/SensorContainer',
    propsArray: [{}]
  },
  {
    key: '../components/SensorView',
    propsArray: [{}]
  },
  {
    key: '../components/TextInput',
    propsArray: [{onChangeText: jest.fn(), style: {}, placeholder: 'string', text: 'string', placeholderColor: 'string'}]
  },
  {
    key: '../components/LanguageSettingsContainer',
    propsArray: [{user}]
  },
  {
    key: '../components/LanguageSettingsView',
    propsArray: [{user}]
  },
  {
    key: '../components/MinesweeperContainer',
    propsArray: [{}]
  },
  {
    key: '../components/MinesweeperView',
    propsArray: [{}]
  },
  {
    key: '../components/MinesweeperBoard',
    propsArray: [{height: 8, width: 8, mines: 8}]
  },
  {
    key: '../components/MinesweeperCell',
    propsArray: [{value: {}, onPress: jest.fn(), onLongPress: jest.fn()}]
  },
  {
    key: '../components/TheButton',
    propsArray: [{disable: true, onPress: jest.fn(), onLongPress: jest.fn(), text: 'string', langKey: 'string', style: {}, withBorder: true}]
  },
  {
    key: '../components/SearchBar',
    propsArray: [{onChangeText: jest.fn(), style: {}, placeholder: 'string', text: 'string', focused: true, onFocus: jest.fn(), onPressX: jest.fn()}]
  }
]

export let TestableComponents = testableComponents

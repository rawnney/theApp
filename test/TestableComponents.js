
// @flow
import User from '../testdata/User'

let user = User
let position = user.position

let testableComponents = [
  {
    key: '../components/BackButton',
    propsArray: [{name: 'string', iconStyle: {}, style: {}, navigation: {}, onPress: jest.fn()}]
  },
  {
    key: '../components/ButtonWrapper',
    propsArray: [{disable: true, style: {}, onPress: jest.fn(), onLongPress: jest.fn(), children: [] || {}}]
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
    propsArray: [{crimes: {}, onPressCrime: jest.fn(), refreshCrimes: jest.fn()}]
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
    propsArray: [{name: 'string', iconStyle: {}, size: 50}]
  },
  {
    key: '../components/IconButton',
    propsArray: [{name: 'string', iconStyle: {}, onPress: jest.fn(), style: {}}]
  },
  {
    key: '../components/LineBreak',
    propsArray: [{style: {}, vertical: true, verticalWidth: 1, horizontalWidth: 1}]
  },
  {
    key: '../components/ListButton',
    propsArray: [{text: 'string', langKey: 'string', style: {}, textStyle: {}, onPress: jest.fn(), disable: true, lineBreakTop: true}]
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
    propsArray: [{name: 'string', onPress: jest.fn(), iconStyle: {}, style: {}, navigation: {}}]
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
    propsArray: [{onChangeText: jest.fn(), style: {}, placeholder: 'string', text: 'string', placeholderTextColor: 'string'}]
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
    propsArray: [{disable: true, onPress: jest.fn(), onLongPress: jest.fn(), text: 'string', langKey: 'string', style: {}}]
  },
  {
    key: '../components/SearchBar',
    propsArray: [{onChangeText: jest.fn(), style: {}, placeholder: 'string', text: 'string', focused: true, onFocus: jest.fn(), onPressX: jest.fn()}]
  },
  {
    key: '../components/CrimeBottomNavigationBar',
    propsArray: [{}]
  },
  {
    key: '../components/CrimeScannerContainer',
    propsArray: [{}]
  },
  {
    key: '../components/CrimeCardNavigation',
    propsArray: [{onPress: jest.fn(), titleLangKey: 'string', title: 'string', subtitle: 'string', subtitleLangKey: 'string', icon: 'string', disable: false, style: {}}]
  },
  {
    key: '../components/CrimeScannerLogo',
    propsArray: [{style: {}}]
  },
  {
    key: '../components/BarCode',
    propsArray: [{style: {}}]
  },
  {
    key: '../components/CrimeSearchContainer',
    propsArray: [{navigation: {}}]
  },
  {
    key: '../components/CrimeDiscussionContainer',
    propsArray: [{navigation: {}}]
  },
  {
    key: '../components/CrimeStatisticsContainer',
    propsArray: [{navigation: {}}]
  },
  {
    key: '../components/CrimeSearchView',
    propsArray: [{crimes: [{}], onPressCrime: jest.fn(), refreshCrimes: jest.fn(), getCrimesWithParams: jest.fn(), isLoading: true, onEndReached: jest.fn()}]
  },
  {
    key: '../components/InfiniteScroll',
    propsArray: [{onEndReached: jest.fn(), onRefresh: jest.fn()}]
  },
  {
    key: '../components/SomethingContainer',
    propsArray: [{}]
  },
  {
    key: '../components/CreateAccountContainer',
    propsArray: [{}]
  },
  {
    key: '../components/LoginContainer',
    propsArray: [{}]
  },
  {
    key: '../components/StoryGameStartContainer',
    propsArray: [{}]
  },
  {
    key: '../components/EnterCredentialsView',
    propsArray: [{onPressNext: jest.fn(), buttonText: 'NEXT', showCreateAccountButton: true}]
  },
  {
    key: '../components/UserImage',
    propsArray: [{}]
  }
]

export let TestableComponents = testableComponents

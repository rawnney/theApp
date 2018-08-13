
var testableComponents = [
  {
    key: '../components/Test',
    propsArray: [{}]
  },
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
    key: '../components/CrimeContainer',
    propsArray: [{navigation: {}}]
  },
  {
    key: '../components/CrimeView',
    propsArray: [{crimes: {}, onPressCrime: jest.fn()}]
  }
]

export let TestableComponents = testableComponents

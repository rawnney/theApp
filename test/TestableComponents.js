
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
    key: '../components/Test',
    propsArray: [{}]
  }
]

export let TestableComponents = testableComponents

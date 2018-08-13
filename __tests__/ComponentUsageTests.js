var fs = require('fs')
var folders = ['./components', './libs']
import {TestableComponents} from '../test/TestableComponents'

jest.disableAutomock()

var errorShouldBeUsed = []
var errorShouldBeUsedIgnored = []
var testableComponents = TestableComponents

let checkIfComponentIsUsed = (folder, file) => {
  var url = `${folder}/${file}`
  // dont look at non js files
  if (url.indexOf('.js') === -1) return
  // dont look json files
  if (url.indexOf('.json') !== -1) return
  // dont look at test files
  if (url.indexOf('__tests__') !== -1) return

  var fileText = fs.readFileSync(url, {encoding: 'utf8'}).split('\n')
  testableComponents.forEach((item, index, object) => {
    var componentNames = item.key.split('/')
    var componentName = componentNames[componentNames.length - 1]
    var usageString = '<' + componentName.split('.')[0]
    componentName = '/' + componentName.split('.')[0]

    fileText.forEach((rowLine) => {
      if (rowLine.indexOf(componentName) !== -1 || rowLine.indexOf(usageString) !== -1) {
        testableComponents[index].used = true
      }
    })
  })
}

describe('ComponetUsageTest', () => {
  folders.forEach(folder => fs.readdirSync(folder)
    .forEach(file => {
      checkIfComponentIsUsed(folder, file)
    }))

  testableComponents.forEach((item: Object, index, object) => {
    if (!item.used) { errorShouldBeUsed.push({key: item.key}) }
  })

  it('should have definition and usage for each component', () => expect(errorShouldBeUsed).toEqual([]))
  it('should ignored componets must have definition and usage', () => expect(errorShouldBeUsedIgnored).toEqual([]))
})

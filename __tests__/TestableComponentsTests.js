
import {ignoredComponents} from '../test/IgnoreLists'
import {constsTestes, matchCount} from '../test/TestUtil'
var fs = require('fs')
var TestableComponentsFile = fs.readFileSync('./test/TestableComponents.js', {encoding: 'utf8'})
var files = fs.readdirSync('./components/')
jest.disableAutomock()

describe('TestableComponents', () => {
  it('should not have any untested components', () => {
    var untestedComponents = []
    files.forEach(file => {
      file = file.split('.js')[0]

      if (TestableComponentsFile.indexOf(`../components/${file}`) === -1 && !ignoredComponents.includes(file)) {
        untestedComponents.push(file)
      }
    })
    // eslint-disable-next-line
    console.log(`${ignoredComponents.length} ignored components`);
    expect(untestedComponents).toEqual([])
  })

  it('should not have commented components plz use ignorelist', () => {
    var commentedTests = []
    var re = /\/\//g

    TestableComponentsFile = TestableComponentsFile.split(constsTestes.testableComponentVariable)

    if (matchCount(TestableComponentsFile[1], re) > 0) {
      commentedTests.push({errorComment: 'Use ignorelist'})
    }

    expect(commentedTests).toEqual([])
  })
})

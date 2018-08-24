// @flow
export let matchCount = (string: String, regex: *): number => {
  var count = 0
  if (string && string.length) {
    var m = string.match(regex)
    if (m) return m.length
  } else { count = 0 }
  return count
}

export let constsTestes = {
  testableComponentVariable: 'testableComponents'
}

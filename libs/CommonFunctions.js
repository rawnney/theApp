// @flow
export function truncateString (string: string, length: number): string {
  if (string.length > length) return `${string.substring(0, length)}...`
  return string
}

export function truncateWords (string: string, noWords: *): string {
  return string.split(' ').splice(0, noWords).join(' ')
}

export function capitalize (string: string): string {
  if (typeof string !== 'string') return string
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function fraction (value: *, fractions: number = 2): * {
  return Number.parseFloat(value).toFixed(fractions)
}

export function kelvinToCelcius (value: *): * {
  if (!value) return null
  if (value !== Number(value)) value = Number(value)
  value = parseFloat(value)
  let celcius = value - 273.15
  return celcius.toFixed(1)
}

export function mphToKmh (mph: *): * {
  return fraction(mph * 1.609344)
}

export function mphToMs (mph: *): * {
  return fraction(mph * 0.44704)
}

export function textTransform (text: string, textTransform?: string = 'capitalize'): string {
  switch (textTransform) {
    case 'uppercase':
      return text = text.toUpperCase()
    case 'capitalize':
      return text = text.charAt(0).toUpperCase() + text.slice(1)
    case 'lowercase':
      return text = text.toLowerCase()
    default: return text
  }
}

export function delay (time: number, res: *): Promise<Object> {
  return new Promise(resolve => setTimeout(() => resolve(res), time))
}

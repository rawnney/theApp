// @flow

export function validateLength (minLength: number, maxLength?: number, value: *): boolean {
  if (!value) return false
  if (minLength && value.length < minLength) return false
  if (maxLength && value.length > maxLength) return false
  return true
}

export function compareArgs (value: *, arg1: *, arg2: *): boolean {
  if (!value) return false
  if (value === arg1) return true
  if (value === arg2) return true
  return false
}

export function validateName (value: *): boolean {
  // eslint-disable-next-line
  if (!validateRegexp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u, value)) return false
  return true

  function validateRegexp (regexp: *, value: *): boolean {
    if (typeof regexp === 'string') regexp = new RegExp(regexp)
    if (!value) return false
    if (value.match(regexp)) return true
    return false
  }
}

export function validateEmail (value: *): boolean {
  let maxLength, minLength
  minLength = 6
  maxLength = 254
  if (minLength && value.length < minLength) return false
  if (maxLength && value.length > maxLength) return false
  // eslint-disable-next-line
  if (!validateRegexp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/, value)) return false
  return true

  function validateRegexp (regexp: *, value: *): boolean {
    if (typeof regexp === 'string') regexp = new RegExp(regexp)
    if (!value) return false
    if (value.match(regexp)) return true
    return false
  }
}

export function validateIsNumber (value: *): boolean {
  if (!value) return false
  if (!isNaN(value)) return true
  return false
}

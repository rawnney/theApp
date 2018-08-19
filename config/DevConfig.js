// @flow

export default (emulator: boolean) => {
  switch (emulator) {
    case true:
      return (
        {
          enableSensors: false,
          enablePosition: false
        }
      )
    default: return {}
  }
}

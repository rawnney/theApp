// @flow

export default (emulator: boolean) => {
  switch (emulator) {
    case true:
      return (
        {
          enableSensors: false
        }
      )
    default: return {}
  }
}

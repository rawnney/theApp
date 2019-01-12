// @flow
import {isEmulator} from './CommonFunctions'

export default {
  enableColorTheme: true,
  enableLanguageSelection: true,
  enableSensors: !isEmulator(),
  enablePosition: true,
  enableVibration: true,
  enableMineSweeperTimer: true
}

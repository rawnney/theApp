
module.exports = {
  getModel: jest.fn(),
  getUniqueID: jest.fn(),
  getManufacturer: jest.fn(),
  getBrand: jest.fn(),
  getDeviceId: jest.fn(),
  getSystemName: jest.fn(),
  getSystemVersion: jest.fn().mockReturnValue('10.0.0'),
  getBundleId: jest.fn(),
  getVersion: jest.fn(),
  getDeviceName: jest.fn(),
  getUserAgent: jest.fn(),
  getDeviceLocale: jest.fn(),
  getDeviceCountry: jest.fn(),
  getBuildNumber: jest.fn(),
  getUserLocale: jest.fn(),
  isEmulator: jest.fn()
}

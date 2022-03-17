const nxPreset = require('@nrwl/jest/preset');
const path = require('path');

module.exports = {
  ...nxPreset,
  testEnvironment: path.join(
    __dirname,
    'scripts/test-util',
    'jsdom-lax-ssl-environment.ts'
  ),
  testURL: 'http://localhost:4200',
};

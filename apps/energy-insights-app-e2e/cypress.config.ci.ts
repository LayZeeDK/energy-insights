import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: nxE2EPreset(__dirname),
  screenshotOnRunFailure: false,
  video: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: false,
});

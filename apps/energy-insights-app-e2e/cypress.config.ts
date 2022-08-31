import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: nxE2EPreset(__dirname),
  viewportHeight: 1080,
  viewportWidth: 1920,
});

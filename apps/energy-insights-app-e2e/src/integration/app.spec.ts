import { getGreeting } from '../support/app.po';

describe('Energy Insights app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Energy Insights');
  });
});

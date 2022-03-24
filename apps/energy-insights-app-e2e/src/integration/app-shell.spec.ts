import * as appShell from '../support/app-shell.po';

describe('App shell', () => {
  beforeEach(() => cy.visit('/'));

  it('displays a title', () => {
    appShell.findTitle().should('exist');
  });
});

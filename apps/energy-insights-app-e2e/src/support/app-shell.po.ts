export const findTitle = () =>
  cy.findByRole('heading', { name: /Energy Insights/i });

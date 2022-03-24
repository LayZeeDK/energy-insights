export const findFirstDataRow = () =>
  cy.findByText('', {
    selector: 'tbody tr:first-of-type',
  });
export const findTitle = () =>
  cy.findByRole('heading', { name: /CO2 forecast/i });
export const navigateTo = () => cy.visit('/co2/forecast');

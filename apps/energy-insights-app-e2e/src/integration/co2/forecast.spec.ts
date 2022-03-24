import { DateTime } from 'luxon';

import * as forecast from '../../support/co2-forecast.po';

describe('CO2 forecast', () => {
  const angularLongDateTimeFormat = "MMMM d, yyyy 'at' hh:mm:ss a ZZZZ";
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      query: {
        sql: /FROM\s+"co2emisprog"/,
      },
      url: /^https:\/\/api.energidataservice.dk\/datastore_search_sql/,
    }).as('getCo2EmissionsPrognosis');
  });

  beforeEach(() => forecast.navigateTo());

  it('displays a title', () => {
    forecast.findTitle().should('exist');
  });

  it('displays the first 5 minute interval of the current Danish day', () => {
    const danishToday = DateTime.now()
      .setZone('Europe/Copenhagen')
      .startOf('day');

    cy.wait('@getCo2EmissionsPrognosis');
    forecast
      .findFirstDataRow()
      .findByRole('cell', {
        name: danishToday.toFormat(angularLongDateTimeFormat),
      })
      .should('exist');
  });
});

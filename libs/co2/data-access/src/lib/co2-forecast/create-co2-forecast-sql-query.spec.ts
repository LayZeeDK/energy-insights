import { createCo2ForecastSqlQuery } from './create-co2-forecast-sql-query';
import { DateQuery } from './date-query';

describe(createCo2ForecastSqlQuery.name, () => {
  it('adds a date range start filter', () => {
    const dateQuery: DateQuery = {
      from: new Date('2021-05-22T00:00:00+02:00'),
      to: new Date('2021-05-24T00:00:00+02:00'),
    };

    const sql = createCo2ForecastSqlQuery(dateQuery);

    expect(sql).toContain(`"Minutes5UTC" >= '${dateQuery.from.toISOString()}'`);
  });

  it('adds a date range end filter', () => {
    const dateQuery: DateQuery = {
      from: new Date('2021-05-23T00:00:00+02:00'),
      to: new Date('2021-05-25T00:00:00+02:00'),
    };

    const sql = createCo2ForecastSqlQuery(dateQuery);

    expect(sql).toContain(`"Minutes5UTC" < '${dateQuery.to.toISOString()}'`);
  });

  it('sorts with earliest records first', () => {
    const sql = createCo2ForecastSqlQuery({
      from: new Date(),
      to: new Date(),
    });

    expect(sql).toContain('ORDER BY "Minutes5UTC" ASC');
  });

  it('queries the CO2 Emission Prognosis dataset', () => {
    const expectedTableName = 'co2emisprog';

    const sql = createCo2ForecastSqlQuery({
      from: new Date(),
      to: new Date(),
    });

    expect(sql).toContain(`FROM "${expectedTableName}"`);
  });
});

import { DateTime, Interval } from 'luxon';

import { createCo2ForecastSqlQuery } from './create-co2-forecast-sql-query';

const dummyInterval = Interval.fromDateTimes(DateTime.now(), DateTime.now());

describe(createCo2ForecastSqlQuery.name, () => {
  it('adds an interval start filter', () => {
    const interval: Interval = Interval.fromISO(
      '2021-05-22T00:00:00+02:00/2021-05-24T00:00:00+02:00'
    );

    const sql = createCo2ForecastSqlQuery(interval);

    expect(sql).toContain(`"Minutes5UTC" >= '${interval.start.toISO()}'`);
  });

  it('adds an interval end filter', () => {
    const interval: Interval = Interval.fromISO(
      '2021-05-23T00:00:00+02:00/2021-05-25T00:00:00+02:00'
    );

    const sql = createCo2ForecastSqlQuery(interval);

    expect(sql).toContain(`"Minutes5UTC" < '${interval.end.toISO()}'`);
  });

  it('sorts with earliest records first', () => {
    const sql = createCo2ForecastSqlQuery(dummyInterval);

    expect(sql).toContain('ORDER BY "Minutes5UTC" ASC');
  });

  it('queries the CO2 Emission Prognosis dataset', () => {
    const expectedTableName = 'co2emisprog';

    const sql = createCo2ForecastSqlQuery(dummyInterval);

    expect(sql).toContain(`FROM "${expectedTableName}"`);
  });
});

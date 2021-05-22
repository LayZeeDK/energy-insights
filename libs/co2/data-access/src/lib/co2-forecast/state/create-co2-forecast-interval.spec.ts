import { createCo2ForecastDateQuery } from './create-co2-forecast-interval';

describe(createCo2ForecastDateQuery.name, () => {
  it('the start of today is the beginning of the forecast', () => {
    const fakeNow = new Date('2021-05-22T01:46:00+02:00');

    const actualDateQuery = createCo2ForecastDateQuery(fakeNow);

    expect(actualDateQuery.from).toEqual(new Date('2021-05-22T00:00:00+02:00'));
  });

  it('the start of the day after tomorrow is the end of the forecast', () => {
    const fakeNow = new Date('2021-05-22T01:48:00+02:00');

    const actualDateQuery = createCo2ForecastDateQuery(fakeNow);

    expect(actualDateQuery.to).toEqual(new Date('2021-05-24T00:00:00+02:00'));
  });
});

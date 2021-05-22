import { DateTime } from 'luxon';

import { createCo2ForecastInterval } from './create-co2-forecast-interval';

describe(createCo2ForecastInterval.name, () => {
  it('the start of today is the beginning of the forecast', () => {
    const fakeNow = DateTime.fromISO('2021-05-22T01:46:00+02:00');

    const actualInterval = createCo2ForecastInterval(fakeNow);

    expect(actualInterval.start).toEqual(
      DateTime.fromISO('2021-05-22T00:00:00+02:00')
    );
  });

  it('the start of the day after tomorrow is the end of the forecast', () => {
    const fakeNow = DateTime.fromISO('2021-05-22T01:48:00+02:00');

    const actualInterval = createCo2ForecastInterval(fakeNow);

    expect(actualInterval.end).toEqual(
      DateTime.fromISO('2021-05-24T00:00:00+02:00')
    );
  });
});

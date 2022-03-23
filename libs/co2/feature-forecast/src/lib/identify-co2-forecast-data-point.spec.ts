import { Co2ForecastDataPoint } from '@energy-insights/co2/domain';
import { DateTime } from 'luxon';

import { identifyCo2ForecastDataPoint } from './identify-co2-forecast-data-point';

describe(identifyCo2ForecastDataPoint.name, () => {
  it(`
  Given a data point
  Then the identifier is its price area and its epoch milliseconds, separated by a dash (-)`, () => {
    const dataPoint: Co2ForecastDataPoint = {
      co2Emission: 132.0,
      minutes5Utc: DateTime.fromISO('2022-03-20T00:00:00+01:00'),
      priceArea: 'DK1',
    };

    const actualIdentifier = identifyCo2ForecastDataPoint(dataPoint);

    expect(actualIdentifier).toBe('DK1-1647730800000');
  });

  it(`
  Given two data point with the same price area
    And the same date-time
  Then their identifiers are different`, () => {
    const dataPointA: Co2ForecastDataPoint = {
      co2Emission: 147.0,
      minutes5Utc: DateTime.fromISO('2022-03-20T00:05:00+01:00'),
      priceArea: 'DK1',
    };
    const dataPointB: Co2ForecastDataPoint = {
      co2Emission: 149.0,
      minutes5Utc: DateTime.fromISO('2022-03-20T00:10:00+01:00'),
      priceArea: 'DK2',
    };

    const identifierA = identifyCo2ForecastDataPoint(dataPointA);
    const identifierB = identifyCo2ForecastDataPoint(dataPointB);

    expect(identifierA).not.toBe(identifierB);
  });

  it(`
  Given two data point with the same price area
    And the same date-time
    But different CO2 emissions
  Then their identifiers are the same`, () => {
    const dataPointA: Co2ForecastDataPoint = {
      co2Emission: 148.0,
      minutes5Utc: DateTime.fromISO('2022-03-20T00:15:00+01:00'),
      priceArea: 'DK1',
    };
    const dataPointB: Co2ForecastDataPoint = {
      co2Emission: 1234.56,
      minutes5Utc: DateTime.fromISO('2022-03-20T00:15:00+01:00'),
      priceArea: 'DK1',
    };

    const identifierA = identifyCo2ForecastDataPoint(dataPointA);
    const identifierB = identifyCo2ForecastDataPoint(dataPointB);

    expect(identifierA).toBe(identifierB);
  });
});

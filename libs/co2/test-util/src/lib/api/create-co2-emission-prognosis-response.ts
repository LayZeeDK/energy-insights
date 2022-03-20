import {
  Co2EmissionPrognosisResponse,
  Co2EmissionPrognosisResponseItem,
} from '@energy-insights/co2/data-access-api';
import { DateTime, Duration, Interval } from 'luxon';

export function createCo2EmissionPrognosisResponse(
  forecastInterval: Interval
): Co2EmissionPrognosisResponse {
  return forecastInterval
    .splitBy(Duration.fromObject({ minutes: 5 }))
    .flatMap(interval => [interval.start.toUTC(), interval.start.toUTC()])
    .map(
      (minutes5Utc, index): Co2EmissionPrognosisResponseItem => ({
        ...response[index],
        minutes5Utc,
      })
    );
}

/**
 * Recorded response.
 */
const response: Co2EmissionPrognosisResponse = [
  {
    minutes5Utc: DateTime.fromISO('2022-03-19T23:00:00+00:00'),
    co2Emission: 132,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-19T23:00:00+00:00'),
    co2Emission: 132,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-19T23:05:00+00:00'),
    co2Emission: 147,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-19T23:05:00+00:00'),
    co2Emission: 147,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-19T23:10:00+00:00'),
    co2Emission: 149,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-19T23:10:00+00:00'),
    co2Emission: 149,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-19T23:15:00+00:00'),
    co2Emission: 148,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-19T23:15:00+00:00'),
    co2Emission: 148,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-19T23:20:00+00:00'),
    co2Emission: 155,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-19T23:20:00+00:00'),
    co2Emission: 155,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-19T23:25:00+00:00'),
    co2Emission: 159,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-19T23:25:00+00:00'),
    co2Emission: 159,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-19T23:30:00+00:00'),
    co2Emission: 159,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-19T23:30:00+00:00'),
    co2Emission: 159,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-19T23:35:00+00:00'),
    co2Emission: 157,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-19T23:35:00+00:00'),
    co2Emission: 157,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-19T23:40:00+00:00'),
    co2Emission: 160,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-19T23:40:00+00:00'),
    co2Emission: 160,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-19T23:45:00+00:00'),
    co2Emission: 156,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-19T23:45:00+00:00'),
    co2Emission: 156,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-19T23:50:00+00:00'),
    co2Emission: 156,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-19T23:50:00+00:00'),
    co2Emission: 156,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-19T23:55:00+00:00'),
    co2Emission: 142,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-19T23:55:00+00:00'),
    co2Emission: 142,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T00:00:00+00:00'),
    co2Emission: 127,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T00:00:00+00:00'),
    co2Emission: 127,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T00:05:00+00:00'),
    co2Emission: 133,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T00:05:00+00:00'),
    co2Emission: 133,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T00:10:00+00:00'),
    co2Emission: 131,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T00:10:00+00:00'),
    co2Emission: 131,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T00:15:00+00:00'),
    co2Emission: 138,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T00:15:00+00:00'),
    co2Emission: 138,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T00:20:00+00:00'),
    co2Emission: 137,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T00:20:00+00:00'),
    co2Emission: 137,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T00:25:00+00:00'),
    co2Emission: 147,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T00:25:00+00:00'),
    co2Emission: 147,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T00:30:00+00:00'),
    co2Emission: 142,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T00:30:00+00:00'),
    co2Emission: 142,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T00:35:00+00:00'),
    co2Emission: 130,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T00:35:00+00:00'),
    co2Emission: 130,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T00:40:00+00:00'),
    co2Emission: 125,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T00:40:00+00:00'),
    co2Emission: 125,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T00:45:00+00:00'),
    co2Emission: 123,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T00:45:00+00:00'),
    co2Emission: 123,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T00:50:00+00:00'),
    co2Emission: 118,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T00:50:00+00:00'),
    co2Emission: 118,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T00:55:00+00:00'),
    co2Emission: 119,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T00:55:00+00:00'),
    co2Emission: 119,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T01:00:00+00:00'),
    co2Emission: 113,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T01:00:00+00:00'),
    co2Emission: 113,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T01:05:00+00:00'),
    co2Emission: 105,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T01:05:00+00:00'),
    co2Emission: 105,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T01:10:00+00:00'),
    co2Emission: 114,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T01:10:00+00:00'),
    co2Emission: 114,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T01:15:00+00:00'),
    co2Emission: 124,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T01:15:00+00:00'),
    co2Emission: 124,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T01:20:00+00:00'),
    co2Emission: 112,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T01:20:00+00:00'),
    co2Emission: 112,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T01:25:00+00:00'),
    co2Emission: 112,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T01:25:00+00:00'),
    co2Emission: 112,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T01:30:00+00:00'),
    co2Emission: 109,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T01:30:00+00:00'),
    co2Emission: 109,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T01:35:00+00:00'),
    co2Emission: 110,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T01:35:00+00:00'),
    co2Emission: 110,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T01:40:00+00:00'),
    co2Emission: 98,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T01:40:00+00:00'),
    co2Emission: 98,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T01:45:00+00:00'),
    co2Emission: 91,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T01:45:00+00:00'),
    co2Emission: 91,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T01:50:00+00:00'),
    co2Emission: 92,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T01:50:00+00:00'),
    co2Emission: 92,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T01:55:00+00:00'),
    co2Emission: 88,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T01:55:00+00:00'),
    co2Emission: 88,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T02:00:00+00:00'),
    co2Emission: 86,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T02:00:00+00:00'),
    co2Emission: 86,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T02:05:00+00:00'),
    co2Emission: 85,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T02:05:00+00:00'),
    co2Emission: 85,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T02:10:00+00:00'),
    co2Emission: 87,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T02:10:00+00:00'),
    co2Emission: 87,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T02:15:00+00:00'),
    co2Emission: 86,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T02:15:00+00:00'),
    co2Emission: 86,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T02:20:00+00:00'),
    co2Emission: 88,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T02:20:00+00:00'),
    co2Emission: 88,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T02:25:00+00:00'),
    co2Emission: 90,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T02:25:00+00:00'),
    co2Emission: 90,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T02:30:00+00:00'),
    co2Emission: 89,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T02:30:00+00:00'),
    co2Emission: 89,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T02:35:00+00:00'),
    co2Emission: 89,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T02:35:00+00:00'),
    co2Emission: 89,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T02:40:00+00:00'),
    co2Emission: 88,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T02:40:00+00:00'),
    co2Emission: 88,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T02:45:00+00:00'),
    co2Emission: 87,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T02:45:00+00:00'),
    co2Emission: 87,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T02:50:00+00:00'),
    co2Emission: 87,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T02:50:00+00:00'),
    co2Emission: 87,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T02:55:00+00:00'),
    co2Emission: 87,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T02:55:00+00:00'),
    co2Emission: 87,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T03:00:00+00:00'),
    co2Emission: 93,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T03:00:00+00:00'),
    co2Emission: 93,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T03:05:00+00:00'),
    co2Emission: 99,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T03:05:00+00:00'),
    co2Emission: 99,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T03:10:00+00:00'),
    co2Emission: 96,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T03:10:00+00:00'),
    co2Emission: 96,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T03:15:00+00:00'),
    co2Emission: 98,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T03:15:00+00:00'),
    co2Emission: 98,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T03:20:00+00:00'),
    co2Emission: 99,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T03:20:00+00:00'),
    co2Emission: 99,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T03:25:00+00:00'),
    co2Emission: 101,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T03:25:00+00:00'),
    co2Emission: 101,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T03:30:00+00:00'),
    co2Emission: 101,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T03:30:00+00:00'),
    co2Emission: 101,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T03:35:00+00:00'),
    co2Emission: 101,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T03:35:00+00:00'),
    co2Emission: 101,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T03:40:00+00:00'),
    co2Emission: 101,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T03:40:00+00:00'),
    co2Emission: 101,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T03:45:00+00:00'),
    co2Emission: 100,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T03:45:00+00:00'),
    co2Emission: 100,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T03:50:00+00:00'),
    co2Emission: 100,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T03:50:00+00:00'),
    co2Emission: 100,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T03:55:00+00:00'),
    co2Emission: 99,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T03:55:00+00:00'),
    co2Emission: 99,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T04:00:00+00:00'),
    co2Emission: 96,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T04:00:00+00:00'),
    co2Emission: 96,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T04:05:00+00:00'),
    co2Emission: 91,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T04:05:00+00:00'),
    co2Emission: 91,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T04:10:00+00:00'),
    co2Emission: 90,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T04:10:00+00:00'),
    co2Emission: 90,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T04:15:00+00:00'),
    co2Emission: 90,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T04:15:00+00:00'),
    co2Emission: 90,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T04:20:00+00:00'),
    co2Emission: 89,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T04:20:00+00:00'),
    co2Emission: 89,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T04:25:00+00:00'),
    co2Emission: 91,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T04:25:00+00:00'),
    co2Emission: 91,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T04:30:00+00:00'),
    co2Emission: 92,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T04:30:00+00:00'),
    co2Emission: 92,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T04:35:00+00:00'),
    co2Emission: 91,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T04:35:00+00:00'),
    co2Emission: 91,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T04:40:00+00:00'),
    co2Emission: 90,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T04:40:00+00:00'),
    co2Emission: 90,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T04:45:00+00:00'),
    co2Emission: 90,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T04:45:00+00:00'),
    co2Emission: 90,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T04:50:00+00:00'),
    co2Emission: 90,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T04:50:00+00:00'),
    co2Emission: 90,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T04:55:00+00:00'),
    co2Emission: 90,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T04:55:00+00:00'),
    co2Emission: 90,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T05:00:00+00:00'),
    co2Emission: 87,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T05:00:00+00:00'),
    co2Emission: 87,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T05:05:00+00:00'),
    co2Emission: 85,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T05:05:00+00:00'),
    co2Emission: 85,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T05:10:00+00:00'),
    co2Emission: 90,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T05:10:00+00:00'),
    co2Emission: 90,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T05:15:00+00:00'),
    co2Emission: 87,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T05:15:00+00:00'),
    co2Emission: 87,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T05:20:00+00:00'),
    co2Emission: 87,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T05:20:00+00:00'),
    co2Emission: 87,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T05:25:00+00:00'),
    co2Emission: 86,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T05:25:00+00:00'),
    co2Emission: 86,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T05:30:00+00:00'),
    co2Emission: 85,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T05:30:00+00:00'),
    co2Emission: 85,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T05:35:00+00:00'),
    co2Emission: 85,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T05:35:00+00:00'),
    co2Emission: 85,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T05:40:00+00:00'),
    co2Emission: 85,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T05:40:00+00:00'),
    co2Emission: 85,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T05:45:00+00:00'),
    co2Emission: 87,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T05:45:00+00:00'),
    co2Emission: 87,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T05:50:00+00:00'),
    co2Emission: 88,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T05:50:00+00:00'),
    co2Emission: 88,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T05:55:00+00:00'),
    co2Emission: 90,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T05:55:00+00:00'),
    co2Emission: 90,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T06:00:00+00:00'),
    co2Emission: 105,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T06:00:00+00:00'),
    co2Emission: 105,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T06:05:00+00:00'),
    co2Emission: 117,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T06:05:00+00:00'),
    co2Emission: 117,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T06:10:00+00:00'),
    co2Emission: 119,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T06:10:00+00:00'),
    co2Emission: 119,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T06:15:00+00:00'),
    co2Emission: 117,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T06:15:00+00:00'),
    co2Emission: 117,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T06:20:00+00:00'),
    co2Emission: 117,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T06:20:00+00:00'),
    co2Emission: 117,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T06:25:00+00:00'),
    co2Emission: 115,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T06:25:00+00:00'),
    co2Emission: 115,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T06:30:00+00:00'),
    co2Emission: 115,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T06:30:00+00:00'),
    co2Emission: 115,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T06:35:00+00:00'),
    co2Emission: 114,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T06:35:00+00:00'),
    co2Emission: 114,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T06:40:00+00:00'),
    co2Emission: 114,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T06:40:00+00:00'),
    co2Emission: 114,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T06:45:00+00:00'),
    co2Emission: 111,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T06:45:00+00:00'),
    co2Emission: 111,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T06:50:00+00:00'),
    co2Emission: 104,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T06:50:00+00:00'),
    co2Emission: 104,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T06:55:00+00:00'),
    co2Emission: 105,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T06:55:00+00:00'),
    co2Emission: 105,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T07:00:00+00:00'),
    co2Emission: 111,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T07:00:00+00:00'),
    co2Emission: 111,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T07:05:00+00:00'),
    co2Emission: 117,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T07:05:00+00:00'),
    co2Emission: 117,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T07:10:00+00:00'),
    co2Emission: 114,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T07:10:00+00:00'),
    co2Emission: 114,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T07:15:00+00:00'),
    co2Emission: 97,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T07:15:00+00:00'),
    co2Emission: 97,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T07:20:00+00:00'),
    co2Emission: 92,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T07:20:00+00:00'),
    co2Emission: 92,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T07:25:00+00:00'),
    co2Emission: 90,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T07:25:00+00:00'),
    co2Emission: 90,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T07:30:00+00:00'),
    co2Emission: 94,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T07:30:00+00:00'),
    co2Emission: 94,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T07:35:00+00:00'),
    co2Emission: 95,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T07:35:00+00:00'),
    co2Emission: 95,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T07:40:00+00:00'),
    co2Emission: 88,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T07:40:00+00:00'),
    co2Emission: 88,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T07:45:00+00:00'),
    co2Emission: 91,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T07:45:00+00:00'),
    co2Emission: 91,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T07:50:00+00:00'),
    co2Emission: 76,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T07:50:00+00:00'),
    co2Emission: 76,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T07:55:00+00:00'),
    co2Emission: 68,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T07:55:00+00:00'),
    co2Emission: 68,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T08:00:00+00:00'),
    co2Emission: 71,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T08:00:00+00:00'),
    co2Emission: 71,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T08:05:00+00:00'),
    co2Emission: 72,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T08:05:00+00:00'),
    co2Emission: 72,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T08:10:00+00:00'),
    co2Emission: 64,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T08:10:00+00:00'),
    co2Emission: 64,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T08:15:00+00:00'),
    co2Emission: 64,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T08:15:00+00:00'),
    co2Emission: 64,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T08:20:00+00:00'),
    co2Emission: 63,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T08:20:00+00:00'),
    co2Emission: 63,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T08:25:00+00:00'),
    co2Emission: 63,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T08:25:00+00:00'),
    co2Emission: 63,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T08:30:00+00:00'),
    co2Emission: 63,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T08:30:00+00:00'),
    co2Emission: 63,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T08:35:00+00:00'),
    co2Emission: 61,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T08:35:00+00:00'),
    co2Emission: 61,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T08:40:00+00:00'),
    co2Emission: 61,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T08:40:00+00:00'),
    co2Emission: 61,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T08:45:00+00:00'),
    co2Emission: 61,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T08:45:00+00:00'),
    co2Emission: 61,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T08:50:00+00:00'),
    co2Emission: 60,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T08:50:00+00:00'),
    co2Emission: 60,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T08:55:00+00:00'),
    co2Emission: 59,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T08:55:00+00:00'),
    co2Emission: 59,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T09:00:00+00:00'),
    co2Emission: 59,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T09:00:00+00:00'),
    co2Emission: 59,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T09:05:00+00:00'),
    co2Emission: 57,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T09:05:00+00:00'),
    co2Emission: 57,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T09:10:00+00:00'),
    co2Emission: 57,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T09:10:00+00:00'),
    co2Emission: 57,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T09:15:00+00:00'),
    co2Emission: 57,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T09:15:00+00:00'),
    co2Emission: 57,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T09:20:00+00:00'),
    co2Emission: 56,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T09:20:00+00:00'),
    co2Emission: 56,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T09:25:00+00:00'),
    co2Emission: 52,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T09:25:00+00:00'),
    co2Emission: 52,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T09:30:00+00:00'),
    co2Emission: 51,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T09:30:00+00:00'),
    co2Emission: 51,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T09:35:00+00:00'),
    co2Emission: 52,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T09:35:00+00:00'),
    co2Emission: 52,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T09:40:00+00:00'),
    co2Emission: 52,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T09:40:00+00:00'),
    co2Emission: 52,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T09:45:00+00:00'),
    co2Emission: 51,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T09:45:00+00:00'),
    co2Emission: 51,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T09:50:00+00:00'),
    co2Emission: 50,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T09:50:00+00:00'),
    co2Emission: 50,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T09:55:00+00:00'),
    co2Emission: 49,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T09:55:00+00:00'),
    co2Emission: 49,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T10:00:00+00:00'),
    co2Emission: 47,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T10:00:00+00:00'),
    co2Emission: 47,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T10:05:00+00:00'),
    co2Emission: 47,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T10:05:00+00:00'),
    co2Emission: 47,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T10:10:00+00:00'),
    co2Emission: 46,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T10:10:00+00:00'),
    co2Emission: 46,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T10:15:00+00:00'),
    co2Emission: 45,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T10:15:00+00:00'),
    co2Emission: 45,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T10:20:00+00:00'),
    co2Emission: 45,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T10:20:00+00:00'),
    co2Emission: 45,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T10:25:00+00:00'),
    co2Emission: 44,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T10:25:00+00:00'),
    co2Emission: 44,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T10:30:00+00:00'),
    co2Emission: 43,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T10:30:00+00:00'),
    co2Emission: 43,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T10:35:00+00:00'),
    co2Emission: 43,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T10:35:00+00:00'),
    co2Emission: 43,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T10:40:00+00:00'),
    co2Emission: 42,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T10:40:00+00:00'),
    co2Emission: 42,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T10:45:00+00:00'),
    co2Emission: 42,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T10:45:00+00:00'),
    co2Emission: 42,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T10:50:00+00:00'),
    co2Emission: 41,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T10:50:00+00:00'),
    co2Emission: 41,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T10:55:00+00:00'),
    co2Emission: 41,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T10:55:00+00:00'),
    co2Emission: 41,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T11:00:00+00:00'),
    co2Emission: 42,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T11:00:00+00:00'),
    co2Emission: 42,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T11:05:00+00:00'),
    co2Emission: 45,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T11:05:00+00:00'),
    co2Emission: 45,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T11:10:00+00:00'),
    co2Emission: 45,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T11:10:00+00:00'),
    co2Emission: 45,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T11:15:00+00:00'),
    co2Emission: 44,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T11:15:00+00:00'),
    co2Emission: 44,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T11:20:00+00:00'),
    co2Emission: 44,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T11:20:00+00:00'),
    co2Emission: 44,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T11:25:00+00:00'),
    co2Emission: 44,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T11:25:00+00:00'),
    co2Emission: 44,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T11:30:00+00:00'),
    co2Emission: 43,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T11:30:00+00:00'),
    co2Emission: 43,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T11:35:00+00:00'),
    co2Emission: 43,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T11:35:00+00:00'),
    co2Emission: 43,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T11:40:00+00:00'),
    co2Emission: 42,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T11:40:00+00:00'),
    co2Emission: 42,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T11:45:00+00:00'),
    co2Emission: 42,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T11:45:00+00:00'),
    co2Emission: 42,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T11:50:00+00:00'),
    co2Emission: 42,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T11:50:00+00:00'),
    co2Emission: 42,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T11:55:00+00:00'),
    co2Emission: 42,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T11:55:00+00:00'),
    co2Emission: 42,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T12:00:00+00:00'),
    co2Emission: 45,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T12:00:00+00:00'),
    co2Emission: 45,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T12:05:00+00:00'),
    co2Emission: 45,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T12:05:00+00:00'),
    co2Emission: 45,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T12:10:00+00:00'),
    co2Emission: 45,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T12:10:00+00:00'),
    co2Emission: 45,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T12:15:00+00:00'),
    co2Emission: 46,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T12:15:00+00:00'),
    co2Emission: 46,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T12:20:00+00:00'),
    co2Emission: 46,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T12:20:00+00:00'),
    co2Emission: 46,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T12:25:00+00:00'),
    co2Emission: 46,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T12:25:00+00:00'),
    co2Emission: 46,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T12:30:00+00:00'),
    co2Emission: 46,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T12:30:00+00:00'),
    co2Emission: 46,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T12:35:00+00:00'),
    co2Emission: 46,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T12:35:00+00:00'),
    co2Emission: 46,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T12:40:00+00:00'),
    co2Emission: 46,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T12:40:00+00:00'),
    co2Emission: 46,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T12:45:00+00:00'),
    co2Emission: 46,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T12:45:00+00:00'),
    co2Emission: 46,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T12:50:00+00:00'),
    co2Emission: 46,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T12:50:00+00:00'),
    co2Emission: 46,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T12:55:00+00:00'),
    co2Emission: 45,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T12:55:00+00:00'),
    co2Emission: 45,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T13:00:00+00:00'),
    co2Emission: 47,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T13:00:00+00:00'),
    co2Emission: 47,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T13:05:00+00:00'),
    co2Emission: 43,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T13:05:00+00:00'),
    co2Emission: 43,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T13:10:00+00:00'),
    co2Emission: 41,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T13:10:00+00:00'),
    co2Emission: 41,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T13:15:00+00:00'),
    co2Emission: 41,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T13:15:00+00:00'),
    co2Emission: 41,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T13:20:00+00:00'),
    co2Emission: 41,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T13:20:00+00:00'),
    co2Emission: 41,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T13:25:00+00:00'),
    co2Emission: 41,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T13:25:00+00:00'),
    co2Emission: 41,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T13:30:00+00:00'),
    co2Emission: 41,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T13:30:00+00:00'),
    co2Emission: 41,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T13:35:00+00:00'),
    co2Emission: 42,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T13:35:00+00:00'),
    co2Emission: 42,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T13:40:00+00:00'),
    co2Emission: 43,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T13:40:00+00:00'),
    co2Emission: 43,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T13:45:00+00:00'),
    co2Emission: 42,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T13:45:00+00:00'),
    co2Emission: 42,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T13:50:00+00:00'),
    co2Emission: 43,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T13:50:00+00:00'),
    co2Emission: 43,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T13:55:00+00:00'),
    co2Emission: 43,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T13:55:00+00:00'),
    co2Emission: 43,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T14:00:00+00:00'),
    co2Emission: 41,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T14:00:00+00:00'),
    co2Emission: 41,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T14:05:00+00:00'),
    co2Emission: 41,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T14:05:00+00:00'),
    co2Emission: 41,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T14:10:00+00:00'),
    co2Emission: 40,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T14:10:00+00:00'),
    co2Emission: 40,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T14:15:00+00:00'),
    co2Emission: 41,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T14:15:00+00:00'),
    co2Emission: 41,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T14:20:00+00:00'),
    co2Emission: 43,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T14:20:00+00:00'),
    co2Emission: 43,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T14:25:00+00:00'),
    co2Emission: 40,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T14:25:00+00:00'),
    co2Emission: 40,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T14:30:00+00:00'),
    co2Emission: 40,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T14:30:00+00:00'),
    co2Emission: 40,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T14:35:00+00:00'),
    co2Emission: 40,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T14:35:00+00:00'),
    co2Emission: 40,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T14:40:00+00:00'),
    co2Emission: 41,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T14:40:00+00:00'),
    co2Emission: 41,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T14:45:00+00:00'),
    co2Emission: 41,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T14:45:00+00:00'),
    co2Emission: 41,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T14:50:00+00:00'),
    co2Emission: 41,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T14:50:00+00:00'),
    co2Emission: 41,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T14:55:00+00:00'),
    co2Emission: 41,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T14:55:00+00:00'),
    co2Emission: 41,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T15:00:00+00:00'),
    co2Emission: 39,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T15:00:00+00:00'),
    co2Emission: 39,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T15:05:00+00:00'),
    co2Emission: 39,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T15:05:00+00:00'),
    co2Emission: 39,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T15:10:00+00:00'),
    co2Emission: 37,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T15:10:00+00:00'),
    co2Emission: 37,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T15:15:00+00:00'),
    co2Emission: 36,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T15:15:00+00:00'),
    co2Emission: 36,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T15:20:00+00:00'),
    co2Emission: 38,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T15:20:00+00:00'),
    co2Emission: 38,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T15:25:00+00:00'),
    co2Emission: 39,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T15:25:00+00:00'),
    co2Emission: 39,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T15:30:00+00:00'),
    co2Emission: 39,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T15:30:00+00:00'),
    co2Emission: 39,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T15:35:00+00:00'),
    co2Emission: 39,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T15:35:00+00:00'),
    co2Emission: 39,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T15:40:00+00:00'),
    co2Emission: 39,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T15:40:00+00:00'),
    co2Emission: 39,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T15:45:00+00:00'),
    co2Emission: 40,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T15:45:00+00:00'),
    co2Emission: 40,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T15:50:00+00:00'),
    co2Emission: 40,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T15:50:00+00:00'),
    co2Emission: 40,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T15:55:00+00:00'),
    co2Emission: 41,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T15:55:00+00:00'),
    co2Emission: 41,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T16:00:00+00:00'),
    co2Emission: 43,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T16:00:00+00:00'),
    co2Emission: 43,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T16:05:00+00:00'),
    co2Emission: 45,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T16:05:00+00:00'),
    co2Emission: 45,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T16:10:00+00:00'),
    co2Emission: 44,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T16:10:00+00:00'),
    co2Emission: 44,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T16:15:00+00:00'),
    co2Emission: 47,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T16:15:00+00:00'),
    co2Emission: 47,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T16:20:00+00:00'),
    co2Emission: 47,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T16:20:00+00:00'),
    co2Emission: 47,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T16:25:00+00:00'),
    co2Emission: 46,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T16:25:00+00:00'),
    co2Emission: 46,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T16:30:00+00:00'),
    co2Emission: 47,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T16:30:00+00:00'),
    co2Emission: 47,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T16:35:00+00:00'),
    co2Emission: 47,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T16:35:00+00:00'),
    co2Emission: 47,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T16:40:00+00:00'),
    co2Emission: 47,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T16:40:00+00:00'),
    co2Emission: 47,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T16:45:00+00:00'),
    co2Emission: 47,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T16:45:00+00:00'),
    co2Emission: 47,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T16:50:00+00:00'),
    co2Emission: 47,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T16:50:00+00:00'),
    co2Emission: 47,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T16:55:00+00:00'),
    co2Emission: 47,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T16:55:00+00:00'),
    co2Emission: 47,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T17:00:00+00:00'),
    co2Emission: 51,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T17:00:00+00:00'),
    co2Emission: 51,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T17:05:00+00:00'),
    co2Emission: 60,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T17:05:00+00:00'),
    co2Emission: 60,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T17:10:00+00:00'),
    co2Emission: 60,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T17:10:00+00:00'),
    co2Emission: 60,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T17:15:00+00:00'),
    co2Emission: 62,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T17:15:00+00:00'),
    co2Emission: 62,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T17:20:00+00:00'),
    co2Emission: 62,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T17:20:00+00:00'),
    co2Emission: 62,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T17:25:00+00:00'),
    co2Emission: 62,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T17:25:00+00:00'),
    co2Emission: 62,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T17:30:00+00:00'),
    co2Emission: 62,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T17:30:00+00:00'),
    co2Emission: 62,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T17:35:00+00:00'),
    co2Emission: 62,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T17:35:00+00:00'),
    co2Emission: 62,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T17:40:00+00:00'),
    co2Emission: 63,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T17:40:00+00:00'),
    co2Emission: 63,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T17:45:00+00:00'),
    co2Emission: 63,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T17:45:00+00:00'),
    co2Emission: 63,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T17:50:00+00:00'),
    co2Emission: 63,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T17:50:00+00:00'),
    co2Emission: 63,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T17:55:00+00:00'),
    co2Emission: 64,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T17:55:00+00:00'),
    co2Emission: 64,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T18:00:00+00:00'),
    co2Emission: 66,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T18:00:00+00:00'),
    co2Emission: 66,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T18:05:00+00:00'),
    co2Emission: 64,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T18:05:00+00:00'),
    co2Emission: 64,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T18:10:00+00:00'),
    co2Emission: 63,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T18:10:00+00:00'),
    co2Emission: 63,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T18:15:00+00:00'),
    co2Emission: 64,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T18:15:00+00:00'),
    co2Emission: 64,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T18:20:00+00:00'),
    co2Emission: 66,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T18:20:00+00:00'),
    co2Emission: 66,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T18:25:00+00:00'),
    co2Emission: 66,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T18:25:00+00:00'),
    co2Emission: 66,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T18:30:00+00:00'),
    co2Emission: 65,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T18:30:00+00:00'),
    co2Emission: 65,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T18:35:00+00:00'),
    co2Emission: 64,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T18:35:00+00:00'),
    co2Emission: 64,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T18:40:00+00:00'),
    co2Emission: 65,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T18:40:00+00:00'),
    co2Emission: 65,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T18:45:00+00:00'),
    co2Emission: 67,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T18:45:00+00:00'),
    co2Emission: 67,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T18:50:00+00:00'),
    co2Emission: 65,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T18:50:00+00:00'),
    co2Emission: 65,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T18:55:00+00:00'),
    co2Emission: 66,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T18:55:00+00:00'),
    co2Emission: 66,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T19:00:00+00:00'),
    co2Emission: 64,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T19:00:00+00:00'),
    co2Emission: 64,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T19:05:00+00:00'),
    co2Emission: 64,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T19:05:00+00:00'),
    co2Emission: 64,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T19:10:00+00:00'),
    co2Emission: 71,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T19:10:00+00:00'),
    co2Emission: 71,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T19:15:00+00:00'),
    co2Emission: 81,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T19:15:00+00:00'),
    co2Emission: 81,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T19:20:00+00:00'),
    co2Emission: 81,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T19:20:00+00:00'),
    co2Emission: 81,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T19:25:00+00:00'),
    co2Emission: 82,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T19:25:00+00:00'),
    co2Emission: 82,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T19:30:00+00:00'),
    co2Emission: 84,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T19:30:00+00:00'),
    co2Emission: 84,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T19:35:00+00:00'),
    co2Emission: 88,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T19:35:00+00:00'),
    co2Emission: 88,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T19:40:00+00:00'),
    co2Emission: 91,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T19:40:00+00:00'),
    co2Emission: 91,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T19:45:00+00:00'),
    co2Emission: 92,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T19:45:00+00:00'),
    co2Emission: 92,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T19:50:00+00:00'),
    co2Emission: 98,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T19:50:00+00:00'),
    co2Emission: 98,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T19:55:00+00:00'),
    co2Emission: 109,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T19:55:00+00:00'),
    co2Emission: 109,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T20:00:00+00:00'),
    co2Emission: 90,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T20:00:00+00:00'),
    co2Emission: 90,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T20:05:00+00:00'),
    co2Emission: 92,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T20:05:00+00:00'),
    co2Emission: 92,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T20:10:00+00:00'),
    co2Emission: 98,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T20:10:00+00:00'),
    co2Emission: 98,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T20:15:00+00:00'),
    co2Emission: 96,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T20:15:00+00:00'),
    co2Emission: 96,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T20:20:00+00:00'),
    co2Emission: 90,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T20:20:00+00:00'),
    co2Emission: 90,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T20:25:00+00:00'),
    co2Emission: 91,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T20:25:00+00:00'),
    co2Emission: 91,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T20:30:00+00:00'),
    co2Emission: 93,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T20:30:00+00:00'),
    co2Emission: 93,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T20:35:00+00:00'),
    co2Emission: 92,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T20:35:00+00:00'),
    co2Emission: 92,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T20:40:00+00:00'),
    co2Emission: 92,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T20:40:00+00:00'),
    co2Emission: 92,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T20:45:00+00:00'),
    co2Emission: 93,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T20:45:00+00:00'),
    co2Emission: 93,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T20:50:00+00:00'),
    co2Emission: 93,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T20:50:00+00:00'),
    co2Emission: 93,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T20:55:00+00:00'),
    co2Emission: 88,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T20:55:00+00:00'),
    co2Emission: 88,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T21:00:00+00:00'),
    co2Emission: 74,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T21:00:00+00:00'),
    co2Emission: 74,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T21:05:00+00:00'),
    co2Emission: 81,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T21:05:00+00:00'),
    co2Emission: 81,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T21:10:00+00:00'),
    co2Emission: 83,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T21:10:00+00:00'),
    co2Emission: 83,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T21:15:00+00:00'),
    co2Emission: 82,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T21:15:00+00:00'),
    co2Emission: 82,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T21:20:00+00:00'),
    co2Emission: 85,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T21:20:00+00:00'),
    co2Emission: 85,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T21:25:00+00:00'),
    co2Emission: 89,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T21:25:00+00:00'),
    co2Emission: 89,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T21:30:00+00:00'),
    co2Emission: 91,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T21:30:00+00:00'),
    co2Emission: 91,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T21:35:00+00:00'),
    co2Emission: 93,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T21:35:00+00:00'),
    co2Emission: 93,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T21:40:00+00:00'),
    co2Emission: 95,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T21:40:00+00:00'),
    co2Emission: 95,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T21:45:00+00:00'),
    co2Emission: 98,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T21:45:00+00:00'),
    co2Emission: 98,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T21:50:00+00:00'),
    co2Emission: 103,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T21:50:00+00:00'),
    co2Emission: 103,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T21:55:00+00:00'),
    co2Emission: 115,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T21:55:00+00:00'),
    co2Emission: 115,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T22:00:00+00:00'),
    co2Emission: 91,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T22:00:00+00:00'),
    co2Emission: 91,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T22:05:00+00:00'),
    co2Emission: 98,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T22:05:00+00:00'),
    co2Emission: 98,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T22:10:00+00:00'),
    co2Emission: 98,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T22:10:00+00:00'),
    co2Emission: 98,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T22:15:00+00:00'),
    co2Emission: 98,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T22:15:00+00:00'),
    co2Emission: 98,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T22:20:00+00:00'),
    co2Emission: 98,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T22:20:00+00:00'),
    co2Emission: 98,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T22:25:00+00:00'),
    co2Emission: 98,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T22:25:00+00:00'),
    co2Emission: 98,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T22:30:00+00:00'),
    co2Emission: 98,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T22:30:00+00:00'),
    co2Emission: 98,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T22:35:00+00:00'),
    co2Emission: 98,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T22:35:00+00:00'),
    co2Emission: 98,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T22:40:00+00:00'),
    co2Emission: 99,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T22:40:00+00:00'),
    co2Emission: 99,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T22:45:00+00:00'),
    co2Emission: 99,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T22:45:00+00:00'),
    co2Emission: 99,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T22:50:00+00:00'),
    co2Emission: 99,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T22:50:00+00:00'),
    co2Emission: 99,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T22:55:00+00:00'),
    co2Emission: 100,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T22:55:00+00:00'),
    co2Emission: 100,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T23:00:00+00:00'),
    co2Emission: 92,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T23:00:00+00:00'),
    co2Emission: 92,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T23:05:00+00:00'),
    co2Emission: 99,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T23:05:00+00:00'),
    co2Emission: 99,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T23:10:00+00:00'),
    co2Emission: 99,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T23:10:00+00:00'),
    co2Emission: 99,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T23:15:00+00:00'),
    co2Emission: 100,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T23:15:00+00:00'),
    co2Emission: 100,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T23:20:00+00:00'),
    co2Emission: 101,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T23:20:00+00:00'),
    co2Emission: 101,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T23:25:00+00:00'),
    co2Emission: 101,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T23:25:00+00:00'),
    co2Emission: 101,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T23:30:00+00:00'),
    co2Emission: 102,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T23:30:00+00:00'),
    co2Emission: 102,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T23:35:00+00:00'),
    co2Emission: 101,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T23:35:00+00:00'),
    co2Emission: 101,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T23:40:00+00:00'),
    co2Emission: 102,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T23:40:00+00:00'),
    co2Emission: 102,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T23:45:00+00:00'),
    co2Emission: 101,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T23:45:00+00:00'),
    co2Emission: 101,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T23:50:00+00:00'),
    co2Emission: 102,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T23:50:00+00:00'),
    co2Emission: 102,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T23:55:00+00:00'),
    co2Emission: 101,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-20T23:55:00+00:00'),
    co2Emission: 101,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T00:00:00+00:00'),
    co2Emission: 101,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T00:00:00+00:00'),
    co2Emission: 101,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T00:05:00+00:00'),
    co2Emission: 99,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T00:05:00+00:00'),
    co2Emission: 99,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T00:10:00+00:00'),
    co2Emission: 99,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T00:10:00+00:00'),
    co2Emission: 99,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T00:15:00+00:00'),
    co2Emission: 99,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T00:15:00+00:00'),
    co2Emission: 99,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T00:20:00+00:00'),
    co2Emission: 100,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T00:20:00+00:00'),
    co2Emission: 100,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T00:25:00+00:00'),
    co2Emission: 100,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T00:25:00+00:00'),
    co2Emission: 100,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T00:30:00+00:00'),
    co2Emission: 101,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T00:30:00+00:00'),
    co2Emission: 101,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T00:35:00+00:00'),
    co2Emission: 101,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T00:35:00+00:00'),
    co2Emission: 101,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T00:40:00+00:00'),
    co2Emission: 102,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T00:40:00+00:00'),
    co2Emission: 102,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T00:45:00+00:00'),
    co2Emission: 102,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T00:45:00+00:00'),
    co2Emission: 102,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T00:50:00+00:00'),
    co2Emission: 102,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T00:50:00+00:00'),
    co2Emission: 102,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T00:55:00+00:00'),
    co2Emission: 101,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T00:55:00+00:00'),
    co2Emission: 101,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T01:00:00+00:00'),
    co2Emission: 95,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T01:00:00+00:00'),
    co2Emission: 95,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T01:05:00+00:00'),
    co2Emission: 95,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T01:05:00+00:00'),
    co2Emission: 95,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T01:10:00+00:00'),
    co2Emission: 95,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T01:10:00+00:00'),
    co2Emission: 95,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T01:15:00+00:00'),
    co2Emission: 95,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T01:15:00+00:00'),
    co2Emission: 95,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T01:20:00+00:00'),
    co2Emission: 95,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T01:20:00+00:00'),
    co2Emission: 95,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T01:25:00+00:00'),
    co2Emission: 96,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T01:25:00+00:00'),
    co2Emission: 96,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T01:30:00+00:00'),
    co2Emission: 96,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T01:30:00+00:00'),
    co2Emission: 96,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T01:35:00+00:00'),
    co2Emission: 99,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T01:35:00+00:00'),
    co2Emission: 99,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T01:40:00+00:00'),
    co2Emission: 102,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T01:40:00+00:00'),
    co2Emission: 102,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T01:45:00+00:00'),
    co2Emission: 105,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T01:45:00+00:00'),
    co2Emission: 105,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T01:50:00+00:00'),
    co2Emission: 107,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T01:50:00+00:00'),
    co2Emission: 107,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T01:55:00+00:00'),
    co2Emission: 108,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T01:55:00+00:00'),
    co2Emission: 108,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T02:00:00+00:00'),
    co2Emission: 104,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T02:00:00+00:00'),
    co2Emission: 104,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T02:05:00+00:00'),
    co2Emission: 107,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T02:05:00+00:00'),
    co2Emission: 107,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T02:10:00+00:00'),
    co2Emission: 110,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T02:10:00+00:00'),
    co2Emission: 110,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T02:15:00+00:00'),
    co2Emission: 113,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T02:15:00+00:00'),
    co2Emission: 113,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T02:20:00+00:00'),
    co2Emission: 112,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T02:20:00+00:00'),
    co2Emission: 112,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T02:25:00+00:00'),
    co2Emission: 110,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T02:25:00+00:00'),
    co2Emission: 110,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T02:30:00+00:00'),
    co2Emission: 109,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T02:30:00+00:00'),
    co2Emission: 109,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T02:35:00+00:00'),
    co2Emission: 110,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T02:35:00+00:00'),
    co2Emission: 110,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T02:40:00+00:00'),
    co2Emission: 113,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T02:40:00+00:00'),
    co2Emission: 113,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T02:45:00+00:00'),
    co2Emission: 117,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T02:45:00+00:00'),
    co2Emission: 117,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T02:50:00+00:00'),
    co2Emission: 121,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T02:50:00+00:00'),
    co2Emission: 121,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T02:55:00+00:00'),
    co2Emission: 121,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T02:55:00+00:00'),
    co2Emission: 121,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T03:00:00+00:00'),
    co2Emission: 125,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T03:00:00+00:00'),
    co2Emission: 125,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T03:05:00+00:00'),
    co2Emission: 132,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T03:05:00+00:00'),
    co2Emission: 132,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T03:10:00+00:00'),
    co2Emission: 136,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T03:10:00+00:00'),
    co2Emission: 136,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T03:15:00+00:00'),
    co2Emission: 136,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T03:15:00+00:00'),
    co2Emission: 136,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T03:20:00+00:00'),
    co2Emission: 136,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T03:20:00+00:00'),
    co2Emission: 136,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T03:25:00+00:00'),
    co2Emission: 137,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T03:25:00+00:00'),
    co2Emission: 137,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T03:30:00+00:00'),
    co2Emission: 137,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T03:30:00+00:00'),
    co2Emission: 137,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T03:35:00+00:00'),
    co2Emission: 138,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T03:35:00+00:00'),
    co2Emission: 138,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T03:40:00+00:00'),
    co2Emission: 138,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T03:40:00+00:00'),
    co2Emission: 138,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T03:45:00+00:00'),
    co2Emission: 139,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T03:45:00+00:00'),
    co2Emission: 139,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T03:50:00+00:00'),
    co2Emission: 139,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T03:50:00+00:00'),
    co2Emission: 139,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T03:55:00+00:00'),
    co2Emission: 145,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T03:55:00+00:00'),
    co2Emission: 145,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T04:00:00+00:00'),
    co2Emission: 158,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T04:00:00+00:00'),
    co2Emission: 158,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T04:05:00+00:00'),
    co2Emission: 160,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T04:05:00+00:00'),
    co2Emission: 160,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T04:10:00+00:00'),
    co2Emission: 160,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T04:10:00+00:00'),
    co2Emission: 160,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T04:15:00+00:00'),
    co2Emission: 161,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T04:15:00+00:00'),
    co2Emission: 161,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T04:20:00+00:00'),
    co2Emission: 161,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T04:20:00+00:00'),
    co2Emission: 161,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T04:25:00+00:00'),
    co2Emission: 162,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T04:25:00+00:00'),
    co2Emission: 162,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T04:30:00+00:00'),
    co2Emission: 163,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T04:30:00+00:00'),
    co2Emission: 163,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T04:35:00+00:00'),
    co2Emission: 164,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T04:35:00+00:00'),
    co2Emission: 164,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T04:40:00+00:00'),
    co2Emission: 165,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T04:40:00+00:00'),
    co2Emission: 165,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T04:45:00+00:00'),
    co2Emission: 165,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T04:45:00+00:00'),
    co2Emission: 165,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T04:50:00+00:00'),
    co2Emission: 165,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T04:50:00+00:00'),
    co2Emission: 165,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T04:55:00+00:00'),
    co2Emission: 166,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T04:55:00+00:00'),
    co2Emission: 166,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T05:00:00+00:00'),
    co2Emission: 171,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T05:00:00+00:00'),
    co2Emission: 171,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T05:05:00+00:00'),
    co2Emission: 179,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T05:05:00+00:00'),
    co2Emission: 179,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T05:10:00+00:00'),
    co2Emission: 182,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T05:10:00+00:00'),
    co2Emission: 182,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T05:15:00+00:00'),
    co2Emission: 183,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T05:15:00+00:00'),
    co2Emission: 183,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T05:20:00+00:00'),
    co2Emission: 183,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T05:20:00+00:00'),
    co2Emission: 183,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T05:25:00+00:00'),
    co2Emission: 183,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T05:25:00+00:00'),
    co2Emission: 183,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T05:30:00+00:00'),
    co2Emission: 183,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T05:30:00+00:00'),
    co2Emission: 183,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T05:35:00+00:00'),
    co2Emission: 182,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T05:35:00+00:00'),
    co2Emission: 182,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T05:40:00+00:00'),
    co2Emission: 182,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T05:40:00+00:00'),
    co2Emission: 182,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T05:45:00+00:00'),
    co2Emission: 184,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T05:45:00+00:00'),
    co2Emission: 184,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T05:50:00+00:00'),
    co2Emission: 191,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T05:50:00+00:00'),
    co2Emission: 191,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T05:55:00+00:00'),
    co2Emission: 200,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T05:55:00+00:00'),
    co2Emission: 200,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T06:00:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T06:00:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T06:05:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T06:05:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T06:10:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T06:10:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T06:15:00+00:00'),
    co2Emission: 207,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T06:15:00+00:00'),
    co2Emission: 207,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T06:20:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T06:20:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T06:25:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T06:25:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T06:30:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T06:30:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T06:35:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T06:35:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T06:40:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T06:40:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T06:45:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T06:45:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T06:50:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T06:50:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T06:55:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T06:55:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T07:00:00+00:00'),
    co2Emission: 210,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T07:00:00+00:00'),
    co2Emission: 210,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T07:05:00+00:00'),
    co2Emission: 210,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T07:05:00+00:00'),
    co2Emission: 210,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T07:10:00+00:00'),
    co2Emission: 210,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T07:10:00+00:00'),
    co2Emission: 210,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T07:15:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T07:15:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T07:20:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T07:20:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T07:25:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T07:25:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T07:30:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T07:30:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T07:35:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T07:35:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T07:40:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T07:40:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T07:45:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T07:45:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T07:50:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T07:50:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T07:55:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T07:55:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T08:00:00+00:00'),
    co2Emission: 210,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T08:00:00+00:00'),
    co2Emission: 210,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T08:05:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T08:05:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T08:10:00+00:00'),
    co2Emission: 210,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T08:10:00+00:00'),
    co2Emission: 210,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T08:15:00+00:00'),
    co2Emission: 210,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T08:15:00+00:00'),
    co2Emission: 210,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T08:20:00+00:00'),
    co2Emission: 210,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T08:20:00+00:00'),
    co2Emission: 210,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T08:25:00+00:00'),
    co2Emission: 211,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T08:25:00+00:00'),
    co2Emission: 211,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T08:30:00+00:00'),
    co2Emission: 211,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T08:30:00+00:00'),
    co2Emission: 211,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T08:35:00+00:00'),
    co2Emission: 211,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T08:35:00+00:00'),
    co2Emission: 211,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T08:40:00+00:00'),
    co2Emission: 210,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T08:40:00+00:00'),
    co2Emission: 210,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T08:45:00+00:00'),
    co2Emission: 210,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T08:45:00+00:00'),
    co2Emission: 210,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T08:50:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T08:50:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T08:55:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T08:55:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T09:00:00+00:00'),
    co2Emission: 206,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T09:00:00+00:00'),
    co2Emission: 206,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T09:05:00+00:00'),
    co2Emission: 205,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T09:05:00+00:00'),
    co2Emission: 205,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T09:10:00+00:00'),
    co2Emission: 204,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T09:10:00+00:00'),
    co2Emission: 204,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T09:15:00+00:00'),
    co2Emission: 204,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T09:15:00+00:00'),
    co2Emission: 204,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T09:20:00+00:00'),
    co2Emission: 204,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T09:20:00+00:00'),
    co2Emission: 204,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T09:25:00+00:00'),
    co2Emission: 205,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T09:25:00+00:00'),
    co2Emission: 205,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T09:30:00+00:00'),
    co2Emission: 205,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T09:30:00+00:00'),
    co2Emission: 205,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T09:35:00+00:00'),
    co2Emission: 206,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T09:35:00+00:00'),
    co2Emission: 206,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T09:40:00+00:00'),
    co2Emission: 206,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T09:40:00+00:00'),
    co2Emission: 206,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T09:45:00+00:00'),
    co2Emission: 206,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T09:45:00+00:00'),
    co2Emission: 206,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T09:50:00+00:00'),
    co2Emission: 207,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T09:50:00+00:00'),
    co2Emission: 207,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T09:55:00+00:00'),
    co2Emission: 207,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T09:55:00+00:00'),
    co2Emission: 207,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T10:00:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T10:00:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T10:05:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T10:05:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T10:10:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T10:10:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T10:15:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T10:15:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T10:20:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T10:20:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T10:25:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T10:25:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T10:30:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T10:30:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T10:35:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T10:35:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T10:40:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T10:40:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T10:45:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T10:45:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T10:50:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T10:50:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T10:55:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T10:55:00+00:00'),
    co2Emission: 208,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T11:00:00+00:00'),
    co2Emission: 205,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T11:00:00+00:00'),
    co2Emission: 205,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T11:05:00+00:00'),
    co2Emission: 202,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T11:05:00+00:00'),
    co2Emission: 202,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T11:10:00+00:00'),
    co2Emission: 200,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T11:10:00+00:00'),
    co2Emission: 200,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T11:15:00+00:00'),
    co2Emission: 197,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T11:15:00+00:00'),
    co2Emission: 197,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T11:20:00+00:00'),
    co2Emission: 196,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T11:20:00+00:00'),
    co2Emission: 196,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T11:25:00+00:00'),
    co2Emission: 193,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T11:25:00+00:00'),
    co2Emission: 193,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T11:30:00+00:00'),
    co2Emission: 191,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T11:30:00+00:00'),
    co2Emission: 191,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T11:35:00+00:00'),
    co2Emission: 189,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T11:35:00+00:00'),
    co2Emission: 189,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T11:40:00+00:00'),
    co2Emission: 186,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T11:40:00+00:00'),
    co2Emission: 186,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T11:45:00+00:00'),
    co2Emission: 184,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T11:45:00+00:00'),
    co2Emission: 184,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T11:50:00+00:00'),
    co2Emission: 182,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T11:50:00+00:00'),
    co2Emission: 182,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T11:55:00+00:00'),
    co2Emission: 179,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T11:55:00+00:00'),
    co2Emission: 179,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T12:00:00+00:00'),
    co2Emission: 181,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T12:00:00+00:00'),
    co2Emission: 181,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T12:05:00+00:00'),
    co2Emission: 184,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T12:05:00+00:00'),
    co2Emission: 184,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T12:10:00+00:00'),
    co2Emission: 185,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T12:10:00+00:00'),
    co2Emission: 185,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T12:15:00+00:00'),
    co2Emission: 186,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T12:15:00+00:00'),
    co2Emission: 186,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T12:20:00+00:00'),
    co2Emission: 187,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T12:20:00+00:00'),
    co2Emission: 187,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T12:25:00+00:00'),
    co2Emission: 188,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T12:25:00+00:00'),
    co2Emission: 188,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T12:30:00+00:00'),
    co2Emission: 189,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T12:30:00+00:00'),
    co2Emission: 189,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T12:35:00+00:00'),
    co2Emission: 190,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T12:35:00+00:00'),
    co2Emission: 190,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T12:40:00+00:00'),
    co2Emission: 191,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T12:40:00+00:00'),
    co2Emission: 191,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T12:45:00+00:00'),
    co2Emission: 191,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T12:45:00+00:00'),
    co2Emission: 191,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T12:50:00+00:00'),
    co2Emission: 192,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T12:50:00+00:00'),
    co2Emission: 192,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T12:55:00+00:00'),
    co2Emission: 193,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T12:55:00+00:00'),
    co2Emission: 193,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T13:00:00+00:00'),
    co2Emission: 197,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T13:00:00+00:00'),
    co2Emission: 197,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T13:05:00+00:00'),
    co2Emission: 199,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T13:05:00+00:00'),
    co2Emission: 199,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T13:10:00+00:00'),
    co2Emission: 200,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T13:10:00+00:00'),
    co2Emission: 200,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T13:15:00+00:00'),
    co2Emission: 201,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T13:15:00+00:00'),
    co2Emission: 201,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T13:20:00+00:00'),
    co2Emission: 202,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T13:20:00+00:00'),
    co2Emission: 202,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T13:25:00+00:00'),
    co2Emission: 203,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T13:25:00+00:00'),
    co2Emission: 203,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T13:30:00+00:00'),
    co2Emission: 204,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T13:30:00+00:00'),
    co2Emission: 204,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T13:35:00+00:00'),
    co2Emission: 204,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T13:35:00+00:00'),
    co2Emission: 204,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T13:40:00+00:00'),
    co2Emission: 205,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T13:40:00+00:00'),
    co2Emission: 205,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T13:45:00+00:00'),
    co2Emission: 207,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T13:45:00+00:00'),
    co2Emission: 207,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T13:50:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T13:50:00+00:00'),
    co2Emission: 209,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T13:55:00+00:00'),
    co2Emission: 214,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T13:55:00+00:00'),
    co2Emission: 214,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T14:00:00+00:00'),
    co2Emission: 225,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T14:00:00+00:00'),
    co2Emission: 225,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T14:05:00+00:00'),
    co2Emission: 227,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T14:05:00+00:00'),
    co2Emission: 227,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T14:10:00+00:00'),
    co2Emission: 229,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T14:10:00+00:00'),
    co2Emission: 229,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T14:15:00+00:00'),
    co2Emission: 231,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T14:15:00+00:00'),
    co2Emission: 231,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T14:20:00+00:00'),
    co2Emission: 233,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T14:20:00+00:00'),
    co2Emission: 233,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T14:25:00+00:00'),
    co2Emission: 235,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T14:25:00+00:00'),
    co2Emission: 235,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T14:30:00+00:00'),
    co2Emission: 237,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T14:30:00+00:00'),
    co2Emission: 237,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T14:35:00+00:00'),
    co2Emission: 239,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T14:35:00+00:00'),
    co2Emission: 239,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T14:40:00+00:00'),
    co2Emission: 241,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T14:40:00+00:00'),
    co2Emission: 241,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T14:45:00+00:00'),
    co2Emission: 243,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T14:45:00+00:00'),
    co2Emission: 243,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T14:50:00+00:00'),
    co2Emission: 245,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T14:50:00+00:00'),
    co2Emission: 245,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T14:55:00+00:00'),
    co2Emission: 247,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T14:55:00+00:00'),
    co2Emission: 247,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T15:00:00+00:00'),
    co2Emission: 252,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T15:00:00+00:00'),
    co2Emission: 252,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T15:05:00+00:00'),
    co2Emission: 253,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T15:05:00+00:00'),
    co2Emission: 253,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T15:10:00+00:00'),
    co2Emission: 254,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T15:10:00+00:00'),
    co2Emission: 254,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T15:15:00+00:00'),
    co2Emission: 257,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T15:15:00+00:00'),
    co2Emission: 257,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T15:20:00+00:00'),
    co2Emission: 259,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T15:20:00+00:00'),
    co2Emission: 259,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T15:25:00+00:00'),
    co2Emission: 262,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T15:25:00+00:00'),
    co2Emission: 262,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T15:30:00+00:00'),
    co2Emission: 264,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T15:30:00+00:00'),
    co2Emission: 264,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T15:35:00+00:00'),
    co2Emission: 266,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T15:35:00+00:00'),
    co2Emission: 266,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T15:40:00+00:00'),
    co2Emission: 268,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T15:40:00+00:00'),
    co2Emission: 268,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T15:45:00+00:00'),
    co2Emission: 271,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T15:45:00+00:00'),
    co2Emission: 271,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T15:50:00+00:00'),
    co2Emission: 275,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T15:50:00+00:00'),
    co2Emission: 275,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T15:55:00+00:00'),
    co2Emission: 278,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T15:55:00+00:00'),
    co2Emission: 278,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T16:00:00+00:00'),
    co2Emission: 284,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T16:00:00+00:00'),
    co2Emission: 284,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T16:05:00+00:00'),
    co2Emission: 289,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T16:05:00+00:00'),
    co2Emission: 289,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T16:10:00+00:00'),
    co2Emission: 301,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T16:10:00+00:00'),
    co2Emission: 301,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T16:15:00+00:00'),
    co2Emission: 313,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T16:15:00+00:00'),
    co2Emission: 313,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T16:20:00+00:00'),
    co2Emission: 320,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T16:20:00+00:00'),
    co2Emission: 320,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T16:25:00+00:00'),
    co2Emission: 323,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T16:25:00+00:00'),
    co2Emission: 323,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T16:30:00+00:00'),
    co2Emission: 325,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T16:30:00+00:00'),
    co2Emission: 325,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T16:35:00+00:00'),
    co2Emission: 326,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T16:35:00+00:00'),
    co2Emission: 326,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T16:40:00+00:00'),
    co2Emission: 327,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T16:40:00+00:00'),
    co2Emission: 327,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T16:45:00+00:00'),
    co2Emission: 328,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T16:45:00+00:00'),
    co2Emission: 328,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T16:50:00+00:00'),
    co2Emission: 329,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T16:50:00+00:00'),
    co2Emission: 329,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T16:55:00+00:00'),
    co2Emission: 330,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T16:55:00+00:00'),
    co2Emission: 330,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T17:00:00+00:00'),
    co2Emission: 329,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T17:00:00+00:00'),
    co2Emission: 329,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T17:05:00+00:00'),
    co2Emission: 320,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T17:05:00+00:00'),
    co2Emission: 320,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T17:10:00+00:00'),
    co2Emission: 320,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T17:10:00+00:00'),
    co2Emission: 320,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T17:15:00+00:00'),
    co2Emission: 320,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T17:15:00+00:00'),
    co2Emission: 320,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T17:20:00+00:00'),
    co2Emission: 318,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T17:20:00+00:00'),
    co2Emission: 318,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T17:25:00+00:00'),
    co2Emission: 316,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T17:25:00+00:00'),
    co2Emission: 316,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T17:30:00+00:00'),
    co2Emission: 313,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T17:30:00+00:00'),
    co2Emission: 313,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T17:35:00+00:00'),
    co2Emission: 311,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T17:35:00+00:00'),
    co2Emission: 311,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T17:40:00+00:00'),
    co2Emission: 309,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T17:40:00+00:00'),
    co2Emission: 309,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T17:45:00+00:00'),
    co2Emission: 307,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T17:45:00+00:00'),
    co2Emission: 307,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T17:50:00+00:00'),
    co2Emission: 306,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T17:50:00+00:00'),
    co2Emission: 306,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T17:55:00+00:00'),
    co2Emission: 306,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T17:55:00+00:00'),
    co2Emission: 306,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T18:00:00+00:00'),
    co2Emission: 305,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T18:00:00+00:00'),
    co2Emission: 305,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T18:05:00+00:00'),
    co2Emission: 305,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T18:05:00+00:00'),
    co2Emission: 305,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T18:10:00+00:00'),
    co2Emission: 305,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T18:10:00+00:00'),
    co2Emission: 305,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T18:15:00+00:00'),
    co2Emission: 305,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T18:15:00+00:00'),
    co2Emission: 305,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T18:20:00+00:00'),
    co2Emission: 305,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T18:20:00+00:00'),
    co2Emission: 305,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T18:25:00+00:00'),
    co2Emission: 304,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T18:25:00+00:00'),
    co2Emission: 304,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T18:30:00+00:00'),
    co2Emission: 304,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T18:30:00+00:00'),
    co2Emission: 304,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T18:35:00+00:00'),
    co2Emission: 304,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T18:35:00+00:00'),
    co2Emission: 304,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T18:40:00+00:00'),
    co2Emission: 304,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T18:40:00+00:00'),
    co2Emission: 304,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T18:45:00+00:00'),
    co2Emission: 304,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T18:45:00+00:00'),
    co2Emission: 304,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T18:50:00+00:00'),
    co2Emission: 304,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T18:50:00+00:00'),
    co2Emission: 304,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T18:55:00+00:00'),
    co2Emission: 305,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T18:55:00+00:00'),
    co2Emission: 305,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T19:00:00+00:00'),
    co2Emission: 310,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T19:00:00+00:00'),
    co2Emission: 310,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T19:05:00+00:00'),
    co2Emission: 312,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T19:05:00+00:00'),
    co2Emission: 312,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T19:10:00+00:00'),
    co2Emission: 313,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T19:10:00+00:00'),
    co2Emission: 313,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T19:15:00+00:00'),
    co2Emission: 313,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T19:15:00+00:00'),
    co2Emission: 313,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T19:20:00+00:00'),
    co2Emission: 314,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T19:20:00+00:00'),
    co2Emission: 314,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T19:25:00+00:00'),
    co2Emission: 315,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T19:25:00+00:00'),
    co2Emission: 315,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T19:30:00+00:00'),
    co2Emission: 315,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T19:30:00+00:00'),
    co2Emission: 315,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T19:35:00+00:00'),
    co2Emission: 315,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T19:35:00+00:00'),
    co2Emission: 315,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T19:40:00+00:00'),
    co2Emission: 316,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T19:40:00+00:00'),
    co2Emission: 316,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T19:45:00+00:00'),
    co2Emission: 317,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T19:45:00+00:00'),
    co2Emission: 317,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T19:50:00+00:00'),
    co2Emission: 317,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T19:50:00+00:00'),
    co2Emission: 317,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T19:55:00+00:00'),
    co2Emission: 318,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T19:55:00+00:00'),
    co2Emission: 318,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T20:00:00+00:00'),
    co2Emission: 319,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T20:00:00+00:00'),
    co2Emission: 319,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T20:05:00+00:00'),
    co2Emission: 320,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T20:05:00+00:00'),
    co2Emission: 320,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T20:10:00+00:00'),
    co2Emission: 321,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T20:10:00+00:00'),
    co2Emission: 321,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T20:15:00+00:00'),
    co2Emission: 321,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T20:15:00+00:00'),
    co2Emission: 321,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T20:20:00+00:00'),
    co2Emission: 322,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T20:20:00+00:00'),
    co2Emission: 322,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T20:25:00+00:00'),
    co2Emission: 323,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T20:25:00+00:00'),
    co2Emission: 323,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T20:30:00+00:00'),
    co2Emission: 324,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T20:30:00+00:00'),
    co2Emission: 324,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T20:35:00+00:00'),
    co2Emission: 325,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T20:35:00+00:00'),
    co2Emission: 325,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T20:40:00+00:00'),
    co2Emission: 326,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T20:40:00+00:00'),
    co2Emission: 326,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T20:45:00+00:00'),
    co2Emission: 327,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T20:45:00+00:00'),
    co2Emission: 327,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T20:50:00+00:00'),
    co2Emission: 327,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T20:50:00+00:00'),
    co2Emission: 327,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T20:55:00+00:00'),
    co2Emission: 327,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T20:55:00+00:00'),
    co2Emission: 327,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T21:00:00+00:00'),
    co2Emission: 330,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T21:00:00+00:00'),
    co2Emission: 330,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T21:05:00+00:00'),
    co2Emission: 323,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T21:05:00+00:00'),
    co2Emission: 323,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T21:10:00+00:00'),
    co2Emission: 323,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T21:10:00+00:00'),
    co2Emission: 323,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T21:15:00+00:00'),
    co2Emission: 323,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T21:15:00+00:00'),
    co2Emission: 323,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T21:20:00+00:00'),
    co2Emission: 324,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T21:20:00+00:00'),
    co2Emission: 324,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T21:25:00+00:00'),
    co2Emission: 325,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T21:25:00+00:00'),
    co2Emission: 325,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T21:30:00+00:00'),
    co2Emission: 326,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T21:30:00+00:00'),
    co2Emission: 326,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T21:35:00+00:00'),
    co2Emission: 327,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T21:35:00+00:00'),
    co2Emission: 327,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T21:40:00+00:00'),
    co2Emission: 328,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T21:40:00+00:00'),
    co2Emission: 328,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T21:45:00+00:00'),
    co2Emission: 328,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T21:45:00+00:00'),
    co2Emission: 328,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T21:50:00+00:00'),
    co2Emission: 329,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T21:50:00+00:00'),
    co2Emission: 329,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T21:55:00+00:00'),
    co2Emission: 330,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T21:55:00+00:00'),
    co2Emission: 330,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T22:00:00+00:00'),
    co2Emission: 328,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T22:00:00+00:00'),
    co2Emission: 328,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T22:05:00+00:00'),
    co2Emission: 323,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T22:05:00+00:00'),
    co2Emission: 323,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T22:10:00+00:00'),
    co2Emission: 324,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T22:10:00+00:00'),
    co2Emission: 324,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T22:15:00+00:00'),
    co2Emission: 324,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T22:15:00+00:00'),
    co2Emission: 324,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T22:20:00+00:00'),
    co2Emission: 326,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T22:20:00+00:00'),
    co2Emission: 326,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T22:25:00+00:00'),
    co2Emission: 327,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T22:25:00+00:00'),
    co2Emission: 327,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T22:30:00+00:00'),
    co2Emission: 328,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T22:30:00+00:00'),
    co2Emission: 328,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T22:35:00+00:00'),
    co2Emission: 329,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T22:35:00+00:00'),
    co2Emission: 329,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T22:40:00+00:00'),
    co2Emission: 331,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T22:40:00+00:00'),
    co2Emission: 331,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T22:45:00+00:00'),
    co2Emission: 334,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T22:45:00+00:00'),
    co2Emission: 334,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T22:50:00+00:00'),
    co2Emission: 336,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T22:50:00+00:00'),
    co2Emission: 336,
    priceArea: 'DK2',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T22:55:00+00:00'),
    co2Emission: 338,
    priceArea: 'DK1',
  },
  {
    minutes5Utc: DateTime.fromISO('2022-03-21T22:55:00+00:00'),
    co2Emission: 338,
    priceArea: 'DK2',
  },
];

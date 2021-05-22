import { DateTime, Duration, Interval } from 'luxon';

import { danishZone } from '../date-time-util/danish-zone';

export function createCo2ForecastInterval(now: DateTime): Interval {
  const danishToday = now.setZone(danishZone).startOf('day');
  const danishDayAfterTomorrow = danishToday.plus(Duration.fromISO('P2D'));

  return Interval.fromDateTimes(danishToday, danishDayAfterTomorrow);
}

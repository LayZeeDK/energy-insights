import { DateQuery } from '../date-query';
import { localDateOf } from '../date-util/local-date-of';

export function createCo2ForecastDateQuery(now: Date): DateQuery {
  const localToday = localDateOf(now);
  const twoDaysMs = 2 * 24 * 60 * 60 * 1000;
  const localDayAfterTomorrow = localDateOf(
    new Date(now.valueOf() + twoDaysMs)
  );

  return {
    from: localToday,
    to: localDayAfterTomorrow,
  };
}

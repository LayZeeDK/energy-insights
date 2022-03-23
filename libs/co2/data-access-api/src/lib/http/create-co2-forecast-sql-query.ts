import { Interval } from 'luxon';

/**
 * NOTE: Converting to UTC time zone because of issues with URL encoding the
 * plus (`+`) character.
 */
export function createCo2ForecastSqlQuery(interval: Interval): string {
  return `SELECT "Minutes5UTC" AS "minutes5Utc"
      ,"CO2Emission" AS "co2Emission"
      ,"PriceArea" AS "priceArea"
    FROM "co2emisprog"
    WHERE "Minutes5UTC" >= '${interval.start.toUTC().toISO()}'
      AND "Minutes5UTC" < '${interval.end.toUTC().toISO()}'
    ORDER BY "Minutes5UTC" ASC`;
}

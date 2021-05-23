import { Interval } from 'luxon';

export function createCo2ForecastSqlQuery(interval: Interval): string {
  return `SELECT "Minutes5UTC" AS "minutes5Utc"
      ,"CO2Emission" AS "co2Emission"
      ,"PriceArea" AS "priceArea"
    FROM "co2emisprog"
    WHERE "Minutes5UTC" >= '${interval.start.toISO()}'
      AND "Minutes5UTC" < '${interval.end.toISO()}'
    ORDER BY "Minutes5UTC" ASC`;
}

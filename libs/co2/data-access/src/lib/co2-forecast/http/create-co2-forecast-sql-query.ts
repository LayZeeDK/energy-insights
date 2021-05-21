import { DateQuery } from '../date-query';

export function createCo2ForecastSqlQuery(dateQuery: DateQuery): string {
  return `SELECT "Minutes5UTC" AS "minutes5Utc"
      ,"CO2Emission" AS "co2Emission"
      ,"PriceArea" AS "priceArea"
    FROM "co2emisprog"
    WHERE "Minutes5UTC" >= '${dateQuery.from.toISOString()}'
      AND "Minutes5UTC" < '${dateQuery.to.toISOString()}'
    ORDER BY "Minutes5UTC" ASC`;
}

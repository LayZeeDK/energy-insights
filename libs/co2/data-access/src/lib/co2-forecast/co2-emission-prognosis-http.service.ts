import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { CkanErrorResponse } from './ckan-errors-response';
import { CkanResponse } from './ckan-response';
import { Co2EmissionPrognosisRecord } from './co2-emission-prognosis-record';
import { energiDataServiceEndpoint } from './energi-data-service-endpoint';

// sql
// SELECT "Minutes5UTC", "Minutes5DK", "PriceArea", "CO2Emission" FROM "co2emisprog" ORDER BY "Minutes5UTC" DESC LIMIT 100

@Injectable({
  providedIn: 'root',
})
export class Co2EmissionPrognosisHttp {
  constructor(private http: HttpClient) {}

  get(): Observable<readonly Co2EmissionPrognosisRecord[]> {
    const sql = `SELECT "Minutes5UTC" AS "minutes5Utc"
        ,"CO2Emission" AS "co2Emission"
        ,"PriceArea" AS "priceArea"
      FROM "co2emisprog"
      -- TODO: WHERE clause
      ORDER BY "Minutes5UTC" ASC`;
    return this.http
      .get<CkanResponse<Co2EmissionPrognosisRecord> | CkanErrorResponse>(
        energiDataServiceEndpoint,
        {
          params: {
            sql,
          },
        }
      )
      .pipe(
        mergeMap(response =>
          response.success
            ? of(
                response.result.records.map(record => ({
                  ...record,
                  minutes5Utc: new Date(record.minutes5Utc),
                }))
              )
            : throwError(new Error('CKAN Error'))
        )
      );
  }
}

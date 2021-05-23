import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DateTime, Interval } from 'luxon';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { CkanErrorResponse } from './ckan-errors-response';
import { CkanResponse } from './ckan-response';
import { Co2EmissionPrognosisRecord } from './co2-emission-prognosis-record';
import { Co2EmissionPrognosisResponse } from './co2-emission-prognosis-response-item';
import { createCo2ForecastSqlQuery } from './create-co2-forecast-sql-query';
import { energiDataServiceEndpoint } from './energi-data-service-endpoint';
import { trimSqlParameter } from './trim-sql-parameter';

@Injectable({
  providedIn: 'root',
})
export class Co2EmissionPrognosisHttp {
  constructor(private http: HttpClient) {}

  get(interval: Interval): Observable<Co2EmissionPrognosisResponse> {
    const sql = trimSqlParameter(createCo2ForecastSqlQuery(interval));

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
                  minutes5Utc: DateTime.fromISO(record.minutes5Utc),
                }))
              )
            : throwError(new Error('CKAN Error'))
        )
      );
  }
}

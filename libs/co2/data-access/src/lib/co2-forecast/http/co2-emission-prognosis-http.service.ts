import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { DateQuery } from '../date-query';
import { CkanErrorResponse } from './ckan-errors-response';
import { CkanResponse } from './ckan-response';
import { Co2EmissionPrognosisRecord, Co2EmissionPrognosisRecords } from './co2-emission-prognosis-record';
import { createCo2ForecastSqlQuery } from './create-co2-forecast-sql-query';
import { energiDataServiceEndpoint } from './energi-data-service-endpoint';
import { trimSqlParameter } from './trim-sql-parameter';

@Injectable({
  providedIn: 'root',
})
export class Co2EmissionPrognosisHttp {
  constructor(private http: HttpClient) {}

  get(dateQuery: DateQuery): Observable<Co2EmissionPrognosisRecords> {
    const sql = trimSqlParameter(createCo2ForecastSqlQuery(dateQuery));

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

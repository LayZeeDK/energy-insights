import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Co2EmissionPrognosisRecord } from './co2-emission-prognosis-record';

const url = 'https://www.energidataservice.dk/proxy/api/datastore_search_sql';
// sql
// SELECT "Minutes5UTC", "Minutes5DK", "PriceArea", "CO2Emission" FROM "co2emisprog" ORDER BY "Minutes5UTC" DESC LIMIT 100

@Injectable({
  providedIn: 'root',
})
export class Co2EmissionPrognosisHttp {
  get(): Observable<readonly Co2EmissionPrognosisRecord[]> {
    return of([]);
  }
}

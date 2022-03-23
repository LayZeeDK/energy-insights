import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DateTime, Interval } from 'luxon';
import { first } from 'rxjs/operators';

import { CkanErrorResponse } from './ckan-errors-response';
import { Co2EmissionPrognosisHttp } from './co2-emission-prognosis-http.service';
import {
  Co2EmissionPrognosisRecord,
  Co2EmissionPrognosisRecords,
} from './co2-emission-prognosis-record';
import { Co2EmissionPrognosisResponse } from './co2-emission-prognosis-response-item';
import { energiDataServiceEndpoint } from './energi-data-service-endpoint';

const dummyInterval = Interval.fromDateTimes(DateTime.now(), DateTime.now());

describe(Co2EmissionPrognosisHttp.name, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    http = TestBed.inject(Co2EmissionPrognosisHttp);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  let controller: HttpTestingController;
  let http: Co2EmissionPrognosisHttp;

  it('maps successful responses to response items', () => {
    // Arrange
    const record: Co2EmissionPrognosisRecord = {
      co2Emission: 100,
      minutes5Utc: '2021-05-20T22:20:00+02:00',
      priceArea: 'DK1',
    };
    const records: Co2EmissionPrognosisRecords = [record];
    const ckanResponse = {
      help: 'help-me',
      result: {
        fields: [],
        records,
        sql: 'testing testing SQL',
      },
      success: true,
    };

    // Act
    let actualResponse: Co2EmissionPrognosisResponse = [];
    http
      .get(dummyInterval)
      .pipe(first())
      .subscribe(response => (actualResponse = response));
    const testRequest = controller.expectOne(
      request =>
        request.method === 'GET' &&
        request.url.startsWith(energiDataServiceEndpoint)
    );
    testRequest.flush(ckanResponse);

    // Assert
    expect(actualResponse).toEqual([
      {
        ...record,
        minutes5Utc: DateTime.fromISO(record.minutes5Utc),
      },
    ] as Co2EmissionPrognosisResponse);
  });

  it('emits an array for successful responses', () => {
    // Arrange
    const records: Co2EmissionPrognosisRecords = [
      {
        co2Emission: 110,
        minutes5Utc: '2021-05-20T22:25:00+02:00',
        priceArea: 'DK2',
      },
    ];
    const ckanResponse = {
      help: 'help-me',
      result: {
        fields: [],
        records,
        sql: 'testing testing SQL',
      },
      success: true,
    };

    // Act
    let actualResponse: Co2EmissionPrognosisResponse = [];
    http
      .get(dummyInterval)
      .pipe(first())
      .subscribe(response => (actualResponse = response));
    const testRequest = controller.expectOne(
      request =>
        request.method === 'GET' &&
        request.url.startsWith(energiDataServiceEndpoint)
    );
    testRequest.flush(ckanResponse);

    // Assert
    expect(actualResponse).toEqual(expect.any(Array));
  });

  it('emits an error for error responses', () => {
    // Arrange
    const ckanErrorResponse: CkanErrorResponse = {
      help: 'help-me',
      success: false,
    };

    // Act
    let actualError: Error = new Error();
    http
      .get(dummyInterval)
      .pipe(first())
      .subscribe({ error: error => (actualError = error) });
    const testRequest = controller.expectOne(
      request =>
        request.method === 'GET' &&
        request.url.startsWith(energiDataServiceEndpoint)
    );
    testRequest.flush(ckanErrorResponse);

    // Assert
    expect(actualError.message).toBe('CKAN Error');
  });
});

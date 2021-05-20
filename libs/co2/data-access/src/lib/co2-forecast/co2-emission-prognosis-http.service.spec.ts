import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CkanErrorResponse } from './ckan-errors-response';
import { Co2EmissionPrognosisHttp } from './co2-emission-prognosis-http.service';
import { Co2EmissionPrognosisRecord } from './co2-emission-prognosis-record';
import { energiDataServiceEndpoint } from './energi-data-service-endpoint';

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

  it('maps successful responses to records', () => {
    // Arrange
    const records = [
      {
        co2Emission: 100,
        minutes5Utc: '2021-05-20T22:20:00+02:00',
        priceArea: 'DK1',
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
    const whenResponse = http.get().toPromise();
    const testRequest = controller.expectOne(
      request =>
        request.method === 'GET' &&
        request.url.startsWith(energiDataServiceEndpoint)
    );
    testRequest.flush(ckanResponse);

    // Assert
    expect(whenResponse).resolves.toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          co2Emission: expect.any(Number),
          minutes5Utc: expect.any(Date),
          priceArea: expect.any(String),
        } as Co2EmissionPrognosisRecord),
      ])
    );
  });

  it('emits an array for successful responses', () => {
    // Arrange
    const records = [
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
    const whenResponse = http.get().toPromise();
    const testRequest = controller.expectOne(
      request =>
        request.method === 'GET' &&
        request.url.startsWith(energiDataServiceEndpoint)
    );
    testRequest.flush(ckanResponse);

    // Assert
    expect(whenResponse).resolves.toEqual(expect.any(Array));
  });

  it('emits an error for error responses', () => {
    // Arrange
    const ckanErrorResponse: CkanErrorResponse = {
      help: 'help-me',
      success: false,
    };

    // Act
    const whenErrorResponse = http.get().toPromise();
    const testRequest = controller.expectOne(
      request =>
        request.method === 'GET' &&
        request.url.startsWith(energiDataServiceEndpoint)
    );
    testRequest.flush(ckanErrorResponse);

    // Assert
    expect(whenErrorResponse).rejects.toEqual(expect.any(Error));
  });
});

import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  discardPeriodicTasks,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { DateTime, Interval } from 'luxon';
import { Observable, of, range, throwError } from 'rxjs';
import { first, skip, take } from 'rxjs/operators';

import { Co2EmissionPrognosisHttp } from '../http/co2-emission-prognosis-http.service';
import { Co2EmissionPrognosisResponse } from './../http/co2-emission-prognosis-response-item';
import { Co2ForecastStore } from './co2-forecast.store';

describe(Co2ForecastStore.name, () => {
  function setup({
    httpGetSpy = jest.fn().mockReturnValue(of([])),
  }: {
    readonly httpGetSpy?: jest.Mock<
      Observable<Co2EmissionPrognosisResponse>,
      [Interval]
    >;
  } = {}) {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Co2ForecastStore],
    });

    const http = TestBed.inject(Co2EmissionPrognosisHttp);
    http.get = httpGetSpy;
    const store = TestBed.inject(Co2ForecastStore);

    return {
      httpGetSpy,
      store,
    };
  }

  it('is provided externally', () => {
    const { store } = setup();

    expect(store).not.toBeNull();
  });

  describe('forecast$', () => {
    it('initially emits an empty forecast', async () => {
      const { store } = setup();

      const forecast = await store.forecast$.pipe(first()).toPromise();

      expect(forecast).toEqual([]);
    });

    it('it immediately emits a forecast on success response from the CO2 Emission Prognosis API', async () => {
      // Arrange
      const response: Co2EmissionPrognosisResponse = [
        {
          co2Emission: 80,
          minutes5Utc: DateTime.fromISO('2021-05-20T22:45:00+02:00'),
          priceArea: 'DK1',
        },
      ];
      const expectedForecast = response;
      const httpGetSpy = jest.fn().mockReturnValue(of(response));
      const { store } = setup({
        httpGetSpy,
      });

      // Act
      const actualForecast = await store.forecast$
        .pipe(skip(1), take(1))
        .toPromise();

      // Assert
      expect(httpGetSpy).toHaveBeenCalledTimes(1);
      expect(actualForecast).toEqual(expectedForecast);
    });

    it('it clears the forecast on error response from the CO2 Emission Prognosis API', async () => {
      // Arrange
      const httpGetSpy = jest
        .fn()
        .mockReturnValue(throwError(new Error('CKAN Error')));
      const { store } = setup({
        httpGetSpy,
      });

      // Act
      const actualForecast = await store.forecast$
        .pipe(skip(1), take(1))
        .toPromise();

      // Assert
      expect(httpGetSpy).toHaveBeenCalledTimes(1);
      expect(actualForecast).toEqual([]);
    });
  });

  it('it queries the CO2 Emission Prognosis API every minute', fakeAsync(() => {
    // Arrange
    const oneMinuteMs = 60 * 1000;
    const oneHourMinutes = 60;
    const initialRequestCount = 1;

    // Act
    const { httpGetSpy } = setup();
    // Initial effect
    tick(0);

    range(1, oneHourMinutes).forEach(() => tick(oneMinuteMs));

    // Assert
    expect(httpGetSpy).toHaveBeenCalledTimes(
      initialRequestCount + oneHourMinutes
    );

    // Teardown
    discardPeriodicTasks();
  }));
});

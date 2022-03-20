import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Co2ForecastStore } from '@energy-insights/co2/data-access-state';
import { Co2Forecast } from '@energy-insights/co2/domain';
import { DateTime } from 'luxon';
import { Subscription } from 'rxjs';

import { Co2ForecastContainerComponent } from './co2-forecast-container.component';

describe(Co2ForecastContainerComponent.name, () => {
  beforeEach(() => {
    subscription = new Subscription();

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Co2ForecastContainerComponent, Co2ForecastStore],
    });

    container = TestBed.inject(Co2ForecastContainerComponent);
    co2ForecastStore = TestBed.inject(Co2ForecastStore);
  });

  afterEach(() => {
    subscription.unsubscribe();
  });

  let container: Co2ForecastContainerComponent;
  let co2ForecastStore: Co2ForecastStore;
  let subscription: Subscription;

  describe('forecast$', () => {
    beforeEach(() => {
      forecastObserver = jest.fn();
      subscription.add(container.forecast$.subscribe(forecastObserver));
    });

    let forecastObserver: jest.Mock<void, [Co2Forecast]>;

    it('emits the value emitted by the CO2 forecast store', fakeAsync(() => {
      const expectedForecast: Co2Forecast = [
        {
          co2Emission: 80,
          minutes5Utc: DateTime.fromISO('2021-05-24T23:30:00+02:00'),
          priceArea: 'DK1',
        },
        {
          co2Emission: 82,
          minutes5Utc: DateTime.fromISO('2021-05-24T23:35:00+02:00'),
          priceArea: 'DK1',
        },
      ];

      co2ForecastStore.setState({
        forecast: expectedForecast,
      });
      tick(0);

      expect(forecastObserver).toHaveBeenLastCalledWith(expectedForecast);
    }));
  });
});

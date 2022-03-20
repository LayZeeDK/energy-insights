import { FactoryProvider, ValueProvider } from '@angular/core';
import { Co2EmissionPrognosisHttp } from '@energy-insights/co2/data-access-api';
import { createMock, Mock } from '@testing-library/angular/jest-utils';
import { asapScheduler, of, scheduled } from 'rxjs';

import { createCo2EmissionPrognosisResponse } from './create-co2-emission-prognosis-response';

export function createCo2EmissionPrognosisMock(): Mock<Co2EmissionPrognosisHttp> {
  const mock = createMock(Co2EmissionPrognosisHttp);
  mock.get.mockImplementation(forecastInterval =>
    scheduled(
      of(createCo2EmissionPrognosisResponse(forecastInterval)),
      asapScheduler
    )
  );

  return mock;
}

export function provideCo2EmissionPrognosisMock(
  mock?: Mock<Co2EmissionPrognosisHttp>
): FactoryProvider | ValueProvider {
  return mock
    ? { provide: Co2EmissionPrognosisHttp, useValue: mock }
    : {
        provide: Co2EmissionPrognosisHttp,
        useFactory: createCo2EmissionPrognosisMock,
      };
}

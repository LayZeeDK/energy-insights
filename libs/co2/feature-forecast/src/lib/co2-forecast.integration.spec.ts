import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  SpectacularAppComponent,
  SpectacularFeatureTestingModule,
} from '@ngworker/spectacular';
import { render, RenderResult, screen } from '@testing-library/angular';

import { Co2FeatureForecastModule } from './co2-feature-forecast.module';
import { co2RoutePath } from './co2-route-path';

describe('CO2 forecast integration test', () => {
  beforeEach(async () => {
    result = await render(SpectacularAppComponent, {
      excludeComponentDeclaration: true,
      imports: [
        HttpClientTestingModule,
        SpectacularFeatureTestingModule.withFeature({
          featureModule: Co2FeatureForecastModule,
          featurePath: co2RoutePath,
        }),
      ],
    });
    result.fixture.autoDetectChanges(true);
    await result.navigate(co2RoutePath);
  });

  let result: RenderResult<SpectacularAppComponent>;

  it('displays a heading', () => {
    screen.getByRole('heading', {
      name: 'CO2 forecast',
    });
  });
});

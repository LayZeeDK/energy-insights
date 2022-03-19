import { HttpClientModule } from '@angular/common/http';
import {
  SpectacularAppComponent,
  SpectacularFeatureTestingModule,
} from '@ngworker/spectacular';
import { render, RenderResult, screen } from '@testing-library/angular';

import { Co2FeatureForecastModule } from './co2-feature-forecast.module';
import { co2RoutePath } from './co2-route-path';

describe('CO2 forecast integration test', () => {
  beforeEach(async () => {
    // Arrange
    result = await render(SpectacularAppComponent, {
      excludeComponentDeclaration: true,
      imports: [
        HttpClientModule,
        SpectacularFeatureTestingModule.withFeature({
          featureModule: Co2FeatureForecastModule,
          featurePath: co2RoutePath,
        }),
      ],
    });

    // Act
    await result.navigate(co2RoutePath);
  });

  let result: RenderResult<SpectacularAppComponent>;

  it('displays a heading', async () => {
    // Assert
    expect(
      await screen.findByRole('heading', {
        name: 'CO2 forecast',
      })
    ).toBeInTheDocument();
  });

  it('displays the first 5 minute interval of the current Danish day', async () => {
    // Arrange
    const expectedTimeAndOffset = '12:00:00 AM GMT+2';

    // Act

    // Assert
    expect((await screen.findByTestId('date-time-cell')).textContent).toContain(
      expectedTimeAndOffset
    );
  });
});

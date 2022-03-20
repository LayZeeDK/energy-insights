import { HttpClientModule } from '@angular/common/http';
import { co2DomainRoutePath } from '@energy-insights/co2/routing';
import {
  SpectacularAppComponent,
  SpectacularFeatureTestingModule,
} from '@ngworker/spectacular';
import { render, screen } from '@testing-library/angular';

import { Co2FeatureForecastModule } from './co2-feature-forecast.module';

describe('CO2 forecast integration test', () => {
  beforeEach(async () => {
    // Arrange
    const { navigate } = await render(SpectacularAppComponent, {
      excludeComponentDeclaration: true,
      imports: [
        HttpClientModule,
        SpectacularFeatureTestingModule.withFeature({
          featureModule: Co2FeatureForecastModule,
          featurePath: co2DomainRoutePath,
        }),
      ],
    });

    // Act
    await navigate(co2DomainRoutePath);
  });

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
    // Support local and GitHub runner time zones
    const expectedTimeAndOffset =
      /(11:00:00 PM GMT\+[01]$)|(12:00:00 AM GMT\+[12]$)/;

    // Act

    // Assert
    expect(
      await screen.findByTestId('first-date-time-cell', undefined, {
        timeout: 10_000,
      })
    ).toHaveTextContent(expectedTimeAndOffset);
  }, 10_000);
});

import { co2DomainRoutePath } from '@energy-insights/co2/routing';
import { provideCo2EmissionPrognosisMock } from '@energy-insights/co2/test-util';
import {
  SpectacularAppComponent,
  SpectacularFeatureTestingModule,
} from '@ngworker/spectacular';
import { render, screen, within } from '@testing-library/angular';

import { Co2FeatureForecastModule } from './co2-feature-forecast.module';

describe('CO2 forecast integration test', () => {
  async function setup() {
    // Arrange
    const { navigate } = await render(SpectacularAppComponent, {
      excludeComponentDeclaration: true,
      imports: [
        SpectacularFeatureTestingModule.withFeature({
          featureModule: Co2FeatureForecastModule,
          featurePath: co2DomainRoutePath,
        }),
      ],
      providers: [provideCo2EmissionPrognosisMock()],
    });

    await navigate(co2DomainRoutePath);
  }

  const getFirstDataRow = () =>
    screen.findByText('', {
      selector: 'tbody tr:first-of-type',
    });

  it('displays a title', async () => {
    // Arrange
    await setup();

    // Act

    // Assert
    expect(
      await screen.findByRole('heading', {
        name: /CO2 forecast/i,
      })
    ).toBeInTheDocument();
  });

  it('displays the first 5 minute interval of the current Danish day', async () => {
    // Arrange
    await setup();
    const mockedRelativeCo2Emission = /^132$/;

    // Act

    // Assert
    expect(
      await within(await getFirstDataRow()).findByRole('cell', {
        name: mockedRelativeCo2Emission,
      })
    ).toBeInTheDocument();
  });
});

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Co2FeatureForecastModule } from './co2-feature-forecast.module';
import { Co2ForecastContainerComponent } from './co2-forecast-container.sfc';

@Component({
  selector: 'nrg-test-host',
  template: `<nrg-co2-forecast></nrg-co2-forecast>`,
})
export class TestHostComponent {}

describe(Co2FeatureForecastModule.name, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent],
      imports: [Co2FeatureForecastModule, HttpClientTestingModule],
    });

    hostFixture = TestBed.createComponent(TestHostComponent);
  });

  let hostFixture: ComponentFixture<TestHostComponent>;

  it(`exports the ${Co2ForecastContainerComponent.name}`, () => {
    const co2ForecastContainer = hostFixture.debugElement.query(
      By.directive(Co2ForecastContainerComponent)
    );

    expect(co2ForecastContainer.componentInstance).toBeInstanceOf(
      Co2ForecastContainerComponent
    );
  });
});

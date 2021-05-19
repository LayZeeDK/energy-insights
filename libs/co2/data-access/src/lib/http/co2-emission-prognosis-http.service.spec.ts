import { TestBed } from '@angular/core/testing';

import { Co2EmissionPrognosisHttp } from './co2-emission-prognosis-http.service';

describe(Co2EmissionPrognosisHttp.name, () => {
  beforeEach(() => {
    http = TestBed.inject(Co2EmissionPrognosisHttp);
  });

  let http: Co2EmissionPrognosisHttp;

  it('resolves an array', async () => {
    const result = await http.get().toPromise();

    expect(result).toEqual([]);
  });
});

import { TestBed } from '@angular/core/testing';
import { danishZone } from '@energy-insights/co2/util-date-times';
import { DateTime, Settings } from 'luxon';
import { first } from 'rxjs/operators';

import { DanishDateStore } from './danish-date.store';

describe(DanishDateStore.name, () => {
  describe('today$', () => {
    it('emits the start of the current Danish date', async () => {
      // Arrange
      const _now = Settings.now;
      const fakeNow = DateTime.fromISO('2021-05-23T02:07:00', {
        zone: danishZone,
      });
      const expectedToday = DateTime.fromISO('2021-05-23T00:00:00', {
        zone: danishZone,
      });
      Settings.now = () => fakeNow.toMillis();
      const store = TestBed.inject(DanishDateStore);

      // Act
      const actualToday = await store.today$.pipe(first()).toPromise();

      // Assert
      expect(actualToday).toEqual(expectedToday);

      // Teardown
      Settings.now = _now;
    });
  });
});

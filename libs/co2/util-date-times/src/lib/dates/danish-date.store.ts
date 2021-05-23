import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { DateTime } from 'luxon';
import { Observable } from 'rxjs';

import { danishZone } from '../zones/danish-zone';

interface DanishDateState {
  readonly today: DateTime;
}

@Injectable({
  providedIn: 'root',
})
export class DanishDateStore extends ComponentStore<DanishDateState> {
  today$: Observable<DateTime> = this.select(state => state.today);

  constructor() {
    super();

    this.setState(createInitialState(this.today()));
  }

  private updateToday = this.updater<DateTime>(
    (state, today): DanishDateState => ({
      ...state,
      today,
    })
  );

  private now(): DateTime {
    return DateTime.now().setZone(danishZone);
  }

  private today(): DateTime {
    return this.now().startOf('day');
  }
}

function createInitialState(danishToday: DateTime): DanishDateState {
  return {
    today: danishToday,
  };
}

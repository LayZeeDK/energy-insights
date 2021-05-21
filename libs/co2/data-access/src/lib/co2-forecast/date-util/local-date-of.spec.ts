import { localDateOf } from './local-date-of';

describe(localDateOf.name, () => {
  it('clears the hours', () => {
    const fakeNow = new Date('2021-05-22T01:00:00+02:00');

    const localDate = localDateOf(fakeNow);

    expect(localDate.getHours()).toBe(0);
  });

  it('clears the minutes', () => {
    const fakeNow = new Date('2021-05-22T01:38:00+02:00');

    const localDate = localDateOf(fakeNow);

    expect(localDate.getMinutes()).toBe(0);
  });

  it('clears the seconds', () => {
    const fakeNow = new Date('2021-05-22T01:40:15+02:00');

    const localDate = localDateOf(fakeNow);

    expect(localDate.getSeconds()).toBe(0);
  });

  it('clears the milliseconds', () => {
    const fakeNow = new Date('2021-05-22T01:00:00.123+02:00');

    const localDate = localDateOf(fakeNow);

    expect(localDate.getMilliseconds()).toBe(0);
  });

  it('does not mutate the passed Date instance', () => {
    const fakeNow = new Date('2021-05-22T01:42:00+02:00');
    const fakeNowTicks = fakeNow.valueOf();

    localDateOf(fakeNow);

    expect(fakeNow.valueOf()).toBe(fakeNowTicks);
  });
});

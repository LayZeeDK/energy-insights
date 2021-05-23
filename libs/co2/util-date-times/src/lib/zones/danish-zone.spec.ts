import { danishZone } from './danish-zone';

describe('danishZone', () => {
  it('is the Danish time zone', () => {
    expect(danishZone.name).toBe('Europe/Copenhagen');
  });

  it('is a valid zone', () => {
    expect(danishZone.isValid).toBe(true);
  });
});

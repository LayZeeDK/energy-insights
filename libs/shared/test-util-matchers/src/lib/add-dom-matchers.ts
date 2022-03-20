export function addDomMatchers(): void {
  beforeAll(() => import('@testing-library/jest-dom'));
}

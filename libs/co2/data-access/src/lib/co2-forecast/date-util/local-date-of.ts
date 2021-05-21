export function localDateOf(dateTime: Date): Date {
  const copy = new Date(dateTime);
  copy.setHours(0);
  copy.setMinutes(0);
  copy.setSeconds(0);
  copy.setMilliseconds(0);

  return copy;
}

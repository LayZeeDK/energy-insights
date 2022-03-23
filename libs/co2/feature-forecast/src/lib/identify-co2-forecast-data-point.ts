import { Co2ForecastDataPoint } from '@energy-insights/co2/domain';

export function identifyCo2ForecastDataPoint({
  minutes5Utc,
  priceArea,
}: Co2ForecastDataPoint): string {
  return `${priceArea}-${minutes5Utc.toMillis()}`;
}

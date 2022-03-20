export interface Co2EmissionPrognosisRecord {
  readonly co2Emission: number;
  readonly minutes5Utc: string;
  readonly priceArea: 'DK1' | 'DK2';
}

export type Co2EmissionPrognosisRecords = readonly Co2EmissionPrognosisRecord[];

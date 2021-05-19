export interface Co2EmissionPrognosisRecord {
  readonly co2Emission: number;
  readonly minutes5UTC: Date;
  readonly priceArea: 'DK1' | 'DK2';
}

export type Co2EmissionPrognosisRecords = readonly Co2EmissionPrognosisRecord[];

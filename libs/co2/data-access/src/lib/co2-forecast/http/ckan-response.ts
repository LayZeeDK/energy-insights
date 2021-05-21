export interface CkanResponse<TRecord> {
  readonly help: string;
  readonly result: {
    readonly fields: [];
    readonly records: readonly TRecord[];
    readonly sql: string;
  };
  readonly success: true;
}

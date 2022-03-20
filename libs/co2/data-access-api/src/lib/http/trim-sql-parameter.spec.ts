import { trimSqlParameter } from './trim-sql-parameter';

describe(trimSqlParameter.name, () => {
  it('replaces newline followed by whitespace with a space character', () => {
    const rawSql = `SELECT "Minutes5UTC"
      ,"CO2Emission"
      ,"PriceArea"
    FROM "co2emisprog"
    ORDER BY "Minutes5UTC" ASC`;

    const trimmedSql = trimSqlParameter(rawSql);

    expect(trimmedSql).toBe(
      `SELECT "Minutes5UTC" ,"CO2Emission" ,"PriceArea" FROM "co2emisprog" ORDER BY "Minutes5UTC" ASC`
    );
  });

  it('replaces newline with a space character', () => {
    const text = 'Hello\nWorld';

    const trimmedText = trimSqlParameter(text);

    expect(trimmedText).toBe('Hello World');
  });
});

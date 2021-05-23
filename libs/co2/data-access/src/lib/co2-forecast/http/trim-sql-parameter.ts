export function trimSqlParameter(sql: string): string {
  return sql.replace(/\s*\n\s*/g, ' ');
}

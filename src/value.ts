export function isNonEmpty(value: unknown): boolean {
  if (typeof value === 'string') return value.length > 0;
  if (Array.isArray(value)) return value.length > 0;
  return false;
}

export function isPositive(value: unknown): value is number {
  return typeof value === 'number' && value > 0;
}

export function isNegative(value: unknown): value is number {
  return typeof value === 'number' && value < 0;
}

export function isInteger(value: unknown): value is number {
  return typeof value === 'number' && Number.isInteger(value);
}

export function isFiniteNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

export function isNonNullish<T>(value: T): value is NonNullable<T> {
  return value !== null && value !== undefined;
}

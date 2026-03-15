import type { Guard } from './types';

export function assert<T>(
  value: unknown,
  guard: Guard<T>,
  message?: string,
): asserts value is T {
  if (!guard(value)) {
    throw new Error(message ?? 'Assertion failed: value did not match expected type');
  }
}

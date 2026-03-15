import type { Guard } from './types';

export function isOneOf<T extends unknown[]>(
  ...guards: { [K in keyof T]: Guard<T[K]> }
): Guard<T[number]> {
  return ((value: unknown): boolean => {
    return guards.some((guard) => guard(value));
  }) as Guard<T[number]>;
}

export function isArrayOf<T>(guard: Guard<T>): Guard<T[]> {
  return ((value: unknown): boolean => {
    return Array.isArray(value) && value.every((item) => guard(item));
  }) as Guard<T[]>;
}

export function isObjectWith<T extends Record<string, unknown>>(
  shape: { [K in keyof T]: Guard<T[K]> },
): Guard<T> {
  return ((value: unknown): boolean => {
    if (typeof value !== 'object' || value === null) return false;
    const obj = value as Record<string, unknown>;
    for (const key of Object.keys(shape)) {
      if (!shape[key](obj[key])) return false;
    }
    return true;
  }) as Guard<T>;
}

export function isTupleOf<T extends unknown[]>(
  ...guards: { [K in keyof T]: Guard<T[K]> }
): Guard<T> {
  return ((value: unknown): boolean => {
    if (!Array.isArray(value) || value.length !== guards.length) return false;
    return guards.every((guard, i) => guard(value[i]));
  }) as Guard<T>;
}

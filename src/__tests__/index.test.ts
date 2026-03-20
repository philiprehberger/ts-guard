import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

const mod = await import('../../dist/index.js');

describe('ts-guard', () => {
  it('should export isString', () => {
    assert.ok(mod.isString);
  });

  it('should export isNumber', () => {
    assert.ok(mod.isNumber);
  });

  it('should export isBoolean', () => {
    assert.ok(mod.isBoolean);
  });

  it('should export isNull', () => {
    assert.ok(mod.isNull);
  });

  it('should export isUndefined', () => {
    assert.ok(mod.isUndefined);
  });

  it('should export isNil', () => {
    assert.ok(mod.isNil);
  });

  it('should export isBigInt', () => {
    assert.ok(mod.isBigInt);
  });

  it('should export isSymbol', () => {
    assert.ok(mod.isSymbol);
  });

  it('should export isArray', () => {
    assert.ok(mod.isArray);
  });

  it('should export isObject', () => {
    assert.ok(mod.isObject);
  });

  it('should export isPlainObject', () => {
    assert.ok(mod.isPlainObject);
  });

  it('should export isMap', () => {
    assert.ok(mod.isMap);
  });

  it('should export isSet', () => {
    assert.ok(mod.isSet);
  });

  it('should export isDate', () => {
    assert.ok(mod.isDate);
  });

  it('should export isRegExp', () => {
    assert.ok(mod.isRegExp);
  });

  it('should export isError', () => {
    assert.ok(mod.isError);
  });

  it('should export isPromise', () => {
    assert.ok(mod.isPromise);
  });

  it('should export isFunction', () => {
    assert.ok(mod.isFunction);
  });

  it('should export isNonEmpty', () => {
    assert.ok(mod.isNonEmpty);
  });

  it('should export isPositive', () => {
    assert.ok(mod.isPositive);
  });

  it('should export isNegative', () => {
    assert.ok(mod.isNegative);
  });

  it('should export isInteger', () => {
    assert.ok(mod.isInteger);
  });

  it('should export isFiniteNumber', () => {
    assert.ok(mod.isFiniteNumber);
  });

  it('should export isNonNullish', () => {
    assert.ok(mod.isNonNullish);
  });

  it('should export isOneOf', () => {
    assert.ok(mod.isOneOf);
  });

  it('should export isArrayOf', () => {
    assert.ok(mod.isArrayOf);
  });

  it('should export isObjectWith', () => {
    assert.ok(mod.isObjectWith);
  });

  it('should export isTupleOf', () => {
    assert.ok(mod.isTupleOf);
  });

  it('should export assert', () => {
    assert.ok(mod.assert);
  });
});

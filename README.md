# @philiprehberger/guard

[![CI](https://github.com/philiprehberger/ts-guard/actions/workflows/ci.yml/badge.svg)](https://github.com/philiprehberger/ts-guard/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@philiprehberger/guard.svg)](https://www.npmjs.com/package/@philiprehberger/guard)
[![Last updated](https://img.shields.io/github/last-commit/philiprehberger/ts-guard)](https://github.com/philiprehberger/ts-guard/commits/main)

Runtime type guard utilities with TypeScript narrowing

## Installation

```bash
npm install @philiprehberger/guard
```

## Usage

```ts
import { isString, isNumber, isArrayOf, isObjectWith, assert } from '@philiprehberger/guard';

if (isString(val)) {
  val.toUpperCase(); // narrowed to string
}

const isUser = isObjectWith({
  name: isString,
  age: isNumber,
});

if (isUser(data)) {
  data.name; // typed as string
  data.age;  // typed as number
}

assert(input, isArrayOf(isString)); // throws or narrows to string[]
```

### Composing Guards

```ts
import { isOneOf, isString, isNumber, isTupleOf } from '@philiprehberger/guard';

const isStringOrNumber = isOneOf(isString, isNumber);
const isPair = isTupleOf(isString, isNumber);

isStringOrNumber('hello'); // true
isPair(['hello', 42]);     // true
```

## API

| Function | Description |
|----------|-------------|
| `isString`, `isNumber`, `isBoolean`, `isNull`, `isUndefined`, `isNil`, `isBigInt`, `isSymbol` | Primitive guards |
| `isArray`, `isObject`, `isPlainObject`, `isMap`, `isSet`, `isDate`, `isRegExp`, `isError`, `isPromise`, `isFunction` | Structural guards |
| `isNonEmpty`, `isPositive`, `isNegative`, `isInteger`, `isFiniteNumber`, `isNonNullish` | Value guards |
| `isOneOf(...guards)` | Union of guards |
| `isArrayOf(guard)` | Array where all items match guard |
| `isObjectWith(shape)` | Object matching shape of guards |
| `isTupleOf(...guards)` | Tuple matching guards positionally |
| `assert(value, guard, message?)` | Throw if guard fails, narrow otherwise |

## Development

```bash
npm install
npm run build
npm test
```

## Support

If you find this project useful:

⭐ [Star the repo](https://github.com/philiprehberger/ts-guard)

🐛 [Report issues](https://github.com/philiprehberger/ts-guard/issues?q=is%3Aissue+is%3Aopen+label%3Abug)

💡 [Suggest features](https://github.com/philiprehberger/ts-guard/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement)

❤️ [Sponsor development](https://github.com/sponsors/philiprehberger)

🌐 [All Open Source Projects](https://philiprehberger.com/open-source-packages)

💻 [GitHub Profile](https://github.com/philiprehberger)

🔗 [LinkedIn Profile](https://www.linkedin.com/in/philiprehberger)

## License

[MIT](LICENSE)

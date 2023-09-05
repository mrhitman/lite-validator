## Tiny wrapper around superstruct for using in decorator way
###

```js
import "reflect-metadata";
import { bind, validate, string, number, size } from '@mrhitman/validator';

class Test {
  @bind(size(string(), 4, 20)) // should be only one decorator that combine 
  foo: string;

  @bind(number()) // should be only one decorator that combine 
  foo: number;
}

const test = new Test();
test.bar = 3;
console.log(validate(test));
[
  StructError: At path: foo -- Expected a string, but received: undefined
      at Module._compile (node:internal/modules/cjs/loader:1101:14)
      at Function.Module._load (node:internal/modules/cjs/loader:822:12)
      at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:79:12) {
    value: undefined,
    key: 'foo',
    type: 'string',
    refinement: undefined,
    path: [ 'foo' ],
    branch: [ Test {}, undefined ],
    failures: [Function (anonymous)]
  },
  undefined
]
```

[github](https://github.com/mrhitman/lite-validator)
[example](https://github.com/mrhitman/lite-validator/blob/main/src/example.ts)

import "reflect-metadata";
import { bind, validate, string, size } from './common';

class Test {
  @bind(size(string(), 4, 20))
  foo: string;
}

const test = new Test();
console.log(validate(test));

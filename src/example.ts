import "reflect-metadata";
import { bind, validate, string, number, size } from "./common";
import { ValidationPipe } from './validation.pipe';

class Test {
  @bind(size(string(), 4, 20))
  foo: string;

  @bind(number())
  bar: number;
}

const test = new Test();
console.log(validate(test));
const pipe = new ValidationPipe();
pipe.transform(test, {
  type: 'body',
  metatype: Test
}).then(console.log).catch(console.error);
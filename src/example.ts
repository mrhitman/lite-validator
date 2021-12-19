import "reflect-metadata";
import { bind, validate, string, number, size } from "./common";

class Test {
  @bind(size(string(), 4, 20))
  foo: string;

  @bind(number())
  bar: number;
}

const test = new Test();
console.log(validate(test));

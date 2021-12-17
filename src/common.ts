import "reflect-metadata";
import { object, Struct, validate as _validate } from "superstruct";

export * from "superstruct";
export const validationMeta = Symbol("validation:schema");

export const bindMeta = <T>(
  meta: Symbol,
  target: Object,
  value: T,
  key: string
) => {
  const data = Reflect.getMetadata(meta, target) || {};
  Reflect.defineMetadata(meta, {...data, [key]: value}, target);
};

export const bind =
  (checker: Struct<any, any>) => (target: Object, key: string) =>
    bindMeta(validationMeta, target, checker, key);

export const validate = (target: Object) => {
  const meta = Reflect.getMetadata(validationMeta, target);
  const schema = object(meta);
  return _validate(target, schema);
};

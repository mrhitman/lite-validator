import "reflect-metadata";
import { object, Struct, validate as _validate } from "superstruct";

export * from "superstruct";
export const validationMeta = Symbol("validation:schema");

export const bindMeta = <T>(
  meta: Symbol,
  target: any,
  value: T,
  key: string
): void => {
  const data = Reflect.getMetadata(meta, target) || {};
  Reflect.defineMetadata(meta, {...data, [key]: value}, target);
};

export const bind =
  <T>(checker: Struct<T, unknown>) => (target: any, key: any) =>
    bindMeta(validationMeta, target, checker, key);

export const validate = (target: Object) => {
  const meta = Reflect.getMetadata(validationMeta, target);
  const schema = object(meta);
  return _validate(target, schema);
};

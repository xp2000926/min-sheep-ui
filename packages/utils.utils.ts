import { PropType } from 'vue';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const definePropType = <T>(val: any): PropType<T> => val;
/**
 * @description 提取Props
 * @param {Source} Source
 * @param {Props} Props
 * @example
 */
export type ExtractProps<Source, Props extends keyof Source> = {
  [K in Props]: Source[K];
};

/**
 * @description: 深度只读
 * @param {*} T
 * @example
 * interface Immutable {
 *  a: number;
 *  b: string;
 *  c: {
 *    d: boolean;
 *  };
 * }
 * const im: DeepReadonly<Immutable> = {
 *  a: 1,
 *  b: '2',
 *  c: {
 *    d: true
 *  }
 * };
 * im.c.d = false; // Error
 */
export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};
export const mutable = <T extends readonly any[] | Record<string, unknown>>(
  val: T
) => val as Mutable<typeof val>;
export type Mutable<T> = { -readonly [P in keyof T]: T[P] };

import { RouterOutput } from "@/trpc/router";

/**
 * A utility type that recursively traverses a nested object type `U` based on a dot-separated string `T`,
 * and returns the type at the specified path.
 *
 * This type is useful for extracting nested types from a complex object structure, such as a TRPC router output.
 *
 * @template T - A dot-separated string representing the path to traverse in the object `U`.
 * @template U - The object type to traverse. Defaults to `RouterOutput`.
 *
 * @example
 * type RouterOutput = {
 *   user: {
 *     profile: {
 *       name: string;
 *       age: number;
 *     };
 *     settings: {
 *       theme: string;
 *     };
 *   };
 *   posts: {
 *     title: string;
 *     content: string;
 *   };
 * };
 *
 * // Extracts the type of `name` in `user.profile`
 * type UserProfileName = TRPCResponse<'user.profile.name', RouterOutput>;
 * // string
 *
 * // Extracts the type of `theme` in `user.settings`
 * type UserSettingsTheme = TRPCResponse<'user.settings.theme', RouterOutput>;
 * // string
 *
 * // Extracts the type of `title` in `posts`
 * type PostsTitle = TRPCResponse<'posts.title', RouterOutput>;
 * // string
 */

export type TRPCResponse<
  T extends string,
  U = RouterOutput,
> = T extends `${infer Left}.${infer Right}`
  ? Left extends keyof U
    ? TRPCResponse<Right, U[Left]>
    : never
  : T extends keyof U
    ? U[T]
    : never;

/**
 * A utility type that generates a union of all possible paths in an object up to a depth of one level.
 *
 * For a given object type `T`, it creates a union of string paths that represent the keys and
 * nested keys (only up to one level deep) in the object.
 *
 * @template T - The object type to generate paths for.
 *
 * @example
 * type Example = {
 *   a: {
 *     b: {
 *       c: string;
 *     };
 *     d: number;
 *   };
 *   e: boolean;
 * };
 *
 * type PathsExample = Paths<Example>;
 * // "a" | "a.b" | "a.d" | "e"
 */
export type ObjectPathsDepthOne<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? `${K}` | `${K}.${keyof T[K] & string}`
          : `${K}`
        : never;
    }[keyof T]
  : never;

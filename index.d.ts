/**
 * Reads `content` from file using utf-8 encoding.
 *
 * @example
 * ```js
 * import read from "read-file-utf8";
 * const filePath = "/tmp/foo/bar.txt";
 * const content = await read(filePath);
 * ```
 *
 * To import JSON: just pass a filePath with .json extension.
 * @example
 * ```js
 * const { version } = await read("./package.json");
 * ```
 */
export default function readFileUtf8<T = string>(filePath: string): Promise<T>

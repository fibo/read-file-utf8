import {readFile} from "fs/promises";
import { extname } from "path";

/**
 * Read content from file using utf8 encoding
 *
 * @param {string} filePath
 * @returns {Promise<string>} content
 */

export default async function readFileUtf8(filePath) {
  const ext = extname(filePath)
  if (ext === ".json") {
    return readFile(filePath, "utf8").then(JSON.parse);
  }
  return readFile(filePath, "utf8")
}

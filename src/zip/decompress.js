import { createUnzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const decompress = async () => {
  const dirPath = fileURLToPath(new URL(".", import.meta.url));
  const fileRead = join(dirPath, "files", "archive.gz");
  const fileWright = join(dirPath, "files", "fileToCompress.txt");
  const unzip = createUnzip();
  const source = createReadStream(fileRead);
  const destination = createWriteStream(fileWright);
  pipeline(source, unzip, destination, (err) => {
    if (err) {
      console.error("FS operation failed:", err);
      process.exitCode = 1;
    }
  });
};

await decompress();

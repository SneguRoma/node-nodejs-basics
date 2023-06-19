import { createGzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from 'node:stream';
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const compress = async () => {
  const dirPath = fileURLToPath(new URL(".", import.meta.url));
  const fileWright = join(dirPath, "files", "archive.gz");
  const fileRead = join(dirPath, "files", "fileToCompress.txt");
  const gzip = createGzip();
  const source = createReadStream(fileRead);
  const destination = createWriteStream(fileWright);

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error("FS operation failed:", err);
      process.exitCode = 1;
    }
  });
};

await compress();

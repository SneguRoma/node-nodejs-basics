import { createReadStream } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { stdout } from "node:process";

const read = async () => {
  const dirPath = fileURLToPath(new URL(".", import.meta.url));
  const fileRead = join(dirPath, "files", "fileToRead.txt");
  const stream = createReadStream(fileRead, "utf-8");

  stream.pipe(stdout);
};

await read();

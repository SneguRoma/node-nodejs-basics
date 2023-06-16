import { readFile } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const read = async () => {
  const dirPath = fileURLToPath(new URL(".", import.meta.url));
  const file = join(dirPath, "files", "fileToRead.txt");

  readFile(file, "utf8", (err, data) => {
    if (err) throw new Error("FS operation failed");
    console.log(data);
  });
};

await read();

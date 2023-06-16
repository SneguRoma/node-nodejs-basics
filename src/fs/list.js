import { readdir } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const list = async () => {
  const dirPath = fileURLToPath(new URL(".", import.meta.url));
  const files = join(dirPath, "files");
  readdir(files, (err, data) => {
    if (err) throw new Error("FS operation failed");
    console.log(data);
  });
};

await list();

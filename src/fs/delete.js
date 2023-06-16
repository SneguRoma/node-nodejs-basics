import { unlink } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const remove = async () => {
  const dirPath = fileURLToPath(new URL(".", import.meta.url));
  const file = join(dirPath, "files", "fileToRemove.txt");
  unlink(file, (err) => {
    if (err) throw new Error("FS operation failed");
    console.log("fileToRemove.txt was deleted");
  });
};

await remove();

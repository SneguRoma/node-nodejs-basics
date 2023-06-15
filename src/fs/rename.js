import fs from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const rename = async () => {
  const dirPath = fileURLToPath(new URL(".", import.meta.url));
  const fileOldName = join(dirPath, "files", "wrongFilename.txt");
  const fileNewName = join(dirPath, "files", "properFilename.md");
  fs.access(fileNewName, fs.constants.R_OK, (err) => {
    if (!err) throw new Error("FS operation failed");
  });
  fs.rename(fileOldName, fileNewName, (err) => {
    if (err) throw new Error("FS operation failed");
    console.log("Rename completed!");
  });
};

await rename();

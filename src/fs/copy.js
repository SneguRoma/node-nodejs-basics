import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { cp } from "node:fs";

const copy = async () => {
  const dirPath = fileURLToPath(new URL(".", import.meta.url));
  const files = join(dirPath, "files");
  const files_copy = join(dirPath, "files_copy");

  function callback(err) {
    if (err) throw new Error("FS operation failed");
    console.log("files was copied to files_copy");
    }
    
  cp(
    files,
    files_copy,
    {
      recursive: true,
      force: false,
      errorOnExist: true,
    },
    callback
  );
};

await copy();

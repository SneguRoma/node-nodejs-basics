import { writeFile } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { Buffer } from "node:buffer";

const create = async () => {
  const data = new Uint8Array(Buffer.from("I am fresh and young"));
  const dirPath = fileURLToPath(new URL(".", import.meta.url));  
  const file = join(dirPath, "files", "fresh.txt");
  writeFile(file, data, { flag: "wx" }, (err) => {
    if (err) throw new Error("FS operation failed");
    console.log("Data has been writed!");
  });
};

await create();

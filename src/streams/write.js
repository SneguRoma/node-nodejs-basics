import { createWriteStream } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { stdout, stdin } from "node:process";

const write = async () => {
    const dirPath = fileURLToPath(new URL(".", import.meta.url));
    const fileWright = join(dirPath, "files", "fileToWrite.txt");
    const stream = createWriteStream(fileWright, 'utf-8');
    stdout.write('enter text\n');
    stdin.pipe(stream);
};

await write();
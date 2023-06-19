import { createReadStream } from "node:fs";
const { createHash } = await import("node:crypto");
import { join } from "node:path";
import { fileURLToPath } from "node:url";



const calculateHash = async () => {
    const dirPath = fileURLToPath(new URL(".", import.meta.url));
    const file = join(dirPath, "files", "fileToCalculateHashFor.txt");

    const hash = createHash("sha256");

    const input = createReadStream(file);
    input.on("readable", () => {        
        const data = input.read();
        if (data) hash.update(data);
        else {
            console.log(`${hash.digest("hex")} ${file}`);
        }
    });
};

await calculateHash();

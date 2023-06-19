import { fork } from "child_process";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const spawnChildProcess = async (args) => {
  const dirPath = fileURLToPath(new URL(".", import.meta.url));
  const file = join(dirPath, "files", "script.js");
  fork(file, args);
};

spawnChildProcess(process.argv);

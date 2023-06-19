import { createRequire } from "node:module";
import { release, version } from "node:os";
import { sep } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer as createServerHttp } from "node:http";

const require = createRequire(import.meta.url);
const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = require("./files/a.json");
} else {
  unknownObject = require("./files/b.json");
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(
  `Path to current file is ${fileURLToPath(new URL(import.meta.url))}`
);
console.log(
  `Path to current directory is ${fileURLToPath(new URL(".", import.meta.url))}`
);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export default {
  unknownObject,
  myServer,
};

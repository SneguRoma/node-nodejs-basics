import { Transform } from "node:stream";
import { stdout, stdin } from "node:process";

const transform = async () => {
  stdout.write("enter text\n");
  const reverse = new Transform({
    transform(chunk, _, callback) {
      const reversedChunk =
        chunk.toString().split("").reverse().join("") + "\n";
      this.push(reversedChunk);
      callback();
    },
  });

  stdin.pipe(reverse).pipe(stdout);
};

await transform();

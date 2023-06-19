import { Worker, workerData } from "node:worker_threads";
import os from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const performCalculations = async () => {
  const dirPath = fileURLToPath(new URL(".", import.meta.url));
  const file = join(dirPath, "worker.js");
  const numCPUs = os.cpus().length;

  function createWorkers() {
    const workers = [];

    for (let i = 0; i < numCPUs; i++) {
      const worker = new Worker(file, { workerData: 10 + i });
      workers.push(worker);
    }

    return workers;
  }

  function runWorkers(workers) {
    const results = [];

    return new Promise((resolve, reject) => {
      let completedCount = 0;

      for (let i = 0; i < workers.length; i++) {
        workers[i].on("message", (result, reject) => {
          if (result) {
            results[i] = {
              status: "resolved",
              data: result,
            };
            completedCount++;
          }
          if (reject) {
            results[i] = {
              status: "error",
              data: null,
            };
            completedCount++;
          }

          if (completedCount === workers.length) {
            resolve(results);
          }
        });
      }
    });
  }

  const workers = createWorkers();
  const results = await runWorkers(workers);

  console.log(results);
};

await performCalculations();

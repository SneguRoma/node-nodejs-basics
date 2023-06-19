const parseEnv = () => {
  const prefix = "RSS_";
  const result = Object.entries(process.env)
    .filter(([key]) => key.startsWith(prefix))
    .map(([key, val]) => `${key}=${val}`)
    .join("; ");
  console.log(result);
};

parseEnv();

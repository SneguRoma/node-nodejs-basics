const parseArgs = () => {
  const arr = process.argv
    .slice(2)
    .reduce((acc, item, index) => {
      if (index % 2 === 0) return acc + ", " + item.slice(2) + " is ";
      else return acc + item;
    }, "")
    .slice(2);
  console.log(arr);
};

parseArgs();

// Buit-in module : FS module: interacting with the file system
// two flavors : asynchronously and synchronously
const { readFile, writeFile } = require("node:fs");
const { join } = require("node:path");

console.log('start');
readFile(join(__dirname, "content", "first.txt"), "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile(join(__dirname, "content", "second.txt"), "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    writeFile(
      join(__dirname, "content", "result-async.txt"),
      `Here is the result: ${first}, ${second}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done with this task');
      }
    );
  });
});
console.log('starting next task');

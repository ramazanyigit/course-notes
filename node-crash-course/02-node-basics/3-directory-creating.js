const fs = require("fs");

if (!fs.existsSync("./assets")) {
  // Creating directory.
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log("folder created!");
  });
} else {
  fs.rmdir('./assets', (err) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log('folder is deleted!');
  });
}
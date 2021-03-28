const fs = require('fs');

fs.readFile('./docs/blog1.txt', (err, data) => {
    // Callback fn

    if (err) {
        console.error(err);
        return;
    }

    // Log as object
    console.log(data);

    // Log as text
    console.log(data.toString());
});
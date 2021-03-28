const fs = require('fs');

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log("file deleted.");
    });
}
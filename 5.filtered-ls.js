const fs = require('fs');

const dir = process.argv[2];
const ext = process.argv[3];

fs.readdir(dir, (err, files) => {
    files
        .filter((file) => file.endsWith('.' + ext))
        .forEach((file) => console.log(file));
});

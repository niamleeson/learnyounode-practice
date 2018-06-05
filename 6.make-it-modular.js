const readDir = require('./test2/test2');

const dir = process.argv[2];
const ext = process.argv[3];
const cb = process.argv[4];

readDir(dir, ext, (err, list) => {
    if (err) {
        return console.error(err);
    }

    list.forEach((file) => console.log(file));
});

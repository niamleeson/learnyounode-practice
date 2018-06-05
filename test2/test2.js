const fs = require('fs');
const path = require('path');

const readDir = (dir, ext, cb) => {
    fs.readdir(dir, (err, files) => {
        if (err) {
            return cb(err);
        }

        const list = files.filter(file => path.extname(file) === '.' + ext);
        cb(null, list);
    });
}

module.exports = readDir;

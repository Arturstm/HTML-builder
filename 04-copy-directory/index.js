const fs = require('fs');
const path = require('path');
const {stdin,stdout} = require('process');
fs.mkdir(path.join(__dirname, 'files-copy'), {
    recursive: true
}, err => {
    if (err) {
        console.error(err)
    }
    fs.readdir(path.join(__dirname, 'files'), (err, filenames) => {
        if (err) {
            console.error(err);
        }
        for (let filename of filenames) {
            fs.promises.copyFile(path.join(__dirname, 'files', filename), path.join(__dirname, 'files-copy', filename));
        }
    });
    stdout.write('Good!');
})
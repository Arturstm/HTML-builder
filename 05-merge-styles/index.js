const fs = require('fs');
const path = require('path');
const styledir = path.join(__dirname, "styles");
const stylefile = fs.createWriteStream(path.join(__dirname, 'project-dist', 'bundle.css'));


function createBundle() {     
    if (err) {
        console.error(err);
    }
    const files = fs.readdir(styledir);
    }

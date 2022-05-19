const fs = require('fs');
const path = require('path');
const text = fs.createReadStream(path.join(__dirname, 'text.txt'), {encoding: 'utf-8'});
text.on('data', read => console.log(read));
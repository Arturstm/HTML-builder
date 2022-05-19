const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin, stdout } = require('process');

const newText = fs.createWriteStream(path.join(__dirname, 'text.txt'), {encoding: 'utf-8'});
stdout.write('Пиши, что душе угодно \n');

const rl = readline.createInterface(process.stdin, process.stdout);

rl.on( "line", function(line) {
    if(line === 'exit') {
        stdout.write('Бай бай!');
        rl.close();
    } else 
    newText.write(line+'\n');
});

rl.on('SIGINT', () => {
    stdout.write('Бай бай!');
    rl.close();
  });
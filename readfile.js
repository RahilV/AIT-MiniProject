const readline = require('readline');
const fs = require('fs');
const file = "test.txt";
var linesCount = 0;
fs.access(file, fs.constants.F_OK, err => {
    console.log(`${file} ${err ? "does not exist" : "exists"}`);
});

fs.access(file, fs.constants.R_OK, err => {
    console.log(`${file} ${err ? "is not readable" : "is readable"}`);
});

fs.access(file, fs.constants.W_OK, err => {
    console.log(`${file} ${err ? "is not writable" : "is writable"}\n`);
});

const readInterface = readline.createInterface({
    input: fs.createReadStream(file),
    // output: process.stdout,
    console: false
});

readInterface.on('line', function(line) {
    console.log(line);
    linesCount++;
});
readInterface.on('close', function(line) {
    console.log(linesCount);
});


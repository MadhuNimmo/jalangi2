'use strict';

const fs = require('fs');
const path = require("path");

//const directory = '/Users/madhurimachakraborty/Documents/GitHub/DynamicCallGraph/examples/'
async function summarizeFilesInDirectorySync(directory) {
var files =  await fs.readdirSync(path.join(directory,"/"))
console.log(files)
for (var i in files) {
        return i;
}
}
exports.summarizeFilesInDirectorySync = summarizeFilesInDirectorySync;
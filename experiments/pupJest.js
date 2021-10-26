const { exec } = require("child_process");
const fs = require('fs');
const {pupServ} = require('./pupServ')
tests=fs.readFileSync(file).toString().split("\n");
async function pupJest(testFile) {
                try{
                        command = "node /Users/madhurimachakraborty/Documents/jalangi2/experiments/pupServ.js"+" /Users/madhurimachakraborty/Documents/todomvc-master/"+" /Users/madhurimachakraborty/Documents/misc/";
                        exec(command)
 
                }
                catch(e){
                        console.log(e)
                }
}

module.exports = {pupJest};
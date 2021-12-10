const { exec } = require("child_process");
const fs = require('fs');
const {pupServ} = require('./pupServ')
tests=fs.readFileSync(file).toString().split("\n");
async function pupJest(testFile) {
                try{
                        command = "node /home/anon/jalangi2/experiments/pupServ.js"+" /home/anon/todomvc-master/"+" /home/anon/misc/";
                        exec(command)
 
                }
                catch(e){
                        console.log(e)
                }
}

module.exports = {pupJest};
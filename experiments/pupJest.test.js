const {pupServ} = require('./pupServ')
const fs = require('fs');
const path = require("path");
inDir=process.argv[2]
const dirs = p => readdirSync(p).filter(f => statSync(join(p, f)).isDirectory())
describe ("Run", () => { 
    for(let i = 0; i < dirs.length; i++){
      it('Run '+dirs[i], async () => {
        command = "node /Users/madhurimachakraborty/Documents/jalangi2/experiments/pupServ.js "+dirs[i];
        await expect(exec(command)).resolves.not.toThrow();
      });
    }
});

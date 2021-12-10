const fs = require("fs")
const path = require("path")

/*const getAllFiles = function(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
    } else {
        if(path.extname(file)==".js"){
      arrayOfFiles.push(path.join(__dirname, dirPath, "/", file))
      filefirst=fs.readFileSync(path.join(__dirname, dirPath, "/", file)).toString().split("\n")[0]
      console.log(filefirst)
        }
    }
  })

  return arrayOfFiles
}*/
function walkDir(dir) {
        fs.readdirSync(dir).forEach( f => {
          let dirPath = path.join(dir, f);
          let isDirectory = fs.statSync(dirPath).isDirectory();
          if (isDirectory){ 
            walkDir(dirPath)}
        else{
            if(f.endsWith('.js')){
            var filePath = path.join(dir, f);
            var fileContents = fs.readFileSync(filePath).toString().split("\n")[0];
            console.log(filePath)}}
        });
      };

const result = walkDir('/home/anon/todomvc-master/examples/vanillajs')
console.log(result)
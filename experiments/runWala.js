const { exec } = require("child_process");
const { POINT_CONVERSION_COMPRESSED } = require("constants");
var cmd = ` /Users/madhurimachakraborty/Documents/GitHub/WALA-ACG/gradlew run -p="/Users/madhurimachakraborty/Documents/GitHub/WALA-ACG/" --args=`+process.argv[2];
exec(cmd,(error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });

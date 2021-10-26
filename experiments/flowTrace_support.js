module.exports=function() {
        const fs = require('fs');
        var globalX= 1;
        /*var fileWrInt = setInterval(function() { 
                console.log(output.length) 
        }, 5000);*/
        var fileWrt = function(){
                fs.writeFileSync('/Users/madhurimachakraborty/Downloads/hello'+globalX+'.json', globalX, 'utf8',function(err) {
                        if(err) console.log('error', err);
                });
                globalX+=1;
        }
        return fileWrt;
};
    
    
    

    
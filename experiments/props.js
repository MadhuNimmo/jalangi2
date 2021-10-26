module.exports=function() {
        const fs = require('fs');
        var jsonList = JSON.parse(fs.readFileSync("/Users/madhurimachakraborty/Documents/StaticResults/todo_angularjs/todo_angularjs_propNames.json", 'utf8'));
        //JSON.parse(fs.readFileSync(jsonInp,'utf8'));
        //JSON.parse(fs.readFileSync("/Users/madhurimachakraborty/Documents/StaticResults/todo_vanillajs/todo_vanillajs_props.json", 'utf8'));
        return jsonList
};
    
    
    

    
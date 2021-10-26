module.exports=function() {
        const fs = require('fs');
        var jsonList = JSON.parse('/Users/madhurimachakraborty/Documents/JuiceShop_results/callees.json','utf8');
                 //fs.readFileSync("/Users/madhurimachakraborty/Documents/StaticResults/newfun/callees.json"
                //"/Users/madhurimachakraborty/Documents/StaticResults/applycall/callees.json",'utf8'));
                //"/Users/madhurimachakraborty/Documents/todomvcResults_natModPes/todo_angularjs/callees.json", 'utf8'));
        //JSON.parse(fs.readFileSync(jsonInp,'utf8'));
        //JSON.parse(fs.readFileSync("/Users/madhurimachakraborty/Documents/StaticResults/todo_vanillajs/todo_vanillajs_props.json", 'utf8'));
        //return JSON.parse('["/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_applycall.js@5:1:7:2"]')
        return jsonList;
};
    
    
    

    
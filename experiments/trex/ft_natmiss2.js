(function(){
        var search = '\\+';
        var searchRegExp = new RegExp(search, 'g'); // Throws SyntaxError
        
        var replaceWith = '-';
        var func = function(){ return replaceWith;}
        var result = '5+2+1'.replace(searchRegExp, func);
        //console.log(result);
        /*var birthday = new Date('August 19, 1975 23:15:30');
        var day1 = birthday.getDay();
        console.log(day1)
        console.log("v")*/
})()
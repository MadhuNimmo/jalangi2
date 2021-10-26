(function(){
        var obj= {
        }
        var arr = ["MyHobby"]
        arr[1] = "MyPhone"
        for(var item in arr){
                obj[arr[item]+"With"]= function(){ return item}
        }

        obj["MyPhoneWith"]()
})("MyPhoneWith")

/*
"Dynamic Property Access due to String Manipulation"
use set(propnames)-> generate the string trace
get(prop,loc)
Add filtering get()  until the 
propName : filtering get and @put */
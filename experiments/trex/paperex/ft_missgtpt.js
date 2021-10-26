(function(){
        var obj= {}
        var arr = ["MyPhone"]
        var fun = function(){ return "MyPhoneWith"}
        obj[arr[0]+"With"] = function(){ return 'MyPhone'}
        obj[fun()]()
})()
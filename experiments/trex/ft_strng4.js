(function(){
        var val=true;
        var obj= {
                MyName:function(){
                        obj.MyPhone();
                        return;
                },
                MyPhone:function(){
                        return "XXX"
                }
        }
        obj[val?"MyName" : "MyPhone"]();
})()
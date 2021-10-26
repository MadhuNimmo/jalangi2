(function(){
        var x;
        var y = function(){
                return x.call(this)
        }
        y();
        x= new Function("return 1")
        x()
})()
/*(function(){
        var x;
        //try{
                x= new Function("return 1")
        /*}catch(e){
                throw e
        }
        x()
        var y = function(){
                return x.call(this)
        }
        y();
})()*/
(function(){
        function XYZ(){ return "XYZ"} 
        function isChecked(argFun) {
                eval("argFun()");
        }
    
        var result = isChecked(XYZ);
})()
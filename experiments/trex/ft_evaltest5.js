(function(){
        function isChecked() {
                eval("var evalFun = function(){ return \"evalFun\"} ");
                evalFun();
        }
        isChecked();
})()
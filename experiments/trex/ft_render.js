function render(){ return 1}
(function(){
        var render = function(){ return 2}
        render()
        function foo(){
                var render;
                try{
                        render= new Function(" return 0")
                }
                catch(e){
                        console.log(e)
                }
                return render
        }
        var y = foo()
        y()
        var x = new Function(" return 5")
        x()
})()
render()
(function(){
        var arr=[1,2,3]
        function foo(x){ return x}
        function bar(args){
        switch (args.length) {
                case 0: foo.call(this,args.length); return;
                case 1:  foo.call(this,args.length); return;
                //default:  foo(args.length); return;
                //default:  foo.call(this,args.length); return;
                default:  foo.apply(this,args.length); return;
              }
        }
        bar(arr)
})()
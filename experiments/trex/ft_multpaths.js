(function(){
        function foo(event, handler) {
		if (event === 'x') {
				handler();
		} else if (event === 'y') {
				handler();
		} else if (event === 'z') {
				handler();
		}
	};

        function bar(){
                foo("x",function(){return "x"})
                foo("y",function(){return "y"})
                foo("z",function(){return "z"})
        }
        bar()
})()
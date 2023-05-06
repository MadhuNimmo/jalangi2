function foo(){
        console[console.info ? 'info' : 'log'](
                "You are running Vue in development mode.\n");
}
foo()
(function(){
        function printArgs(arg1, arg2, arg3) {
                return;
        }

        // Using apply to call the printArgs function with different parameters
        const args1 = [1, 2, 3];

        printArgs.call(this, 1, 2, 3);
        printArgs.apply(this, args1);
})()
function runInvokeQueue(queue,indx) {
        provider = [function(){return "x"},function(){return "y"}]
        if(Array.isArray(provider)){
                fn = provider[indx]
        }
        fn();
}
runInvokeQueue(["x","y"],1)

// line6-> line2 call missed in SCG
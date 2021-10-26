(function(){
        var x = [1,2,3]
        var y ="push"
        x[ y || 'push'](4)
        // x['push'](4)
        Array.push(x,7)
})()
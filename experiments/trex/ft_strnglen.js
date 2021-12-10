(function(){
        var arr= [function(){
                        return "XYZ"
                },
                function(){
                        return "XXX-XXX-XXXX"
                },
                function(){
                        return "Riverside"
                },
                function(){
                        return "MyAddress"
                }]
        var arr2=["x","y","z"]
        var x = arr2.length - 1
        arr[x]()
})()
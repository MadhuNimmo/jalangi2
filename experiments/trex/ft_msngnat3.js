(function(){
        var addressBook=["XXX","YYY","XYZ"]
        //Array.isArray(addressBook)
        var ab = addressBook.filter(function(el){return el.startsWith("X")})
        ab.map(function(el){return el+"Z"})
})()
(function(){
        var addressBook=["XXX","YYY","XYZ"]
        function startsWith(com, el) {
                return el.indexOf(com) === 0;
            }
        var boundSW = startsWith.bind(addressBook, "Y")
        var filterAB = addressBook.filter(boundSW);
})()
(function(){
        (function(mod,mods){
                function _webkit_(){
                        return "xyz"
                }
                mods[mod](_webkit_)

        })(0,[function(_webkit_) { 
                return _webkit_()
               }, 
               function() { 
               return "here";
               }	])

})()
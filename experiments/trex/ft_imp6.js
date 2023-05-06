(function(){
        var _ = {};
        _.isFunction = function(obj) {
                return typeof obj == 'function' || false;
              };
        var optimizeCb = function(func, context, argCount) {
                if (context === void 0) return func;
                switch (argCount == null ? 3 : argCount) {
                  case 1: return function(value) {
                    return func.call(context, value);
                  };
                  case 2: return function(value, other) {
                    return func.call(context, value, other);
                  };
                  case 3: return function(value, index, collection) {
                        return func.call(context, value, index, collection);
                  };
                  case 4: return function(accumulator, value, index, collection) {
                        return func.call(context, accumulator, value, index, collection);
                  };
                }
                return function() {
                  return func.call(context, arguments);
                };
              };
        var cb = function(value, context, argCount) {      
        if (value == null) return _.identity;
        if (_.isFunction(value)) return optimizeCb(value, context, argCount);
        if (_.isObject(value)) return _.matcher(value);
        return _.property(value);
        };
        predicate = (function(){
                return function(handler) {
                        if (handler.route.test(fragment)) {
                          handler.callback(fragment);
                          return true;
                        }
                }
        })({})
        var context;
        predicate = cb(predicate, context);
})()
var obj ={
        sum : function(a, b) {
              return a + b;
            }
          }
            
      var handler = {
              apply: function (target, thisArg, argumentsList) {      
                return target(argumentsList[0], argumentsList[1]) * 10;
              }
            };
      var proxy1 = new Proxy(obj, handler);
            
      proxy1.sum(1, 2);  
/*
{ '(/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy4.js:12:20:12:43)': [ 'Proxy (Native)' ],
  '(/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy4.js:14:7:14:23)':
   [ '(/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy4.js:2:15:4:14)' ] }
   */
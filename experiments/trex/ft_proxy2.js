function sum(a, b) {
        return a + b;
      }
      
var handler = {
        apply: function (target, thisArg, argumentsList) {      
          return target(argumentsList[0], argumentsList[1]) * 10;
        }
      };
var proxy1 = new Proxy(sum, handler);
proxy1(1, 2);
/*
{ '(/home/anon/jalangi2/experiments/trex/ft_proxy2.js:10:14:10:37)': [ 'Proxy (Native)' ],
  '(/home/anon/jalangi2/experiments/trex/ft_proxy2.js:12:1:12:13)': [ 'sum (Native)' ],
  'sum (Native)':
   [ '(/home/anon/jalangi2/experiments/trex/ft_proxy2.js:6:16:8:10)' ],
  '(/home/anon/jalangi2/experiments/trex/ft_proxy2.js:7:18:7:60)':
   [ '(/home/anon/jalangi2/experiments/trex/ft_proxy2.js:1:1:3:8)' ] }
*/
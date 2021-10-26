var target1 = {
  message1: "hello",
  method1: function() {
    return this.message1;
  },
};
var handler2 = {
  get: function (target, prop) {
    var propValue = target[prop];
    if (typeof propValue != "function") {
      return propValue;
    } else {
      return function () {
        return propValue();
      };
    }
  },
};
var proxy2 = new Proxy(target1, handler2);
proxy2.method1();
/*
{ '(/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy.js:19:14:19:42)': [ 'Proxy (Native)' ],
  'system (Native)':
   [ '(/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy.js:8:8:17:4)' ],
  '(/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy.js:20:1:20:17)':
   [ '(/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy.js:13:14:15:8)' ],
  '(/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy.js:14:16:14:27)':
   [ '(/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy.js:3:12:5:4)' ] }
*/
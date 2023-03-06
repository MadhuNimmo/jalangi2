var obj = {}
obj["xyz"] = (function something(){ return function(){ return "xyz"} })()
obj["xyz"]();

// line3-> line2 call missed in SCG
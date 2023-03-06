function outerFunction(firstName,lastName) {

        var innerFunction = function() {
          var argsArray = arguments[0][0]
          console.log(argsArray);
        }
      
        innerFunction(Array.from(arguments));
}
      
outerFunction('Hello');
/*
Instructions:
BB0
BB1
0   v5 = new <JavaScriptLoader,LArray>@0     fsig20.js [0->227] (line 1) [5=[arguments]]
1   v7 = global:global $$undefined           fsig20.js [54->172] (line 3) [7=[innerFunction]]
3   v12 = global:global Function             fsig20.js [54->172] (line 3)
4   v9 = construct v12@4 v11:#Lfsig20.js/outerFunction/fsig20.js@74 exception:v10fsig20.js [54->172] (line 3) [9=[innerFunction]]
6   v16 = global:global __WALA__int3rnal__globalfsig20.js [188->224] (line 8)
9   v21 = global:global Array                fsig20.js [202->207] (line 8) [21=[$$destructure$rcvr3]]
10   check v21                               fsig20.js [202->207] (line 8) [21=[$$destructure$rcvr3]]
BB2
13   v23 = dispatch v22:#from@13 v21,v5 exception:v24fsig20.js [202->223] (line 8) [22=[$$destructure$elt3]21=[$$destructure$rcvr3]5=[arguments]]
BB3
14   v14 = invoke v9@14 v16,v23 exception:v25fsig20.js [188->224] (line 8) [9=[innerFunction]]
BB4

Instructions:
BB0
BB1
0   v1 = new <JavaScriptLoader,LArray>@0     fsig20.js [0->258] (line 1) [1=[arguments]]
1   v5 = global:global Function              fsig20.js [0->258] (line 1)
2   v2 = construct v5@2 v4:#Lfsig20.js/outerFunction exception:v3fsig20.js [0->258] (line 1)
3   global:global outerFunction = v2         fsig20.js [0->258] (line 1)
4   v9 = global:global outerFunction         fsig20.js [235->248] (line 11)
5   check v9                                 fsig20.js [235->248] (line 11)
BB2
6   v11 = global:global __WALA__int3rnal__globalfsig20.js [235->257] (line 11)
7   v8 = invoke v9@7 v11,v12:#Hello exception:v13fsig20.js [235->257] (line 11)
BB3
*/
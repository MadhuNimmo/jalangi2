function greet(firstName,lastName) {
        if(lastName==undefined){
                console.log("Hello, "+firstName);
        }else{
                console.log("Hello, "+firstName+" "+lastName);
        }
    }
greet("John");
/*
Instructions:
BB0
BB1
0   v1 = new <JavaScriptLoader,LArray>@0     fsig17.js [0->228] (line 1) [1=[arguments]]
1   v5 = global:global Function              fsig17.js [0->228] (line 1)
2   v2 = construct v5@2 v4:#Lfsig17.js/greet exception:v3fsig17.js [0->228] (line 1)
3   global:global greet = v2                 fsig17.js [0->228] (line 1)
4   v9 = global:global greet                 fsig17.js [214->219] (line 8)
5   check v9                                 fsig17.js [214->219] (line 8)
BB2
6   v11 = global:global __WALA__int3rnal__globalfsig17.js [214->227] (line 8)
7   v8 = invoke v9@7 v11,v12:#John exception:v13fsig17.js [214->227] (line 8)
BB3
*/
function greet(firstName,lastName) {
        if(!!lastName){ 
            console.log("Hello, "+firstName+" "+lastName);
        }else{
            console.log("Hello, "+firstName);
        }
    }
greet("John");
/*
Instructions:
BB0
BB1
0   v5 = new <JavaScriptLoader,LArray>@0     fsig11.js [0->197] (line 1) [5=[arguments]]
1   v7 = neg v4                              fsig11.js [50->58] (line 2) [4=[lastName]]
2   v6 = neg v7                              fsig11.js [50->58] (line 2)
3   conditional branch(eq, to iindex=15) v6,v8:#0fsig11.js [45->191] (line 2)
BB2
6   v13 = global:global console              fsig11.js [74->81] (line 3) [13=[$$destructure$rcvr1]]
7   check v13                                fsig11.js [74->81] (line 3) [13=[$$destructure$rcvr1]]
BB3
10   v18 = binaryop(add) v19:#Hello,  , v3   fsig11.js [86->105] (line 3) [3=[firstName]]
11   v17 = binaryop(add) v18 , v20:#         fsig11.js [86->109] (line 3)
12   v16 = binaryop(add) v17 , v4            fsig11.js [86->118] (line 3) [4=[lastName]]
13   v15 = dispatch v14:#log@13 v13,v16 exception:v21fsig11.js [74->119] (line 3) [14=[$$destructure$elt2]13=[$$destructure$rcvr1]]
BB4
14   goto (from iindex= 14 to iindex = -1)   fsig11.js [45->191] (line 2)
BB5
17   v24 = global:global console             fsig11.js [148->155] (line 5) [24=[$$destructure$rcvr2]]
18   check v24                               fsig11.js [148->155] (line 5) [24=[$$destructure$rcvr2]]
BB6
21   v26 = binaryop(add) v19:#Hello,  , v3   fsig11.js [160->179] (line 5) [3=[firstName]]
22   v25 = dispatch v14:#log@22 v24,v26 exception:v27fsig11.js [148->180] (line 5) [14=[$$destructure$elt2]24=[$$destructure$rcvr2]]
BB7
*/
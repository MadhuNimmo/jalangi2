function greet(firstName,lastName,other) {
        if(!lastName){
                console.log("Hello, "+firstName);
        }else{
                console.log("Hello, "+firstName+" "+lastName);
        }
    }
greet("John","Doe");
/*
Instructions:
BB0
BB1
0   v5 = new <JavaScriptLoader,LArray>@0     fsig16.js [0->203] (line 1) [5=[arguments]]
1   v6 = neg v4                              fsig16.js [49->57] (line 2) [4=[lastName]]
2   conditional branch(eq, to iindex=12) v6,v7:#0fsig16.js [45->197] (line 2)
BB2
5   v12 = global:global console              fsig16.js [76->83] (line 3) [12=[$$destructure$rcvr1]]
6   check v12                                fsig16.js [76->83] (line 3) [12=[$$destructure$rcvr1]]
BB3
9   v15 = binaryop(add) v16:#Hello,  , v3    fsig16.js [88->107] (line 3) [3=[firstName]]
10   v14 = dispatch v13:#log@10 v12,v15 exception:v17fsig16.js [76->108] (line 3) [13=[$$destructure$elt2]12=[$$destructure$rcvr1]]
BB4
11   goto (from iindex= 11 to iindex = -1)   fsig16.js [45->197] (line 2)
BB5
14   v20 = global:global console             fsig16.js [141->148] (line 5) [20=[$$destructure$rcvr2]]
15   check v20                               fsig16.js [141->148] (line 5) [20=[$$destructure$rcvr2]]
BB6
18   v24 = binaryop(add) v16:#Hello,  , v3   fsig16.js [153->172] (line 5) [3=[firstName]]
19   v23 = binaryop(add) v24 , v25:#         fsig16.js [153->176] (line 5)
20   v22 = binaryop(add) v23 , v4            fsig16.js [153->185] (line 5) [4=[lastName]]
21   v21 = dispatch v13:#log@21 v20,v22 exception:v26fsig16.js [141->186] (line 5) [13=[$$destructure$elt2]20=[$$destructure$rcvr2]]
BB7
*/
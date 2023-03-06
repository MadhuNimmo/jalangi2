function greet(firstName,lastName) {
        if(lastName || 1==1){
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
0   v5 = new <JavaScriptLoader,LArray>@0     fsig15.js [0->210] (line 1) [5=[arguments]]
2   conditional branch(eq, to iindex=5) v4,v8:#0fsig15.js [48->64] (line 2) [4=[lastName]]
BB2
4   goto (from iindex= 4 to iindex = 7)      fsig15.js [48->64] (line 2)
BB3
5   v9 = binaryop(eq) v10:#1.0 , v10:#1.0    fsig15.js [60->64] (line 2)
BB4
           v6 = phi  v4,v9
7   conditional branch(eq, to iindex=19) v6,v8:#0fsig15.js [45->204] (line 2)
BB5
10   v15 = global:global console             fsig15.js [83->90] (line 3) [15=[$$destructure$rcvr1]]
11   check v15                               fsig15.js [83->90] (line 3) [15=[$$destructure$rcvr1]]
BB6
14   v20 = binaryop(add) v21:#Hello,  , v3   fsig15.js [95->114] (line 3) [3=[firstName]]
15   v19 = binaryop(add) v20 , v22:#         fsig15.js [95->118] (line 3)
16   v18 = binaryop(add) v19 , v4            fsig15.js [95->127] (line 3) [4=[lastName]]
17   v17 = dispatch v16:#log@17 v15,v18 exception:v23fsig15.js [83->128] (line 3) [16=[$$destructure$elt2]15=[$$destructure$rcvr1]]
BB7
18   goto (from iindex= 18 to iindex = -1)   fsig15.js [45->204] (line 2)
BB8
21   v26 = global:global console             fsig15.js [161->168] (line 5) [26=[$$destructure$rcvr2]]
22   check v26                               fsig15.js [161->168] (line 5) [26=[$$destructure$rcvr2]]
BB9
25   v28 = binaryop(add) v21:#Hello,  , v3   fsig15.js [173->192] (line 5) [3=[firstName]]
26   v27 = dispatch v16:#log@26 v26,v28 exception:v29fsig15.js [161->193] (line 5) [16=[$$destructure$elt2]26=[$$destructure$rcvr2]]
BB10
*/
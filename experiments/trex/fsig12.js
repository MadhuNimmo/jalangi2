function greet(firstName,lastName) {
        if(lastName){
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
0   v5 = new <JavaScriptLoader,LArray>@0     fsig12.js [0->194] (line 1) [5=[arguments]]
1   conditional branch(eq, to iindex=13) v4,v6:#0fsig12.js [45->188] (line 2) [4=[lastName]]
BB2
4   v11 = global:global console              fsig12.js [71->78] (line 3) [11=[$$destructure$rcvr1]]
5   check v11                                fsig12.js [71->78] (line 3) [11=[$$destructure$rcvr1]]
BB3
8   v16 = binaryop(add) v17:#Hello,  , v3    fsig12.js [83->102] (line 3) [3=[firstName]]
9   v15 = binaryop(add) v16 , v18:#          fsig12.js [83->106] (line 3)
10   v14 = binaryop(add) v15 , v4            fsig12.js [83->115] (line 3) [4=[lastName]]
11   v13 = dispatch v12:#log@11 v11,v14 exception:v19fsig12.js [71->116] (line 3) [12=[$$destructure$elt2]11=[$$destructure$rcvr1]]
BB4
12   goto (from iindex= 12 to iindex = -1)   fsig12.js [45->188] (line 2)
BB5
15   v22 = global:global console             fsig12.js [145->152] (line 5) [22=[$$destructure$rcvr2]]
16   check v22                               fsig12.js [145->152] (line 5) [22=[$$destructure$rcvr2]]
BB6
19   v24 = binaryop(add) v17:#Hello,  , v3   fsig12.js [157->176] (line 5) [3=[firstName]]
20   v23 = dispatch v12:#log@20 v22,v24 exception:v25fsig12.js [145->177] (line 5) [12=[$$destructure$elt2]22=[$$destructure$rcvr2]]
BB7
*/

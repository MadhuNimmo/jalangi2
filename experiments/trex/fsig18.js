function greet(firstName,lastName) {
        lastName = lastName == undefined ? "" :lastName
        console.log("Hello, "+firstName+" "+lastName);
    }
greet("John");
/*
Instructions:
BB0
BB1
0   v5 = new <JavaScriptLoader,LArray>@0     fsig18.js [0->153] (line 1) [5=[arguments]]
1   v9 = global:global undefined             fsig18.js [68->77] (line 2)
2   v7 = binaryop(eq) v4 , v9                fsig18.js [56->77] (line 2) [4=[lastName]]
3   conditional branch(eq, to iindex=6) v7,v10:#0fsig18.js [56->92] (line 2)
BB2
5   goto (from iindex= 5 to iindex = 7)      fsig18.js [56->92] (line 2)
BB3
BB4
           v6 = phi  v11:#,v4
10   v16 = global:global console             fsig18.js [101->108] (line 3) [16=[$$destructure$rcvr1]]
11   check v16                               fsig18.js [101->108] (line 3) [16=[$$destructure$rcvr1]]
BB5
14   v21 = binaryop(add) v22:#Hello,  , v3   fsig18.js [113->132] (line 3) [3=[firstName]]
15   v20 = binaryop(add) v21 , v23:#         fsig18.js [113->136] (line 3)
16   v19 = binaryop(add) v20 , v6            fsig18.js [113->145] (line 3) [6=[lastName]]
17   v18 = dispatch v17:#log@17 v16,v19 exception:v24fsig18.js [101->146] (line 3) [17=[$$destructure$elt1]16=[$$destructure$rcvr1]]
BB6
*/
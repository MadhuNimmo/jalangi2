function greet(firstName,lastName,other) {
        lastName = lastName || "None"
        other = other || ""
        console.log("Hello, "+firstName+" "+lastName);
    }
greet("John");
/*
Instructions:
BB0
BB1
0   v5 = new <JavaScriptLoader,LArray>@0     fsig13.js [0->135] (line 1) [5=[arguments]]
2   conditional branch(eq, to iindex=5) v4,v8:#0fsig13.js [56->74] (line 2) [4=[lastName]]
BB2
4   goto (from iindex= 4 to iindex = 6)      fsig13.js [56->74] (line 2)
BB3
BB4
           v6 = phi  v4,v9:#None
9   v14 = global:global console              fsig13.js [83->90] (line 3) [14=[$$destructure$rcvr1]]
10   check v14                               fsig13.js [83->90] (line 3) [14=[$$destructure$rcvr1]]
BB5
13   v19 = binaryop(add) v20:#Hello,  , v3   fsig13.js [95->114] (line 3) [3=[firstName]]
14   v18 = binaryop(add) v19 , v21:#         fsig13.js [95->118] (line 3)
15   v17 = binaryop(add) v18 , v6            fsig13.js [95->127] (line 3) [6=[lastName]]
16   v16 = dispatch v15:#log@16 v14,v17 exception:v22fsig13.js [83->128] (line 3) [15=[$$destructure$elt1]14=[$$destructure$rcvr1]]
BB6
*/
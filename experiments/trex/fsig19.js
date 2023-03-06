function greet(firstName,lastName) {
        var argsArray = Array.from(arguments)
        var name = ""
        for(item in argsArray){
                name+=argsArray[item]+" "
        }
        console.log("Hello, "+name);
    }
greet("John");  
/*
Instructions:
BB0
BB1
0   v5 = new <JavaScriptLoader,LArray>@0     fsig19.js [0->231] (line 1) [5=[arguments]]
1   v7 = global:global $$undefined           fsig19.js [45->82] (line 2) [7=[argsArray]]
3   v9 = global:global $$undefined           fsig19.js [91->104] (line 3) [9=[name]]
7   v15 = global:global Array                fsig19.js [61->66] (line 2) [15=[$$destructure$rcvr1]]
8   check v15                                fsig19.js [61->66] (line 2) [15=[$$destructure$rcvr1]]
BB2
11   v17 = dispatch v16:#from@11 v15,v5 exception:v18fsig19.js [61->82] (line 2) [17=[argsArray]16=[$$destructure$elt1]15=[$$destructure$rcvr1]5=[arguments]]
BB3
14   v20 = global:global $$undefined         fsig19.js [113->188] (line 4)
BB4
           v8 = phi  v36,v19:#
17   v25 = global:global item                fsig19.js [113->188] (line 4)
18   check v25                               fsig19.js [113->188] (line 4)
BB5
19   v26 = a property name of v17            <no information> [17=[argsArray]]
BB6
20   v23 = binaryop(ne) v11:#null , v26      fsig19.js [113->188] (line 4) [11=[$$destructure$elt2]]
21   conditional branch(eq, to iindex=36) v23,v27:#0fsig19.js [113->188] (line 4)
BB7
22   v28 = global:global item                fsig19.js [113->188] (line 4)
23   check v28                               fsig19.js [113->188] (line 4)
BB8
24   v29 = a property name of v17            <no information> [17=[argsArray]]
BB9
25   global:global item = v29                fsig19.js [113->188] (line 4)
26   v32 = global:global item                fsig19.js [169->173] (line 5)
27   check v32                               fsig19.js [169->173] (line 5)
BB10
29   v10 = prototype_values(v17)             fsig19.js [159->174] (line 5) [17=[argsArray]]
30   v31 = fieldref v10.v32                  fsig19.js [159->174] (line 5)
BB11
31   v30 = binaryop(add) v31 , v34:#         fsig19.js [159->178] (line 5)
33   v36 = binaryop(add) v8 , v30            fsig19.js [153->178] (line 5) [36=[name]8=[name]]
35   goto (from iindex= 35 to iindex = 17)   fsig19.js [113->188] (line 4)
BB12
38   v42 = global:global console             fsig19.js [197->204] (line 7) [42=[$$destructure$rcvr2]]
39   check v42                               fsig19.js [197->204] (line 7) [42=[$$destructure$rcvr2]]
BB13
42   v45 = binaryop(add) v46:#Hello,  , v8   fsig19.js [209->223] (line 7) [8=[name]]
43   v44 = dispatch v43:#log@43 v42,v45 exception:v47fsig19.js [197->224] (line 7) [43=[$$destructure$elt2]42=[$$destructure$rcvr2]]
BB14
*/
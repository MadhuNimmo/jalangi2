function greet(firstName,lastName,other) {
        lastName = "None"
        return "Hello, "+firstName+" "+lastName;
}
greet("John");
/*
Instructions:
BB0
BB1
0   v5 = new <JavaScriptLoader,LArray>@0     fsig14.js [0->123] (line 1) [5=[arguments]]
4   v11 = global:global console              fsig14.js [71->78] (line 3) [11=[$$destructure$rcvr1]]
5   check v11                                fsig14.js [71->78] (line 3) [11=[$$destructure$rcvr1]]
BB2
8   v16 = binaryop(add) v17:#Hello,  , v3    fsig14.js [83->102] (line 3) [3=[firstName]]
9   v15 = binaryop(add) v16 , v18:#          fsig14.js [83->106] (line 3)
10   v14 = binaryop(add) v15 , v6:#None      fsig14.js [83->115] (line 3) [6=[lastName]]
11   v13 = dispatch v12:#log@11 v11,v14 exception:v19fsig14.js [71->116] (line 3) [12=[$$destructure$elt1]11=[$$destructure$rcvr1]]
BB3
*/
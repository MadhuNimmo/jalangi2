J$.iids = {"9":[2,10,2,11],"17":[2,10,2,11],"25":[2,3,2,12],"33":[1,1,3,2],"41":[1,1,3,2],"49":[1,1,3,2],"57":[6,5,6,8],"65":[6,9,6,10],"73":[6,5,6,11],"81":[6,5,6,12],"89":[8,7,8,10],"97":[8,11,8,12],"105":[8,7,8,13],"113":[8,7,8,14],"121":[10,7,10,10],"129":[10,11,10,12],"137":[10,7,10,13],"145":[10,7,10,14],"153":[13,5,13,8],"161":[13,9,13,10],"169":[13,5,13,11],"177":[13,5,13,12],"185":[4,1,15,2],"193":[4,1,15,2],"201":[16,1,16,5],"209":[16,1,16,7],"217":[16,1,16,8],"225":[1,1,42,1],"233":[1,1,3,2],"241":[1,1,42,1],"249":[4,1,15,2],"257":[1,1,42,1],"265":[1,1,3,2],"273":[1,1,3,2],"281":[4,1,15,2],"289":[4,1,15,2],"297":[1,1,42,1],"305":[1,1,42,1],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexFunArg.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexFunArg_jalangi_.js","code":"function foo(x) {\n  return x;\n}\nfunction test() {\n  try {\n    foo(4);\n    try {\n      foo(3);\n    } finally {\n      foo(2);\n    }\n  } finally {\n    foo(1);\n  }\n}\ntest();\n\n/*function x(x) { console.log(x);}\nfunction functionTwo(var1, callback) {\n        callback(var1);\t\t\n    }\n    \n    //functionTwo(1,x)\n\n    function test() {\n        try {\n        return 10;\n        } finally {\n        console.log(\"finally\");\n        functionTwo(1,x)\n           }\n        }\ntest(); */ // finally\n\n/*function functionOne(x) { return x; }\n\nfunction functionTwo(var1, func) {\n    func(var1);\t\t\n}\n\nfunctionTwo(2, functionOne);*/\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(225, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexFunArg_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexFunArg.js');
            function foo(x) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(33, arguments.callee, this, arguments);
                            arguments = J$.N(41, 'arguments', arguments, 4);
                            x = J$.N(49, 'x', x, 4);
                            return J$.X1(25, J$.Rt(17, J$.R(9, 'x', x, 0)));
                        } catch (J$e) {
                            J$.Ex(265, J$e);
                        } finally {
                            if (J$.Fr(273))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function test() {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(185, arguments.callee, this, arguments);
                            arguments = J$.N(193, 'arguments', arguments, 4);
                            try {
                                J$.X1(81, J$.F(73, J$.R(57, 'foo', foo, 1), 0)(J$.T(65, 4, 22, false)));
                                try {
                                    J$.X1(113, J$.F(105, J$.R(89, 'foo', foo, 1), 0)(J$.T(97, 3, 22, false)));
                                } finally {
                                    J$.X1(145, J$.F(137, J$.R(121, 'foo', foo, 1), 0)(J$.T(129, 2, 22, false)));
                                }
                            } finally {
                                J$.X1(177, J$.F(169, J$.R(153, 'foo', foo, 1), 0)(J$.T(161, 1, 22, false)));
                            }
                        } catch (J$e) {
                            J$.Ex(281, J$e);
                        } finally {
                            if (J$.Fr(289))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            foo = J$.N(241, 'foo', J$.T(233, foo, 12, false, 33), 0);
            test = J$.N(257, 'test', J$.T(249, test, 12, false, 185), 0);
            J$.X1(217, J$.F(209, J$.R(201, 'test', test, 1), 0)());
        } catch (J$e) {
            J$.Ex(297, J$e);
        } finally {
            if (J$.Sr(305)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

J$.iids = {"9":[2,5,2,12],"17":[2,17,2,29],"25":[2,5,2,30],"27":[2,5,2,16],"33":[2,5,2,31],"41":[4,7,4,14],"49":[4,19,4,32],"57":[4,7,4,33],"59":[4,7,4,18],"65":[4,7,4,34],"73":[6,9,6,16],"81":[6,21,6,34],"89":[6,9,6,35],"91":[6,9,6,20],"97":[6,9,6,36],"105":[5,14,7,8],"113":[5,14,7,8],"121":[5,14,7,8],"129":[5,14,7,8],"137":[5,14,7,8],"145":[5,7,7,9],"153":[3,12,8,6],"161":[3,12,8,6],"169":[3,12,8,6],"177":[3,12,8,6],"185":[3,12,8,8],"193":[3,12,8,8],"201":[3,5,8,9],"209":[1,1,9,4],"217":[1,1,9,4],"225":[10,1,10,4],"233":[10,1,10,6],"241":[10,1,10,8],"249":[10,1,10,9],"257":[11,10,11,13],"265":[11,10,11,15],"273":[11,10,11,15],"281":[11,10,11,15],"289":[12,1,12,5],"297":[12,1,12,7],"305":[12,1,12,8],"313":[1,1,12,10],"321":[1,1,9,4],"329":[1,1,12,10],"337":[1,1,12,10],"345":[5,14,7,8],"353":[5,14,7,8],"361":[3,12,8,6],"369":[3,12,8,6],"377":[1,1,9,4],"385":[1,1,9,4],"393":[1,1,12,10],"401":[1,1,12,10],"nBranches":0,"originalCodeFileName":"../experiments/examples/example5.js","instrumentedCodeFileName":"../experiments/examples/example5_jalangi_.js","code":"function foo(){\n    console.log(\"foo called\");\n    return function foo2(){\n      console.log(\"foo2 called\");\n      return function foo3(){\n        console.log(\"foo3 called\");\n      };\n    }();\n  }\nfoo()();\nvar foo8=foo();\nfoo8();  "};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(313, '../experiments/examples/example5_jalangi_.js', '../experiments/examples/example5.js');
            function foo() {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(209, arguments.callee, this, arguments);
                            arguments = J$.N(217, 'arguments', arguments, 4);
                            J$.X1(33, J$.M(25, J$.R(9, 'console', console, 2), 'log', 0)(J$.T(17, "foo called", 21, false)));
                            return J$.X1(201, J$.Rt(193, J$.F(185, J$.T(177, function foo2() {
                                jalangiLabel1:
                                    while (true) {
                                        try {
                                            J$.Fe(153, arguments.callee, this, arguments);
                                            arguments = J$.N(161, 'arguments', arguments, 4);
                                            foo2 = J$.N(169, 'foo2', foo2, 0);
                                            J$.X1(65, J$.M(57, J$.R(41, 'console', console, 2), 'log', 0)(J$.T(49, "foo2 called", 21, false)));
                                            return J$.X1(145, J$.Rt(137, J$.T(129, function foo3() {
                                                jalangiLabel0:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(105, arguments.callee, this, arguments);
                                                            arguments = J$.N(113, 'arguments', arguments, 4);
                                                            foo3 = J$.N(121, 'foo3', foo3, 0);
                                                            J$.X1(97, J$.M(89, J$.R(73, 'console', console, 2), 'log', 0)(J$.T(81, "foo3 called", 21, false)));
                                                        } catch (J$e) {
                                                            J$.Ex(345, J$e);
                                                        } finally {
                                                            if (J$.Fr(353))
                                                                continue jalangiLabel0;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }, 12, false, 105)));
                                        } catch (J$e) {
                                            J$.Ex(361, J$e);
                                        } finally {
                                            if (J$.Fr(369))
                                                continue jalangiLabel1;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 153), 0)()));
                        } catch (J$e) {
                            J$.Ex(377, J$e);
                        } finally {
                            if (J$.Fr(385))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }
            foo = J$.N(329, 'foo', J$.T(321, foo, 12, false, 209), 0);
            J$.N(337, 'foo8', foo8, 0);
            J$.X1(249, J$.F(241, J$.F(233, J$.R(225, 'foo', foo, 1), 0)(), 0)());
            var foo8 = J$.X1(281, J$.W(273, 'foo8', J$.F(265, J$.R(257, 'foo', foo, 1), 0)(), foo8, 3));
            J$.X1(305, J$.F(297, J$.R(289, 'foo8', foo8, 1), 0)());
        } catch (J$e) {
            J$.Ex(393, J$e);
        } finally {
            if (J$.Sr(401)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

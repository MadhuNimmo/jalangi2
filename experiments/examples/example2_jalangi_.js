J$.iids = {"9":[2,3,2,10],"17":[2,15,2,27],"25":[2,3,2,28],"27":[2,3,2,14],"33":[2,3,2,29],"41":[4,5,4,12],"49":[4,17,4,30],"57":[4,5,4,31],"59":[4,5,4,16],"65":[4,5,4,32],"73":[6,7,6,14],"81":[6,19,6,32],"89":[6,7,6,33],"91":[6,7,6,18],"97":[6,7,6,34],"105":[5,12,7,6],"113":[5,12,7,6],"121":[5,12,7,6],"129":[5,12,7,6],"137":[5,12,7,6],"145":[5,5,7,7],"153":[3,10,8,4],"161":[3,10,8,4],"169":[3,10,8,4],"177":[3,10,8,4],"185":[3,10,8,6],"193":[3,10,8,6],"201":[3,3,8,7],"209":[1,1,9,2],"217":[1,1,9,2],"225":[10,1,10,4],"233":[10,1,10,6],"241":[10,1,10,8],"249":[10,1,10,9],"257":[11,10,11,13],"265":[11,10,11,15],"273":[11,10,11,15],"281":[11,10,11,15],"289":[12,1,12,5],"297":[12,1,12,7],"305":[12,1,12,8],"313":[1,1,12,8],"321":[1,1,9,2],"329":[1,1,12,8],"337":[1,1,12,8],"345":[5,12,7,6],"353":[5,12,7,6],"361":[3,10,8,4],"369":[3,10,8,4],"377":[1,1,9,2],"385":[1,1,9,2],"393":[1,1,12,8],"401":[1,1,12,8],"nBranches":0,"originalCodeFileName":"../experiments/examples/example2.js","instrumentedCodeFileName":"../experiments/examples/example2_jalangi_.js","code":"function foo(){\r\n  console.log(\"foo called\");\r\n  return function foo2(){\r\n    console.log(\"foo2 called\");\r\n    return function foo3(){\r\n      console.log(\"foo3 called\");\r\n    };\r\n  }();\r\n}\r\nfoo()();\r\nvar foo4=foo();\r\nfoo4();"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(313, '../experiments/examples/example2_jalangi_.js', '../experiments/examples/example2.js');
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
            J$.N(337, 'foo4', foo4, 0);
            J$.X1(249, J$.F(241, J$.F(233, J$.R(225, 'foo', foo, 1), 0)(), 0)());
            var foo4 = J$.X1(281, J$.W(273, 'foo4', J$.F(265, J$.R(257, 'foo', foo, 1), 0)(), foo4, 3));
            J$.X1(305, J$.F(297, J$.R(289, 'foo4', foo4, 1), 0)());
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

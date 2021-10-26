J$.iids = {"8":[6,21,6,25],"9":[6,21,6,25],"17":[9,24,9,25],"25":[9,24,9,25],"33":[9,17,9,26],"41":[8,24,10,18],"49":[8,24,10,18],"57":[8,24,10,18],"65":[8,24,10,18],"73":[8,24,10,18],"81":[8,17,10,19],"89":[7,21,11,18],"97":[7,21,11,18],"105":[7,21,11,18],"113":[7,21,11,18],"121":[7,21,11,18],"129":[7,17,11,19],"137":[15,24,15,25],"145":[15,24,15,25],"153":[15,17,15,26],"161":[14,24,16,18],"169":[14,24,16,18],"177":[14,24,16,18],"185":[14,24,16,18],"193":[14,24,16,18],"201":[14,17,16,19],"209":[13,21,17,18],"217":[13,21,17,18],"225":[13,21,17,18],"233":[13,21,17,18],"241":[13,21,17,18],"249":[13,17,17,19],"257":[19,24,19,25],"265":[19,24,19,27],"273":[19,24,19,27],"281":[19,17,19,27],"289":[5,9,20,10],"297":[5,9,20,10],"305":[5,9,20,10],"313":[21,16,21,19],"321":[21,20,21,34],"329":[21,16,21,35],"337":[21,16,21,35],"345":[21,9,21,36],"353":[22,9,22,14],"361":[22,9,22,16],"369":[22,9,22,17],"377":[1,2,23,8],"385":[1,2,23,8],"393":[1,2,23,8],"401":[1,2,23,8],"409":[5,9,20,10],"417":[1,2,23,8],"425":[1,2,23,8],"433":[1,1,23,11],"441":[1,1,23,12],"449":[1,1,24,7],"457":[8,24,10,18],"465":[8,24,10,18],"473":[7,21,11,18],"481":[7,21,11,18],"489":[14,24,16,18],"497":[14,24,16,18],"505":[13,21,17,18],"513":[13,21,17,18],"521":[6,17,18,18],"529":[5,9,20,10],"537":[5,9,20,10],"545":[1,2,23,8],"553":[1,2,23,8],"561":[1,1,24,7],"569":[1,1,24,7],"nBranches":2,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_allpath.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_allpath_jalangi_.js","code":"(function () {\n\n        var performanceNow;\n        var child;\n        function foo(x){\n                if (true) {\n                x = function performanceNow() {\n                return function XYZ() {\n                return 2;\n                };\n                };\n                } else {\n                x = function performanceNow() {\n                return function XYZ() {\n                return 3;\n                };\n                };\n                }\n                return x()\n        }\n        child= foo(performanceNow);\n        child();\n      })();\n      "};
jalangiLabel6:
    while (true) {
        try {
            J$.Se(449, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_allpath_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_allpath.js');
            J$.X1(441, J$.F(433, J$.T(425, function () {
                jalangiLabel5:
                    while (true) {
                        try {
                            J$.Fe(377, arguments.callee, this, arguments);
                            function foo(x) {
                                jalangiLabel4:
                                    while (true) {
                                        try {
                                            J$.Fe(289, arguments.callee, this, arguments);
                                            arguments = J$.N(297, 'arguments', arguments, 4);
                                            x = J$.N(305, 'x', x, 4);
                                            if (J$.X1(521, J$.C(8, J$.T(9, true, 23, false)))) {
                                                J$.X1(129, x = J$.W(121, 'x', J$.T(113, function performanceNow() {
                                                    jalangiLabel1:
                                                        while (true) {
                                                            try {
                                                                J$.Fe(89, arguments.callee, this, arguments);
                                                                arguments = J$.N(97, 'arguments', arguments, 4);
                                                                performanceNow = J$.N(105, 'performanceNow', performanceNow, 0);
                                                                return J$.X1(81, J$.Rt(73, J$.T(65, function XYZ() {
                                                                    jalangiLabel0:
                                                                        while (true) {
                                                                            try {
                                                                                J$.Fe(41, arguments.callee, this, arguments);
                                                                                arguments = J$.N(49, 'arguments', arguments, 4);
                                                                                XYZ = J$.N(57, 'XYZ', XYZ, 0);
                                                                                return J$.X1(33, J$.Rt(25, J$.T(17, 2, 22, false)));
                                                                            } catch (J$e) {
                                                                                J$.Ex(457, J$e);
                                                                            } finally {
                                                                                if (J$.Fr(465))
                                                                                    continue jalangiLabel0;
                                                                                else
                                                                                    return J$.Ra();
                                                                            }
                                                                        }
                                                                }, 12, false, 41)));
                                                            } catch (J$e) {
                                                                J$.Ex(473, J$e);
                                                            } finally {
                                                                if (J$.Fr(481))
                                                                    continue jalangiLabel1;
                                                                else
                                                                    return J$.Ra();
                                                            }
                                                        }
                                                }, 12, false, 89), x, 0));
                                            } else {
                                                J$.X1(249, x = J$.W(241, 'x', J$.T(233, function performanceNow() {
                                                    jalangiLabel3:
                                                        while (true) {
                                                            try {
                                                                J$.Fe(209, arguments.callee, this, arguments);
                                                                arguments = J$.N(217, 'arguments', arguments, 4);
                                                                performanceNow = J$.N(225, 'performanceNow', performanceNow, 0);
                                                                return J$.X1(201, J$.Rt(193, J$.T(185, function XYZ() {
                                                                    jalangiLabel2:
                                                                        while (true) {
                                                                            try {
                                                                                J$.Fe(161, arguments.callee, this, arguments);
                                                                                arguments = J$.N(169, 'arguments', arguments, 4);
                                                                                XYZ = J$.N(177, 'XYZ', XYZ, 0);
                                                                                return J$.X1(153, J$.Rt(145, J$.T(137, 3, 22, false)));
                                                                            } catch (J$e) {
                                                                                J$.Ex(489, J$e);
                                                                            } finally {
                                                                                if (J$.Fr(497))
                                                                                    continue jalangiLabel2;
                                                                                else
                                                                                    return J$.Ra();
                                                                            }
                                                                        }
                                                                }, 12, false, 161)));
                                                            } catch (J$e) {
                                                                J$.Ex(505, J$e);
                                                            } finally {
                                                                if (J$.Fr(513))
                                                                    continue jalangiLabel3;
                                                                else
                                                                    return J$.Ra();
                                                            }
                                                        }
                                                }, 12, false, 209), x, 0));
                                            }
                                            return J$.X1(281, J$.Rt(273, J$.F(265, J$.R(257, 'x', x, 0), 0)()));
                                        } catch (J$e) {
                                            J$.Ex(529, J$e);
                                        } finally {
                                            if (J$.Fr(537))
                                                continue jalangiLabel4;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(385, 'arguments', arguments, 4);
                            J$.N(393, 'performanceNow', performanceNow, 0);
                            J$.N(401, 'child', child, 0);
                            foo = J$.N(417, 'foo', J$.T(409, foo, 12, false, 289), 0);
                            var performanceNow;
                            var child;
                            J$.X1(345, child = J$.W(337, 'child', J$.F(329, J$.R(313, 'foo', foo, 0), 0)(J$.R(321, 'performanceNow', performanceNow, 0)), child, 0));
                            J$.X1(369, J$.F(361, J$.R(353, 'child', child, 0), 0)());
                        } catch (J$e) {
                            J$.Ex(545, J$e);
                        } finally {
                            if (J$.Fr(553))
                                continue jalangiLabel5;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 377), 0)());
        } catch (J$e) {
            J$.Ex(561, J$e);
        } finally {
            if (J$.Sr(569)) {
                J$.L();
                continue jalangiLabel6;
            } else {
                J$.L();
                break jalangiLabel6;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

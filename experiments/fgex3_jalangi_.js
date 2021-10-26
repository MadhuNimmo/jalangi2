J$.iids = {"9":[4,14,4,15],"17":[4,14,4,15],"25":[4,7,4,16],"33":[3,5,5,6],"41":[3,5,5,6],"49":[3,5,5,6],"57":[7,14,7,15],"65":[7,14,7,15],"73":[7,7,7,16],"81":[6,5,8,6],"89":[6,5,8,6],"97":[6,5,8,6],"105":[2,10,9,4],"113":[2,10,9,4],"121":[2,3,9,5],"129":[1,1,10,2],"137":[1,1,10,2],"145":[12,14,12,17],"153":[12,10,12,19],"161":[12,20,12,21],"169":[12,10,12,22],"177":[12,10,12,22],"185":[12,3,12,23],"193":[11,11,13,2],"201":[11,11,13,2],"209":[11,11,13,2],"217":[11,11,13,2],"225":[11,11,13,2],"233":[14,1,14,4],"241":[14,1,14,6],"249":[14,1,14,8],"257":[14,1,14,9],"265":[1,1,15,1],"273":[1,1,10,2],"281":[1,1,15,1],"289":[1,1,15,1],"297":[3,5,5,6],"305":[3,5,5,6],"313":[6,5,8,6],"321":[6,5,8,6],"329":[1,1,10,2],"337":[1,1,10,2],"345":[11,11,13,2],"353":[11,11,13,2],"361":[1,1,15,1],"369":[1,1,15,1],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex3.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex3_jalangi_.js","code":"function bar() {\n  return [\n    function () {\n      return 0;\n    },\n    function () {\n      return 1;\n    },\n  ];\n}\nvar foo = function () {\n  return new bar()[0];\n};\nfoo()();\n"};
jalangiLabel4:
    while (true) {
        try {
            J$.Se(265, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex3_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex3.js');
            function bar() {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(129, arguments.callee, this, arguments);
                            arguments = J$.N(137, 'arguments', arguments, 4);
                            return J$.X1(121, J$.Rt(113, J$.T(105, [
                                J$.T(49, function () {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(33, arguments.callee, this, arguments);
                                                arguments = J$.N(41, 'arguments', arguments, 4);
                                                return J$.X1(25, J$.Rt(17, J$.T(9, 0, 22, false)));
                                            } catch (J$e) {
                                                J$.Ex(297, J$e);
                                            } finally {
                                                if (J$.Fr(305))
                                                    continue jalangiLabel0;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 33),
                                J$.T(97, function () {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(81, arguments.callee, this, arguments);
                                                arguments = J$.N(89, 'arguments', arguments, 4);
                                                return J$.X1(73, J$.Rt(65, J$.T(57, 1, 22, false)));
                                            } catch (J$e) {
                                                J$.Ex(313, J$e);
                                            } finally {
                                                if (J$.Fr(321))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 81)
                            ], 10, false)));
                        } catch (J$e) {
                            J$.Ex(329, J$e);
                        } finally {
                            if (J$.Fr(337))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }
            bar = J$.N(281, 'bar', J$.T(273, bar, 12, false, 129), 0);
            J$.N(289, 'foo', foo, 0);
            var foo = J$.X1(225, J$.W(217, 'foo', J$.T(209, function () {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(193, arguments.callee, this, arguments);
                            arguments = J$.N(201, 'arguments', arguments, 4);
                            return J$.X1(185, J$.Rt(177, J$.G(169, J$.F(153, J$.R(145, 'bar', bar, 1), 1)(), J$.T(161, 0, 22, false), 4)));
                        } catch (J$e) {
                            J$.Ex(345, J$e);
                        } finally {
                            if (J$.Fr(353))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 193), foo, 3));
            J$.X1(257, J$.F(249, J$.F(241, J$.R(233, 'foo', foo, 1), 0)(), 0)());
        } catch (J$e) {
            J$.Ex(361, J$e);
        } finally {
            if (J$.Sr(369)) {
                J$.L();
                continue jalangiLabel4;
            } else {
                J$.L();
                break jalangiLabel4;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

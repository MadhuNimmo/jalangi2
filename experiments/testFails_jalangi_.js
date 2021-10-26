J$.iids = {"9":[3,12,3,15],"10":[6,25,6,38],"17":[3,12,3,15],"18":[6,25,6,44],"25":[3,5,3,16],"33":[2,11,4,4],"41":[2,11,4,4],"49":[2,11,4,4],"57":[2,11,4,4],"65":[2,11,4,4],"73":[6,16,6,24],"81":[6,25,6,34],"89":[6,37,6,38],"97":[6,41,6,44],"105":[6,12,6,45],"113":[6,12,6,45],"121":[6,5,6,46],"129":[5,3,7,4],"137":[5,3,7,4],"145":[8,14,8,17],"153":[8,14,8,19],"161":[8,14,8,19],"169":[8,14,8,19],"177":[9,15,9,19],"185":[9,15,9,21],"193":[9,15,9,21],"201":[9,15,9,21],"209":[10,3,10,8],"217":[10,3,10,10],"225":[10,3,10,11],"233":[1,2,11,2],"241":[1,2,11,2],"249":[1,2,11,2],"257":[5,3,7,4],"265":[1,2,11,2],"273":[1,2,11,2],"281":[1,2,11,2],"289":[1,2,11,2],"297":[1,1,11,5],"305":[1,1,11,6],"313":[1,1,12,1],"321":[2,11,4,4],"329":[2,11,4,4],"337":[5,3,7,4],"345":[5,3,7,4],"353":[1,2,11,2],"361":[1,2,11,2],"369":[1,1,12,1],"377":[1,1,12,1],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/testFails.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/testFails_jalangi_.js","code":"(function () {\n  var z = function () {\n    return \"z\";\n  };\n  function bar() {\n    return new Function(\"return(\" + z + \")\");\n  }\n  var next = bar();\n  var final = next();\n  final();\n})();\n"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(313, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/testFails_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/testFails.js');
            J$.X1(305, J$.F(297, J$.T(289, function () {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(233, arguments.callee, this, arguments);
                            function bar() {
                                jalangiLabel1:
                                    while (true) {
                                        try {
                                            J$.Fe(129, arguments.callee, this, arguments);
                                            arguments = J$.N(137, 'arguments', arguments, 4);
                                            return J$.X1(121, J$.Rt(113, J$.F(105, J$.R(73, 'Function', Function, 2), 1)(J$.B(18, '+', J$.B(10, '+', J$.T(81, "return(", 21, false), J$.R(89, 'z', z, 0), 0), J$.T(97, ")", 21, false), 0))));
                                        } catch (J$e) {
                                            J$.Ex(337, J$e);
                                        } finally {
                                            if (J$.Fr(345))
                                                continue jalangiLabel1;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(241, 'arguments', arguments, 4);
                            J$.N(249, 'z', z, 0);
                            bar = J$.N(265, 'bar', J$.T(257, bar, 12, false, 129), 0);
                            J$.N(273, 'next', next, 0);
                            J$.N(281, 'final', final, 0);
                            var z = J$.X1(65, J$.W(57, 'z', J$.T(49, function () {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(33, arguments.callee, this, arguments);
                                            arguments = J$.N(41, 'arguments', arguments, 4);
                                            return J$.X1(25, J$.Rt(17, J$.T(9, "z", 21, false)));
                                        } catch (J$e) {
                                            J$.Ex(321, J$e);
                                        } finally {
                                            if (J$.Fr(329))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 33), z, 1));
                            var next = J$.X1(169, J$.W(161, 'next', J$.F(153, J$.R(145, 'bar', bar, 0), 0)(), next, 1));
                            var final = J$.X1(201, J$.W(193, 'final', J$.F(185, J$.R(177, 'next', next, 0), 0)(), final, 1));
                            J$.X1(225, J$.F(217, J$.R(209, 'final', final, 0), 0)());
                        } catch (J$e) {
                            J$.Ex(353, J$e);
                        } finally {
                            if (J$.Fr(361))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 233), 0)());
        } catch (J$e) {
            J$.Ex(369, J$e);
        } finally {
            if (J$.Sr(377)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

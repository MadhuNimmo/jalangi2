J$.iids = {"9":[2,11,2,13],"17":[2,11,2,13],"25":[2,11,2,13],"33":[3,11,3,13],"41":[3,11,3,13],"49":[3,11,3,13],"57":[5,5,5,12],"65":[5,5,5,12],"73":[4,3,6,4],"81":[4,3,6,4],"89":[4,3,6,4],"97":[7,3,7,4],"105":[7,5,7,6],"113":[7,10,7,13],"121":[7,3,7,13],"129":[7,3,7,14],"137":[8,3,8,4],"145":[8,5,8,6],"153":[8,10,8,13],"161":[8,3,8,13],"169":[8,3,8,14],"177":[9,3,9,4],"185":[9,5,9,6],"193":[9,3,9,9],"195":[9,3,9,7],"201":[9,3,9,10],"209":[10,3,10,4],"217":[10,5,10,6],"225":[10,3,10,9],"227":[10,3,10,7],"233":[10,3,10,10],"241":[1,2,11,2],"249":[1,2,11,2],"257":[1,2,11,2],"265":[1,2,11,2],"273":[4,3,6,4],"281":[1,2,11,2],"289":[1,2,11,2],"297":[1,1,11,5],"305":[1,1,11,6],"313":[1,1,12,1],"321":[4,3,6,4],"329":[4,3,6,4],"337":[1,2,11,2],"345":[1,2,11,2],"353":[1,1,12,1],"361":[1,1,12,1],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_getput2.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_getput2_jalangi_.js","code":"(function () {\n  var x = [];\n  var y = [];\n  function foo(f) {\n    return;\n  }\n  x[0] = foo;\n  y[0] = foo;\n  y[0]();\n  x[0]();\n})();\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(313, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_getput2_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_getput2.js');
            J$.X1(305, J$.F(297, J$.T(289, function () {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(241, arguments.callee, this, arguments);
                            function foo(f) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(73, arguments.callee, this, arguments);
                                            arguments = J$.N(81, 'arguments', arguments, 4);
                                            f = J$.N(89, 'f', f, 4);
                                            return J$.X1(65, J$.Rt(57, undefined));
                                        } catch (J$e) {
                                            J$.Ex(321, J$e);
                                        } finally {
                                            if (J$.Fr(329))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(249, 'arguments', arguments, 4);
                            J$.N(257, 'x', x, 0);
                            J$.N(265, 'y', y, 0);
                            foo = J$.N(281, 'foo', J$.T(273, foo, 12, false, 73), 0);
                            var x = J$.X1(25, J$.W(17, 'x', J$.T(9, [], 10, false), x, 1));
                            var y = J$.X1(49, J$.W(41, 'y', J$.T(33, [], 10, false), y, 1));
                            J$.X1(129, J$.P(121, J$.R(97, 'x', x, 0), J$.T(105, 0, 22, false), J$.R(113, 'foo', foo, 0), 2));
                            J$.X1(169, J$.P(161, J$.R(137, 'y', y, 0), J$.T(145, 0, 22, false), J$.R(153, 'foo', foo, 0), 2));
                            J$.X1(201, J$.M(193, J$.R(177, 'y', y, 0), J$.T(185, 0, 22, false), 1)());
                            J$.X1(233, J$.M(225, J$.R(209, 'x', x, 0), J$.T(217, 0, 22, false), 1)());
                        } catch (J$e) {
                            J$.Ex(337, J$e);
                        } finally {
                            if (J$.Fr(345))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 241), 0)());
        } catch (J$e) {
            J$.Ex(353, J$e);
        } finally {
            if (J$.Sr(361)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

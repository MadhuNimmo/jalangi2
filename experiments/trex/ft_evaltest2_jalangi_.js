J$.iids = {"9":[2,17,2,19],"10":[4,21,4,29],"17":[2,17,2,19],"18":[5,30,5,43],"25":[2,17,2,19],"33":[3,9,3,12],"41":[3,13,3,18],"49":[3,41,3,44],"57":[3,41,3,44],"65":[3,34,3,44],"73":[3,22,3,45],"81":[3,22,3,45],"89":[3,22,3,45],"97":[3,9,3,45],"105":[3,9,3,45],"113":[4,17,4,20],"121":[4,21,4,24],"129":[4,25,4,29],"137":[4,17,4,30],"145":[4,17,4,30],"153":[4,17,4,30],"161":[5,21,5,29],"169":[5,30,5,39],"177":[5,42,5,43],"185":[5,17,5,44],"193":[5,17,5,44],"201":[5,17,5,44],"209":[6,9,6,10],"217":[6,9,6,12],"225":[6,9,6,14],"233":[6,9,6,14],"241":[1,2,7,2],"249":[1,2,7,2],"257":[1,2,7,2],"265":[1,2,7,2],"273":[1,2,7,2],"281":[1,2,7,2],"289":[1,1,7,5],"297":[1,1,7,5],"305":[1,1,7,5],"313":[3,22,3,45],"321":[3,22,3,45],"329":[1,2,7,2],"337":[1,2,7,2],"345":[1,1,7,5],"353":[1,1,7,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_evaltest2.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_evaltest2_jalangi_.js","code":"(function(){\n        var obj={}\n        obj[\"xyz\"] = function(){ return \"X\"}\n        var y = obj[\"x\"+\"yz\"]\n        var x = new Function(\"return \" + y);\n        x()()\n})()"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(305, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_evaltest2_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_evaltest2.js');
            J$.X1(297, J$.F(289, J$.T(281, function () {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(241, arguments.callee, this, arguments);
                            arguments = J$.N(249, 'arguments', arguments, 4);
                            J$.N(257, 'obj', obj, 0);
                            J$.N(265, 'y', y, 0);
                            J$.N(273, 'x', x, 0);
                            var obj = J$.X1(25, J$.W(17, 'obj', J$.T(9, {}, 11, false), obj, 1));
                            J$.X1(105, J$.P(97, J$.R(33, 'obj', obj, 0), J$.T(41, "xyz", 21, false), J$.T(89, function () {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(73, arguments.callee, this, arguments);
                                            arguments = J$.N(81, 'arguments', arguments, 4);
                                            return J$.X1(65, J$.Rt(57, J$.T(49, "X", 21, false)));
                                        } catch (J$e) {
                                            J$.Ex(313, J$e);
                                        } finally {
                                            if (J$.Fr(321))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 73), 2));
                            var y = J$.X1(153, J$.W(145, 'y', J$.G(137, J$.R(113, 'obj', obj, 0), J$.B(10, '+', J$.T(121, "x", 21, false), J$.T(129, "yz", 21, false), 0), 4), y, 1));
                            var x = J$.X1(201, J$.W(193, 'x', J$.F(185, J$.R(161, 'Function', Function, 2), 1)(J$.B(18, '+', J$.T(169, "return ", 21, false), J$.R(177, 'y', y, 0), 0)), x, 1));
                            J$.X1(233, J$.F(225, J$.F(217, J$.R(209, 'x', x, 0), 0)(), 0)());
                        } catch (J$e) {
                            J$.Ex(329, J$e);
                        } finally {
                            if (J$.Fr(337))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 241), 0)());
        } catch (J$e) {
            J$.Ex(345, J$e);
        } finally {
            if (J$.Sr(353)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

J$.iids = {"9":[3,39,3,40],"17":[3,39,3,40],"25":[3,32,3,41],"33":[3,19,3,43],"41":[3,19,3,43],"49":[3,19,3,43],"57":[3,19,3,43],"65":[3,19,3,43],"73":[4,42,4,45],"81":[4,42,4,47],"89":[4,42,4,47],"97":[4,35,4,48],"105":[4,19,4,49],"113":[4,19,4,49],"121":[4,19,4,49],"129":[4,19,4,49],"137":[4,19,4,49],"145":[4,19,4,49],"153":[5,42,5,45],"161":[5,42,5,47],"169":[5,42,5,47],"177":[5,35,5,48],"185":[5,19,5,50],"193":[5,19,5,50],"201":[5,19,5,50],"209":[5,19,5,50],"217":[5,19,5,50],"225":[5,19,5,50],"233":[6,11,6,12],"241":[6,24,6,25],"249":[6,26,6,27],"257":[6,24,6,28],"265":[6,24,6,28],"273":[6,13,6,29],"281":[6,13,6,29],"289":[6,13,6,29],"297":[6,11,6,30],"305":[6,11,6,31],"313":[2,9,7,10],"321":[2,9,7,10],"329":[2,9,7,10],"337":[2,9,7,10],"345":[2,9,7,10],"353":[8,9,8,13],"361":[8,9,8,15],"369":[8,9,8,16],"377":[1,2,9,8],"385":[1,2,9,8],"393":[2,9,7,10],"401":[1,2,9,8],"409":[1,2,9,8],"417":[1,1,9,11],"425":[1,1,9,12],"433":[1,1,9,12],"441":[3,19,3,43],"449":[3,19,3,43],"457":[4,19,4,49],"465":[4,19,4,49],"473":[5,19,5,50],"481":[5,19,5,50],"489":[6,13,6,29],"497":[6,13,6,29],"505":[2,9,7,10],"513":[2,9,7,10],"521":[1,2,9,8],"529":[1,2,9,8],"537":[1,1,9,12],"545":[1,1,9,12],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_funcinpar.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_funcinpar_jalangi_.js","code":"(function () {\n        function main(){\n          var x = function() { return 2; } \n          var y = function(inp) { return inp();}\n          var z = function(ans) { return ans(); } \n          z(function(){y(x)});\n        }\n        main();\n      })();"};
jalangiLabel6:
    while (true) {
        try {
            J$.Se(433, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_funcinpar_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_funcinpar.js');
            J$.X1(425, J$.F(417, J$.T(409, function () {
                jalangiLabel5:
                    while (true) {
                        try {
                            J$.Fe(377, arguments.callee, this, arguments);
                            function main() {
                                jalangiLabel4:
                                    while (true) {
                                        try {
                                            J$.Fe(313, arguments.callee, this, arguments);
                                            arguments = J$.N(321, 'arguments', arguments, 4);
                                            J$.N(329, 'x', x, 0);
                                            J$.N(337, 'y', y, 0);
                                            J$.N(345, 'z', z, 0);
                                            var x = J$.X1(65, J$.W(57, 'x', J$.T(49, function () {
                                                jalangiLabel0:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(33, arguments.callee, this, arguments);
                                                            arguments = J$.N(41, 'arguments', arguments, 4);
                                                            return J$.X1(25, J$.Rt(17, J$.T(9, 2, 22, false)));
                                                        } catch (J$e) {
                                                            J$.Ex(441, J$e);
                                                        } finally {
                                                            if (J$.Fr(449))
                                                                continue jalangiLabel0;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }, 12, false, 33), x, 1));
                                            var y = J$.X1(145, J$.W(137, 'y', J$.T(129, function (inp) {
                                                jalangiLabel1:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(105, arguments.callee, this, arguments);
                                                            arguments = J$.N(113, 'arguments', arguments, 4);
                                                            inp = J$.N(121, 'inp', inp, 4);
                                                            return J$.X1(97, J$.Rt(89, J$.F(81, J$.R(73, 'inp', inp, 0), 0)()));
                                                        } catch (J$e) {
                                                            J$.Ex(457, J$e);
                                                        } finally {
                                                            if (J$.Fr(465))
                                                                continue jalangiLabel1;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }, 12, false, 105), y, 1));
                                            var z = J$.X1(225, J$.W(217, 'z', J$.T(209, function (ans) {
                                                jalangiLabel2:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(185, arguments.callee, this, arguments);
                                                            arguments = J$.N(193, 'arguments', arguments, 4);
                                                            ans = J$.N(201, 'ans', ans, 4);
                                                            return J$.X1(177, J$.Rt(169, J$.F(161, J$.R(153, 'ans', ans, 0), 0)()));
                                                        } catch (J$e) {
                                                            J$.Ex(473, J$e);
                                                        } finally {
                                                            if (J$.Fr(481))
                                                                continue jalangiLabel2;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }, 12, false, 185), z, 1));
                                            J$.X1(305, J$.F(297, J$.R(233, 'z', z, 0), 0)(J$.T(289, function () {
                                                jalangiLabel3:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(273, arguments.callee, this, arguments);
                                                            arguments = J$.N(281, 'arguments', arguments, 4);
                                                            J$.X1(265, J$.F(257, J$.R(241, 'y', y, 0), 0)(J$.R(249, 'x', x, 0)));
                                                        } catch (J$e) {
                                                            J$.Ex(489, J$e);
                                                        } finally {
                                                            if (J$.Fr(497))
                                                                continue jalangiLabel3;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }, 12, false, 273)));
                                        } catch (J$e) {
                                            J$.Ex(505, J$e);
                                        } finally {
                                            if (J$.Fr(513))
                                                continue jalangiLabel4;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(385, 'arguments', arguments, 4);
                            main = J$.N(401, 'main', J$.T(393, main, 12, false, 313), 0);
                            J$.X1(369, J$.F(361, J$.R(353, 'main', main, 0), 0)());
                        } catch (J$e) {
                            J$.Ex(521, J$e);
                        } finally {
                            if (J$.Fr(529))
                                continue jalangiLabel5;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 377), 0)());
        } catch (J$e) {
            J$.Ex(537, J$e);
        } finally {
            if (J$.Sr(545)) {
                J$.L();
                continue jalangiLabel6;
            } else {
                J$.L();
                break jalangiLabel6;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

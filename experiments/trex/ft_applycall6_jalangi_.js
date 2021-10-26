J$.iids = {"9":[4,14,4,19],"10":[11,17,11,27],"17":[4,14,4,19],"25":[4,7,4,20],"33":[3,10,5,6],"41":[3,10,5,6],"49":[3,10,5,6],"57":[7,14,7,15],"65":[7,14,7,15],"73":[7,7,7,16],"81":[6,10,8,6],"89":[6,10,8,6],"97":[6,10,8,6],"105":[6,10,8,6],"113":[2,13,9,4],"121":[2,13,9,4],"129":[2,13,9,4],"137":[11,13,11,16],"145":[11,17,11,21],"153":[11,24,11,27],"161":[11,13,11,28],"169":[11,35,11,39],"177":[11,42,11,45],"185":[11,46,11,51],"193":[11,42,11,52],"201":[11,41,11,53],"209":[11,13,11,54],"211":[11,13,11,34],"217":[11,13,11,54],"225":[11,13,11,54],"233":[13,5,13,6],"241":[13,13,13,17],"249":[13,5,13,18],"251":[13,5,13,12],"257":[13,5,13,19],"265":[10,3,14,4],"273":[10,3,14,4],"281":[10,3,14,4],"289":[15,3,15,7],"297":[15,3,15,9],"305":[15,3,15,10],"313":[1,2,16,2],"321":[1,2,16,2],"329":[1,2,16,2],"337":[10,3,14,4],"345":[1,2,16,2],"353":[1,2,16,2],"361":[1,1,16,5],"369":[1,1,16,6],"377":[1,1,17,1],"385":[3,10,5,6],"393":[3,10,5,6],"401":[6,10,8,6],"409":[6,10,8,6],"417":[10,3,14,4],"425":[10,3,14,4],"433":[1,2,16,2],"441":[1,2,16,2],"449":[1,1,17,1],"457":[1,1,17,1],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_applycall6.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_applycall6_jalangi_.js","code":"(function () {\n  var obj = {\n    bar: function () {\n      return \"bar\";\n    },\n    foo: function (x) {\n      return x;\n    },\n  };\n  function main() {\n    var y = obj[\"fo\" + \"o\"].apply(this, [obj[\"bar\"]]);\n    //y = y[y.length - 1];\n    y.apply(this);\n  }\n  main();\n})();\n"};
jalangiLabel4:
    while (true) {
        try {
            J$.Se(377, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_applycall6_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_applycall6.js');
            J$.X1(369, J$.F(361, J$.T(353, function () {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(313, arguments.callee, this, arguments);
                            function main() {
                                jalangiLabel2:
                                    while (true) {
                                        try {
                                            J$.Fe(265, arguments.callee, this, arguments);
                                            arguments = J$.N(273, 'arguments', arguments, 4);
                                            J$.N(281, 'y', y, 0);
                                            var y = J$.X1(225, J$.W(217, 'y', J$.M(209, J$.G(161, J$.R(137, 'obj', obj, 0), J$.B(10, '+', J$.T(145, "fo", 21, false), J$.T(153, "o", 21, false), 0), 4), 'apply', 0)(J$.R(169, 'this', this, 0), J$.T(201, [J$.G(193, J$.R(177, 'obj', obj, 0), J$.T(185, "bar", 21, false), 4)], 10, false)), y, 1));
                                            J$.X1(257, J$.M(249, J$.R(233, 'y', y, 0), 'apply', 0)(J$.R(241, 'this', this, 0)));
                                        } catch (J$e) {
                                            J$.Ex(417, J$e);
                                        } finally {
                                            if (J$.Fr(425))
                                                continue jalangiLabel2;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(321, 'arguments', arguments, 4);
                            J$.N(329, 'obj', obj, 0);
                            main = J$.N(345, 'main', J$.T(337, main, 12, false, 265), 0);
                            var obj = J$.X1(129, J$.W(121, 'obj', J$.T(113, {
                                bar: J$.T(49, function () {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(33, arguments.callee, this, arguments);
                                                arguments = J$.N(41, 'arguments', arguments, 4);
                                                return J$.X1(25, J$.Rt(17, J$.T(9, "bar", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(385, J$e);
                                            } finally {
                                                if (J$.Fr(393))
                                                    continue jalangiLabel0;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 33),
                                foo: J$.T(105, function (x) {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(81, arguments.callee, this, arguments);
                                                arguments = J$.N(89, 'arguments', arguments, 4);
                                                x = J$.N(97, 'x', x, 4);
                                                return J$.X1(73, J$.Rt(65, J$.R(57, 'x', x, 0)));
                                            } catch (J$e) {
                                                J$.Ex(401, J$e);
                                            } finally {
                                                if (J$.Fr(409))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 81)
                            }, 11, false), obj, 1));
                            J$.X1(305, J$.F(297, J$.R(289, 'main', main, 0), 0)());
                        } catch (J$e) {
                            J$.Ex(433, J$e);
                        } finally {
                            if (J$.Fr(441))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 313), 0)());
        } catch (J$e) {
            J$.Ex(449, J$e);
        } finally {
            if (J$.Sr(457)) {
                J$.L();
                continue jalangiLabel4;
            } else {
                J$.L();
                break jalangiLabel4;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

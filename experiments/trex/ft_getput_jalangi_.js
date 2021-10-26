J$.iids = {"9":[2,17,2,19],"17":[2,17,2,19],"25":[2,17,2,19],"33":[3,17,3,19],"41":[3,17,3,19],"49":[3,17,3,19],"57":[6,24,6,29],"65":[6,24,6,29],"73":[6,17,6,30],"81":[5,23,7,16],"89":[5,23,7,16],"97":[5,23,7,16],"105":[9,32,9,37],"113":[9,32,9,37],"121":[9,25,9,38],"129":[8,23,10,16],"137":[8,23,10,16],"145":[8,23,10,16],"153":[4,17,11,10],"161":[4,17,11,10],"169":[4,17,11,10],"177":[12,17,12,18],"185":[12,17,12,22],"193":[12,17,12,22],"201":[12,17,12,22],"209":[13,17,13,18],"217":[13,17,13,18],"225":[13,17,13,18],"233":[14,17,14,18],"241":[14,17,14,22],"249":[14,17,14,22],"257":[14,17,14,22],"265":[15,9,15,10],"273":[15,17,15,18],"281":[15,9,15,18],"289":[15,9,15,18],"297":[16,9,16,10],"305":[16,17,16,18],"313":[16,9,16,18],"321":[16,9,16,19],"329":[1,2,17,2],"337":[1,2,17,2],"345":[1,2,17,2],"353":[1,2,17,2],"361":[1,2,17,2],"369":[1,2,17,2],"377":[1,2,17,2],"385":[1,2,17,2],"393":[1,1,17,5],"401":[1,1,17,6],"409":[1,1,17,6],"417":[5,23,7,16],"425":[5,23,7,16],"433":[8,23,10,16],"441":[8,23,10,16],"449":[1,2,17,2],"457":[1,2,17,2],"465":[1,1,17,6],"473":[1,1,17,6],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_getput.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_getput_jalangi_.js","code":"(function () {\n        var x = {};\n        var z = {};\n        var y = {\n                foo : function() {\n                return \"foo\";\n              },\n                bar : function() {\n                        return \"bar\";\n              },\n        };\n        var z = y.foo;\n        var w = z\n        var n = y.bar;\n        z.bar = n\n        x.foo = w;\n})();"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(409, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_getput_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_getput.js');
            J$.X1(401, J$.F(393, J$.T(385, function () {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(329, arguments.callee, this, arguments);
                            arguments = J$.N(337, 'arguments', arguments, 4);
                            J$.N(345, 'x', x, 0);
                            J$.N(353, 'z', z, 0);
                            J$.N(361, 'y', y, 0);
                            J$.N(369, 'w', w, 0);
                            J$.N(377, 'n', n, 0);
                            var x = J$.X1(25, J$.W(17, 'x', J$.T(9, {}, 11, false), x, 1));
                            var z = J$.X1(49, J$.W(41, 'z', J$.T(33, {}, 11, false), z, 1));
                            var y = J$.X1(169, J$.W(161, 'y', J$.T(153, {
                                foo: J$.T(97, function () {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(81, arguments.callee, this, arguments);
                                                arguments = J$.N(89, 'arguments', arguments, 4);
                                                return J$.X1(73, J$.Rt(65, J$.T(57, "foo", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(417, J$e);
                                            } finally {
                                                if (J$.Fr(425))
                                                    continue jalangiLabel0;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 81),
                                bar: J$.T(145, function () {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(129, arguments.callee, this, arguments);
                                                arguments = J$.N(137, 'arguments', arguments, 4);
                                                return J$.X1(121, J$.Rt(113, J$.T(105, "bar", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(433, J$e);
                                            } finally {
                                                if (J$.Fr(441))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 129)
                            }, 11, false), y, 1));
                            var z = J$.X1(201, J$.W(193, 'z', J$.G(185, J$.R(177, 'y', y, 0), 'foo', 0), z, 1));
                            var w = J$.X1(225, J$.W(217, 'w', J$.R(209, 'z', z, 0), w, 1));
                            var n = J$.X1(257, J$.W(249, 'n', J$.G(241, J$.R(233, 'y', y, 0), 'bar', 0), n, 1));
                            J$.X1(289, J$.P(281, J$.R(265, 'z', z, 0), 'bar', J$.R(273, 'n', n, 0), 0));
                            J$.X1(321, J$.P(313, J$.R(297, 'x', x, 0), 'foo', J$.R(305, 'w', w, 0), 0));
                        } catch (J$e) {
                            J$.Ex(449, J$e);
                        } finally {
                            if (J$.Fr(457))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 329), 0)());
        } catch (J$e) {
            J$.Ex(465, J$e);
        } finally {
            if (J$.Sr(473)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

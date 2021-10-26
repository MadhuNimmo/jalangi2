J$.iids = {"8":[11,17,11,22],"9":[3,33,3,36],"10":[9,14,9,17],"16":[9,14,9,17],"17":[3,37,3,42],"18":[9,18,9,21],"25":[3,33,3,43],"33":[3,33,3,43],"34":[9,18,9,21],"41":[3,26,3,43],"42":[11,17,11,22],"49":[3,14,3,44],"50":[11,27,11,35],"57":[3,14,3,44],"65":[3,14,3,44],"73":[5,24,6,18],"81":[5,24,6,18],"89":[5,24,6,18],"97":[5,24,6,18],"105":[5,24,6,18],"113":[5,17,6,19],"121":[4,14,7,10],"129":[4,14,7,10],"137":[4,14,7,10],"145":[2,17,8,10],"153":[2,17,8,10],"161":[2,17,8,10],"169":[9,11,9,12],"177":[9,11,9,12],"185":[9,11,9,12],"193":[9,14,9,15],"201":[9,16,9,17],"217":[9,18,9,19],"225":[9,18,9,21],"241":[11,17,11,18],"249":[11,21,11,22],"257":[11,23,11,26],"265":[11,27,11,31],"273":[11,32,11,35],"281":[11,23,11,38],"283":[11,23,11,36],"289":[11,39,11,42],"297":[11,43,11,48],"305":[11,39,11,49],"313":[11,17,11,49],"321":[11,17,11,49],"329":[12,9,12,10],"337":[12,9,12,12],"345":[12,9,12,14],"353":[12,9,12,15],"361":[1,2,14,2],"369":[1,2,14,2],"377":[1,2,14,2],"385":[1,2,14,2],"393":[1,2,14,2],"401":[1,2,14,2],"409":[1,1,14,5],"417":[1,1,14,5],"425":[1,1,14,5],"433":[3,14,3,44],"441":[3,14,3,44],"449":[5,24,6,18],"457":[5,24,6,18],"465":[4,14,7,10],"473":[4,14,7,10],"481":[11,17,11,49],"489":[9,1,13,2],"497":[9,1,13,2],"505":[1,2,14,2],"513":[1,2,14,2],"521":[1,1,14,5],"529":[1,1,14,5],"nBranches":4,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_rets3.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_rets3_jalangi_.js","code":"(function(){\n        var obj={\n        foo: function(){ return obj[\"bar\"]},\n        bar: function(){\n                return function foo3(){\n                };\n        }\n        }\nfor(var i=0; i<2;i++){\n        \n        var x = i===1?obj[\"fo\"+\"o\"]():obj[\"bar\"];\n        x()();\n}\n})()"};
jalangiLabel4:
    while (true) {
        try {
            J$.Se(425, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_rets3_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_rets3.js');
            J$.X1(417, J$.F(409, J$.T(401, function () {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(361, arguments.callee, this, arguments);
                            arguments = J$.N(369, 'arguments', arguments, 4);
                            J$.N(377, 'obj', obj, 0);
                            J$.N(385, 'i', i, 0);
                            J$.N(393, 'x', x, 0);
                            var obj = J$.X1(161, J$.W(153, 'obj', J$.T(145, {
                                foo: J$.T(65, function () {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(49, arguments.callee, this, arguments);
                                                arguments = J$.N(57, 'arguments', arguments, 4);
                                                return J$.X1(41, J$.Rt(33, J$.G(25, J$.R(9, 'obj', obj, 0), J$.T(17, "bar", 21, false), 4)));
                                            } catch (J$e) {
                                                J$.Ex(433, J$e);
                                            } finally {
                                                if (J$.Fr(441))
                                                    continue jalangiLabel0;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 49),
                                bar: J$.T(137, function () {
                                    jalangiLabel2:
                                        while (true) {
                                            try {
                                                J$.Fe(121, arguments.callee, this, arguments);
                                                arguments = J$.N(129, 'arguments', arguments, 4);
                                                return J$.X1(113, J$.Rt(105, J$.T(97, function foo3() {
                                                    jalangiLabel1:
                                                        while (true) {
                                                            try {
                                                                J$.Fe(73, arguments.callee, this, arguments);
                                                                arguments = J$.N(81, 'arguments', arguments, 4);
                                                                foo3 = J$.N(89, 'foo3', foo3, 0);
                                                            } catch (J$e) {
                                                                J$.Ex(449, J$e);
                                                            } finally {
                                                                if (J$.Fr(457))
                                                                    continue jalangiLabel1;
                                                                else
                                                                    return J$.Ra();
                                                            }
                                                        }
                                                }, 12, false, 73)));
                                            } catch (J$e) {
                                                J$.Ex(465, J$e);
                                            } finally {
                                                if (J$.Fr(473))
                                                    continue jalangiLabel2;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 121)
                            }, 11, false), obj, 1));
                            for (var i = J$.X1(185, J$.W(177, 'i', J$.T(169, 0, 22, false), i, 1)); J$.X1(489, J$.C(16, J$.B(10, '<', J$.R(193, 'i', i, 0), J$.T(201, 2, 22, false), 0))); J$.X1(497, J$.B(34, '-', i = J$.W(225, 'i', J$.B(26, '+', J$.U(18, '+', J$.R(217, 'i', i, 0)), J$.T(209, 1, 22, false), 0), i, 0), J$.T(233, 1, 22, false), 0))) {
                                var x = J$.X1(321, J$.W(313, 'x', J$.X1(481, J$.C(8, J$.B(42, '===', J$.R(241, 'i', i, 0), J$.T(249, 1, 22, false), 0))) ? J$.M(281, J$.R(257, 'obj', obj, 0), J$.B(50, '+', J$.T(265, "fo", 21, false), J$.T(273, "o", 21, false), 0), 1)() : J$.G(305, J$.R(289, 'obj', obj, 0), J$.T(297, "bar", 21, false), 4), x, 1));
                                J$.X1(353, J$.F(345, J$.F(337, J$.R(329, 'x', x, 0), 0)(), 0)());
                            }
                        } catch (J$e) {
                            J$.Ex(505, J$e);
                        } finally {
                            if (J$.Fr(513))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 361), 0)());
        } catch (J$e) {
            J$.Ex(521, J$e);
        } finally {
            if (J$.Sr(529)) {
                J$.L();
                continue jalangiLabel4;
            } else {
                J$.L();
                break jalangiLabel4;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

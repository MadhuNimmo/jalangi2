J$.iids = {"9":[4,25,4,26],"10":[14,21,14,29],"17":[4,25,4,28],"25":[4,25,4,29],"33":[3,22,5,26],"41":[3,22,5,26],"49":[3,22,5,26],"57":[3,22,5,26],"65":[3,22,5,26],"73":[7,32,7,35],"81":[7,32,7,35],"89":[7,25,7,35],"97":[6,22,8,18],"105":[6,22,8,18],"113":[6,22,8,18],"121":[10,32,10,35],"129":[10,32,10,35],"137":[10,25,10,35],"145":[9,22,11,18],"153":[9,22,11,18],"161":[9,22,11,18],"169":[2,19,12,10],"177":[2,19,12,10],"185":[2,19,12,10],"193":[13,35,13,40],"201":[13,35,13,40],"209":[13,28,13,40],"217":[13,9,13,41],"225":[13,9,13,41],"233":[14,17,14,20],"241":[14,21,14,24],"249":[14,25,14,29],"257":[14,17,14,30],"265":[14,17,14,30],"273":[14,17,14,30],"281":[15,17,15,20],"289":[15,21,15,26],"297":[15,17,15,27],"305":[15,17,15,27],"313":[15,17,15,27],"321":[16,9,16,12],"329":[16,17,16,18],"337":[16,20,16,21],"345":[16,9,16,22],"347":[16,9,16,16],"353":[16,9,16,23],"361":[1,2,17,10],"369":[1,2,17,10],"377":[1,2,17,10],"385":[13,9,13,41],"393":[1,2,17,10],"401":[1,2,17,10],"409":[1,2,17,10],"417":[1,2,17,10],"425":[1,1,17,13],"433":[1,1,17,13],"441":[1,1,19,22],"449":[3,22,5,26],"457":[3,22,5,26],"465":[6,22,8,18],"473":[6,22,8,18],"481":[9,22,11,18],"489":[9,22,11,18],"497":[13,9,13,41],"505":[13,9,13,41],"513":[1,2,17,10],"521":[1,2,17,10],"529":[1,1,19,22],"537":[1,1,19,22],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_wrngmtch2.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_wrngmtch2_jalangi_.js","code":"(function(){\n        var obj = {\n                foo: function(p,q) {\n                        p();\n                        },\n                bar: function () { \n                        return \"z\"\n                },\n                dan: function() { \n                        return \"a\"\n                }\n        }\n        function barret(){ return \"bar\"}\n        var x = obj[\"b\"+\"ar\"];\n        var y = obj[\"bar\"];\n        obj.foo(x, y);\n        })()\n        \n//wrong path matching"};
jalangiLabel5:
    while (true) {
        try {
            J$.Se(441, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_wrngmtch2_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_wrngmtch2.js');
            J$.X1(433, J$.F(425, J$.T(417, function () {
                jalangiLabel4:
                    while (true) {
                        try {
                            J$.Fe(361, arguments.callee, this, arguments);
                            function barret() {
                                jalangiLabel3:
                                    while (true) {
                                        try {
                                            J$.Fe(217, arguments.callee, this, arguments);
                                            arguments = J$.N(225, 'arguments', arguments, 4);
                                            return J$.X1(209, J$.Rt(201, J$.T(193, "bar", 21, false)));
                                        } catch (J$e) {
                                            J$.Ex(497, J$e);
                                        } finally {
                                            if (J$.Fr(505))
                                                continue jalangiLabel3;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(369, 'arguments', arguments, 4);
                            J$.N(377, 'obj', obj, 0);
                            barret = J$.N(393, 'barret', J$.T(385, barret, 12, false, 217), 0);
                            J$.N(401, 'x', x, 0);
                            J$.N(409, 'y', y, 0);
                            var obj = J$.X1(185, J$.W(177, 'obj', J$.T(169, {
                                foo: J$.T(65, function (p, q) {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(33, arguments.callee, this, arguments);
                                                arguments = J$.N(41, 'arguments', arguments, 4);
                                                p = J$.N(49, 'p', p, 4);
                                                q = J$.N(57, 'q', q, 4);
                                                J$.X1(25, J$.F(17, J$.R(9, 'p', p, 0), 0)());
                                            } catch (J$e) {
                                                J$.Ex(449, J$e);
                                            } finally {
                                                if (J$.Fr(457))
                                                    continue jalangiLabel0;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 33),
                                bar: J$.T(113, function () {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(97, arguments.callee, this, arguments);
                                                arguments = J$.N(105, 'arguments', arguments, 4);
                                                return J$.X1(89, J$.Rt(81, J$.T(73, "z", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(465, J$e);
                                            } finally {
                                                if (J$.Fr(473))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 97),
                                dan: J$.T(161, function () {
                                    jalangiLabel2:
                                        while (true) {
                                            try {
                                                J$.Fe(145, arguments.callee, this, arguments);
                                                arguments = J$.N(153, 'arguments', arguments, 4);
                                                return J$.X1(137, J$.Rt(129, J$.T(121, "a", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(481, J$e);
                                            } finally {
                                                if (J$.Fr(489))
                                                    continue jalangiLabel2;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 145)
                            }, 11, false), obj, 1));
                            var x = J$.X1(273, J$.W(265, 'x', J$.G(257, J$.R(233, 'obj', obj, 0), J$.B(10, '+', J$.T(241, "b", 21, false), J$.T(249, "ar", 21, false), 0), 4), x, 1));
                            var y = J$.X1(313, J$.W(305, 'y', J$.G(297, J$.R(281, 'obj', obj, 0), J$.T(289, "bar", 21, false), 4), y, 1));
                            J$.X1(353, J$.M(345, J$.R(321, 'obj', obj, 0), 'foo', 0)(J$.R(329, 'x', x, 0), J$.R(337, 'y', y, 0)));
                        } catch (J$e) {
                            J$.Ex(513, J$e);
                        } finally {
                            if (J$.Fr(521))
                                continue jalangiLabel4;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 361), 0)());
        } catch (J$e) {
            J$.Ex(529, J$e);
        } finally {
            if (J$.Sr(537)) {
                J$.L();
                continue jalangiLabel5;
            } else {
                J$.L();
                break jalangiLabel5;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

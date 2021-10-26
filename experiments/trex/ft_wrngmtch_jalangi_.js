J$.iids = {"9":[4,17,4,18],"10":[15,13,15,21],"17":[4,17,4,20],"25":[4,17,4,21],"33":[5,25,5,26],"41":[5,25,5,26],"49":[5,25,5,26],"57":[3,14,6,18],"65":[3,14,6,18],"73":[3,14,6,18],"81":[3,14,6,18],"89":[3,14,6,18],"97":[8,24,8,27],"105":[8,24,8,27],"113":[8,17,8,27],"121":[7,14,9,10],"129":[7,14,9,10],"137":[7,14,9,10],"145":[11,24,11,27],"153":[11,24,11,27],"161":[11,17,11,27],"169":[10,14,12,10],"177":[10,14,12,10],"185":[10,14,12,10],"193":[2,11,13,2],"201":[2,11,13,2],"209":[2,11,13,2],"217":[14,27,14,32],"225":[14,27,14,32],"233":[14,20,14,32],"241":[14,1,14,33],"249":[14,1,14,33],"257":[15,9,15,12],"265":[15,13,15,16],"273":[15,17,15,21],"281":[15,9,15,22],"289":[15,9,15,22],"297":[15,9,15,22],"305":[16,9,16,12],"313":[16,13,16,18],"321":[16,9,16,19],"329":[16,9,16,19],"337":[16,9,16,19],"345":[17,1,17,4],"353":[17,9,17,10],"361":[17,12,17,13],"369":[17,1,17,14],"371":[17,1,17,8],"377":[17,1,17,15],"385":[1,2,18,2],"393":[1,2,18,2],"401":[1,2,18,2],"409":[14,1,14,33],"417":[1,2,18,2],"425":[1,2,18,2],"433":[1,2,18,2],"441":[1,2,18,2],"449":[1,1,18,5],"457":[1,1,18,5],"465":[1,1,18,5],"473":[3,14,6,18],"481":[3,14,6,18],"489":[7,14,9,10],"497":[7,14,9,10],"505":[10,14,12,10],"513":[10,14,12,10],"521":[14,1,14,33],"529":[14,1,14,33],"537":[1,2,18,2],"545":[1,2,18,2],"553":[1,1,18,5],"561":[1,1,18,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_wrngmtch.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_wrngmtch_jalangi_.js","code":"(function(){\nvar obj = {\n        foo: function(p,q) {\n                p();\n                var p = q;\n                },\n        bar: function () { \n                return \"z\"\n        },\n        dan: function() { \n                return \"a\"\n        }\n}\nfunction barret(){ return \"bar\"}\nvar x = obj[\"b\"+\"ar\"];\nvar y = obj[\"bar\"];\nobj.foo(x, y);\n})()"};
jalangiLabel5:
    while (true) {
        try {
            J$.Se(465, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_wrngmtch_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_wrngmtch.js');
            J$.X1(457, J$.F(449, J$.T(441, function () {
                jalangiLabel4:
                    while (true) {
                        try {
                            J$.Fe(385, arguments.callee, this, arguments);
                            function barret() {
                                jalangiLabel3:
                                    while (true) {
                                        try {
                                            J$.Fe(241, arguments.callee, this, arguments);
                                            arguments = J$.N(249, 'arguments', arguments, 4);
                                            return J$.X1(233, J$.Rt(225, J$.T(217, "bar", 21, false)));
                                        } catch (J$e) {
                                            J$.Ex(521, J$e);
                                        } finally {
                                            if (J$.Fr(529))
                                                continue jalangiLabel3;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(393, 'arguments', arguments, 4);
                            J$.N(401, 'obj', obj, 0);
                            barret = J$.N(417, 'barret', J$.T(409, barret, 12, false, 241), 0);
                            J$.N(425, 'x', x, 0);
                            J$.N(433, 'y', y, 0);
                            var obj = J$.X1(209, J$.W(201, 'obj', J$.T(193, {
                                foo: J$.T(89, function (p, q) {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(57, arguments.callee, this, arguments);
                                                arguments = J$.N(65, 'arguments', arguments, 4);
                                                p = J$.N(73, 'p', p, 4);
                                                q = J$.N(81, 'q', q, 4);
                                                J$.X1(25, J$.F(17, J$.R(9, 'p', p, 0), 0)());
                                                var p = J$.X1(49, J$.W(41, 'p', J$.R(33, 'q', q, 0), p, 1));
                                            } catch (J$e) {
                                                J$.Ex(473, J$e);
                                            } finally {
                                                if (J$.Fr(481))
                                                    continue jalangiLabel0;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 57),
                                bar: J$.T(137, function () {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(121, arguments.callee, this, arguments);
                                                arguments = J$.N(129, 'arguments', arguments, 4);
                                                return J$.X1(113, J$.Rt(105, J$.T(97, "z", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(489, J$e);
                                            } finally {
                                                if (J$.Fr(497))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 121),
                                dan: J$.T(185, function () {
                                    jalangiLabel2:
                                        while (true) {
                                            try {
                                                J$.Fe(169, arguments.callee, this, arguments);
                                                arguments = J$.N(177, 'arguments', arguments, 4);
                                                return J$.X1(161, J$.Rt(153, J$.T(145, "a", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(505, J$e);
                                            } finally {
                                                if (J$.Fr(513))
                                                    continue jalangiLabel2;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 169)
                            }, 11, false), obj, 1));
                            var x = J$.X1(297, J$.W(289, 'x', J$.G(281, J$.R(257, 'obj', obj, 0), J$.B(10, '+', J$.T(265, "b", 21, false), J$.T(273, "ar", 21, false), 0), 4), x, 1));
                            var y = J$.X1(337, J$.W(329, 'y', J$.G(321, J$.R(305, 'obj', obj, 0), J$.T(313, "bar", 21, false), 4), y, 1));
                            J$.X1(377, J$.M(369, J$.R(345, 'obj', obj, 0), 'foo', 0)(J$.R(353, 'x', x, 0), J$.R(361, 'y', y, 0)));
                        } catch (J$e) {
                            J$.Ex(537, J$e);
                        } finally {
                            if (J$.Fr(545))
                                continue jalangiLabel4;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 385), 0)());
        } catch (J$e) {
            J$.Ex(553, J$e);
        } finally {
            if (J$.Sr(561)) {
                J$.L();
                continue jalangiLabel5;
            } else {
                J$.L();
                break jalangiLabel5;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

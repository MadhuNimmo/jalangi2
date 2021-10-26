J$.iids = {"9":[3,27,3,30],"17":[3,27,3,30],"25":[3,20,3,30],"33":[3,8,3,31],"41":[3,8,3,31],"49":[3,8,3,31],"57":[5,14,5,18],"65":[5,14,5,20],"73":[5,14,5,20],"81":[5,7,5,21],"89":[4,12,6,6],"97":[4,12,6,6],"105":[4,12,6,6],"113":[2,11,7,4],"121":[2,11,7,4],"129":[2,11,7,4],"137":[9,12,9,15],"145":[9,12,9,15],"153":[9,5,9,16],"161":[8,16,10,4],"169":[8,16,10,4],"177":[8,16,10,4],"185":[8,16,10,4],"193":[8,16,10,4],"201":[11,3,11,9],"209":[11,25,11,26],"217":[11,28,11,31],"225":[13,14,13,20],"233":[13,14,13,20],"241":[13,7,13,21],"249":[12,10,14,6],"257":[12,10,14,6],"265":[12,10,14,6],"273":[16,16,16,24],"281":[16,16,16,24],"289":[16,7,16,25],"297":[15,10,17,6],"305":[15,10,17,6],"313":[15,10,17,6],"321":[15,10,17,6],"329":[18,17,18,21],"337":[19,19,19,23],"345":[11,33,20,4],"353":[11,3,20,5],"355":[11,3,11,24],"361":[11,3,20,6],"369":[21,11,21,12],"377":[21,11,21,14],"385":[21,11,21,14],"393":[21,11,21,14],"401":[22,3,22,4],"409":[22,3,22,6],"417":[22,3,22,7],"425":[1,2,23,2],"433":[1,2,23,2],"441":[1,2,23,2],"449":[1,2,23,2],"457":[1,2,23,2],"465":[1,2,23,2],"473":[1,1,23,5],"481":[1,1,23,6],"489":[1,1,24,1],"497":[3,8,3,31],"505":[3,8,3,31],"513":[4,12,6,6],"521":[4,12,6,6],"529":[8,16,10,4],"537":[8,16,10,4],"545":[12,10,14,6],"553":[12,10,14,6],"561":[15,10,17,6],"569":[15,10,17,6],"577":[1,2,23,2],"585":[1,2,23,2],"593":[1,1,24,1],"601":[1,1,24,1],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_objtest.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_objtest_jalangi_.js","code":"(function () {\n  var o = {\n    b: function(){ return \"b\"},\n    print: function () {\n      return this.b;\n    },\n  };\n  var bValue = function () {\n    return \"x\";\n  };\n  Object.defineProperty(o, \"b\", {\n    get: function () {\n      return bValue;\n    },\n    set: function (newValue) {\n      bValue = newValue;\n    },\n    enumerable: true,\n    configurable: true,\n  });\n  var x = o.b;\n  x();\n})();\n"};
jalangiLabel6:
    while (true) {
        try {
            J$.Se(489, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_objtest_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_objtest.js');
            J$.X1(481, J$.F(473, J$.T(465, function () {
                jalangiLabel5:
                    while (true) {
                        try {
                            J$.Fe(425, arguments.callee, this, arguments);
                            arguments = J$.N(433, 'arguments', arguments, 4);
                            J$.N(441, 'o', o, 0);
                            J$.N(449, 'bValue', bValue, 0);
                            J$.N(457, 'x', x, 0);
                            var o = J$.X1(129, J$.W(121, 'o', J$.T(113, {
                                b: J$.T(49, function () {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(33, arguments.callee, this, arguments);
                                                arguments = J$.N(41, 'arguments', arguments, 4);
                                                return J$.X1(25, J$.Rt(17, J$.T(9, "b", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(497, J$e);
                                            } finally {
                                                if (J$.Fr(505))
                                                    continue jalangiLabel0;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 33),
                                print: J$.T(105, function () {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(89, arguments.callee, this, arguments);
                                                arguments = J$.N(97, 'arguments', arguments, 4);
                                                return J$.X1(81, J$.Rt(73, J$.G(65, J$.R(57, 'this', this, 0), 'b', 0)));
                                            } catch (J$e) {
                                                J$.Ex(513, J$e);
                                            } finally {
                                                if (J$.Fr(521))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 89)
                            }, 11, false), o, 1));
                            var bValue = J$.X1(193, J$.W(185, 'bValue', J$.T(177, function () {
                                jalangiLabel2:
                                    while (true) {
                                        try {
                                            J$.Fe(161, arguments.callee, this, arguments);
                                            arguments = J$.N(169, 'arguments', arguments, 4);
                                            return J$.X1(153, J$.Rt(145, J$.T(137, "x", 21, false)));
                                        } catch (J$e) {
                                            J$.Ex(529, J$e);
                                        } finally {
                                            if (J$.Fr(537))
                                                continue jalangiLabel2;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 161), bValue, 1));
                            J$.X1(361, J$.M(353, J$.R(201, 'Object', Object, 2), 'defineProperty', 0)(J$.R(209, 'o', o, 0), J$.T(217, "b", 21, false), J$.T(345, {
                                get: J$.T(265, function () {
                                    jalangiLabel3:
                                        while (true) {
                                            try {
                                                J$.Fe(249, arguments.callee, this, arguments);
                                                arguments = J$.N(257, 'arguments', arguments, 4);
                                                return J$.X1(241, J$.Rt(233, J$.R(225, 'bValue', bValue, 0)));
                                            } catch (J$e) {
                                                J$.Ex(545, J$e);
                                            } finally {
                                                if (J$.Fr(553))
                                                    continue jalangiLabel3;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 249),
                                set: J$.T(321, function (newValue) {
                                    jalangiLabel4:
                                        while (true) {
                                            try {
                                                J$.Fe(297, arguments.callee, this, arguments);
                                                arguments = J$.N(305, 'arguments', arguments, 4);
                                                newValue = J$.N(313, 'newValue', newValue, 4);
                                                J$.X1(289, bValue = J$.W(281, 'bValue', J$.R(273, 'newValue', newValue, 0), bValue, 0));
                                            } catch (J$e) {
                                                J$.Ex(561, J$e);
                                            } finally {
                                                if (J$.Fr(569))
                                                    continue jalangiLabel4;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 297),
                                enumerable: J$.T(329, true, 23, false),
                                configurable: J$.T(337, true, 23, false)
                            }, 11, false)));
                            var x = J$.X1(393, J$.W(385, 'x', J$.G(377, J$.R(369, 'o', o, 0), 'b', 0), x, 1));
                            J$.X1(417, J$.F(409, J$.R(401, 'x', x, 0), 0)());
                        } catch (J$e) {
                            J$.Ex(577, J$e);
                        } finally {
                            if (J$.Fr(585))
                                continue jalangiLabel5;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 425), 0)());
        } catch (J$e) {
            J$.Ex(593, J$e);
        } finally {
            if (J$.Sr(601)) {
                J$.L();
                continue jalangiLabel6;
            } else {
                J$.L();
                break jalangiLabel6;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

J$.iids = {"9":[4,32,4,42],"10":[14,20,14,31],"17":[4,32,4,42],"18":[14,37,14,49],"25":[4,25,4,42],"33":[3,24,5,18],"41":[3,24,5,18],"49":[3,24,5,18],"57":[3,24,5,18],"65":[7,32,7,37],"73":[7,32,7,37],"81":[7,25,7,37],"89":[6,25,8,18],"97":[6,25,8,18],"105":[6,25,8,18],"113":[10,32,10,43],"121":[10,32,10,43],"129":[10,25,10,43],"137":[9,27,11,18],"145":[9,27,11,18],"153":[9,27,11,18],"161":[2,18,12,10],"169":[2,18,12,10],"177":[2,18,12,10],"185":[14,16,14,19],"193":[14,20,14,24],"201":[14,25,14,31],"209":[14,33,14,36],"217":[14,37,14,41],"225":[14,42,14,49],"233":[14,33,14,52],"235":[14,33,14,50],"241":[14,16,14,53],"243":[14,16,14,32],"249":[14,16,14,53],"257":[14,16,14,53],"265":[1,2,16,2],"273":[1,2,16,2],"281":[1,2,16,2],"289":[1,2,16,2],"297":[1,2,16,2],"305":[1,1,16,5],"313":[1,1,16,5],"321":[1,1,34,7],"329":[3,24,5,18],"337":[3,24,5,18],"345":[6,25,8,18],"353":[6,25,8,18],"361":[9,27,11,18],"369":[9,27,11,18],"377":[1,2,16,2],"385":[1,2,16,2],"393":[1,1,34,7],"401":[1,1,34,7],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng8.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng8_jalangi_.js","code":"(function(){\n        var obj= {\n                MyName:function(func){\n                        return \"John Doe\"\n                },\n                MyPhone:function(){\n                        return \"XXX\"\n                },\n                MyAddress:function(){\n                        return \"Riverside\"\n                }\n        }\n        //var fun = obj[\"MyPhone\"]\n        var x =obj[\"My\"+\"Name\"](obj[\"My\"+\"Phone\"]())\n        //x();\n})()\n/*(function(){\n        var obj= {\n                MyName:function(func){\n                        return obj[\"MyPhone\"];//\"John Doe\"\n                },\n                MyPhone:function(){\n                        return \"XX-XXX\"\n                },\n                MyAddress:function(){\n                        return \"Riverside\"\n                },\n                get name() {\n                        return this.MyName;\n                }\n        }\n        var x = obj[\"name\"]\n        x()();\n})()*/"};
jalangiLabel4:
    while (true) {
        try {
            J$.Se(321, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng8_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng8.js');
            J$.X1(313, J$.F(305, J$.T(297, function () {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(265, arguments.callee, this, arguments);
                            arguments = J$.N(273, 'arguments', arguments, 4);
                            J$.N(281, 'obj', obj, 0);
                            J$.N(289, 'x', x, 0);
                            var obj = J$.X1(177, J$.W(169, 'obj', J$.T(161, {
                                MyName: J$.T(57, function (func) {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(33, arguments.callee, this, arguments);
                                                arguments = J$.N(41, 'arguments', arguments, 4);
                                                func = J$.N(49, 'func', func, 4);
                                                return J$.X1(25, J$.Rt(17, J$.T(9, "John Doe", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(329, J$e);
                                            } finally {
                                                if (J$.Fr(337))
                                                    continue jalangiLabel0;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 33),
                                MyPhone: J$.T(105, function () {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(89, arguments.callee, this, arguments);
                                                arguments = J$.N(97, 'arguments', arguments, 4);
                                                return J$.X1(81, J$.Rt(73, J$.T(65, "XXX", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(345, J$e);
                                            } finally {
                                                if (J$.Fr(353))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 89),
                                MyAddress: J$.T(153, function () {
                                    jalangiLabel2:
                                        while (true) {
                                            try {
                                                J$.Fe(137, arguments.callee, this, arguments);
                                                arguments = J$.N(145, 'arguments', arguments, 4);
                                                return J$.X1(129, J$.Rt(121, J$.T(113, "Riverside", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(361, J$e);
                                            } finally {
                                                if (J$.Fr(369))
                                                    continue jalangiLabel2;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 137)
                            }, 11, false), obj, 1));
                            var x = J$.X1(257, J$.W(249, 'x', J$.M(241, J$.R(185, 'obj', obj, 0), J$.B(10, '+', J$.T(193, "My", 21, false), J$.T(201, "Name", 21, false), 0), 1)(J$.M(233, J$.R(209, 'obj', obj, 0), J$.B(18, '+', J$.T(217, "My", 21, false), J$.T(225, "Phone", 21, false), 0), 1)()), x, 1));
                        } catch (J$e) {
                            J$.Ex(377, J$e);
                        } finally {
                            if (J$.Fr(385))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 265), 0)());
        } catch (J$e) {
            J$.Ex(393, J$e);
        } finally {
            if (J$.Sr(401)) {
                J$.L();
                continue jalangiLabel4;
            } else {
                J$.L();
                break jalangiLabel4;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

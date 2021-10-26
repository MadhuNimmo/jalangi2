J$.iids = {"9":[4,25,4,29],"10":[15,13,15,24],"17":[4,25,4,31],"25":[4,25,4,32],"33":[5,25,5,32],"41":[5,25,5,32],"49":[3,24,6,18],"57":[3,24,6,18],"65":[3,24,6,18],"73":[3,24,6,18],"81":[8,32,8,37],"89":[8,32,8,37],"97":[8,25,8,37],"105":[7,25,9,18],"113":[7,25,9,18],"121":[7,25,9,18],"129":[11,32,11,43],"137":[11,32,11,43],"145":[11,25,11,43],"153":[10,27,12,18],"161":[10,27,12,18],"169":[10,27,12,18],"177":[2,18,13,10],"185":[2,18,13,10],"193":[2,18,13,10],"201":[14,19,14,22],"209":[14,23,14,32],"217":[14,19,14,33],"225":[14,19,14,33],"233":[14,19,14,33],"241":[15,9,15,12],"249":[15,13,15,17],"257":[15,18,15,24],"265":[15,26,15,29],"273":[15,9,15,30],"275":[15,9,15,25],"281":[15,9,15,31],"289":[1,2,16,2],"297":[1,2,16,2],"305":[1,2,16,2],"313":[1,2,16,2],"321":[1,2,16,2],"329":[1,1,16,5],"337":[1,1,16,5],"345":[1,1,17,1],"353":[3,24,6,18],"361":[3,24,6,18],"369":[7,25,9,18],"377":[7,25,9,18],"385":[10,27,12,18],"393":[10,27,12,18],"401":[1,2,16,2],"409":[1,2,16,2],"417":[1,1,17,1],"425":[1,1,17,1],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng5.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng5_jalangi_.js","code":"(function(){\n        var obj= {\n                MyName:function(func){\n                        func();\n                        return;//\"John Doe\"\n                },\n                MyPhone:function(){\n                        return \"XXX\"\n                },\n                MyAddress:function(){\n                        return \"Riverside\"\n                }\n        }\n        var fun = obj[\"MyPhone\"]\n        obj[\"My\"+\"Name\"](fun);\n})()\n"};
jalangiLabel4:
    while (true) {
        try {
            J$.Se(345, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng5_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng5.js');
            J$.X1(337, J$.F(329, J$.T(321, function () {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(289, arguments.callee, this, arguments);
                            arguments = J$.N(297, 'arguments', arguments, 4);
                            J$.N(305, 'obj', obj, 0);
                            J$.N(313, 'fun', fun, 0);
                            var obj = J$.X1(193, J$.W(185, 'obj', J$.T(177, {
                                MyName: J$.T(73, function (func) {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(49, arguments.callee, this, arguments);
                                                arguments = J$.N(57, 'arguments', arguments, 4);
                                                func = J$.N(65, 'func', func, 4);
                                                J$.X1(25, J$.F(17, J$.R(9, 'func', func, 0), 0)());
                                                return J$.X1(41, J$.Rt(33, undefined));
                                            } catch (J$e) {
                                                J$.Ex(353, J$e);
                                            } finally {
                                                if (J$.Fr(361))
                                                    continue jalangiLabel0;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 49),
                                MyPhone: J$.T(121, function () {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(105, arguments.callee, this, arguments);
                                                arguments = J$.N(113, 'arguments', arguments, 4);
                                                return J$.X1(97, J$.Rt(89, J$.T(81, "XXX", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(369, J$e);
                                            } finally {
                                                if (J$.Fr(377))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 105),
                                MyAddress: J$.T(169, function () {
                                    jalangiLabel2:
                                        while (true) {
                                            try {
                                                J$.Fe(153, arguments.callee, this, arguments);
                                                arguments = J$.N(161, 'arguments', arguments, 4);
                                                return J$.X1(145, J$.Rt(137, J$.T(129, "Riverside", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(385, J$e);
                                            } finally {
                                                if (J$.Fr(393))
                                                    continue jalangiLabel2;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 153)
                            }, 11, false), obj, 1));
                            var fun = J$.X1(233, J$.W(225, 'fun', J$.G(217, J$.R(201, 'obj', obj, 0), J$.T(209, "MyPhone", 21, false), 4), fun, 1));
                            J$.X1(281, J$.M(273, J$.R(241, 'obj', obj, 0), J$.B(10, '+', J$.T(249, "My", 21, false), J$.T(257, "Name", 21, false), 0), 1)(J$.R(265, 'fun', fun, 0)));
                        } catch (J$e) {
                            J$.Ex(401, J$e);
                        } finally {
                            if (J$.Fr(409))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 289), 0)());
        } catch (J$e) {
            J$.Ex(417, J$e);
        } finally {
            if (J$.Sr(425)) {
                J$.L();
                continue jalangiLabel4;
            } else {
                J$.L();
                break jalangiLabel4;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

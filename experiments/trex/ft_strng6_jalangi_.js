J$.iids = {"9":[4,32,4,35],"10":[14,20,14,31],"17":[4,36,4,45],"25":[4,32,4,46],"33":[4,32,4,46],"41":[4,25,4,47],"49":[3,24,5,18],"57":[3,24,5,18],"65":[3,24,5,18],"73":[3,24,5,18],"81":[7,32,7,37],"89":[7,32,7,37],"97":[7,25,7,37],"105":[6,25,8,18],"113":[6,25,8,18],"121":[6,25,8,18],"129":[10,32,10,43],"137":[10,32,10,43],"145":[10,25,10,43],"153":[9,27,11,18],"161":[9,27,11,18],"169":[9,27,11,18],"177":[2,18,12,10],"185":[2,18,12,10],"193":[2,18,12,10],"201":[14,16,14,19],"209":[14,20,14,24],"217":[14,25,14,31],"225":[14,16,14,34],"227":[14,16,14,32],"233":[14,16,14,34],"241":[14,16,14,34],"249":[15,9,15,10],"257":[15,9,15,12],"265":[15,9,15,13],"273":[1,2,16,2],"281":[1,2,16,2],"289":[1,2,16,2],"297":[1,2,16,2],"305":[1,2,16,2],"313":[1,1,16,5],"321":[1,1,16,5],"329":[1,1,16,5],"337":[3,24,5,18],"345":[3,24,5,18],"353":[6,25,8,18],"361":[6,25,8,18],"369":[9,27,11,18],"377":[9,27,11,18],"385":[1,2,16,2],"393":[1,2,16,2],"401":[1,1,16,5],"409":[1,1,16,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng6.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng6_jalangi_.js","code":"(function(){\n        var obj= {\n                MyName:function(func){\n                        return obj[\"MyPhone\"];//\"John Doe\"\n                },\n                MyPhone:function(){\n                        return \"XXX\"\n                },\n                MyAddress:function(){\n                        return \"Riverside\"\n                }\n        }\n        //var fun = obj[\"MyPhone\"]\n        var x =obj[\"My\"+\"Name\"]()\n        x();\n})()"};
jalangiLabel4:
    while (true) {
        try {
            J$.Se(329, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng6_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng6.js');
            J$.X1(321, J$.F(313, J$.T(305, function () {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(273, arguments.callee, this, arguments);
                            arguments = J$.N(281, 'arguments', arguments, 4);
                            J$.N(289, 'obj', obj, 0);
                            J$.N(297, 'x', x, 0);
                            var obj = J$.X1(193, J$.W(185, 'obj', J$.T(177, {
                                MyName: J$.T(73, function (func) {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(49, arguments.callee, this, arguments);
                                                arguments = J$.N(57, 'arguments', arguments, 4);
                                                func = J$.N(65, 'func', func, 4);
                                                return J$.X1(41, J$.Rt(33, J$.G(25, J$.R(9, 'obj', obj, 0), J$.T(17, "MyPhone", 21, false), 4)));
                                            } catch (J$e) {
                                                J$.Ex(337, J$e);
                                            } finally {
                                                if (J$.Fr(345))
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
                                                J$.Ex(353, J$e);
                                            } finally {
                                                if (J$.Fr(361))
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
                                                J$.Ex(369, J$e);
                                            } finally {
                                                if (J$.Fr(377))
                                                    continue jalangiLabel2;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 153)
                            }, 11, false), obj, 1));
                            var x = J$.X1(241, J$.W(233, 'x', J$.M(225, J$.R(201, 'obj', obj, 0), J$.B(10, '+', J$.T(209, "My", 21, false), J$.T(217, "Name", 21, false), 0), 1)(), x, 1));
                            J$.X1(265, J$.F(257, J$.R(249, 'x', x, 0), 0)());
                        } catch (J$e) {
                            J$.Ex(385, J$e);
                        } finally {
                            if (J$.Fr(393))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 273), 0)());
        } catch (J$e) {
            J$.Ex(401, J$e);
        } finally {
            if (J$.Sr(409)) {
                J$.L();
                continue jalangiLabel4;
            } else {
                J$.L();
                break jalangiLabel4;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

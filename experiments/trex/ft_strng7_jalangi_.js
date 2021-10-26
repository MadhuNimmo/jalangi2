J$.iids = {"9":[4,32,4,35],"10":[14,20,14,31],"17":[4,36,4,45],"25":[4,32,4,46],"33":[4,32,4,46],"41":[4,25,4,47],"49":[3,24,5,18],"57":[3,24,5,18],"65":[3,24,5,18],"73":[3,24,5,18],"81":[7,32,7,35],"89":[7,36,7,47],"97":[7,32,7,48],"105":[7,32,7,48],"113":[7,25,7,49],"121":[6,25,8,18],"129":[6,25,8,18],"137":[6,25,8,18],"145":[10,32,10,43],"153":[10,32,10,43],"161":[10,25,10,43],"169":[9,27,11,18],"177":[9,27,11,18],"185":[9,27,11,18],"193":[2,18,12,10],"201":[2,18,12,10],"209":[2,18,12,10],"217":[14,16,14,19],"225":[14,20,14,24],"233":[14,25,14,31],"241":[14,16,14,34],"243":[14,16,14,32],"249":[14,16,14,34],"257":[14,16,14,34],"265":[15,9,15,10],"273":[15,9,15,12],"281":[15,9,15,14],"289":[15,9,15,15],"297":[1,2,16,2],"305":[1,2,16,2],"313":[1,2,16,2],"321":[1,2,16,2],"329":[1,2,16,2],"337":[1,1,16,5],"345":[1,1,16,5],"353":[1,1,16,5],"361":[3,24,5,18],"369":[3,24,5,18],"377":[6,25,8,18],"385":[6,25,8,18],"393":[9,27,11,18],"401":[9,27,11,18],"409":[1,2,16,2],"417":[1,2,16,2],"425":[1,1,16,5],"433":[1,1,16,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng7.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng7_jalangi_.js","code":"(function(){\n        var obj= {\n                MyName:function(func){\n                        return obj[\"MyPhone\"];//\"John Doe\"\n                },\n                MyPhone:function(){\n                        return obj[\"MyAddress\"];\n                },\n                MyAddress:function(){\n                        return \"Riverside\"\n                }\n        }\n        //var fun = obj[\"MyPhone\"]\n        var x =obj[\"My\"+\"Name\"]()\n        x()();\n})()"};
jalangiLabel4:
    while (true) {
        try {
            J$.Se(353, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng7_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng7.js');
            J$.X1(345, J$.F(337, J$.T(329, function () {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(297, arguments.callee, this, arguments);
                            arguments = J$.N(305, 'arguments', arguments, 4);
                            J$.N(313, 'obj', obj, 0);
                            J$.N(321, 'x', x, 0);
                            var obj = J$.X1(209, J$.W(201, 'obj', J$.T(193, {
                                MyName: J$.T(73, function (func) {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(49, arguments.callee, this, arguments);
                                                arguments = J$.N(57, 'arguments', arguments, 4);
                                                func = J$.N(65, 'func', func, 4);
                                                return J$.X1(41, J$.Rt(33, J$.G(25, J$.R(9, 'obj', obj, 0), J$.T(17, "MyPhone", 21, false), 4)));
                                            } catch (J$e) {
                                                J$.Ex(361, J$e);
                                            } finally {
                                                if (J$.Fr(369))
                                                    continue jalangiLabel0;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 49),
                                MyPhone: J$.T(137, function () {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(121, arguments.callee, this, arguments);
                                                arguments = J$.N(129, 'arguments', arguments, 4);
                                                return J$.X1(113, J$.Rt(105, J$.G(97, J$.R(81, 'obj', obj, 0), J$.T(89, "MyAddress", 21, false), 4)));
                                            } catch (J$e) {
                                                J$.Ex(377, J$e);
                                            } finally {
                                                if (J$.Fr(385))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 121),
                                MyAddress: J$.T(185, function () {
                                    jalangiLabel2:
                                        while (true) {
                                            try {
                                                J$.Fe(169, arguments.callee, this, arguments);
                                                arguments = J$.N(177, 'arguments', arguments, 4);
                                                return J$.X1(161, J$.Rt(153, J$.T(145, "Riverside", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(393, J$e);
                                            } finally {
                                                if (J$.Fr(401))
                                                    continue jalangiLabel2;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 169)
                            }, 11, false), obj, 1));
                            var x = J$.X1(257, J$.W(249, 'x', J$.M(241, J$.R(217, 'obj', obj, 0), J$.B(10, '+', J$.T(225, "My", 21, false), J$.T(233, "Name", 21, false), 0), 1)(), x, 1));
                            J$.X1(289, J$.F(281, J$.F(273, J$.R(265, 'x', x, 0), 0)(), 0)());
                        } catch (J$e) {
                            J$.Ex(409, J$e);
                        } finally {
                            if (J$.Fr(417))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 297), 0)());
        } catch (J$e) {
            J$.Ex(425, J$e);
        } finally {
            if (J$.Sr(433)) {
                J$.L();
                continue jalangiLabel4;
            } else {
                J$.L();
                break jalangiLabel4;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

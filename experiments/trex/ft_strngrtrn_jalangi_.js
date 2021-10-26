J$.iids = {"9":[4,32,4,39],"17":[4,32,4,39],"25":[4,25,4,39],"33":[3,24,5,18],"41":[3,24,5,18],"49":[3,24,5,18],"57":[7,32,7,46],"65":[7,32,7,46],"73":[7,25,7,46],"81":[6,25,8,18],"89":[6,25,8,18],"97":[6,25,8,18],"105":[10,32,10,43],"113":[10,32,10,43],"121":[10,25,10,43],"129":[9,27,11,18],"137":[9,27,11,18],"145":[9,27,11,18],"153":[13,32,13,41],"161":[13,32,13,41],"169":[13,25,13,41],"177":[12,25,14,18],"185":[12,25,14,18],"193":[12,25,14,18],"201":[2,18,17,10],"209":[2,18,17,10],"217":[2,18,17,10],"225":[19,24,19,35],"233":[19,24,19,35],"241":[19,17,19,35],"249":[18,26,20,10],"257":[18,26,20,10],"265":[18,26,20,10],"273":[18,26,20,10],"281":[18,26,20,10],"289":[18,26,20,10],"297":[23,9,23,12],"305":[23,13,23,23],"313":[23,13,23,25],"321":[23,9,23,28],"323":[23,9,23,26],"329":[23,9,23,29],"337":[1,2,26,2],"345":[1,2,26,2],"353":[1,2,26,2],"361":[1,2,26,2],"369":[1,2,26,2],"377":[1,1,26,5],"385":[1,1,26,5],"393":[1,1,26,5],"401":[3,24,5,18],"409":[3,24,5,18],"417":[6,25,8,18],"425":[6,25,8,18],"433":[9,27,11,18],"441":[9,27,11,18],"449":[12,25,14,18],"457":[12,25,14,18],"465":[18,26,20,10],"473":[18,26,20,10],"481":[1,2,26,2],"489":[1,2,26,2],"497":[1,1,26,5],"505":[1,1,26,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngrtrn.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngrtrn_jalangi_.js","code":"(function(){\n        var obj= {\n                MyName:function(){\n                        return \"Nimmo\"\n                },\n                MyPhone:function(){\n                        return \"XXX-XXX-XXXX\"\n                },\n                MyAddress:function(){\n                        return \"Riverside\"\n                },\n                MyHobby:function(){\n                        return MyAddress\n                }\n\n\n        }\n        var retAddress = function(x){\n                return \"MyAddress\"\n        }\n        //var xyz= retAddress();\n        //obj[xyz](); //Interprocedural\n        obj[retAddress()](); //Interprocedural\n        //obj[\"MyAddress\"](); \n\n})()"};
jalangiLabel6:
    while (true) {
        try {
            J$.Se(393, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngrtrn_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngrtrn.js');
            J$.X1(385, J$.F(377, J$.T(369, function () {
                jalangiLabel5:
                    while (true) {
                        try {
                            J$.Fe(337, arguments.callee, this, arguments);
                            arguments = J$.N(345, 'arguments', arguments, 4);
                            J$.N(353, 'obj', obj, 0);
                            J$.N(361, 'retAddress', retAddress, 0);
                            var obj = J$.X1(217, J$.W(209, 'obj', J$.T(201, {
                                MyName: J$.T(49, function () {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(33, arguments.callee, this, arguments);
                                                arguments = J$.N(41, 'arguments', arguments, 4);
                                                return J$.X1(25, J$.Rt(17, J$.T(9, "Nimmo", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(401, J$e);
                                            } finally {
                                                if (J$.Fr(409))
                                                    continue jalangiLabel0;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 33),
                                MyPhone: J$.T(97, function () {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(81, arguments.callee, this, arguments);
                                                arguments = J$.N(89, 'arguments', arguments, 4);
                                                return J$.X1(73, J$.Rt(65, J$.T(57, "XXX-XXX-XXXX", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(417, J$e);
                                            } finally {
                                                if (J$.Fr(425))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 81),
                                MyAddress: J$.T(145, function () {
                                    jalangiLabel2:
                                        while (true) {
                                            try {
                                                J$.Fe(129, arguments.callee, this, arguments);
                                                arguments = J$.N(137, 'arguments', arguments, 4);
                                                return J$.X1(121, J$.Rt(113, J$.T(105, "Riverside", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(433, J$e);
                                            } finally {
                                                if (J$.Fr(441))
                                                    continue jalangiLabel2;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 129),
                                MyHobby: J$.T(193, function () {
                                    jalangiLabel3:
                                        while (true) {
                                            try {
                                                J$.Fe(177, arguments.callee, this, arguments);
                                                arguments = J$.N(185, 'arguments', arguments, 4);
                                                return J$.X1(169, J$.Rt(161, J$.R(153, 'MyAddress', MyAddress, 2)));
                                            } catch (J$e) {
                                                J$.Ex(449, J$e);
                                            } finally {
                                                if (J$.Fr(457))
                                                    continue jalangiLabel3;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 177)
                            }, 11, false), obj, 1));
                            var retAddress = J$.X1(289, J$.W(281, 'retAddress', J$.T(273, function (x) {
                                jalangiLabel4:
                                    while (true) {
                                        try {
                                            J$.Fe(249, arguments.callee, this, arguments);
                                            arguments = J$.N(257, 'arguments', arguments, 4);
                                            x = J$.N(265, 'x', x, 4);
                                            return J$.X1(241, J$.Rt(233, J$.T(225, "MyAddress", 21, false)));
                                        } catch (J$e) {
                                            J$.Ex(465, J$e);
                                        } finally {
                                            if (J$.Fr(473))
                                                continue jalangiLabel4;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 249), retAddress, 1));
                            J$.X1(329, J$.M(321, J$.R(297, 'obj', obj, 0), J$.F(313, J$.R(305, 'retAddress', retAddress, 0), 0)(), 1)());
                        } catch (J$e) {
                            J$.Ex(481, J$e);
                        } finally {
                            if (J$.Fr(489))
                                continue jalangiLabel5;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 337), 0)());
        } catch (J$e) {
            J$.Ex(497, J$e);
        } finally {
            if (J$.Sr(505)) {
                J$.L();
                continue jalangiLabel6;
            } else {
                J$.L();
                break jalangiLabel6;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

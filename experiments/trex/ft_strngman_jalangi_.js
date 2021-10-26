J$.iids = {"9":[2,17,2,26],"10":[17,21,17,33],"17":[2,17,2,26],"25":[2,17,2,26],"33":[5,32,5,39],"41":[5,32,5,39],"49":[5,25,5,39],"57":[4,24,6,18],"65":[4,24,6,18],"73":[4,24,6,18],"81":[8,32,8,46],"89":[8,32,8,46],"97":[8,25,8,46],"105":[7,25,9,18],"113":[7,25,9,18],"121":[7,25,9,18],"129":[11,32,11,43],"137":[11,32,11,43],"145":[11,25,11,43],"153":[10,27,12,18],"161":[10,27,12,18],"169":[10,27,12,18],"177":[14,32,14,41],"185":[14,32,14,41],"193":[14,25,14,41],"201":[13,25,15,18],"209":[13,25,15,18],"217":[13,25,15,18],"225":[3,18,16,10],"233":[3,18,16,10],"241":[3,18,16,10],"249":[17,17,17,20],"257":[17,21,17,25],"265":[17,26,17,33],"273":[17,17,17,34],"281":[17,17,17,34],"289":[17,17,17,34],"297":[21,9,21,10],"305":[21,9,21,12],"313":[21,9,21,13],"321":[1,2,22,2],"329":[1,2,22,2],"337":[1,2,22,2],"345":[1,2,22,2],"353":[1,2,22,2],"361":[1,2,22,2],"369":[1,1,22,5],"377":[1,1,22,5],"385":[1,1,22,5],"393":[4,24,6,18],"401":[4,24,6,18],"409":[7,25,9,18],"417":[7,25,9,18],"425":[10,27,12,18],"433":[10,27,12,18],"441":[13,25,15,18],"449":[13,25,15,18],"457":[1,2,22,2],"465":[1,2,22,2],"473":[1,1,22,5],"481":[1,1,22,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngman.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngman_jalangi_.js","code":"(function(){\n        var str=\"MyNames\"\n        var obj= {\n                MyName:function(){\n                        return \"Nimmo\"\n                },\n                MyPhone:function(){\n                        return \"XXX-XXX-XXXX\"\n                },\n                MyAddress:function(){\n                        return \"Riverside\"\n                },\n                MyHobby:function(){\n                        return MyAddress\n                }\n        }\n        var x = obj[\"My\"+\"Phone\"]; //String manipulation //str.substring(0, str.length-1)\n        //var y = \"My\"+\"Phone\"; //String manipulation \n        //var z=y\n        //obj[z]();\n        x();\n})()"};
jalangiLabel5:
    while (true) {
        try {
            J$.Se(385, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngman_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngman.js');
            J$.X1(377, J$.F(369, J$.T(361, function () {
                jalangiLabel4:
                    while (true) {
                        try {
                            J$.Fe(321, arguments.callee, this, arguments);
                            arguments = J$.N(329, 'arguments', arguments, 4);
                            J$.N(337, 'str', str, 0);
                            J$.N(345, 'obj', obj, 0);
                            J$.N(353, 'x', x, 0);
                            var str = J$.X1(25, J$.W(17, 'str', J$.T(9, "MyNames", 21, false), str, 1));
                            var obj = J$.X1(241, J$.W(233, 'obj', J$.T(225, {
                                MyName: J$.T(73, function () {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(57, arguments.callee, this, arguments);
                                                arguments = J$.N(65, 'arguments', arguments, 4);
                                                return J$.X1(49, J$.Rt(41, J$.T(33, "Nimmo", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(393, J$e);
                                            } finally {
                                                if (J$.Fr(401))
                                                    continue jalangiLabel0;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 57),
                                MyPhone: J$.T(121, function () {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(105, arguments.callee, this, arguments);
                                                arguments = J$.N(113, 'arguments', arguments, 4);
                                                return J$.X1(97, J$.Rt(89, J$.T(81, "XXX-XXX-XXXX", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(409, J$e);
                                            } finally {
                                                if (J$.Fr(417))
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
                                                J$.Ex(425, J$e);
                                            } finally {
                                                if (J$.Fr(433))
                                                    continue jalangiLabel2;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 153),
                                MyHobby: J$.T(217, function () {
                                    jalangiLabel3:
                                        while (true) {
                                            try {
                                                J$.Fe(201, arguments.callee, this, arguments);
                                                arguments = J$.N(209, 'arguments', arguments, 4);
                                                return J$.X1(193, J$.Rt(185, J$.R(177, 'MyAddress', MyAddress, 2)));
                                            } catch (J$e) {
                                                J$.Ex(441, J$e);
                                            } finally {
                                                if (J$.Fr(449))
                                                    continue jalangiLabel3;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 201)
                            }, 11, false), obj, 1));
                            var x = J$.X1(289, J$.W(281, 'x', J$.G(273, J$.R(249, 'obj', obj, 0), J$.B(10, '+', J$.T(257, "My", 21, false), J$.T(265, "Phone", 21, false), 0), 4), x, 1));
                            J$.X1(313, J$.F(305, J$.R(297, 'x', x, 0), 0)());
                        } catch (J$e) {
                            J$.Ex(457, J$e);
                        } finally {
                            if (J$.Fr(465))
                                continue jalangiLabel4;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 321), 0)());
        } catch (J$e) {
            J$.Ex(473, J$e);
        } finally {
            if (J$.Sr(481)) {
                J$.L();
                continue jalangiLabel5;
            } else {
                J$.L();
                break jalangiLabel5;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

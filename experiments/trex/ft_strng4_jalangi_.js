J$.iids = {"9":[4,25,4,28],"10":[14,13,14,24],"17":[4,25,4,38],"19":[4,25,4,36],"25":[4,25,4,39],"33":[5,25,5,32],"41":[5,25,5,32],"49":[3,24,6,18],"57":[3,24,6,18],"65":[3,24,6,18],"73":[8,32,8,37],"81":[8,32,8,37],"89":[8,25,8,37],"97":[7,25,9,18],"105":[7,25,9,18],"113":[7,25,9,18],"121":[11,32,11,43],"129":[11,32,11,43],"137":[11,25,11,43],"145":[10,27,12,18],"153":[10,27,12,18],"161":[10,27,12,18],"169":[2,18,13,10],"177":[2,18,13,10],"185":[2,18,13,10],"193":[14,9,14,12],"201":[14,13,14,17],"209":[14,18,14,24],"217":[14,9,14,27],"219":[14,9,14,25],"225":[14,9,14,28],"233":[1,2,16,2],"241":[1,2,16,2],"249":[1,2,16,2],"257":[1,2,16,2],"265":[1,1,16,5],"273":[1,1,16,5],"281":[1,1,16,5],"289":[3,24,6,18],"297":[3,24,6,18],"305":[7,25,9,18],"313":[7,25,9,18],"321":[10,27,12,18],"329":[10,27,12,18],"337":[1,2,16,2],"345":[1,2,16,2],"353":[1,1,16,5],"361":[1,1,16,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng4.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng4_jalangi_.js","code":"(function(){\n        var obj= {\n                MyName:function(){\n                        obj.MyPhone();\n                        return;//\"John Doe\"\n                },\n                MyPhone:function(){\n                        return \"XXX\"\n                },\n                MyAddress:function(){\n                        return \"Riverside\"\n                }\n        }\n        obj[\"My\"+\"Name\"]();\n        //x();\n})()"};
jalangiLabel4:
    while (true) {
        try {
            J$.Se(281, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng4_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng4.js');
            J$.X1(273, J$.F(265, J$.T(257, function () {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(233, arguments.callee, this, arguments);
                            arguments = J$.N(241, 'arguments', arguments, 4);
                            J$.N(249, 'obj', obj, 0);
                            var obj = J$.X1(185, J$.W(177, 'obj', J$.T(169, {
                                MyName: J$.T(65, function () {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(49, arguments.callee, this, arguments);
                                                arguments = J$.N(57, 'arguments', arguments, 4);
                                                J$.X1(25, J$.M(17, J$.R(9, 'obj', obj, 0), 'MyPhone', 0)());
                                                return J$.X1(41, J$.Rt(33, undefined));
                                            } catch (J$e) {
                                                J$.Ex(289, J$e);
                                            } finally {
                                                if (J$.Fr(297))
                                                    continue jalangiLabel0;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 49),
                                MyPhone: J$.T(113, function () {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(97, arguments.callee, this, arguments);
                                                arguments = J$.N(105, 'arguments', arguments, 4);
                                                return J$.X1(89, J$.Rt(81, J$.T(73, "XXX", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(305, J$e);
                                            } finally {
                                                if (J$.Fr(313))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 97),
                                MyAddress: J$.T(161, function () {
                                    jalangiLabel2:
                                        while (true) {
                                            try {
                                                J$.Fe(145, arguments.callee, this, arguments);
                                                arguments = J$.N(153, 'arguments', arguments, 4);
                                                return J$.X1(137, J$.Rt(129, J$.T(121, "Riverside", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(321, J$e);
                                            } finally {
                                                if (J$.Fr(329))
                                                    continue jalangiLabel2;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 145)
                            }, 11, false), obj, 1));
                            J$.X1(225, J$.M(217, J$.R(193, 'obj', obj, 0), J$.B(10, '+', J$.T(201, "My", 21, false), J$.T(209, "Name", 21, false), 0), 1)());
                        } catch (J$e) {
                            J$.Ex(337, J$e);
                        } finally {
                            if (J$.Fr(345))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 233), 0)());
        } catch (J$e) {
            J$.Ex(353, J$e);
        } finally {
            if (J$.Sr(361)) {
                J$.L();
                continue jalangiLabel4;
            } else {
                J$.L();
                break jalangiLabel4;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

J$.iids = {"9":[4,32,4,39],"10":[13,13,13,25],"17":[4,32,4,39],"25":[4,25,4,39],"33":[3,24,5,18],"41":[3,24,5,18],"49":[3,24,5,18],"57":[7,32,7,46],"65":[7,32,7,46],"73":[7,25,7,46],"81":[6,25,8,18],"89":[6,25,8,18],"97":[6,25,8,18],"105":[2,18,9,10],"113":[2,18,9,10],"121":[2,18,9,10],"129":[11,24,11,27],"137":[11,28,11,29],"145":[11,24,11,30],"153":[11,24,11,30],"161":[11,17,11,30],"169":[10,9,12,10],"177":[10,9,12,10],"185":[10,9,12,10],"193":[13,9,13,12],"201":[13,13,13,17],"209":[13,18,13,25],"217":[13,9,13,26],"225":[13,9,13,28],"233":[13,9,13,28],"241":[1,2,15,2],"249":[1,2,15,2],"257":[1,2,15,2],"265":[10,9,12,10],"273":[1,2,15,2],"281":[1,2,15,2],"289":[1,1,15,5],"297":[1,1,15,5],"305":[1,1,15,5],"313":[3,24,5,18],"321":[3,24,5,18],"329":[6,25,8,18],"337":[6,25,8,18],"345":[10,9,12,10],"353":[10,9,12,10],"361":[1,2,15,2],"369":[1,2,15,2],"377":[1,1,15,5],"385":[1,1,15,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngobj.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngobj_jalangi_.js","code":"(function(){\n        var obj= {\n                MyName:function(){\n                        return \"Nimmo\"\n                },\n                MyPhone:function(){\n                        return \"XXX-XXX-XXXX\"\n                }\n        }\n        function foo(x){\n                return obj[x]\n        }\n        foo(\"My\"+\"Phone\")()\n        \n})()"};
jalangiLabel4:
    while (true) {
        try {
            J$.Se(305, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngobj_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngobj.js');
            J$.X1(297, J$.F(289, J$.T(281, function () {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(241, arguments.callee, this, arguments);
                            function foo(x) {
                                jalangiLabel2:
                                    while (true) {
                                        try {
                                            J$.Fe(169, arguments.callee, this, arguments);
                                            arguments = J$.N(177, 'arguments', arguments, 4);
                                            x = J$.N(185, 'x', x, 4);
                                            return J$.X1(161, J$.Rt(153, J$.G(145, J$.R(129, 'obj', obj, 0), J$.R(137, 'x', x, 0), 4)));
                                        } catch (J$e) {
                                            J$.Ex(345, J$e);
                                        } finally {
                                            if (J$.Fr(353))
                                                continue jalangiLabel2;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(249, 'arguments', arguments, 4);
                            J$.N(257, 'obj', obj, 0);
                            foo = J$.N(273, 'foo', J$.T(265, foo, 12, false, 169), 0);
                            var obj = J$.X1(121, J$.W(113, 'obj', J$.T(105, {
                                MyName: J$.T(49, function () {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(33, arguments.callee, this, arguments);
                                                arguments = J$.N(41, 'arguments', arguments, 4);
                                                return J$.X1(25, J$.Rt(17, J$.T(9, "Nimmo", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(313, J$e);
                                            } finally {
                                                if (J$.Fr(321))
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
                                                J$.Ex(329, J$e);
                                            } finally {
                                                if (J$.Fr(337))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 81)
                            }, 11, false), obj, 1));
                            J$.X1(233, J$.F(225, J$.F(217, J$.R(193, 'foo', foo, 0), 0)(J$.B(10, '+', J$.T(201, "My", 21, false), J$.T(209, "Phone", 21, false), 0)), 0)());
                        } catch (J$e) {
                            J$.Ex(361, J$e);
                        } finally {
                            if (J$.Fr(369))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 241), 0)());
        } catch (J$e) {
            J$.Ex(377, J$e);
        } finally {
            if (J$.Sr(385)) {
                J$.L();
                continue jalangiLabel4;
            } else {
                J$.L();
                break jalangiLabel4;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

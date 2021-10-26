J$.iids = {"9":[4,32,4,39],"17":[4,32,4,39],"25":[4,25,4,39],"33":[3,24,5,18],"41":[3,24,5,18],"49":[3,24,5,18],"57":[2,18,6,10],"65":[2,18,6,10],"73":[2,18,6,10],"81":[9,17,9,20],"89":[9,21,9,27],"97":[9,28,9,29],"105":[9,21,9,30],"113":[9,31,9,32],"121":[9,21,9,33],"129":[10,32,10,46],"137":[10,32,10,46],"145":[10,25,10,46],"153":[9,35,11,18],"161":[9,35,11,18],"169":[9,35,11,18],"177":[9,17,11,18],"185":[9,17,11,18],"193":[8,9,12,10],"201":[8,9,12,10],"209":[8,9,12,10],"217":[14,9,14,12],"225":[14,15,14,23],"233":[14,24,14,28],"241":[14,14,14,29],"249":[14,31,14,35],"257":[14,36,14,45],"265":[14,30,14,46],"273":[14,13,14,47],"281":[14,9,14,48],"289":[14,9,14,48],"297":[15,9,15,12],"305":[15,13,15,22],"313":[15,9,15,25],"315":[15,9,15,23],"321":[15,9,15,25],"329":[1,2,17,2],"337":[1,2,17,2],"345":[1,2,17,2],"353":[8,9,12,10],"361":[1,2,17,2],"369":[1,2,17,2],"377":[1,1,17,5],"385":[1,1,17,5],"393":[1,1,17,5],"401":[3,24,5,18],"409":[3,24,5,18],"417":[9,35,11,18],"425":[9,35,11,18],"433":[8,9,12,10],"441":[8,9,12,10],"449":[1,2,17,2],"457":[1,2,17,2],"465":[1,1,17,5],"473":[1,1,17,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngtup.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngtup_jalangi_.js","code":"(function(){\n        var obj= {\n                MyName:function(){\n                        return \"Nimmo\"\n                }\n        }\n        //var tuples=[[\"MyName\",\"ok\"],[\"ok\",\"MyPhone\"]]\n        function foo(tuples){\n                obj[tuples[1][1]]=function(){\n                        return \"XXX-XXX-XXXX\"\n                }\n        }\n        \n        foo([[\"MyName\",\"ok\"],[\"ok\",\"MyPhone\"]])\n        obj[\"MyPhone\"]()\n        \n})()"};
jalangiLabel4:
    while (true) {
        try {
            J$.Se(393, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngtup_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngtup.js');
            J$.X1(385, J$.F(377, J$.T(369, function () {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(329, arguments.callee, this, arguments);
                            function foo(tuples) {
                                jalangiLabel2:
                                    while (true) {
                                        try {
                                            J$.Fe(193, arguments.callee, this, arguments);
                                            arguments = J$.N(201, 'arguments', arguments, 4);
                                            tuples = J$.N(209, 'tuples', tuples, 4);
                                            J$.X1(185, J$.P(177, J$.R(81, 'obj', obj, 0), J$.G(121, J$.G(105, J$.R(89, 'tuples', tuples, 0), J$.T(97, 1, 22, false), 4), J$.T(113, 1, 22, false), 4), J$.T(169, function () {
                                                jalangiLabel1:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(153, arguments.callee, this, arguments);
                                                            arguments = J$.N(161, 'arguments', arguments, 4);
                                                            return J$.X1(145, J$.Rt(137, J$.T(129, "XXX-XXX-XXXX", 21, false)));
                                                        } catch (J$e) {
                                                            J$.Ex(417, J$e);
                                                        } finally {
                                                            if (J$.Fr(425))
                                                                continue jalangiLabel1;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }, 12, false, 153), 2));
                                        } catch (J$e) {
                                            J$.Ex(433, J$e);
                                        } finally {
                                            if (J$.Fr(441))
                                                continue jalangiLabel2;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(337, 'arguments', arguments, 4);
                            J$.N(345, 'obj', obj, 0);
                            foo = J$.N(361, 'foo', J$.T(353, foo, 12, false, 193), 0);
                            var obj = J$.X1(73, J$.W(65, 'obj', J$.T(57, {
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
                                }, 12, false, 33)
                            }, 11, false), obj, 1));
                            J$.X1(289, J$.F(281, J$.R(217, 'foo', foo, 0), 0)(J$.T(273, [
                                J$.T(241, [
                                    J$.T(225, "MyName", 21, false),
                                    J$.T(233, "ok", 21, false)
                                ], 10, false),
                                J$.T(265, [
                                    J$.T(249, "ok", 21, false),
                                    J$.T(257, "MyPhone", 21, false)
                                ], 10, false)
                            ], 10, false)));
                            J$.X1(321, J$.M(313, J$.R(297, 'obj', obj, 0), J$.T(305, "MyPhone", 21, false), 1)());
                        } catch (J$e) {
                            J$.Ex(449, J$e);
                        } finally {
                            if (J$.Fr(457))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 329), 0)());
        } catch (J$e) {
            J$.Ex(465, J$e);
        } finally {
            if (J$.Sr(473)) {
                J$.L();
                continue jalangiLabel4;
            } else {
                J$.L();
                break jalangiLabel4;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

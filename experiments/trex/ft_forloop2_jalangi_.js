J$.ast_info = undefined;
J$.iids = {"9":[4,24,4,27],"10":[18,13,18,19],"17":[4,24,4,27],"18":[20,13,20,20],"25":[4,17,4,28],"26":[21,13,21,16],"33":[3,17,5,10],"34":[22,13,22,21],"41":[3,17,5,10],"49":[3,17,5,10],"57":[7,24,7,27],"65":[7,24,7,27],"73":[7,17,7,28],"81":[6,17,8,10],"89":[6,17,8,10],"97":[6,17,8,10],"105":[2,19,9,10],"113":[2,19,9,10],"121":[2,19,9,10],"129":[17,17,17,21],"137":[17,17,17,21],"145":[17,17,17,21],"153":[18,9,18,12],"161":[18,13,18,16],"169":[18,18,18,19],"177":[18,9,18,22],"179":[18,9,18,20],"185":[18,9,18,22],"193":[19,17,19,20],"201":[19,17,19,20],"209":[19,17,19,20],"217":[20,9,20,12],"225":[20,13,20,14],"233":[20,16,20,20],"241":[20,9,20,23],"243":[20,9,20,21],"249":[20,9,20,23],"257":[21,9,21,12],"265":[21,13,21,14],"273":[21,15,21,16],"281":[21,9,21,19],"283":[21,9,21,17],"289":[21,9,21,19],"297":[22,9,22,12],"305":[22,13,22,16],"313":[22,17,22,21],"321":[22,9,22,24],"323":[22,9,22,22],"329":[22,9,22,24],"337":[1,2,24,2],"345":[1,2,24,2],"353":[1,2,24,2],"361":[1,2,24,2],"369":[1,2,24,2],"377":[1,2,24,2],"385":[1,1,24,5],"393":[1,1,24,6],"401":[1,1,25,7],"409":[3,17,5,10],"417":[3,17,5,10],"425":[6,17,8,10],"433":[6,17,8,10],"441":[1,2,24,2],"449":[1,2,24,2],"457":[1,1,25,7],"465":[1,1,25,7],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_forloop2.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_forloop2_jalangi_.js","code":"(function () {\n        var arr = {\n        \"abc\" : function(){\n                return \"1\";\n        },\n        \"xyz\" : function(){\n                return \"2\";\n        }\n        };\n        /*for(var key in arr){\n                arr[key]();\n        }\n        for(var i=0; i< arr.length; i++){\n                arr[i]();\n        }*/\n\n        var y = \"bc\"\n        arr[\"a\"+ y]()\n        var z = \"a\"\n        arr[z+ \"bc\"]()\n        arr[z+y]()\n        arr[\"a\"+\"bc\"]()\n\n})();\n      "};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(401, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_forloop2_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_forloop2.js');
            J$.X1(393, J$.F(385, J$.T(377, function () {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(337, arguments.callee, this, arguments);
                            arguments = J$.N(345, 'arguments', arguments, 4);
                            J$.N(353, 'arr', arr, 0);
                            J$.N(361, 'y', y, 0);
                            J$.N(369, 'z', z, 0);
                            var arr = J$.X1(121, J$.W(113, 'arr', J$.T(105, {
                                "abc": J$.T(49, function () {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(33, arguments.callee, this, arguments);
                                                arguments = J$.N(41, 'arguments', arguments, 4);
                                                return J$.X1(25, J$.Rt(17, J$.T(9, "1", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(409, J$e);
                                            } finally {
                                                if (J$.Fr(417))
                                                    continue jalangiLabel0;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 33),
                                "xyz": J$.T(97, function () {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(81, arguments.callee, this, arguments);
                                                arguments = J$.N(89, 'arguments', arguments, 4);
                                                return J$.X1(73, J$.Rt(65, J$.T(57, "2", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(425, J$e);
                                            } finally {
                                                if (J$.Fr(433))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 81)
                            }, 11, false), arr, 1));
                            var y = J$.X1(145, J$.W(137, 'y', J$.T(129, "bc", 21, false), y, 1));
                            J$.X1(185, J$.M(177, J$.R(153, 'arr', arr, 0), J$.B(10, '+', J$.T(161, "a", 21, false), J$.R(169, 'y', y, 0), 0), 1)());
                            var z = J$.X1(209, J$.W(201, 'z', J$.T(193, "a", 21, false), z, 1));
                            J$.X1(249, J$.M(241, J$.R(217, 'arr', arr, 0), J$.B(18, '+', J$.R(225, 'z', z, 0), J$.T(233, "bc", 21, false), 0), 1)());
                            J$.X1(289, J$.M(281, J$.R(257, 'arr', arr, 0), J$.B(26, '+', J$.R(265, 'z', z, 0), J$.R(273, 'y', y, 0), 0), 1)());
                            J$.X1(329, J$.M(321, J$.R(297, 'arr', arr, 0), J$.B(34, '+', J$.T(305, "a", 21, false), J$.T(313, "bc", 21, false), 0), 1)());
                        } catch (J$e) {
                            J$.Ex(441, J$e);
                        } finally {
                            if (J$.Fr(449))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 337), 0)());
        } catch (J$e) {
            J$.Ex(457, J$e);
        } finally {
            if (J$.Sr(465)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

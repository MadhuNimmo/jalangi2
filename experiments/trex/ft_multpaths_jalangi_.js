J$.iids = {"8":[7,14,7,27],"9":[3,7,3,12],"10":[3,7,3,20],"16":[5,14,5,27],"17":[3,17,3,20],"18":[5,14,5,27],"24":[3,7,3,20],"25":[4,5,4,12],"26":[7,14,7,27],"33":[4,5,4,14],"41":[4,5,4,15],"49":[5,14,5,19],"57":[5,24,5,27],"65":[6,5,6,12],"73":[6,5,6,14],"81":[6,5,6,15],"89":[7,14,7,19],"97":[7,24,7,27],"105":[8,5,8,12],"113":[8,5,8,14],"121":[8,5,8,15],"129":[2,9,10,3],"137":[2,9,10,3],"145":[2,9,10,3],"153":[2,9,10,3],"161":[13,17,13,20],"169":[13,21,13,24],"177":[13,43,13,46],"185":[13,43,13,46],"193":[13,36,13,46],"201":[13,25,13,47],"209":[13,25,13,47],"217":[13,25,13,47],"225":[13,17,13,48],"233":[13,17,13,48],"241":[14,17,14,20],"249":[14,21,14,24],"257":[14,43,14,46],"265":[14,43,14,46],"273":[14,36,14,46],"281":[14,25,14,47],"289":[14,25,14,47],"297":[14,25,14,47],"305":[14,17,14,48],"313":[14,17,14,48],"321":[15,17,15,20],"329":[15,21,15,24],"337":[15,43,15,46],"345":[15,43,15,46],"353":[15,36,15,46],"361":[15,25,15,47],"369":[15,25,15,47],"377":[15,25,15,47],"385":[15,17,15,48],"393":[15,17,15,48],"401":[12,9,16,10],"409":[12,9,16,10],"417":[17,9,17,12],"425":[17,9,17,14],"433":[17,9,17,14],"441":[1,2,18,2],"449":[1,2,18,2],"457":[2,9,10,3],"465":[1,2,18,2],"473":[12,9,16,10],"481":[1,2,18,2],"489":[1,2,18,2],"497":[1,1,18,5],"505":[1,1,18,5],"513":[1,1,18,5],"521":[7,10,9,4],"529":[5,10,9,4],"537":[3,3,9,4],"545":[2,9,10,3],"553":[2,9,10,3],"561":[13,25,13,47],"569":[13,25,13,47],"577":[14,25,14,47],"585":[14,25,14,47],"593":[15,25,15,47],"601":[15,25,15,47],"609":[12,9,16,10],"617":[12,9,16,10],"625":[1,2,18,2],"633":[1,2,18,2],"641":[1,1,18,5],"649":[1,1,18,5],"nBranches":6,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_multpaths.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_multpaths_jalangi_.js","code":"(function(){\n        function foo(event, handler) {\n\t\tif (event === 'x') {\n\t\t\t\thandler();\n\t\t} else if (event === 'y') {\n\t\t\t\thandler();\n\t\t} else if (event === 'z') {\n\t\t\t\thandler();\n\t\t}\n\t};\n\n        function bar(){\n                foo(\"x\",function(){return \"x\"})\n                foo(\"y\",function(){return \"y\"})\n                foo(\"z\",function(){return \"z\"})\n        }\n        bar()\n})()"};
jalangiLabel6:
    while (true) {
        try {
            J$.Se(513, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_multpaths_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_multpaths.js');
            J$.X1(505, J$.F(497, J$.T(489, function () {
                jalangiLabel5:
                    while (true) {
                        try {
                            J$.Fe(441, arguments.callee, this, arguments);
                            function foo(event, handler) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(129, arguments.callee, this, arguments);
                                            arguments = J$.N(137, 'arguments', arguments, 4);
                                            event = J$.N(145, 'event', event, 4);
                                            handler = J$.N(153, 'handler', handler, 4);
                                            if (J$.X1(537, J$.C(24, J$.B(10, '===', J$.R(9, 'event', event, 0), J$.T(17, 'x', 21, false), 0)))) {
                                                J$.X1(41, J$.F(33, J$.R(25, 'handler', handler, 0), 0)());
                                            } else if (J$.X1(529, J$.C(16, J$.B(18, '===', J$.R(49, 'event', event, 0), J$.T(57, 'y', 21, false), 0)))) {
                                                J$.X1(81, J$.F(73, J$.R(65, 'handler', handler, 0), 0)());
                                            } else if (J$.X1(521, J$.C(8, J$.B(26, '===', J$.R(89, 'event', event, 0), J$.T(97, 'z', 21, false), 0)))) {
                                                J$.X1(121, J$.F(113, J$.R(105, 'handler', handler, 0), 0)());
                                            }
                                        } catch (J$e) {
                                            J$.Ex(545, J$e);
                                        } finally {
                                            if (J$.Fr(553))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            function bar() {
                                jalangiLabel4:
                                    while (true) {
                                        try {
                                            J$.Fe(401, arguments.callee, this, arguments);
                                            arguments = J$.N(409, 'arguments', arguments, 4);
                                            J$.X1(233, J$.F(225, J$.R(161, 'foo', foo, 0), 0)(J$.T(169, "x", 21, false), J$.T(217, function () {
                                                jalangiLabel1:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(201, arguments.callee, this, arguments);
                                                            arguments = J$.N(209, 'arguments', arguments, 4);
                                                            return J$.X1(193, J$.Rt(185, J$.T(177, "x", 21, false)));
                                                        } catch (J$e) {
                                                            J$.Ex(561, J$e);
                                                        } finally {
                                                            if (J$.Fr(569))
                                                                continue jalangiLabel1;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }, 12, false, 201)));
                                            J$.X1(313, J$.F(305, J$.R(241, 'foo', foo, 0), 0)(J$.T(249, "y", 21, false), J$.T(297, function () {
                                                jalangiLabel2:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(281, arguments.callee, this, arguments);
                                                            arguments = J$.N(289, 'arguments', arguments, 4);
                                                            return J$.X1(273, J$.Rt(265, J$.T(257, "y", 21, false)));
                                                        } catch (J$e) {
                                                            J$.Ex(577, J$e);
                                                        } finally {
                                                            if (J$.Fr(585))
                                                                continue jalangiLabel2;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }, 12, false, 281)));
                                            J$.X1(393, J$.F(385, J$.R(321, 'foo', foo, 0), 0)(J$.T(329, "z", 21, false), J$.T(377, function () {
                                                jalangiLabel3:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(361, arguments.callee, this, arguments);
                                                            arguments = J$.N(369, 'arguments', arguments, 4);
                                                            return J$.X1(353, J$.Rt(345, J$.T(337, "z", 21, false)));
                                                        } catch (J$e) {
                                                            J$.Ex(593, J$e);
                                                        } finally {
                                                            if (J$.Fr(601))
                                                                continue jalangiLabel3;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }, 12, false, 361)));
                                        } catch (J$e) {
                                            J$.Ex(609, J$e);
                                        } finally {
                                            if (J$.Fr(617))
                                                continue jalangiLabel4;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(449, 'arguments', arguments, 4);
                            foo = J$.N(465, 'foo', J$.T(457, foo, 12, false, 129), 0);
                            bar = J$.N(481, 'bar', J$.T(473, bar, 12, false, 401), 0);
                            ;
                            J$.X1(433, J$.F(425, J$.R(417, 'bar', bar, 0), 0)());
                        } catch (J$e) {
                            J$.Ex(625, J$e);
                        } finally {
                            if (J$.Fr(633))
                                continue jalangiLabel5;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 441), 0)());
        } catch (J$e) {
            J$.Ex(641, J$e);
        } finally {
            if (J$.Sr(649)) {
                J$.L();
                continue jalangiLabel6;
            } else {
                J$.L();
                break jalangiLabel6;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

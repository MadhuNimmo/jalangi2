J$.iids = {"9":[2,36,2,39],"10":[12,28,12,39],"17":[2,40,2,49],"25":[2,36,2,50],"33":[2,36,2,50],"41":[2,29,2,50],"49":[2,17,2,51],"57":[2,17,2,51],"65":[2,17,2,51],"73":[2,17,2,51],"81":[2,17,2,51],"89":[5,32,5,35],"97":[5,32,5,37],"105":[5,32,5,37],"113":[5,25,5,38],"121":[4,24,6,18],"129":[4,24,6,18],"137":[4,24,6,18],"145":[4,24,6,18],"153":[8,51,8,60],"161":[8,51,8,60],"169":[8,44,8,60],"177":[8,32,8,61],"185":[8,32,8,61],"193":[8,32,8,61],"201":[8,32,8,61],"209":[8,25,8,61],"217":[7,25,9,18],"225":[7,25,9,18],"233":[7,25,9,18],"241":[3,18,10,10],"249":[3,18,10,10],"257":[3,18,10,10],"265":[12,24,12,27],"273":[12,28,12,32],"281":[12,33,12,39],"289":[12,41,12,42],"297":[12,41,12,44],"305":[12,24,12,45],"307":[12,24,12,40],"313":[12,24,12,45],"321":[12,17,12,45],"329":[11,9,13,10],"337":[11,9,13,10],"345":[14,17,14,20],"353":[14,17,14,22],"361":[14,17,14,22],"369":[14,17,14,22],"377":[15,9,15,10],"385":[15,9,15,12],"393":[15,9,15,13],"401":[1,10,16,10],"409":[1,10,16,10],"417":[1,10,16,10],"425":[1,10,16,10],"433":[11,9,13,10],"441":[1,10,16,10],"449":[1,10,16,10],"457":[1,10,16,10],"465":[1,9,16,13],"473":[1,9,16,13],"481":[1,1,17,1],"489":[2,17,2,51],"497":[2,17,2,51],"505":[4,24,6,18],"513":[4,24,6,18],"521":[8,32,8,61],"529":[8,32,8,61],"537":[7,25,9,18],"545":[7,25,9,18],"553":[11,9,13,10],"561":[11,9,13,10],"569":[1,10,16,10],"577":[1,10,16,10],"585":[1,1,17,1],"593":[1,1,17,1],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng9.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng9_jalangi_.js","code":"        (function(){\n        var y = function(){ return obj[\"MyPhone\"]}\n        var obj= {\n                MyName:function(fun){\n                        return fun();\n                },\n                MyPhone:function(){\n                        return function(){ return \"nothing\"}\n                }\n        }\n        function foo(){\n                return obj[\"My\"+\"Name\"](y())\n        }\n        var x = foo();\n        x();\n        })()\n"};
jalangiLabel6:
    while (true) {
        try {
            J$.Se(481, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng9_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng9.js');
            J$.X1(473, J$.F(465, J$.T(457, function () {
                jalangiLabel5:
                    while (true) {
                        try {
                            J$.Fe(401, arguments.callee, this, arguments);
                            function foo() {
                                jalangiLabel4:
                                    while (true) {
                                        try {
                                            J$.Fe(329, arguments.callee, this, arguments);
                                            arguments = J$.N(337, 'arguments', arguments, 4);
                                            return J$.X1(321, J$.Rt(313, J$.M(305, J$.R(265, 'obj', obj, 0), J$.B(10, '+', J$.T(273, "My", 21, false), J$.T(281, "Name", 21, false), 0), 1)(J$.F(297, J$.R(289, 'y', y, 0), 0)())));
                                        } catch (J$e) {
                                            J$.Ex(553, J$e);
                                        } finally {
                                            if (J$.Fr(561))
                                                continue jalangiLabel4;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(409, 'arguments', arguments, 4);
                            J$.N(417, 'y', y, 0);
                            J$.N(425, 'obj', obj, 0);
                            foo = J$.N(441, 'foo', J$.T(433, foo, 12, false, 329), 0);
                            J$.N(449, 'x', x, 0);
                            var y = J$.X1(81, J$.W(73, 'y', J$.T(65, function () {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(49, arguments.callee, this, arguments);
                                            arguments = J$.N(57, 'arguments', arguments, 4);
                                            return J$.X1(41, J$.Rt(33, J$.G(25, J$.R(9, 'obj', obj, 0), J$.T(17, "MyPhone", 21, false), 4)));
                                        } catch (J$e) {
                                            J$.Ex(489, J$e);
                                        } finally {
                                            if (J$.Fr(497))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 49), y, 1));
                            var obj = J$.X1(257, J$.W(249, 'obj', J$.T(241, {
                                MyName: J$.T(145, function (fun) {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(121, arguments.callee, this, arguments);
                                                arguments = J$.N(129, 'arguments', arguments, 4);
                                                fun = J$.N(137, 'fun', fun, 4);
                                                return J$.X1(113, J$.Rt(105, J$.F(97, J$.R(89, 'fun', fun, 0), 0)()));
                                            } catch (J$e) {
                                                J$.Ex(505, J$e);
                                            } finally {
                                                if (J$.Fr(513))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 121),
                                MyPhone: J$.T(233, function () {
                                    jalangiLabel3:
                                        while (true) {
                                            try {
                                                J$.Fe(217, arguments.callee, this, arguments);
                                                arguments = J$.N(225, 'arguments', arguments, 4);
                                                return J$.X1(209, J$.Rt(201, J$.T(193, function () {
                                                    jalangiLabel2:
                                                        while (true) {
                                                            try {
                                                                J$.Fe(177, arguments.callee, this, arguments);
                                                                arguments = J$.N(185, 'arguments', arguments, 4);
                                                                return J$.X1(169, J$.Rt(161, J$.T(153, "nothing", 21, false)));
                                                            } catch (J$e) {
                                                                J$.Ex(521, J$e);
                                                            } finally {
                                                                if (J$.Fr(529))
                                                                    continue jalangiLabel2;
                                                                else
                                                                    return J$.Ra();
                                                            }
                                                        }
                                                }, 12, false, 177)));
                                            } catch (J$e) {
                                                J$.Ex(537, J$e);
                                            } finally {
                                                if (J$.Fr(545))
                                                    continue jalangiLabel3;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 217)
                            }, 11, false), obj, 1));
                            var x = J$.X1(369, J$.W(361, 'x', J$.F(353, J$.R(345, 'foo', foo, 0), 0)(), x, 1));
                            J$.X1(393, J$.F(385, J$.R(377, 'x', x, 0), 0)());
                        } catch (J$e) {
                            J$.Ex(569, J$e);
                        } finally {
                            if (J$.Fr(577))
                                continue jalangiLabel5;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 401), 0)());
        } catch (J$e) {
            J$.Ex(585, J$e);
        } finally {
            if (J$.Sr(593)) {
                J$.L();
                continue jalangiLabel6;
            } else {
                J$.L();
                break jalangiLabel6;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

J$.iids = {"9":[4,39,4,43],"10":[7,19,7,26],"17":[4,39,4,43],"25":[4,32,4,43],"33":[4,21,4,44],"41":[4,21,4,44],"49":[4,21,4,44],"57":[5,39,5,43],"65":[5,39,5,43],"73":[5,32,5,43],"81":[5,21,5,44],"89":[5,21,5,44],"97":[5,21,5,44],"105":[3,18,6,10],"113":[3,18,6,10],"121":[3,18,6,10],"129":[7,15,7,18],"137":[7,19,7,22],"145":[7,23,7,26],"153":[7,15,7,27],"161":[7,15,7,27],"169":[7,9,7,27],"177":[9,22,9,25],"185":[9,22,9,25],"193":[9,17,9,25],"201":[10,22,10,24],"209":[10,22,10,24],"217":[10,17,10,24],"225":[11,17,11,20],"233":[11,26,11,28],"241":[11,17,11,28],"249":[11,17,11,28],"257":[12,24,12,27],"265":[12,24,12,30],"273":[12,24,12,30],"281":[12,17,12,30],"289":[8,9,13,10],"297":[8,9,13,10],"305":[14,9,14,12],"313":[14,9,14,14],"321":[14,9,14,16],"329":[14,9,14,16],"337":[1,2,15,2],"345":[1,2,15,2],"353":[1,2,15,2],"361":[1,2,15,2],"369":[1,2,15,2],"377":[8,9,13,10],"385":[1,2,15,2],"393":[1,2,15,2],"401":[1,1,15,5],"409":[1,1,15,6],"417":[1,1,16,7],"425":[4,21,4,44],"433":[4,21,4,44],"441":[5,21,5,44],"449":[5,21,5,44],"457":[8,9,13,10],"465":[8,9,13,10],"473":[1,2,15,2],"481":[1,2,15,2],"489":[1,1,16,7],"497":[1,1,16,7],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_passobj.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_passobj_jalangi_.js","code":"(function () {\n        var cur,fn;\n        var obj ={\n                f1: function(){return \"f1\"},\n                f2: function(){return \"f2\"}\n        };\n        cur = obj[\"f\"+\"1\"]\n        function foo(){\n                fn = cur\n                cur= {}\n                cur.fn = fn\n                return cur.fn\n        }\n        foo()()\n})();\n      "};
jalangiLabel4:
    while (true) {
        try {
            J$.Se(417, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_passobj_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_passobj.js');
            J$.X1(409, J$.F(401, J$.T(393, function () {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(337, arguments.callee, this, arguments);
                            function foo() {
                                jalangiLabel2:
                                    while (true) {
                                        try {
                                            J$.Fe(289, arguments.callee, this, arguments);
                                            arguments = J$.N(297, 'arguments', arguments, 4);
                                            J$.X1(193, fn = J$.W(185, 'fn', J$.R(177, 'cur', cur, 0), fn, 0));
                                            J$.X1(217, cur = J$.W(209, 'cur', J$.T(201, {}, 11, false), cur, 0));
                                            J$.X1(249, J$.P(241, J$.R(225, 'cur', cur, 0), 'fn', J$.R(233, 'fn', fn, 0), 0));
                                            return J$.X1(281, J$.Rt(273, J$.G(265, J$.R(257, 'cur', cur, 0), 'fn', 0)));
                                        } catch (J$e) {
                                            J$.Ex(457, J$e);
                                        } finally {
                                            if (J$.Fr(465))
                                                continue jalangiLabel2;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(345, 'arguments', arguments, 4);
                            J$.N(353, 'cur', cur, 0);
                            J$.N(361, 'fn', fn, 0);
                            J$.N(369, 'obj', obj, 0);
                            foo = J$.N(385, 'foo', J$.T(377, foo, 12, false, 289), 0);
                            var cur, fn;
                            var obj = J$.X1(121, J$.W(113, 'obj', J$.T(105, {
                                f1: J$.T(49, function () {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(33, arguments.callee, this, arguments);
                                                arguments = J$.N(41, 'arguments', arguments, 4);
                                                return J$.X1(25, J$.Rt(17, J$.T(9, "f1", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(425, J$e);
                                            } finally {
                                                if (J$.Fr(433))
                                                    continue jalangiLabel0;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 33),
                                f2: J$.T(97, function () {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(81, arguments.callee, this, arguments);
                                                arguments = J$.N(89, 'arguments', arguments, 4);
                                                return J$.X1(73, J$.Rt(65, J$.T(57, "f2", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(441, J$e);
                                            } finally {
                                                if (J$.Fr(449))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 81)
                            }, 11, false), obj, 1));
                            J$.X1(169, cur = J$.W(161, 'cur', J$.G(153, J$.R(129, 'obj', obj, 0), J$.B(10, '+', J$.T(137, "f", 21, false), J$.T(145, "1", 21, false), 0), 4), cur, 0));
                            J$.X1(329, J$.F(321, J$.F(313, J$.R(305, 'foo', foo, 0), 0)(), 0)());
                        } catch (J$e) {
                            J$.Ex(473, J$e);
                        } finally {
                            if (J$.Fr(481))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 337), 0)());
        } catch (J$e) {
            J$.Ex(489, J$e);
        } finally {
            if (J$.Sr(497)) {
                J$.L();
                continue jalangiLabel4;
            } else {
                J$.L();
                break jalangiLabel4;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

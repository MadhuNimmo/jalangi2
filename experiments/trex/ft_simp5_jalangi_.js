J$.iids = {"8":[8,12,8,27],"9":[2,9,2,13],"10":[8,12,8,27],"17":[2,14,2,15],"25":[2,9,2,16],"33":[2,9,2,16],"41":[1,1,3,2],"49":[1,1,3,2],"57":[1,1,3,2],"65":[1,1,3,2],"73":[5,16,5,17],"81":[5,16,5,17],"89":[5,9,5,18],"97":[4,1,6,2],"105":[4,1,6,2],"113":[4,1,6,2],"121":[8,12,8,13],"129":[8,18,8,27],"137":[9,17,9,20],"145":[9,21,9,22],"153":[9,23,9,30],"161":[9,17,9,31],"169":[9,17,9,32],"177":[11,17,11,21],"185":[11,22,11,23],"193":[11,24,11,27],"201":[11,28,11,35],"209":[11,17,11,36],"217":[11,17,11,37],"225":[7,1,13,2],"233":[7,1,13,2],"241":[7,1,13,2],"249":[7,1,13,2],"257":[15,9,15,14],"265":[15,15,15,16],"273":[15,17,15,24],"281":[15,9,15,25],"289":[15,9,15,25],"297":[14,1,16,2],"305":[14,1,16,2],"313":[14,1,16,2],"321":[14,1,16,2],"329":[14,1,16,2],"337":[17,1,17,6],"345":[17,7,17,16],"353":[17,17,17,20],"361":[17,1,17,21],"369":[17,1,17,22],"377":[18,1,18,6],"385":[18,7,18,16],"393":[18,17,18,20],"401":[18,1,18,21],"409":[18,1,18,21],"417":[1,1,18,21],"425":[1,1,3,2],"433":[1,1,18,21],"441":[4,1,6,2],"449":[1,1,18,21],"457":[7,1,13,2],"465":[1,1,18,21],"473":[14,1,16,2],"481":[1,1,18,21],"489":[1,1,3,2],"497":[1,1,3,2],"505":[4,1,6,2],"513":[4,1,6,2],"521":[8,9,12,10],"529":[7,1,13,2],"537":[7,1,13,2],"545":[14,1,16,2],"553":[14,1,16,2],"561":[1,1,18,21],"569":[1,1,18,21],"nBranches":2,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_simp5.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_simp5_jalangi_.js","code":"function foo(q,func){\n        func(q)\n}\nfunction bar(x){\n        return x;\n}\nfunction quote(a,callee1){\n        if(a === \"callone\"){\n                foo(a,callee1);\n        }else{\n                foo2(a,foo,callee1);\n        }\n}\nfunction foo2(q,func2,callee2){\n        func2(q,callee2)\n}\nquote(\"callone\",bar);\nquote(\"calltwo\",bar)"};
jalangiLabel4:
    while (true) {
        try {
            J$.Se(417, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_simp5_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_simp5.js');
            function foo(q, func) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(41, arguments.callee, this, arguments);
                            arguments = J$.N(49, 'arguments', arguments, 4);
                            q = J$.N(57, 'q', q, 4);
                            func = J$.N(65, 'func', func, 4);
                            J$.X1(33, J$.F(25, J$.R(9, 'func', func, 0), 0)(J$.R(17, 'q', q, 0)));
                        } catch (J$e) {
                            J$.Ex(489, J$e);
                        } finally {
                            if (J$.Fr(497))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function bar(x) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(97, arguments.callee, this, arguments);
                            arguments = J$.N(105, 'arguments', arguments, 4);
                            x = J$.N(113, 'x', x, 4);
                            return J$.X1(89, J$.Rt(81, J$.R(73, 'x', x, 0)));
                        } catch (J$e) {
                            J$.Ex(505, J$e);
                        } finally {
                            if (J$.Fr(513))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function quote(a, callee1) {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(225, arguments.callee, this, arguments);
                            arguments = J$.N(233, 'arguments', arguments, 4);
                            a = J$.N(241, 'a', a, 4);
                            callee1 = J$.N(249, 'callee1', callee1, 4);
                            if (J$.X1(521, J$.C(8, J$.B(10, '===', J$.R(121, 'a', a, 0), J$.T(129, "callone", 21, false), 0)))) {
                                J$.X1(169, J$.F(161, J$.R(137, 'foo', foo, 1), 0)(J$.R(145, 'a', a, 0), J$.R(153, 'callee1', callee1, 0)));
                            } else {
                                J$.X1(217, J$.F(209, J$.R(177, 'foo2', foo2, 1), 0)(J$.R(185, 'a', a, 0), J$.R(193, 'foo', foo, 1), J$.R(201, 'callee1', callee1, 0)));
                            }
                        } catch (J$e) {
                            J$.Ex(529, J$e);
                        } finally {
                            if (J$.Fr(537))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function foo2(q, func2, callee2) {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(297, arguments.callee, this, arguments);
                            arguments = J$.N(305, 'arguments', arguments, 4);
                            q = J$.N(313, 'q', q, 4);
                            func2 = J$.N(321, 'func2', func2, 4);
                            callee2 = J$.N(329, 'callee2', callee2, 4);
                            J$.X1(289, J$.F(281, J$.R(257, 'func2', func2, 0), 0)(J$.R(265, 'q', q, 0), J$.R(273, 'callee2', callee2, 0)));
                        } catch (J$e) {
                            J$.Ex(545, J$e);
                        } finally {
                            if (J$.Fr(553))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }
            foo = J$.N(433, 'foo', J$.T(425, foo, 12, false, 41), 0);
            bar = J$.N(449, 'bar', J$.T(441, bar, 12, false, 97), 0);
            quote = J$.N(465, 'quote', J$.T(457, quote, 12, false, 225), 0);
            foo2 = J$.N(481, 'foo2', J$.T(473, foo2, 12, false, 297), 0);
            J$.X1(369, J$.F(361, J$.R(337, 'quote', quote, 1), 0)(J$.T(345, "callone", 21, false), J$.R(353, 'bar', bar, 1)));
            J$.X1(409, J$.F(401, J$.R(377, 'quote', quote, 1), 0)(J$.T(385, "calltwo", 21, false), J$.R(393, 'bar', bar, 1)));
        } catch (J$e) {
            J$.Ex(561, J$e);
        } finally {
            if (J$.Sr(569)) {
                J$.L();
                continue jalangiLabel4;
            } else {
                J$.L();
                break jalangiLabel4;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

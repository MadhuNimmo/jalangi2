J$.iids = {"8":[10,20,10,31],"9":[3,24,3,30],"10":[10,20,10,31],"17":[3,24,3,30],"25":[3,17,3,30],"33":[2,9,4,10],"41":[2,9,4,10],"49":[5,16,5,20],"57":[5,16,5,20],"65":[5,9,5,21],"73":[1,1,6,2],"81":[1,1,6,2],"89":[2,9,4,10],"97":[1,1,6,2],"105":[7,16,7,19],"113":[7,16,7,19],"121":[7,9,7,20],"129":[6,2,8,2],"137":[6,2,8,2],"145":[10,20,10,23],"153":[10,26,10,31],"161":[10,33,10,34],"169":[10,37,10,40],"177":[10,37,10,42],"185":[10,20,10,42],"193":[10,20,10,42],"201":[11,16,11,20],"209":[11,16,11,22],"217":[11,16,11,22],"225":[11,9,11,23],"233":[9,1,12,2],"241":[9,1,12,2],"249":[9,1,12,2],"257":[9,1,12,2],"265":[13,1,13,2],"273":[13,3,13,8],"281":[13,1,13,9],"289":[13,1,13,9],"297":[1,1,13,9],"305":[1,1,6,2],"313":[1,1,13,9],"321":[6,2,8,2],"329":[1,1,13,9],"337":[9,1,12,2],"345":[1,1,13,9],"353":[2,9,4,10],"361":[2,9,4,10],"369":[1,1,6,2],"377":[1,1,6,2],"385":[6,2,8,2],"393":[6,2,8,2],"401":[10,20,10,42],"409":[9,1,12,2],"417":[9,1,12,2],"425":[1,1,13,9],"433":[1,1,13,9],"nBranches":2,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_rets2.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_rets2_jalangi_.js","code":"function gen(){\n        function func(){\n                return \"done\"\n        }\n        return func;\n}function x(){\n        return \"x\";\n}\nfunction y(inp){\n        var next = inp===\"abc\"? x : gen()\n        return next();\n}\ny(\"ABC\")"};
jalangiLabel4:
    while (true) {
        try {
            J$.Se(297, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_rets2_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_rets2.js');
            function gen() {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(73, arguments.callee, this, arguments);
                            function func() {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(33, arguments.callee, this, arguments);
                                            arguments = J$.N(41, 'arguments', arguments, 4);
                                            return J$.X1(25, J$.Rt(17, J$.T(9, "done", 21, false)));
                                        } catch (J$e) {
                                            J$.Ex(353, J$e);
                                        } finally {
                                            if (J$.Fr(361))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(81, 'arguments', arguments, 4);
                            func = J$.N(97, 'func', J$.T(89, func, 12, false, 33), 0);
                            return J$.X1(65, J$.Rt(57, J$.R(49, 'func', func, 0)));
                        } catch (J$e) {
                            J$.Ex(369, J$e);
                        } finally {
                            if (J$.Fr(377))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function x() {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(129, arguments.callee, this, arguments);
                            arguments = J$.N(137, 'arguments', arguments, 4);
                            return J$.X1(121, J$.Rt(113, J$.T(105, "x", 21, false)));
                        } catch (J$e) {
                            J$.Ex(385, J$e);
                        } finally {
                            if (J$.Fr(393))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function y(inp) {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(233, arguments.callee, this, arguments);
                            arguments = J$.N(241, 'arguments', arguments, 4);
                            inp = J$.N(249, 'inp', inp, 4);
                            J$.N(257, 'next', next, 0);
                            var next = J$.X1(193, J$.W(185, 'next', J$.X1(401, J$.C(8, J$.B(10, '===', J$.R(145, 'inp', inp, 0), J$.T(153, "abc", 21, false), 0))) ? J$.R(161, 'x', x, 1) : J$.F(177, J$.R(169, 'gen', gen, 1), 0)(), next, 1));
                            return J$.X1(225, J$.Rt(217, J$.F(209, J$.R(201, 'next', next, 0), 0)()));
                        } catch (J$e) {
                            J$.Ex(409, J$e);
                        } finally {
                            if (J$.Fr(417))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }
            gen = J$.N(313, 'gen', J$.T(305, gen, 12, false, 73), 0);
            x = J$.N(329, 'x', J$.T(321, x, 12, false, 129), 0);
            y = J$.N(345, 'y', J$.T(337, y, 12, false, 233), 0);
            J$.X1(289, J$.F(281, J$.R(265, 'y', y, 1), 0)(J$.T(273, "ABC", 21, false)));
        } catch (J$e) {
            J$.Ex(425, J$e);
        } finally {
            if (J$.Sr(433)) {
                J$.L();
                continue jalangiLabel4;
            } else {
                J$.L();
                break jalangiLabel4;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

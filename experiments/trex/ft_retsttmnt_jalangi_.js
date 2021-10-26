J$.iids = {"8":[6,20,6,29],"9":[2,16,2,22],"10":[6,20,6,29],"17":[2,16,2,22],"25":[2,9,2,23],"33":[1,1,3,2],"41":[1,1,3,2],"49":[5,18,5,23],"57":[5,18,5,23],"65":[5,18,5,23],"73":[6,20,6,23],"81":[6,26,6,29],"89":[6,31,6,32],"97":[6,35,6,36],"105":[6,20,6,36],"113":[6,20,6,36],"121":[7,16,7,20],"129":[7,16,7,22],"137":[7,16,7,22],"145":[7,9,7,23],"153":[4,1,8,2],"161":[4,1,8,2],"169":[4,1,8,2],"177":[4,1,8,2],"185":[4,1,8,2],"193":[9,1,9,2],"201":[9,3,9,8],"209":[9,1,9,9],"217":[9,1,9,9],"225":[1,1,9,9],"233":[1,1,3,2],"241":[1,1,9,9],"249":[4,1,8,2],"257":[1,1,9,9],"265":[1,1,3,2],"273":[1,1,3,2],"281":[6,20,6,36],"289":[4,1,8,2],"297":[4,1,8,2],"305":[1,1,9,9],"313":[1,1,9,9],"nBranches":2,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_retsttmnt.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_retsttmnt_jalangi_.js","code":"function x(){\n        return \"done\";\n}\nfunction y(inp){\n        var abc= \"ABC\"\n        var next = inp===abc? x : y\n        return next();\n}\ny(\"ABC\")"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(225, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_retsttmnt_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_retsttmnt.js');
            function x() {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(33, arguments.callee, this, arguments);
                            arguments = J$.N(41, 'arguments', arguments, 4);
                            return J$.X1(25, J$.Rt(17, J$.T(9, "done", 21, false)));
                        } catch (J$e) {
                            J$.Ex(265, J$e);
                        } finally {
                            if (J$.Fr(273))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function y(inp) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(153, arguments.callee, this, arguments);
                            arguments = J$.N(161, 'arguments', arguments, 4);
                            inp = J$.N(169, 'inp', inp, 4);
                            J$.N(177, 'abc', abc, 0);
                            J$.N(185, 'next', next, 0);
                            var abc = J$.X1(65, J$.W(57, 'abc', J$.T(49, "ABC", 21, false), abc, 1));
                            var next = J$.X1(113, J$.W(105, 'next', J$.X1(281, J$.C(8, J$.B(10, '===', J$.R(73, 'inp', inp, 0), J$.R(81, 'abc', abc, 0), 0))) ? J$.R(89, 'x', x, 1) : J$.R(97, 'y', y, 1), next, 1));
                            return J$.X1(145, J$.Rt(137, J$.F(129, J$.R(121, 'next', next, 0), 0)()));
                        } catch (J$e) {
                            J$.Ex(289, J$e);
                        } finally {
                            if (J$.Fr(297))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            x = J$.N(241, 'x', J$.T(233, x, 12, false, 33), 0);
            y = J$.N(257, 'y', J$.T(249, y, 12, false, 153), 0);
            J$.X1(217, J$.F(209, J$.R(193, 'y', y, 1), 0)(J$.T(201, "ABC", 21, false)));
        } catch (J$e) {
            J$.Ex(305, J$e);
        } finally {
            if (J$.Sr(313)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

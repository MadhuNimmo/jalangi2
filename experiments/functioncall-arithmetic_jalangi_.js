J$.iids = {"9":[1,9,1,10],"10":[4,12,4,17],"17":[1,9,1,10],"18":[19,6,19,11],"25":[1,9,1,10],"33":[4,12,4,13],"41":[4,16,4,17],"49":[4,12,4,17],"57":[4,5,4,18],"65":[3,1,5,2],"73":[3,1,5,2],"81":[3,1,5,2],"89":[7,5,7,6],"97":[7,7,7,8],"105":[7,5,7,9],"113":[7,5,7,9],"121":[7,1,7,10],"129":[8,1,8,2],"137":[8,3,8,4],"145":[8,1,8,5],"153":[8,1,8,6],"161":[11,10,11,11],"169":[11,12,11,13],"177":[11,10,11,14],"185":[11,10,11,14],"193":[11,3,11,15],"201":[10,1,12,2],"209":[10,1,12,2],"217":[10,1,12,2],"225":[15,3,15,4],"233":[15,5,15,6],"241":[15,3,15,7],"249":[15,3,15,8],"257":[16,10,16,11],"265":[16,12,16,13],"273":[16,10,16,14],"281":[16,10,16,14],"289":[16,3,16,15],"297":[14,1,17,2],"305":[14,1,17,2],"313":[14,1,17,2],"321":[14,1,17,2],"329":[19,1,19,2],"337":[19,3,19,4],"345":[19,6,19,7],"353":[19,10,19,11],"361":[19,1,19,12],"369":[19,1,19,13],"377":[1,1,20,1],"385":[1,1,20,1],"393":[3,1,5,2],"401":[1,1,20,1],"409":[10,1,12,2],"417":[1,1,20,1],"425":[14,1,17,2],"433":[1,1,20,1],"441":[3,1,5,2],"449":[3,1,5,2],"457":[10,1,12,2],"465":[10,1,12,2],"473":[14,1,17,2],"481":[14,1,17,2],"489":[1,1,20,1],"497":[1,1,20,1],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/functioncall-arithmetic.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/functioncall-arithmetic_jalangi_.js","code":"var x = 5;\n\nfunction f(a) {\n    return 2 * a;\n}\n\ny = f(x);\nf(2);\n\nfunction j(b) {\n  return f(b);\n}\n\nfunction g(h, y) {\n  j(4);\n  return h(y);\n}\n\ng(f, x + 8);\n"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(377, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/functioncall-arithmetic_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/functioncall-arithmetic.js');
            function f(a) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(65, arguments.callee, this, arguments);
                            arguments = J$.N(73, 'arguments', arguments, 4);
                            a = J$.N(81, 'a', a, 4);
                            return J$.X1(57, J$.Rt(49, J$.B(10, '*', J$.T(33, 2, 22, false), J$.R(41, 'a', a, 0), 0)));
                        } catch (J$e) {
                            J$.Ex(441, J$e);
                        } finally {
                            if (J$.Fr(449))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function j(b) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(201, arguments.callee, this, arguments);
                            arguments = J$.N(209, 'arguments', arguments, 4);
                            b = J$.N(217, 'b', b, 4);
                            return J$.X1(193, J$.Rt(185, J$.F(177, J$.R(161, 'f', f, 1), 0)(J$.R(169, 'b', b, 0))));
                        } catch (J$e) {
                            J$.Ex(457, J$e);
                        } finally {
                            if (J$.Fr(465))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function g(h, y) {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(297, arguments.callee, this, arguments);
                            arguments = J$.N(305, 'arguments', arguments, 4);
                            h = J$.N(313, 'h', h, 4);
                            y = J$.N(321, 'y', y, 4);
                            J$.X1(249, J$.F(241, J$.R(225, 'j', j, 1), 0)(J$.T(233, 4, 22, false)));
                            return J$.X1(289, J$.Rt(281, J$.F(273, J$.R(257, 'h', h, 0), 0)(J$.R(265, 'y', y, 0))));
                        } catch (J$e) {
                            J$.Ex(473, J$e);
                        } finally {
                            if (J$.Fr(481))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(385, 'x', x, 0);
            f = J$.N(401, 'f', J$.T(393, f, 12, false, 65), 0);
            j = J$.N(417, 'j', J$.T(409, j, 12, false, 201), 0);
            g = J$.N(433, 'g', J$.T(425, g, 12, false, 297), 0);
            var x = J$.X1(25, J$.W(17, 'x', J$.T(9, 5, 22, false), x, 3));
            J$.X1(121, y = J$.W(113, 'y', J$.F(105, J$.R(89, 'f', f, 1), 0)(J$.R(97, 'x', x, 1)), J$.I(typeof y === 'undefined' ? undefined : y), 4));
            J$.X1(153, J$.F(145, J$.R(129, 'f', f, 1), 0)(J$.T(137, 2, 22, false)));
            J$.X1(369, J$.F(361, J$.R(329, 'g', g, 1), 0)(J$.R(337, 'f', f, 1), J$.B(18, '+', J$.R(345, 'x', x, 1), J$.T(353, 8, 22, false), 0)));
        } catch (J$e) {
            J$.Ex(489, J$e);
        } finally {
            if (J$.Sr(497)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

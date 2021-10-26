J$.iids = {"8":[6,3,6,13],"9":[1,11,1,13],"10":[6,3,6,13],"17":[1,11,1,13],"25":[1,11,1,13],"33":[2,1,2,4],"41":[3,10,3,13],"49":[3,10,3,15],"57":[3,10,3,15],"65":[3,3,3,16],"73":[2,9,4,2],"81":[2,9,4,2],"89":[2,9,4,2],"97":[2,9,4,2],"105":[2,9,4,2],"113":[2,1,4,2],"121":[2,1,4,3],"129":[5,1,5,4],"137":[6,3,6,4],"145":[6,8,6,13],"153":[6,16,6,19],"161":[6,16,6,21],"169":[6,24,6,27],"177":[6,24,6,29],"185":[6,3,6,30],"193":[5,9,7,2],"201":[5,9,7,2],"209":[5,9,7,2],"217":[5,9,7,2],"225":[5,9,7,2],"233":[5,1,7,2],"241":[5,1,7,3],"249":[8,9,8,12],"257":[8,13,8,16],"265":[8,9,8,17],"273":[8,9,8,17],"281":[8,9,8,17],"289":[10,10,10,22],"297":[10,10,10,22],"305":[10,3,10,23],"313":[9,7,11,2],"321":[9,7,11,2],"329":[9,7,11,2],"337":[9,7,11,2],"345":[9,1,11,3],"353":[13,10,13,22],"361":[13,10,13,22],"369":[13,3,13,23],"377":[12,7,14,2],"385":[12,7,14,2],"393":[12,7,14,2],"401":[12,7,14,2],"409":[12,1,14,3],"417":[15,1,15,2],"425":[15,3,15,8],"433":[15,1,15,9],"441":[15,1,15,10],"449":[1,1,16,1],"457":[1,1,16,1],"465":[1,1,16,1],"473":[2,9,4,2],"481":[2,9,4,2],"489":[6,3,6,29],"497":[5,9,7,2],"505":[5,9,7,2],"513":[9,7,11,2],"521":[9,7,11,2],"529":[12,7,14,2],"537":[12,7,14,2],"545":[1,1,16,1],"553":[1,1,16,1],"nBranches":2,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexwala.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexwala_jalangi_.js","code":"var obj = {};\nobj.x = function f1(f) {\n  return foo();\n};\nobj.y = function f2(f) {\n  f == \"foo\" ? foo() : bar();\n};\nvar m = obj[\"y\"];\nfoo = function () {\n  return \"foo called\";\n};\nbar = function () {\n  return \"bar called\";\n};\nm(\"foo\");\n"};
jalangiLabel4:
    while (true) {
        try {
            J$.Se(449, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexwala_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexwala.js');
            J$.N(457, 'obj', obj, 0);
            J$.N(465, 'm', m, 0);
            var obj = J$.X1(25, J$.W(17, 'obj', J$.T(9, {}, 11, false), obj, 3));
            J$.X1(121, J$.P(113, J$.R(33, 'obj', obj, 1), 'x', J$.T(105, function f1(f) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(73, arguments.callee, this, arguments);
                            arguments = J$.N(81, 'arguments', arguments, 4);
                            f1 = J$.N(89, 'f1', f1, 0);
                            f = J$.N(97, 'f', f, 4);
                            return J$.X1(65, J$.Rt(57, J$.F(49, J$.R(41, 'foo', foo, 2), 0)()));
                        } catch (J$e) {
                            J$.Ex(473, J$e);
                        } finally {
                            if (J$.Fr(481))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 73), 0));
            J$.X1(241, J$.P(233, J$.R(129, 'obj', obj, 1), 'y', J$.T(225, function f2(f) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(193, arguments.callee, this, arguments);
                            arguments = J$.N(201, 'arguments', arguments, 4);
                            f2 = J$.N(209, 'f2', f2, 0);
                            f = J$.N(217, 'f', f, 4);
                            J$.X1(185, J$.X1(489, J$.C(8, J$.B(10, '==', J$.R(137, 'f', f, 0), J$.T(145, "foo", 21, false), 0))) ? J$.F(161, J$.R(153, 'foo', foo, 2), 0)() : J$.F(177, J$.R(169, 'bar', bar, 2), 0)());
                        } catch (J$e) {
                            J$.Ex(497, J$e);
                        } finally {
                            if (J$.Fr(505))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 193), 0));
            var m = J$.X1(281, J$.W(273, 'm', J$.G(265, J$.R(249, 'obj', obj, 1), J$.T(257, "y", 21, false), 4), m, 3));
            J$.X1(345, foo = J$.W(337, 'foo', J$.T(329, function () {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(313, arguments.callee, this, arguments);
                            arguments = J$.N(321, 'arguments', arguments, 4);
                            return J$.X1(305, J$.Rt(297, J$.T(289, "foo called", 21, false)));
                        } catch (J$e) {
                            J$.Ex(513, J$e);
                        } finally {
                            if (J$.Fr(521))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 313), J$.I(typeof foo === 'undefined' ? undefined : foo), 4));
            J$.X1(409, bar = J$.W(401, 'bar', J$.T(393, function () {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(377, arguments.callee, this, arguments);
                            arguments = J$.N(385, 'arguments', arguments, 4);
                            return J$.X1(369, J$.Rt(361, J$.T(353, "bar called", 21, false)));
                        } catch (J$e) {
                            J$.Ex(529, J$e);
                        } finally {
                            if (J$.Fr(537))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 377), J$.I(typeof bar === 'undefined' ? undefined : bar), 4));
            J$.X1(441, J$.F(433, J$.R(417, 'm', m, 1), 0)(J$.T(425, "foo", 21, false)));
        } catch (J$e) {
            J$.Ex(545, J$e);
        } finally {
            if (J$.Sr(553)) {
                J$.L();
                continue jalangiLabel4;
            } else {
                J$.L();
                break jalangiLabel4;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

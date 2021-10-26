J$.iids = {"8":[4,14,4,27],"9":[2,7,2,11],"10":[2,7,2,20],"16":[2,7,2,20],"17":[2,15,2,20],"18":[4,14,4,27],"25":[3,5,3,8],"33":[3,5,3,10],"41":[3,5,3,11],"49":[4,14,4,18],"57":[4,22,4,27],"65":[5,5,5,8],"73":[5,5,5,10],"81":[5,5,5,11],"89":[1,14,7,2],"97":[1,14,7,2],"105":[1,14,7,2],"113":[1,14,7,2],"121":[1,14,7,2],"129":[1,14,7,2],"137":[9,10,9,15],"145":[9,10,9,15],"153":[9,3,9,16],"161":[8,1,10,2],"169":[8,1,10,2],"177":[12,10,12,15],"185":[12,10,12,15],"193":[12,3,12,16],"201":[11,1,13,2],"209":[11,1,13,2],"217":[14,1,14,7],"225":[14,8,14,13],"233":[14,1,14,14],"241":[14,1,14,15],"249":[1,1,15,1],"257":[1,1,15,1],"265":[8,1,10,2],"273":[1,1,15,1],"281":[11,1,13,2],"289":[1,1,15,1],"297":[4,10,6,4],"305":[2,3,6,4],"313":[1,14,7,2],"321":[1,14,7,2],"329":[8,1,10,2],"337":[8,1,10,2],"345":[11,1,13,2],"353":[11,1,13,2],"361":[1,1,15,1],"369":[1,1,15,1],"nBranches":4,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex4.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex4_jalangi_.js","code":"var choose = function (name) {\n  if (name == \"foo\") {\n    foo();\n  } else if (name == \"bar\") {\n    bar();\n  }\n};\nfunction foo() {\n  return \"foo\";\n}\nfunction bar() {\n  return \"bar\";\n}\nchoose(\"foo\");\n"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(249, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex4_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex4.js');
            function foo() {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(161, arguments.callee, this, arguments);
                            arguments = J$.N(169, 'arguments', arguments, 4);
                            return J$.X1(153, J$.Rt(145, J$.T(137, "foo", 21, false)));
                        } catch (J$e) {
                            J$.Ex(329, J$e);
                        } finally {
                            if (J$.Fr(337))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function bar() {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(201, arguments.callee, this, arguments);
                            arguments = J$.N(209, 'arguments', arguments, 4);
                            return J$.X1(193, J$.Rt(185, J$.T(177, "bar", 21, false)));
                        } catch (J$e) {
                            J$.Ex(345, J$e);
                        } finally {
                            if (J$.Fr(353))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(257, 'choose', choose, 0);
            foo = J$.N(273, 'foo', J$.T(265, foo, 12, false, 161), 0);
            bar = J$.N(289, 'bar', J$.T(281, bar, 12, false, 201), 0);
            var choose = J$.X1(129, J$.W(121, 'choose', J$.T(113, function (name) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(89, arguments.callee, this, arguments);
                            arguments = J$.N(97, 'arguments', arguments, 4);
                            name = J$.N(105, 'name', name, 4);
                            if (J$.X1(305, J$.C(16, J$.B(10, '==', J$.R(9, 'name', name, 0), J$.T(17, "foo", 21, false), 0)))) {
                                J$.X1(41, J$.F(33, J$.R(25, 'foo', foo, 1), 0)());
                            } else if (J$.X1(297, J$.C(8, J$.B(18, '==', J$.R(49, 'name', name, 0), J$.T(57, "bar", 21, false), 0)))) {
                                J$.X1(81, J$.F(73, J$.R(65, 'bar', bar, 1), 0)());
                            }
                        } catch (J$e) {
                            J$.Ex(313, J$e);
                        } finally {
                            if (J$.Fr(321))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 89), choose, 3));
            J$.X1(241, J$.F(233, J$.R(217, 'choose', choose, 1), 0)(J$.T(225, "foo", 21, false)));
        } catch (J$e) {
            J$.Ex(361, J$e);
        } finally {
            if (J$.Sr(369)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

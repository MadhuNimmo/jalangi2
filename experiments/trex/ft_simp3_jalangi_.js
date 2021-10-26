J$.iids = {"9":[2,16,2,21],"17":[2,16,2,21],"25":[2,9,2,22],"33":[1,13,3,2],"41":[1,13,3,2],"49":[1,13,3,2],"57":[5,16,5,21],"65":[5,16,5,21],"73":[5,9,5,22],"81":[4,1,6,2],"89":[4,1,6,2],"97":[8,9,8,12],"105":[8,13,8,16],"113":[8,9,8,17],"121":[8,9,8,17],"129":[8,9,8,17],"137":[9,1,9,2],"145":[9,1,9,4],"153":[9,1,9,5],"161":[1,2,10,2],"169":[1,2,10,2],"177":[1,13,3,2],"185":[1,2,10,2],"193":[4,1,6,2],"201":[1,2,10,2],"209":[1,2,10,2],"217":[1,2,10,2],"225":[1,1,10,5],"233":[1,1,10,6],"241":[1,1,11,1],"249":[1,13,3,2],"257":[1,13,3,2],"265":[4,1,6,2],"273":[4,1,6,2],"281":[1,2,10,2],"289":[1,2,10,2],"297":[1,1,11,1],"305":[1,1,11,1],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_simp3.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_simp3_jalangi_.js","code":"(function(){function foo(quote){\n        return quote;\n}\nfunction bar(){\n        return \"bar\";\n}\n\nvar x = foo(bar);\nx();\n})();\n"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(241, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_simp3_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_simp3.js');
            J$.X1(233, J$.F(225, J$.T(217, function () {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(161, arguments.callee, this, arguments);
                            function foo(quote) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(33, arguments.callee, this, arguments);
                                            arguments = J$.N(41, 'arguments', arguments, 4);
                                            quote = J$.N(49, 'quote', quote, 4);
                                            return J$.X1(25, J$.Rt(17, J$.R(9, 'quote', quote, 0)));
                                        } catch (J$e) {
                                            J$.Ex(249, J$e);
                                        } finally {
                                            if (J$.Fr(257))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            function bar() {
                                jalangiLabel1:
                                    while (true) {
                                        try {
                                            J$.Fe(81, arguments.callee, this, arguments);
                                            arguments = J$.N(89, 'arguments', arguments, 4);
                                            return J$.X1(73, J$.Rt(65, J$.T(57, "bar", 21, false)));
                                        } catch (J$e) {
                                            J$.Ex(265, J$e);
                                        } finally {
                                            if (J$.Fr(273))
                                                continue jalangiLabel1;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(169, 'arguments', arguments, 4);
                            foo = J$.N(185, 'foo', J$.T(177, foo, 12, false, 33), 0);
                            bar = J$.N(201, 'bar', J$.T(193, bar, 12, false, 81), 0);
                            J$.N(209, 'x', x, 0);
                            var x = J$.X1(129, J$.W(121, 'x', J$.F(113, J$.R(97, 'foo', foo, 0), 0)(J$.R(105, 'bar', bar, 0)), x, 1));
                            J$.X1(153, J$.F(145, J$.R(137, 'x', x, 0), 0)());
                        } catch (J$e) {
                            J$.Ex(281, J$e);
                        } finally {
                            if (J$.Fr(289))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 161), 0)());
        } catch (J$e) {
            J$.Ex(297, J$e);
        } finally {
            if (J$.Sr(305)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

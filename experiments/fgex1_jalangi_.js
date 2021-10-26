J$.iids = {"9":[2,9,2,10],"17":[2,9,2,12],"25":[2,9,2,13],"33":[1,1,3,2],"41":[1,1,3,2],"49":[1,1,3,2],"57":[1,1,3,2],"65":[4,17,4,24],"73":[4,17,4,24],"81":[4,1,4,25],"89":[4,1,4,25],"97":[5,9,5,12],"105":[5,9,5,12],"113":[5,9,5,12],"121":[6,9,6,12],"129":[6,9,6,12],"137":[6,9,6,12],"145":[7,1,7,4],"153":[7,5,7,6],"161":[7,8,7,9],"169":[7,1,7,10],"177":[7,1,7,11],"185":[1,1,7,11],"193":[1,1,3,2],"201":[1,1,7,11],"209":[4,1,4,25],"217":[1,1,7,11],"225":[1,1,7,11],"233":[1,1,7,11],"241":[1,1,3,2],"249":[1,1,3,2],"257":[4,1,4,25],"265":[4,1,4,25],"273":[1,1,7,11],"281":[1,1,7,11],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex1.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex1_jalangi_.js","code":"function foo(p, q) {\n        p();\n}\nfunction bar() {return;}\nvar x = bar;\nvar y = bar;\nfoo(x, y);"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(185, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex1_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex1.js');
            function foo(p, q) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(33, arguments.callee, this, arguments);
                            arguments = J$.N(41, 'arguments', arguments, 4);
                            p = J$.N(49, 'p', p, 4);
                            q = J$.N(57, 'q', q, 4);
                            J$.X1(25, J$.F(17, J$.R(9, 'p', p, 0), 0)());
                        } catch (J$e) {
                            J$.Ex(241, J$e);
                        } finally {
                            if (J$.Fr(249))
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
                            return J$.X1(73, J$.Rt(65, undefined));
                        } catch (J$e) {
                            J$.Ex(257, J$e);
                        } finally {
                            if (J$.Fr(265))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            foo = J$.N(201, 'foo', J$.T(193, foo, 12, false, 33), 0);
            bar = J$.N(217, 'bar', J$.T(209, bar, 12, false, 81), 0);
            J$.N(225, 'x', x, 0);
            J$.N(233, 'y', y, 0);
            var x = J$.X1(113, J$.W(105, 'x', J$.R(97, 'bar', bar, 1), x, 3));
            var y = J$.X1(137, J$.W(129, 'y', J$.R(121, 'bar', bar, 1), y, 3));
            J$.X1(177, J$.F(169, J$.R(145, 'foo', foo, 1), 0)(J$.R(153, 'x', x, 1), J$.R(161, 'y', y, 1)));
        } catch (J$e) {
            J$.Ex(273, J$e);
        } finally {
            if (J$.Sr(281)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

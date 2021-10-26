J$.iids = {"9":[2,16,2,19],"17":[2,16,2,21],"25":[2,16,2,21],"33":[2,9,2,22],"41":[1,1,3,2],"49":[1,1,3,2],"57":[1,1,3,2],"65":[5,16,5,21],"73":[5,16,5,21],"81":[5,9,5,22],"89":[4,1,6,2],"97":[4,1,6,2],"105":[7,1,7,4],"113":[7,5,7,8],"121":[7,1,7,9],"129":[7,1,7,10],"137":[1,1,7,10],"145":[1,1,3,2],"153":[1,1,7,10],"161":[4,1,6,2],"169":[1,1,7,10],"177":[1,1,3,2],"185":[1,1,3,2],"193":[4,1,6,2],"201":[4,1,6,2],"209":[1,1,7,10],"217":[1,1,7,10],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex2.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex2_jalangi_.js","code":"function foo(baz) { \n        return baz();\n}\nfunction bar() { \n        return \"bar\";\n}\nfoo(bar);"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(137, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex2_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex2.js');
            function foo(baz) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(41, arguments.callee, this, arguments);
                            arguments = J$.N(49, 'arguments', arguments, 4);
                            baz = J$.N(57, 'baz', baz, 4);
                            return J$.X1(33, J$.Rt(25, J$.F(17, J$.R(9, 'baz', baz, 0), 0)()));
                        } catch (J$e) {
                            J$.Ex(177, J$e);
                        } finally {
                            if (J$.Fr(185))
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
                            J$.Fe(89, arguments.callee, this, arguments);
                            arguments = J$.N(97, 'arguments', arguments, 4);
                            return J$.X1(81, J$.Rt(73, J$.T(65, "bar", 21, false)));
                        } catch (J$e) {
                            J$.Ex(193, J$e);
                        } finally {
                            if (J$.Fr(201))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            foo = J$.N(153, 'foo', J$.T(145, foo, 12, false, 41), 0);
            bar = J$.N(169, 'bar', J$.T(161, bar, 12, false, 89), 0);
            J$.X1(129, J$.F(121, J$.R(105, 'foo', foo, 1), 0)(J$.R(113, 'bar', bar, 1)));
        } catch (J$e) {
            J$.Ex(209, J$e);
        } finally {
            if (J$.Sr(217)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

J$.iids = {"9":[1,1,2,2],"17":[1,1,2,2],"25":[5,3,5,4],"33":[5,3,5,6],"41":[5,3,5,7],"49":[4,1,6,2],"57":[4,1,6,2],"65":[4,1,6,2],"73":[8,1,8,4],"81":[8,5,8,8],"89":[8,1,8,9],"97":[8,1,8,10],"105":[1,1,8,10],"113":[1,1,2,2],"121":[1,1,8,10],"129":[4,1,6,2],"137":[1,1,8,10],"145":[1,1,2,2],"153":[1,1,2,2],"161":[4,1,6,2],"169":[4,1,6,2],"177":[1,1,8,10],"185":[1,1,8,10],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/example8.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/example8_jalangi_.js","code":"function bar() {\n}\n\nfunction foo(f) {\n  f();\n}\n\nfoo(bar);"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(105, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/example8_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/example8.js');
            function bar() {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(9, arguments.callee, this, arguments);
                            arguments = J$.N(17, 'arguments', arguments, 4);
                        } catch (J$e) {
                            J$.Ex(145, J$e);
                        } finally {
                            if (J$.Fr(153))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function foo(f) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(49, arguments.callee, this, arguments);
                            arguments = J$.N(57, 'arguments', arguments, 4);
                            f = J$.N(65, 'f', f, 4);
                            J$.X1(41, J$.F(33, J$.R(25, 'f', f, 0), 0)());
                        } catch (J$e) {
                            J$.Ex(161, J$e);
                        } finally {
                            if (J$.Fr(169))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            bar = J$.N(121, 'bar', J$.T(113, bar, 12, false, 9), 0);
            foo = J$.N(137, 'foo', J$.T(129, foo, 12, false, 49), 0);
            J$.X1(97, J$.F(89, J$.R(73, 'foo', foo, 1), 0)(J$.R(81, 'bar', bar, 1)));
        } catch (J$e) {
            J$.Ex(177, J$e);
        } finally {
            if (J$.Sr(185)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

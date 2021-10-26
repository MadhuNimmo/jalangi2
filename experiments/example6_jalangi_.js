J$.iids = {"9":[2,16,2,19],"17":[2,16,2,21],"25":[2,16,2,21],"33":[2,9,2,22],"41":[1,1,3,8],"49":[1,1,3,8],"57":[5,9,5,16],"65":[5,9,5,16],"73":[4,1,6,8],"81":[4,1,6,8],"89":[7,3,7,6],"97":[7,3,7,8],"105":[7,3,7,8],"113":[7,1,7,9],"121":[8,1,8,4],"129":[8,1,8,6],"137":[8,1,8,7],"145":[1,1,8,7],"153":[1,1,3,8],"161":[1,1,8,7],"169":[4,1,6,8],"177":[1,1,8,7],"185":[1,1,3,8],"193":[1,1,3,8],"201":[4,1,6,8],"209":[4,1,6,8],"217":[1,1,8,7],"225":[1,1,8,7],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/example6.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/example6_jalangi_.js","code":"function foo(){\n        return bar();\n      }\nfunction bar(){\n        return;\n      }\nx=foo();\nbar();"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(145, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/example6_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/example6.js');
            function foo() {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(41, arguments.callee, this, arguments);
                            arguments = J$.N(49, 'arguments', arguments, 4);
                            return J$.X1(33, J$.Rt(25, J$.F(17, J$.R(9, 'bar', bar, 1), 0)()));
                        } catch (J$e) {
                            J$.Ex(185, J$e);
                        } finally {
                            if (J$.Fr(193))
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
                            J$.Fe(73, arguments.callee, this, arguments);
                            arguments = J$.N(81, 'arguments', arguments, 4);
                            return J$.X1(65, J$.Rt(57, undefined));
                        } catch (J$e) {
                            J$.Ex(201, J$e);
                        } finally {
                            if (J$.Fr(209))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            foo = J$.N(161, 'foo', J$.T(153, foo, 12, false, 41), 0);
            bar = J$.N(177, 'bar', J$.T(169, bar, 12, false, 73), 0);
            J$.X1(113, x = J$.W(105, 'x', J$.F(97, J$.R(89, 'foo', foo, 1), 0)(), J$.I(typeof x === 'undefined' ? undefined : x), 4));
            J$.X1(137, J$.F(129, J$.R(121, 'bar', bar, 1), 0)());
        } catch (J$e) {
            J$.Ex(217, J$e);
        } finally {
            if (J$.Sr(225)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

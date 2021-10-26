J$.iids = {"9":[2,16,2,19],"17":[2,16,2,19],"25":[2,9,2,20],"33":[1,1,3,8],"41":[1,1,3,8],"49":[5,9,5,16],"57":[5,9,5,16],"65":[4,1,6,8],"73":[4,1,6,8],"81":[16,3,16,6],"89":[16,3,16,8],"97":[16,3,16,8],"105":[16,1,16,9],"113":[17,1,17,2],"121":[17,1,17,4],"129":[17,1,17,5],"137":[1,1,20,25],"145":[1,1,3,8],"153":[1,1,20,25],"161":[4,1,6,8],"169":[1,1,20,25],"177":[1,1,3,8],"185":[1,1,3,8],"193":[4,1,6,8],"201":[4,1,6,8],"209":[1,1,20,25],"217":[1,1,20,25],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/example0.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/example0_jalangi_.js","code":"function foo(){\n        return bar;\n      }\nfunction bar(){\n        return;\n      }\n/*for (var i = 0; i < 1; i++){\n        if (i%2 === 0){\n          x= foo;\n          y=x\n          foo()\n        } else {\n          bar();\n        }\n      }*/\nx=foo();\nx();\n//x=foo()\n\n//console.log(\"done\");*/"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(137, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/example0_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/example0.js');
            function foo() {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(33, arguments.callee, this, arguments);
                            arguments = J$.N(41, 'arguments', arguments, 4);
                            return J$.X1(25, J$.Rt(17, J$.R(9, 'bar', bar, 1)));
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
                            J$.Fe(65, arguments.callee, this, arguments);
                            arguments = J$.N(73, 'arguments', arguments, 4);
                            return J$.X1(57, J$.Rt(49, undefined));
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
            foo = J$.N(153, 'foo', J$.T(145, foo, 12, false, 33), 0);
            bar = J$.N(169, 'bar', J$.T(161, bar, 12, false, 65), 0);
            J$.X1(105, x = J$.W(97, 'x', J$.F(89, J$.R(81, 'foo', foo, 1), 0)(), J$.I(typeof x === 'undefined' ? undefined : x), 4));
            J$.X1(129, J$.F(121, J$.R(113, 'x', x, 2), 0)());
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

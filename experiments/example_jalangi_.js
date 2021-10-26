J$.iids = {"9":[3,10,3,13],"17":[3,10,3,13],"25":[3,3,3,14],"33":[1,1,5,2],"41":[1,1,5,2],"49":[7,3,7,9],"57":[7,3,7,9],"65":[6,1,8,2],"73":[6,1,8,2],"81":[9,4,9,7],"89":[9,4,9,9],"97":[9,4,9,9],"105":[9,1,9,10],"113":[10,1,10,2],"121":[10,1,10,4],"129":[10,1,10,5],"137":[1,1,11,1],"145":[1,1,5,2],"153":[1,1,11,1],"161":[6,1,8,2],"169":[1,1,11,1],"177":[1,1,5,2],"185":[1,1,5,2],"193":[6,1,8,2],"201":[6,1,8,2],"209":[1,1,11,1],"217":[1,1,11,1],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/example.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/example_jalangi_.js","code":"function foo(){\r\n  //console.log(\"foo called\");\r\n  return bar;\r\n  \r\n}\r\nfunction bar(){\r\n  return\r\n}\r\nx= foo();\r\nx();\r\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(137, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/example_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/example.js');
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

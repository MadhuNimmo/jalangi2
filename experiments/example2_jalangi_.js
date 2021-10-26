J$.iids = {"9":[2,12,3,6],"17":[2,12,3,6],"25":[2,12,3,6],"33":[2,12,3,6],"41":[2,12,3,6],"49":[2,5,3,7],"57":[1,1,4,2],"65":[1,1,4,2],"73":[6,11,6,14],"81":[6,11,6,16],"89":[6,11,6,16],"97":[6,11,6,16],"105":[7,1,7,6],"113":[7,1,7,8],"121":[7,1,7,9],"129":[1,1,21,10],"137":[1,1,4,2],"145":[1,1,21,10],"153":[1,1,21,10],"161":[2,12,3,6],"169":[2,12,3,6],"177":[1,1,4,2],"185":[1,1,4,2],"193":[1,1,21,10],"201":[1,1,21,10],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/example2.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/example2_jalangi_.js","code":"function foo(){\r\n    return function bar(){\r\n    };\r\n}\r\n//foo()();\r\nvar qoute=foo();\r\nqoute();\r\n\r\n\r\n/*function foo(){\r\n  return function foo2(){\r\n    return function foo3(){\r\n    };\r\n  }();\r\n}\r\n//foo()();\r\nvar foo4=foo();\r\nfoo4();*/\r\n\r\n//log return values\r\n//_return"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(129, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/example2_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/example2.js');
            function foo() {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(57, arguments.callee, this, arguments);
                            arguments = J$.N(65, 'arguments', arguments, 4);
                            return J$.X1(49, J$.Rt(41, J$.T(33, function bar() {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(9, arguments.callee, this, arguments);
                                            arguments = J$.N(17, 'arguments', arguments, 4);
                                            bar = J$.N(25, 'bar', bar, 0);
                                        } catch (J$e) {
                                            J$.Ex(161, J$e);
                                        } finally {
                                            if (J$.Fr(169))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 9)));
                        } catch (J$e) {
                            J$.Ex(177, J$e);
                        } finally {
                            if (J$.Fr(185))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            foo = J$.N(145, 'foo', J$.T(137, foo, 12, false, 57), 0);
            J$.N(153, 'qoute', qoute, 0);
            var qoute = J$.X1(97, J$.W(89, 'qoute', J$.F(81, J$.R(73, 'foo', foo, 1), 0)(), qoute, 3));
            J$.X1(121, J$.F(113, J$.R(105, 'qoute', qoute, 1), 0)());
        } catch (J$e) {
            J$.Ex(193, J$e);
        } finally {
            if (J$.Sr(201)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

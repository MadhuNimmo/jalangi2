J$.iids = {"9":[5,14,7,8],"17":[5,14,7,8],"25":[5,14,7,8],"33":[5,14,7,8],"41":[5,14,7,8],"49":[5,7,7,9],"57":[3,12,8,6],"65":[3,12,8,6],"73":[3,12,8,6],"81":[3,12,8,6],"89":[3,12,8,8],"97":[3,12,8,8],"105":[3,5,8,9],"113":[1,1,9,4],"121":[1,1,9,4],"129":[10,1,10,4],"137":[10,1,10,6],"145":[10,1,10,8],"153":[10,1,10,9],"161":[11,10,11,13],"169":[11,10,11,15],"177":[11,10,11,15],"185":[11,10,11,15],"193":[12,1,12,5],"201":[12,1,12,7],"209":[12,1,12,8],"217":[1,1,12,10],"225":[1,1,9,4],"233":[1,1,12,10],"241":[1,1,12,10],"249":[5,14,7,8],"257":[5,14,7,8],"265":[3,12,8,6],"273":[3,12,8,6],"281":[1,1,9,4],"289":[1,1,9,4],"297":[1,1,12,10],"305":[1,1,12,10],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/example5.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/example5_jalangi_.js","code":"function foo(){\n    //console.log(\"foo called\");\n    return function foo2(){\n      //console.log(\"foo2 called\");\n      return function foo3(){\n        //console.log(\"foo3 called\");\n      };\n    }();\n  }\nfoo()();\nvar foo8=foo();\nfoo8();  "};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(217, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/example5_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/example5.js');
            function foo() {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(113, arguments.callee, this, arguments);
                            arguments = J$.N(121, 'arguments', arguments, 4);
                            return J$.X1(105, J$.Rt(97, J$.F(89, J$.T(81, function foo2() {
                                jalangiLabel1:
                                    while (true) {
                                        try {
                                            J$.Fe(57, arguments.callee, this, arguments);
                                            arguments = J$.N(65, 'arguments', arguments, 4);
                                            foo2 = J$.N(73, 'foo2', foo2, 0);
                                            return J$.X1(49, J$.Rt(41, J$.T(33, function foo3() {
                                                jalangiLabel0:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(9, arguments.callee, this, arguments);
                                                            arguments = J$.N(17, 'arguments', arguments, 4);
                                                            foo3 = J$.N(25, 'foo3', foo3, 0);
                                                        } catch (J$e) {
                                                            J$.Ex(249, J$e);
                                                        } finally {
                                                            if (J$.Fr(257))
                                                                continue jalangiLabel0;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }, 12, false, 9)));
                                        } catch (J$e) {
                                            J$.Ex(265, J$e);
                                        } finally {
                                            if (J$.Fr(273))
                                                continue jalangiLabel1;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 57), 0)()));
                        } catch (J$e) {
                            J$.Ex(281, J$e);
                        } finally {
                            if (J$.Fr(289))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }
            foo = J$.N(233, 'foo', J$.T(225, foo, 12, false, 113), 0);
            J$.N(241, 'foo8', foo8, 0);
            J$.X1(153, J$.F(145, J$.F(137, J$.R(129, 'foo', foo, 1), 0)(), 0)());
            var foo8 = J$.X1(185, J$.W(177, 'foo8', J$.F(169, J$.R(161, 'foo', foo, 1), 0)(), foo8, 3));
            J$.X1(209, J$.F(201, J$.R(193, 'foo8', foo8, 1), 0)());
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

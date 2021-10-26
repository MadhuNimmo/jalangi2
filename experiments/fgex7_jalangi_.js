J$.iids = {"8":[8,1,8,8],"9":[1,9,1,12],"10":[8,1,8,8],"17":[1,9,1,12],"25":[1,9,1,12],"33":[3,10,3,13],"41":[3,10,3,15],"49":[3,10,3,15],"57":[3,3,3,16],"65":[2,1,4,2],"73":[2,1,4,2],"81":[2,1,4,2],"89":[6,10,6,15],"97":[6,10,6,15],"105":[6,3,6,16],"113":[5,1,7,2],"121":[5,1,7,2],"129":[8,1,8,2],"137":[8,6,8,8],"145":[8,11,8,14],"153":[8,11,8,16],"161":[8,19,8,22],"169":[8,23,8,26],"177":[8,19,8,27],"185":[8,1,8,28],"193":[1,1,9,1],"201":[1,1,9,1],"209":[2,1,4,2],"217":[1,1,9,1],"225":[5,1,7,2],"233":[1,1,9,1],"241":[2,1,4,2],"249":[2,1,4,2],"257":[5,1,7,2],"265":[5,1,7,2],"273":[8,1,8,27],"281":[1,1,9,1],"289":[1,1,9,1],"nBranches":2,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex7.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex7_jalangi_.js","code":"var x = \"y\";\nfunction foo(baz) {\n  return baz();\n}\nfunction bar() {\n  return \"bar\";\n}\nx == \"\" ? bar() : foo(bar);\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(193, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex7_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex7.js');
            function foo(baz) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(65, arguments.callee, this, arguments);
                            arguments = J$.N(73, 'arguments', arguments, 4);
                            baz = J$.N(81, 'baz', baz, 4);
                            return J$.X1(57, J$.Rt(49, J$.F(41, J$.R(33, 'baz', baz, 0), 0)()));
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
                            J$.Fe(113, arguments.callee, this, arguments);
                            arguments = J$.N(121, 'arguments', arguments, 4);
                            return J$.X1(105, J$.Rt(97, J$.T(89, "bar", 21, false)));
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
            J$.N(201, 'x', x, 0);
            foo = J$.N(217, 'foo', J$.T(209, foo, 12, false, 65), 0);
            bar = J$.N(233, 'bar', J$.T(225, bar, 12, false, 113), 0);
            var x = J$.X1(25, J$.W(17, 'x', J$.T(9, "y", 21, false), x, 3));
            J$.X1(185, J$.X1(273, J$.C(8, J$.B(10, '==', J$.R(129, 'x', x, 1), J$.T(137, "", 21, false), 0))) ? J$.F(153, J$.R(145, 'bar', bar, 1), 0)() : J$.F(177, J$.R(161, 'foo', foo, 1), 0)(J$.R(169, 'bar', bar, 1)));
        } catch (J$e) {
            J$.Ex(281, J$e);
        } finally {
            if (J$.Sr(289)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

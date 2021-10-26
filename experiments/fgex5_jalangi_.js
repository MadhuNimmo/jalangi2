J$.iids = {"9":[1,12,1,17],"17":[1,12,1,17],"25":[1,12,1,17],"33":[5,12,5,17],"41":[5,12,5,17],"49":[5,5,5,18],"57":[4,13,6,4],"65":[4,13,6,4],"73":[3,11,7,2],"81":[3,11,7,2],"89":[3,11,7,2],"97":[9,1,9,4],"105":[9,1,9,8],"113":[9,1,9,9],"121":[1,1,10,1],"129":[1,1,10,1],"137":[1,1,10,1],"145":[4,13,6,4],"153":[4,13,6,4],"161":[1,1,10,1],"169":[1,1,10,1],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex5.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex5_jalangi_.js","code":"var expr = \"foo\";\n\nvar obj = {\n  get [expr]() {\n    return \"bar\";\n  },\n};\n\nobj.foo;\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(121, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex5_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex5.js');
            J$.N(129, 'expr', expr, 0);
            J$.N(137, 'obj', obj, 0);
            var expr = J$.X1(25, J$.W(17, 'expr', J$.T(9, "foo", 21, false), expr, 3));
            var obj = J$.X1(89, J$.W(81, 'obj', J$.T(73, {
                get [expr]() {
                    jalangiLabel0:
                        while (true) {
                            try {
                                J$.Fe(57, arguments.callee, this, arguments);
                                arguments = J$.N(65, 'arguments', arguments, 4);
                                return J$.X1(49, J$.Rt(41, J$.T(33, "bar", 21, false)));
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
            }, 11, true), obj, 3));
            J$.X1(113, J$.G(105, J$.R(97, 'obj', obj, 1), 'foo', 0));
        } catch (J$e) {
            J$.Ex(161, J$e);
        } finally {
            if (J$.Sr(169)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

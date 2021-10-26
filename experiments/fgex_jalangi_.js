J$.iids = {"9":[2,16,2,28],"17":[2,16,2,28],"25":[2,9,2,28],"33":[1,1,3,2],"41":[1,1,3,2],"49":[4,9,4,12],"57":[4,9,4,12],"65":[4,9,4,12],"73":[5,1,5,2],"81":[5,1,5,4],"89":[5,1,5,5],"97":[1,1,5,5],"105":[1,1,3,2],"113":[1,1,5,5],"121":[1,1,5,5],"129":[1,1,3,2],"137":[1,1,3,2],"145":[1,1,5,5],"153":[1,1,5,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex_jalangi_.js","code":"function foo() { \n        return \"foo called\"\n}\nvar y = foo;\ny();"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(97, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex.js');
            function foo() {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(33, arguments.callee, this, arguments);
                            arguments = J$.N(41, 'arguments', arguments, 4);
                            return J$.X1(25, J$.Rt(17, J$.T(9, "foo called", 21, false)));
                        } catch (J$e) {
                            J$.Ex(129, J$e);
                        } finally {
                            if (J$.Fr(137))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            foo = J$.N(113, 'foo', J$.T(105, foo, 12, false, 33), 0);
            J$.N(121, 'y', y, 0);
            var y = J$.X1(65, J$.W(57, 'y', J$.R(49, 'foo', foo, 1), y, 3));
            J$.X1(89, J$.F(81, J$.R(73, 'y', y, 1), 0)());
        } catch (J$e) {
            J$.Ex(145, J$e);
        } finally {
            if (J$.Sr(153)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

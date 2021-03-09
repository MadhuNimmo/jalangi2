J$.iids = {"9":[2,2,2,3],"10":[2,36,2,41],"17":[2,5,2,6],"25":[2,8,2,9],"33":[2,1,2,10],"41":[2,36,2,37],"49":[2,40,2,41],"57":[2,36,2,41],"65":[2,29,2,42],"73":[2,15,2,43],"81":[2,15,2,43],"89":[2,15,2,43],"97":[2,15,2,43],"105":[2,50,2,51],"113":[2,1,2,52],"115":[2,1,2,14],"121":[2,1,2,53],"129":[1,1,2,53],"137":[2,15,2,43],"145":[2,15,2,43],"153":[1,1,2,53],"161":[1,1,2,53],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/GitHub/jalangi2/testes6.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/GitHub/jalangi2/testes6_jalangi_.js","code":"//[1, 2, 3].map(function(n) { return n * 2; }, this);\n[1, 2, 3].map(n => { return n * 2; }, this);"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(129, '/Users/madhurimachakraborty/Documents/GitHub/jalangi2/testes6_jalangi_.js', '/Users/madhurimachakraborty/Documents/GitHub/jalangi2/testes6.js');
            J$.X1(121, J$.M(113, J$.T(33, [
                J$.T(9, 1, 22, false),
                J$.T(17, 2, 22, false),
                J$.T(25, 3, 22, false)
            ], 10, false), 'map', 0)(J$.T(97, function (n) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(73, arguments.callee, this, arguments);
                            arguments = J$.N(81, 'arguments', arguments, 4);
                            n = J$.N(89, 'n', n, 4);
                            return J$.X1(65, J$.Rt(57, J$.B(10, '*', J$.R(41, 'n', n, 0), J$.T(49, 2, 22, false), 0)));
                        } catch (J$e) {
                            J$.Ex(137, J$e);
                        } finally {
                            if (J$.Fr(145))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 73), void J$.T(105, 0, 22, false)));
        } catch (J$e) {
            J$.Ex(153, J$e);
        } finally {
            if (J$.Sr(161)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

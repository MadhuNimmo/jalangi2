J$.iids = {"9":[1,4,1,5],"10":[2,40,2,43],"17":[1,3,1,6],"25":[1,3,1,6],"33":[1,1,1,6],"41":[2,9,2,10],"49":[2,40,2,41],"57":[2,42,2,43],"65":[2,40,2,43],"73":[2,33,2,45],"81":[2,15,2,47],"89":[2,15,2,47],"97":[2,15,2,47],"105":[2,15,2,47],"113":[2,15,2,47],"121":[2,9,2,48],"123":[2,9,2,14],"129":[2,9,2,48],"137":[2,9,2,48],"145":[3,1,3,2],"153":[3,1,3,2],"161":[1,1,3,2],"169":[1,1,3,2],"177":[2,15,2,47],"185":[2,15,2,47],"193":[1,1,3,2],"201":[1,1,3,2],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/example4.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/example4_jalangi_.js","code":"x=[1]\nvar y = x.map(function xyz(p) { return(p+1); })\ny"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(161, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/example4_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/example4.js');
            J$.N(169, 'y', y, 0);
            J$.X1(33, x = J$.W(25, 'x', J$.T(17, [J$.T(9, 1, 22, false)], 10, false), J$.I(typeof x === 'undefined' ? undefined : x), 4));
            var y = J$.X1(137, J$.W(129, 'y', J$.M(121, J$.R(41, 'x', x, 2), 'map', 0)(J$.T(113, function xyz(p) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(81, arguments.callee, this, arguments);
                            arguments = J$.N(89, 'arguments', arguments, 4);
                            xyz = J$.N(97, 'xyz', xyz, 0);
                            p = J$.N(105, 'p', p, 4);
                            return J$.X1(73, J$.Rt(65, J$.B(10, '+', J$.R(49, 'p', p, 0), J$.T(57, 1, 22, false), 0)));
                        } catch (J$e) {
                            J$.Ex(177, J$e);
                        } finally {
                            if (J$.Fr(185))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 81)), y, 3));
            J$.X1(153, J$.R(145, 'y', y, 1));
        } catch (J$e) {
            J$.Ex(193, J$e);
        } finally {
            if (J$.Sr(201)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

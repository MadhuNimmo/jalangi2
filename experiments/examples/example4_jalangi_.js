J$.iids = {"9":[1,4,1,5],"10":[2,37,2,40],"17":[1,6,1,7],"25":[1,8,1,9],"33":[1,3,1,10],"41":[1,3,1,10],"49":[1,1,1,10],"57":[2,9,2,10],"65":[2,37,2,38],"73":[2,39,2,40],"81":[2,37,2,40],"89":[2,30,2,42],"97":[2,15,2,44],"105":[2,15,2,44],"113":[2,15,2,44],"121":[2,15,2,44],"129":[2,9,2,45],"131":[2,9,2,14],"137":[2,9,2,45],"145":[2,9,2,45],"153":[3,1,3,2],"161":[3,1,3,2],"169":[1,1,3,2],"177":[1,1,3,2],"185":[2,15,2,44],"193":[2,15,2,44],"201":[1,1,3,2],"209":[1,1,3,2],"nBranches":0,"originalCodeFileName":"../experiments/examples/example4.js","instrumentedCodeFileName":"../experiments/examples/example4_jalangi_.js","code":"x=[1,2,3]\nvar y = x.map(function (p) { return(p+1); })\ny"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(169, '../experiments/examples/example4_jalangi_.js', '../experiments/examples/example4.js');
            J$.N(177, 'y', y, 0);
            J$.X1(49, x = J$.W(41, 'x', J$.T(33, [
                J$.T(9, 1, 22, false),
                J$.T(17, 2, 22, false),
                J$.T(25, 3, 22, false)
            ], 10, false), J$.I(typeof x === 'undefined' ? undefined : x), 4));
            var y = J$.X1(145, J$.W(137, 'y', J$.M(129, J$.R(57, 'x', x, 2), 'map', 0)(J$.T(121, function (p) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(97, arguments.callee, this, arguments);
                            arguments = J$.N(105, 'arguments', arguments, 4);
                            p = J$.N(113, 'p', p, 4);
                            return J$.X1(89, J$.Rt(81, J$.B(10, '+', J$.R(65, 'p', p, 0), J$.T(73, 1, 22, false), 0)));
                        } catch (J$e) {
                            J$.Ex(185, J$e);
                        } finally {
                            if (J$.Fr(193))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 97)), y, 3));
            J$.X1(161, J$.R(153, 'y', y, 1));
        } catch (J$e) {
            J$.Ex(201, J$e);
        } finally {
            if (J$.Sr(209)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

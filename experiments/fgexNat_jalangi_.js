J$.iids = {"9":[1,15,1,20],"17":[1,15,1,30],"25":[1,15,1,36],"33":[1,15,1,36],"41":[1,15,1,36],"49":[2,16,2,21],"57":[2,23,2,30],"65":[2,32,2,39],"73":[2,41,2,47],"81":[2,49,2,59],"89":[2,15,2,60],"97":[2,15,2,60],"105":[2,15,2,60],"113":[3,1,3,8],"121":[3,14,3,21],"129":[3,23,3,24],"137":[3,26,3,27],"145":[3,1,3,28],"147":[3,1,3,13],"153":[3,1,3,29],"161":[1,1,4,1],"169":[1,1,4,1],"177":[1,1,4,1],"185":[1,1,4,1],"193":[1,1,4,1],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexNat.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexNat_jalangi_.js","code":"var myslice = Array.prototype.slice;\nvar animals = [\"ant\", \"bison\", \"camel\", \"duck\", \"elephant\"];\nmyslice.call(animals, 0, 1);\n"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(161, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexNat_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexNat.js');
            J$.N(169, 'myslice', myslice, 0);
            J$.N(177, 'animals', animals, 0);
            var myslice = J$.X1(41, J$.W(33, 'myslice', J$.G(25, J$.G(17, J$.R(9, 'Array', Array, 2), 'prototype', 0), 'slice', 0), myslice, 3));
            var animals = J$.X1(105, J$.W(97, 'animals', J$.T(89, [
                J$.T(49, "ant", 21, false),
                J$.T(57, "bison", 21, false),
                J$.T(65, "camel", 21, false),
                J$.T(73, "duck", 21, false),
                J$.T(81, "elephant", 21, false)
            ], 10, false), animals, 3));
            J$.X1(153, J$.M(145, J$.R(113, 'myslice', myslice, 1), 'call', 0)(J$.R(121, 'animals', animals, 1), J$.T(129, 0, 22, false), J$.T(137, 1, 22, false)));
        } catch (J$e) {
            J$.Ex(185, J$e);
        } finally {
            if (J$.Sr(193)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

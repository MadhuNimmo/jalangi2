J$.iids = {"9":[1,15,1,18],"17":[1,20,1,23],"25":[1,25,1,28],"33":[1,14,1,29],"41":[1,14,1,29],"49":[1,14,1,29],"57":[2,1,2,7],"65":[3,10,3,17],"73":[3,22,3,29],"81":[3,10,3,30],"83":[3,10,3,21],"89":[3,10,3,30],"97":[3,3,3,31],"105":[2,16,4,2],"113":[2,16,4,2],"121":[2,16,4,2],"129":[2,16,4,2],"137":[2,1,4,3],"139":[2,1,2,15],"145":[2,1,4,4],"153":[1,1,4,4],"161":[1,1,4,4],"169":[2,16,4,2],"177":[2,16,4,2],"185":[1,1,4,4],"193":[1,1,4,4],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/example7.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/example7_jalangi_.js","code":"var array1 = ['a', 'b', 'c'];\narray1.forEach(function (element) {\n  return console.log(element);\n});"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(153, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/example7_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/example7.js');
            J$.N(161, 'array1', array1, 0);
            var array1 = J$.X1(49, J$.W(41, 'array1', J$.T(33, [
                J$.T(9, 'a', 21, false),
                J$.T(17, 'b', 21, false),
                J$.T(25, 'c', 21, false)
            ], 10, false), array1, 3));
            J$.X1(145, J$.M(137, J$.R(57, 'array1', array1, 1), 'forEach', 0)(J$.T(129, function (element) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(105, arguments.callee, this, arguments);
                            arguments = J$.N(113, 'arguments', arguments, 4);
                            element = J$.N(121, 'element', element, 4);
                            return J$.X1(97, J$.Rt(89, J$.M(81, J$.R(65, 'console', console, 2), 'log', 0)(J$.R(73, 'element', element, 0))));
                        } catch (J$e) {
                            J$.Ex(169, J$e);
                        } finally {
                            if (J$.Fr(177))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 105)));
        } catch (J$e) {
            J$.Ex(185, J$e);
        } finally {
            if (J$.Sr(193)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

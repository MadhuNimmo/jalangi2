J$.iids = {"9":[1,10,1,12],"17":[1,10,1,12],"25":[1,10,1,12],"33":[2,1,2,4],"41":[3,9,3,16],"49":[3,21,3,38],"57":[3,9,3,39],"59":[3,9,3,20],"65":[3,9,3,40],"73":[2,11,4,2],"81":[2,11,4,2],"89":[2,11,4,2],"97":[2,1,4,3],"99":[2,1,2,9],"105":[2,1,4,3],"113":[5,1,5,4],"121":[5,5,5,6],"129":[5,1,5,9],"131":[5,1,5,7],"137":[5,1,5,9],"145":[1,1,7,1],"153":[1,1,7,1],"161":[2,11,4,2],"169":[2,11,4,2],"177":[1,1,7,1],"185":[1,1,7,1],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_under.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_under_jalangi_.js","code":"var arr= []\narr.push( function() { \n        console.log(\"Inside function\"); \n})\narr[0]()\n\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(145, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_under_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_under.js');
            J$.N(153, 'arr', arr, 0);
            var arr = J$.X1(25, J$.W(17, 'arr', J$.T(9, [], 10, false), arr, 3));
            J$.X1(105, J$.M(97, J$.R(33, 'arr', arr, 1), 'push', 0)(J$.T(89, function () {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(73, arguments.callee, this, arguments);
                            arguments = J$.N(81, 'arguments', arguments, 4);
                            J$.X1(65, J$.M(57, J$.R(41, 'console', console, 2), 'log', 0)(J$.T(49, "Inside function", 21, false)));
                        } catch (J$e) {
                            J$.Ex(161, J$e);
                        } finally {
                            if (J$.Fr(169))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 73)));
            J$.X1(137, J$.M(129, J$.R(113, 'arr', arr, 1), J$.T(121, 0, 22, false), 1)());
        } catch (J$e) {
            J$.Ex(177, J$e);
        } finally {
            if (J$.Sr(185)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

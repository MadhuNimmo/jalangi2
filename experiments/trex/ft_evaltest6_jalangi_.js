J$.iids = {"9":[2,6,5,13],"17":[2,6,5,13],"25":[2,1,5,15],"33":[1,2,6,2],"41":[1,2,6,2],"49":[1,2,6,2],"57":[1,1,6,5],"65":[1,1,6,5],"73":[1,1,6,5],"81":[1,2,6,2],"89":[1,2,6,2],"97":[1,1,6,5],"105":[1,1,6,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_evaltest6.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_evaltest6_jalangi_.js","code":"(function(){\neval(\"function addStuff() {\\\n  return \\\"XYZ\\\";\\\n}\\\naddStuff();\");\n})()"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(73, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_evaltest6_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_evaltest6.js');
            J$.X1(65, J$.F(57, J$.T(49, function () {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(33, arguments.callee, this, arguments);
                            arguments = J$.N(41, 'arguments', arguments, 4);
                            J$.X1(25, eval(J$.instrumentEvalCode(J$.T(9, "function addStuff() {\
  return \"XYZ\";\
}\
addStuff();", 21, false), 17, true)));
                        } catch (J$e) {
                            J$.Ex(81, J$e);
                        } finally {
                            if (J$.Fr(89))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 33), 0)());
        } catch (J$e) {
            J$.Ex(97, J$e);
        } finally {
            if (J$.Sr(105)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

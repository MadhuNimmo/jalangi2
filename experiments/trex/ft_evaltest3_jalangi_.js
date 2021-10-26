J$.iids = {"9":[2,36,2,39],"17":[2,36,2,39],"25":[2,29,2,39],"33":[2,17,2,40],"41":[2,17,2,40],"49":[2,17,2,40],"57":[2,17,2,40],"65":[2,17,2,40],"73":[3,14,3,19],"81":[3,14,3,19],"89":[3,9,3,20],"97":[1,2,4,2],"105":[1,2,4,2],"113":[1,2,4,2],"121":[1,2,4,2],"129":[1,1,4,5],"137":[1,1,4,5],"145":[1,1,4,5],"153":[2,17,2,40],"161":[2,17,2,40],"169":[1,2,4,2],"177":[1,2,4,2],"185":[1,1,4,5],"193":[1,1,4,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_evaltest3.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_evaltest3_jalangi_.js","code":"(function(){\n        var x = function(){ return \"X\"}\n        eval(\"x()\")\n})()"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(145, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_evaltest3_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_evaltest3.js');
            J$.X1(137, J$.F(129, J$.T(121, function () {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(97, arguments.callee, this, arguments);
                            arguments = J$.N(105, 'arguments', arguments, 4);
                            J$.N(113, 'x', x, 0);
                            var x = J$.X1(65, J$.W(57, 'x', J$.T(49, function () {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(33, arguments.callee, this, arguments);
                                            arguments = J$.N(41, 'arguments', arguments, 4);
                                            return J$.X1(25, J$.Rt(17, J$.T(9, "X", 21, false)));
                                        } catch (J$e) {
                                            J$.Ex(153, J$e);
                                        } finally {
                                            if (J$.Fr(161))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 33), x, 1));
                            J$.X1(89, eval(J$.instrumentEvalCode(J$.T(73, "x()", 21, false), 81, true)));
                        } catch (J$e) {
                            J$.Ex(169, J$e);
                        } finally {
                            if (J$.Fr(177))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 97), 0)());
        } catch (J$e) {
            J$.Ex(185, J$e);
        } finally {
            if (J$.Sr(193)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

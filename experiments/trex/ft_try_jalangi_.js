J$.iids = {"9":[4,19,4,27],"17":[4,28,4,40],"25":[4,15,4,41],"33":[4,15,4,41],"41":[4,11,4,42],"49":[6,18,6,19],"57":[6,18,6,19],"65":[6,11,6,20],"73":[5,11,7,10],"81":[8,9,8,10],"89":[8,9,8,12],"97":[8,9,8,13],"105":[1,2,9,2],"113":[1,2,9,2],"121":[1,2,9,2],"129":[1,2,9,2],"137":[1,1,9,5],"145":[1,1,9,5],"153":[1,1,9,5],"161":[1,2,9,2],"169":[1,2,9,2],"177":[1,1,9,5],"185":[1,1,9,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_try.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_try_jalangi_.js","code":"(function(){\n        var x;\n        try {\n          x = new Function('return \"x\"'); \n        } catch(error) {\n          return 2;\n        } \n        x();\n})()"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(153, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_try_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_try.js');
            J$.X1(145, J$.F(137, J$.T(129, function () {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(105, arguments.callee, this, arguments);
                            arguments = J$.N(113, 'arguments', arguments, 4);
                            J$.N(121, 'x', x, 0);
                            var x;
                            try {
                                J$.X1(41, x = J$.W(33, 'x', J$.F(25, J$.R(9, 'Function', Function, 2), 1)(J$.T(17, 'return "x"', 21, false)), x, 0));
                            } catch (error) {
                                error = J$.N(73, 'error', error, 1);
                                return J$.X1(65, J$.Rt(57, J$.T(49, 2, 22, false)));
                            }
                            J$.X1(97, J$.F(89, J$.R(81, 'x', x, 0), 0)());
                        } catch (J$e) {
                            J$.Ex(161, J$e);
                        } finally {
                            if (J$.Fr(169))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 105), 0)());
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

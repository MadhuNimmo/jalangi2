J$.iids = {"9":[3,12,3,35],"17":[3,12,3,35],"25":[3,5,3,36],"33":[2,3,4,4],"41":[2,3,4,4],"49":[2,3,4,4],"57":[7,12,7,36],"65":[7,12,7,36],"73":[7,5,7,37],"81":[6,3,8,4],"89":[6,3,8,4],"97":[6,3,8,4],"105":[1,23,9,2],"113":[1,23,9,2],"121":[1,23,9,2],"129":[10,1,10,16],"137":[10,17,10,18],"145":[10,1,10,21],"147":[10,1,10,19],"153":[10,1,10,22],"161":[1,1,11,1],"169":[1,1,11,1],"177":[2,3,4,4],"185":[2,3,4,4],"193":[6,3,8,4],"201":[6,3,8,4],"209":[1,1,11,1],"217":[1,1,11,1],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexArrFun.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexArrFun_jalangi_.js","code":"var arrayOfFunction = [\n  function () {\n    return \"Inside First function\";\n  },\n\n  function () {\n    return \"Inside Second function\";\n  },\n];\narrayOfFunction[0]();\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(161, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexArrFun_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexArrFun.js');
            J$.N(169, 'arrayOfFunction', arrayOfFunction, 0);
            var arrayOfFunction = J$.X1(121, J$.W(113, 'arrayOfFunction', J$.T(105, [
                J$.T(49, function () {
                    jalangiLabel0:
                        while (true) {
                            try {
                                J$.Fe(33, arguments.callee, this, arguments);
                                arguments = J$.N(41, 'arguments', arguments, 4);
                                return J$.X1(25, J$.Rt(17, J$.T(9, "Inside First function", 21, false)));
                            } catch (J$e) {
                                J$.Ex(177, J$e);
                            } finally {
                                if (J$.Fr(185))
                                    continue jalangiLabel0;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 33),
                J$.T(97, function () {
                    jalangiLabel1:
                        while (true) {
                            try {
                                J$.Fe(81, arguments.callee, this, arguments);
                                arguments = J$.N(89, 'arguments', arguments, 4);
                                return J$.X1(73, J$.Rt(65, J$.T(57, "Inside Second function", 21, false)));
                            } catch (J$e) {
                                J$.Ex(193, J$e);
                            } finally {
                                if (J$.Fr(201))
                                    continue jalangiLabel1;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 81)
            ], 10, false), arrayOfFunction, 3));
            J$.X1(153, J$.M(145, J$.R(129, 'arrayOfFunction', arrayOfFunction, 1), J$.T(137, 0, 22, false), 1)());
        } catch (J$e) {
            J$.Ex(209, J$e);
        } finally {
            if (J$.Sr(217)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

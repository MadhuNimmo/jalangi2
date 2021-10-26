J$.iids = {"9":[2,32,2,37],"17":[2,32,2,37],"25":[2,25,2,37],"33":[2,9,2,38],"41":[2,9,2,38],"49":[4,22,4,32],"57":[4,22,4,32],"65":[4,17,4,34],"73":[3,9,5,10],"81":[3,9,5,10],"89":[3,9,5,10],"97":[7,22,7,31],"105":[7,32,7,35],"113":[7,22,7,36],"121":[7,22,7,36],"129":[7,22,7,36],"137":[1,2,8,2],"145":[1,2,8,2],"153":[2,9,2,38],"161":[1,2,8,2],"169":[3,9,5,10],"177":[1,2,8,2],"185":[1,2,8,2],"193":[1,2,8,2],"201":[1,1,8,5],"209":[1,1,8,5],"217":[1,1,8,5],"225":[2,9,2,38],"233":[2,9,2,38],"241":[3,9,5,10],"249":[3,9,5,10],"257":[1,2,8,2],"265":[1,2,8,2],"273":[1,1,8,5],"281":[1,1,8,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_evaltest4.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_evaltest4_jalangi_.js","code":"(function(){\n        function XYZ(){ return \"XYZ\"} \n        function isChecked(argFun) {\n                eval(\"argFun()\");\n        }\n    \n        var result = isChecked(XYZ);\n})()"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(217, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_evaltest4_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_evaltest4.js');
            J$.X1(209, J$.F(201, J$.T(193, function () {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(137, arguments.callee, this, arguments);
                            function XYZ() {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(33, arguments.callee, this, arguments);
                                            arguments = J$.N(41, 'arguments', arguments, 4);
                                            return J$.X1(25, J$.Rt(17, J$.T(9, "XYZ", 21, false)));
                                        } catch (J$e) {
                                            J$.Ex(225, J$e);
                                        } finally {
                                            if (J$.Fr(233))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            function isChecked(argFun) {
                                jalangiLabel1:
                                    while (true) {
                                        try {
                                            J$.Fe(73, arguments.callee, this, arguments);
                                            arguments = J$.N(81, 'arguments', arguments, 4);
                                            argFun = J$.N(89, 'argFun', argFun, 4);
                                            J$.X1(65, eval(J$.instrumentEvalCode(J$.T(49, "argFun()", 21, false), 57, true)));
                                        } catch (J$e) {
                                            J$.Ex(241, J$e);
                                        } finally {
                                            if (J$.Fr(249))
                                                continue jalangiLabel1;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(145, 'arguments', arguments, 4);
                            XYZ = J$.N(161, 'XYZ', J$.T(153, XYZ, 12, false, 33), 0);
                            isChecked = J$.N(177, 'isChecked', J$.T(169, isChecked, 12, false, 73), 0);
                            J$.N(185, 'result', result, 0);
                            var result = J$.X1(129, J$.W(121, 'result', J$.F(113, J$.R(97, 'isChecked', isChecked, 0), 0)(J$.R(105, 'XYZ', XYZ, 0)), result, 1));
                        } catch (J$e) {
                            J$.Ex(257, J$e);
                        } finally {
                            if (J$.Fr(265))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 137), 0)());
        } catch (J$e) {
            J$.Ex(273, J$e);
        } finally {
            if (J$.Sr(281)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

J$.iids = {"9":[3,12,3,16],"17":[3,12,3,16],"25":[3,5,3,17],"33":[2,3,4,4],"41":[2,3,4,4],"49":[2,3,4,4],"57":[1,9,5,2],"65":[1,9,5,2],"73":[1,9,5,2],"81":[8,12,8,16],"89":[8,12,8,16],"97":[8,5,8,17],"105":[7,3,9,4],"113":[7,3,9,4],"121":[7,3,9,4],"129":[6,9,10,2],"137":[6,9,10,2],"145":[6,9,10,2],"153":[11,9,11,10],"161":[11,11,11,12],"169":[11,9,11,13],"177":[11,9,11,13],"185":[11,9,11,13],"193":[12,1,12,2],"201":[12,1,12,4],"209":[12,1,12,5],"217":[1,1,13,1],"225":[1,1,13,1],"233":[1,1,13,1],"241":[1,1,13,1],"249":[2,3,4,4],"257":[2,3,4,4],"265":[7,3,9,4],"273":[7,3,9,4],"281":[1,1,13,1],"289":[1,1,13,1],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexArrFun2.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexArrFun2_jalangi_.js","code":"var x = [\n  function () {\n    return \"f1\";\n  },\n];\nvar y = [\n  function () {\n    return \"f2\";\n  },\n];\nvar m = y[0];\nm();\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(217, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexArrFun2_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexArrFun2.js');
            J$.N(225, 'x', x, 0);
            J$.N(233, 'y', y, 0);
            J$.N(241, 'm', m, 0);
            var x = J$.X1(73, J$.W(65, 'x', J$.T(57, [J$.T(49, function () {
                    jalangiLabel0:
                        while (true) {
                            try {
                                J$.Fe(33, arguments.callee, this, arguments);
                                arguments = J$.N(41, 'arguments', arguments, 4);
                                return J$.X1(25, J$.Rt(17, J$.T(9, "f1", 21, false)));
                            } catch (J$e) {
                                J$.Ex(249, J$e);
                            } finally {
                                if (J$.Fr(257))
                                    continue jalangiLabel0;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 33)], 10, false), x, 3));
            var y = J$.X1(145, J$.W(137, 'y', J$.T(129, [J$.T(121, function () {
                    jalangiLabel1:
                        while (true) {
                            try {
                                J$.Fe(105, arguments.callee, this, arguments);
                                arguments = J$.N(113, 'arguments', arguments, 4);
                                return J$.X1(97, J$.Rt(89, J$.T(81, "f2", 21, false)));
                            } catch (J$e) {
                                J$.Ex(265, J$e);
                            } finally {
                                if (J$.Fr(273))
                                    continue jalangiLabel1;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 105)], 10, false), y, 3));
            var m = J$.X1(185, J$.W(177, 'm', J$.G(169, J$.R(153, 'y', y, 1), J$.T(161, 0, 22, false), 4), m, 3));
            J$.X1(209, J$.F(201, J$.R(193, 'm', m, 1), 0)());
        } catch (J$e) {
            J$.Ex(281, J$e);
        } finally {
            if (J$.Sr(289)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

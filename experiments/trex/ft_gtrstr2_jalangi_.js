J$.iids = {"9":[3,33,3,41],"17":[3,33,3,41],"25":[3,26,3,41],"33":[3,14,3,42],"41":[3,14,3,42],"49":[3,14,3,42],"57":[5,12,5,16],"65":[5,12,5,28],"67":[5,12,5,26],"73":[5,12,5,28],"81":[5,5,5,29],"89":[4,14,6,4],"97":[4,14,6,4],"105":[2,17,8,2],"113":[2,17,8,2],"121":[2,17,8,2],"129":[9,1,9,8],"137":[9,1,9,16],"145":[9,1,9,17],"153":[1,2,10,2],"161":[1,2,10,2],"169":[1,2,10,2],"177":[1,2,10,2],"185":[1,1,10,5],"193":[1,1,10,5],"201":[1,1,10,5],"209":[3,14,3,42],"217":[3,14,3,42],"225":[4,14,6,4],"233":[4,14,6,4],"241":[1,2,10,2],"249":[1,2,10,2],"257":[1,1,10,5],"265":[1,1,10,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_gtrstr2.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_gtrstr2_jalangi_.js","code":"(function(){\n  var student = {\n  firstName: function(){ return 'Monica'},\n  get getName() {\n    return this.firstName();\n  }\n\n}; \nstudent.getName;\n})()"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(201, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_gtrstr2_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_gtrstr2.js');
            J$.X1(193, J$.F(185, J$.T(177, function () {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(153, arguments.callee, this, arguments);
                            arguments = J$.N(161, 'arguments', arguments, 4);
                            J$.N(169, 'student', student, 0);
                            var student = J$.X1(121, J$.W(113, 'student', J$.T(105, {
                                firstName: J$.T(49, function () {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(33, arguments.callee, this, arguments);
                                                arguments = J$.N(41, 'arguments', arguments, 4);
                                                return J$.X1(25, J$.Rt(17, J$.T(9, 'Monica', 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(209, J$e);
                                            } finally {
                                                if (J$.Fr(217))
                                                    continue jalangiLabel0;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 33),
                                get getName() {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(89, arguments.callee, this, arguments);
                                                arguments = J$.N(97, 'arguments', arguments, 4);
                                                return J$.X1(81, J$.Rt(73, J$.M(65, J$.R(57, 'this', this, 0), 'firstName', 0)()));
                                            } catch (J$e) {
                                                J$.Ex(225, J$e);
                                            } finally {
                                                if (J$.Fr(233))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }
                            }, 11, true), student, 1));
                            J$.X1(145, J$.G(137, J$.R(129, 'student', student, 0), 'getName', 0));
                        } catch (J$e) {
                            J$.Ex(241, J$e);
                        } finally {
                            if (J$.Fr(249))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 153), 0)());
        } catch (J$e) {
            J$.Ex(257, J$e);
        } finally {
            if (J$.Sr(265)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

J$.iids = {"8":[6,13,6,24],"9":[3,41,3,45],"17":[3,41,3,45],"25":[3,34,3,45],"33":[3,22,3,46],"41":[3,22,3,46],"49":[3,22,3,46],"57":[4,41,4,45],"65":[4,41,4,45],"73":[4,34,4,45],"81":[4,22,4,46],"89":[4,22,4,46],"97":[4,22,4,46],"105":[2,18,5,10],"113":[2,18,5,10],"121":[2,18,5,10],"129":[6,9,6,12],"137":[6,13,6,18],"145":[6,22,6,24],"153":[6,9,6,25],"161":[6,32,6,36],"169":[6,9,6,37],"171":[6,9,6,31],"177":[6,9,6,37],"185":[1,2,7,2],"193":[1,2,7,2],"201":[1,2,7,2],"209":[1,2,7,2],"217":[1,1,7,5],"225":[1,1,7,5],"233":[1,1,7,5],"241":[3,22,3,46],"249":[3,22,3,46],"257":[4,22,4,46],"265":[4,22,4,46],"273":[1,2,7,2],"281":[1,2,7,2],"289":[1,1,7,5],"297":[1,1,7,5],"nBranches":2,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_multnat.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_multnat_jalangi_.js","code":"(function(){\n        var obj= {\n                foo: function (){return true},\n                bar: function (){return true},\n        }\n        obj[\"foo\" || \"\"].apply(this)\n})()"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(233, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_multnat_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_multnat.js');
            J$.X1(225, J$.F(217, J$.T(209, function () {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(185, arguments.callee, this, arguments);
                            arguments = J$.N(193, 'arguments', arguments, 4);
                            J$.N(201, 'obj', obj, 0);
                            var obj = J$.X1(121, J$.W(113, 'obj', J$.T(105, {
                                foo: J$.T(49, function () {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(33, arguments.callee, this, arguments);
                                                arguments = J$.N(41, 'arguments', arguments, 4);
                                                return J$.X1(25, J$.Rt(17, J$.T(9, true, 23, false)));
                                            } catch (J$e) {
                                                J$.Ex(241, J$e);
                                            } finally {
                                                if (J$.Fr(249))
                                                    continue jalangiLabel0;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 33),
                                bar: J$.T(97, function () {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(81, arguments.callee, this, arguments);
                                                arguments = J$.N(89, 'arguments', arguments, 4);
                                                return J$.X1(73, J$.Rt(65, J$.T(57, true, 23, false)));
                                            } catch (J$e) {
                                                J$.Ex(257, J$e);
                                            } finally {
                                                if (J$.Fr(265))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 81)
                            }, 11, false), obj, 1));
                            J$.X1(177, J$.M(169, J$.G(153, J$.R(129, 'obj', obj, 0), J$.C(8, J$.T(137, "foo", 21, false)) ? J$._() : J$.T(145, "", 21, false), 4), 'apply', 0)(J$.R(161, 'this', this, 0)));
                        } catch (J$e) {
                            J$.Ex(273, J$e);
                        } finally {
                            if (J$.Fr(281))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 185), 0)());
        } catch (J$e) {
            J$.Ex(289, J$e);
        } finally {
            if (J$.Sr(297)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

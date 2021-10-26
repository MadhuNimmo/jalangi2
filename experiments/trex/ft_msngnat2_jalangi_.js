J$.iids = {"9":[2,26,2,31],"10":[4,24,4,45],"17":[2,32,2,37],"25":[2,38,2,43],"33":[2,25,2,44],"41":[2,25,2,44],"49":[2,25,2,44],"57":[4,24,4,26],"65":[4,35,4,38],"73":[4,24,4,39],"75":[4,24,4,34],"81":[4,44,4,45],"89":[4,24,4,45],"97":[4,17,4,46],"105":[3,9,5,14],"113":[3,9,5,14],"121":[3,9,5,14],"129":[3,9,5,14],"137":[6,23,6,33],"145":[6,39,6,50],"153":[6,52,6,55],"161":[6,23,6,56],"163":[6,23,6,38],"169":[6,23,6,56],"177":[6,23,6,56],"185":[7,24,7,35],"193":[7,43,7,50],"201":[7,24,7,51],"203":[7,24,7,42],"209":[7,24,7,51],"217":[7,24,7,51],"225":[1,2,8,2],"233":[1,2,8,2],"241":[1,2,8,2],"249":[3,9,5,14],"257":[1,2,8,2],"265":[1,2,8,2],"273":[1,2,8,2],"281":[1,2,8,2],"289":[1,1,8,5],"297":[1,1,8,5],"305":[1,1,8,5],"313":[3,9,5,14],"321":[3,9,5,14],"329":[1,2,8,2],"337":[1,2,8,2],"345":[1,1,8,5],"353":[1,1,8,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_msngnat2.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_msngnat2_jalangi_.js","code":"(function(){\n        var addressBook=[\"XXX\",\"YYY\",\"XYZ\"]\n        function startsWith(com, el) {\n                return el.indexOf(com) === 0;\n            }\n        var boundSW = startsWith.bind(addressBook, \"Y\")\n        var filterAB = addressBook.filter(boundSW);\n})()"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(305, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_msngnat2_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_msngnat2.js');
            J$.X1(297, J$.F(289, J$.T(281, function () {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(225, arguments.callee, this, arguments);
                            function startsWith(com, el) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(105, arguments.callee, this, arguments);
                                            arguments = J$.N(113, 'arguments', arguments, 4);
                                            com = J$.N(121, 'com', com, 4);
                                            el = J$.N(129, 'el', el, 4);
                                            return J$.X1(97, J$.Rt(89, J$.B(10, '===', J$.M(73, J$.R(57, 'el', el, 0), 'indexOf', 0)(J$.R(65, 'com', com, 0)), J$.T(81, 0, 22, false), 0)));
                                        } catch (J$e) {
                                            J$.Ex(313, J$e);
                                        } finally {
                                            if (J$.Fr(321))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(233, 'arguments', arguments, 4);
                            J$.N(241, 'addressBook', addressBook, 0);
                            startsWith = J$.N(257, 'startsWith', J$.T(249, startsWith, 12, false, 105), 0);
                            J$.N(265, 'boundSW', boundSW, 0);
                            J$.N(273, 'filterAB', filterAB, 0);
                            var addressBook = J$.X1(49, J$.W(41, 'addressBook', J$.T(33, [
                                J$.T(9, "XXX", 21, false),
                                J$.T(17, "YYY", 21, false),
                                J$.T(25, "XYZ", 21, false)
                            ], 10, false), addressBook, 1));
                            var boundSW = J$.X1(177, J$.W(169, 'boundSW', J$.M(161, J$.R(137, 'startsWith', startsWith, 0), 'bind', 0)(J$.R(145, 'addressBook', addressBook, 0), J$.T(153, "Y", 21, false)), boundSW, 1));
                            var filterAB = J$.X1(217, J$.W(209, 'filterAB', J$.M(201, J$.R(185, 'addressBook', addressBook, 0), 'filter', 0)(J$.R(193, 'boundSW', boundSW, 0)), filterAB, 1));
                        } catch (J$e) {
                            J$.Ex(329, J$e);
                        } finally {
                            if (J$.Fr(337))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 225), 0)());
        } catch (J$e) {
            J$.Ex(345, J$e);
        } finally {
            if (J$.Sr(353)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

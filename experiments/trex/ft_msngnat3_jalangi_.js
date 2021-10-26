J$.iids = {"9":[2,26,2,31],"10":[5,36,5,42],"17":[2,32,2,37],"25":[2,38,2,43],"33":[2,25,2,44],"41":[2,25,2,44],"49":[2,25,2,44],"57":[4,18,4,29],"65":[4,57,4,59],"73":[4,71,4,74],"81":[4,57,4,75],"83":[4,57,4,70],"89":[4,57,4,75],"97":[4,50,4,75],"105":[4,37,4,76],"113":[4,37,4,76],"121":[4,37,4,76],"129":[4,37,4,76],"137":[4,18,4,77],"139":[4,18,4,36],"145":[4,18,4,77],"153":[4,18,4,77],"161":[5,9,5,11],"169":[5,36,5,38],"177":[5,39,5,42],"185":[5,36,5,42],"193":[5,29,5,42],"201":[5,16,5,43],"209":[5,16,5,43],"217":[5,16,5,43],"225":[5,16,5,43],"233":[5,9,5,44],"235":[5,9,5,15],"241":[5,9,5,44],"249":[1,2,6,2],"257":[1,2,6,2],"265":[1,2,6,2],"273":[1,2,6,2],"281":[1,2,6,2],"289":[1,1,6,5],"297":[1,1,6,5],"305":[1,1,6,5],"313":[4,37,4,76],"321":[4,37,4,76],"329":[5,16,5,43],"337":[5,16,5,43],"345":[1,2,6,2],"353":[1,2,6,2],"361":[1,1,6,5],"369":[1,1,6,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_msngnat3.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_msngnat3_jalangi_.js","code":"(function(){\n        var addressBook=[\"XXX\",\"YYY\",\"XYZ\"]\n        //Array.isArray(addressBook)\n        var ab = addressBook.filter(function(el){return el.startsWith(\"X\")})\n        ab.map(function(el){return el+\"Z\"})\n})()"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(305, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_msngnat3_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_msngnat3.js');
            J$.X1(297, J$.F(289, J$.T(281, function () {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(249, arguments.callee, this, arguments);
                            arguments = J$.N(257, 'arguments', arguments, 4);
                            J$.N(265, 'addressBook', addressBook, 0);
                            J$.N(273, 'ab', ab, 0);
                            var addressBook = J$.X1(49, J$.W(41, 'addressBook', J$.T(33, [
                                J$.T(9, "XXX", 21, false),
                                J$.T(17, "YYY", 21, false),
                                J$.T(25, "XYZ", 21, false)
                            ], 10, false), addressBook, 1));
                            var ab = J$.X1(153, J$.W(145, 'ab', J$.M(137, J$.R(57, 'addressBook', addressBook, 0), 'filter', 0)(J$.T(129, function (el) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(105, arguments.callee, this, arguments);
                                            arguments = J$.N(113, 'arguments', arguments, 4);
                                            el = J$.N(121, 'el', el, 4);
                                            return J$.X1(97, J$.Rt(89, J$.M(81, J$.R(65, 'el', el, 0), 'startsWith', 0)(J$.T(73, "X", 21, false))));
                                        } catch (J$e) {
                                            J$.Ex(313, J$e);
                                        } finally {
                                            if (J$.Fr(321))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 105)), ab, 1));
                            J$.X1(241, J$.M(233, J$.R(161, 'ab', ab, 0), 'map', 0)(J$.T(225, function (el) {
                                jalangiLabel1:
                                    while (true) {
                                        try {
                                            J$.Fe(201, arguments.callee, this, arguments);
                                            arguments = J$.N(209, 'arguments', arguments, 4);
                                            el = J$.N(217, 'el', el, 4);
                                            return J$.X1(193, J$.Rt(185, J$.B(10, '+', J$.R(169, 'el', el, 0), J$.T(177, "Z", 21, false), 0)));
                                        } catch (J$e) {
                                            J$.Ex(329, J$e);
                                        } finally {
                                            if (J$.Fr(337))
                                                continue jalangiLabel1;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 201)));
                        } catch (J$e) {
                            J$.Ex(345, J$e);
                        } finally {
                            if (J$.Fr(353))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 249), 0)());
        } catch (J$e) {
            J$.Ex(361, J$e);
        } finally {
            if (J$.Sr(369)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

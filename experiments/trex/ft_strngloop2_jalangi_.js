J$.iids = {"8":[21,37,21,71],"9":[4,17,4,24],"10":[17,33,17,61],"16":[19,21,19,29],"17":[4,29,4,52],"18":[17,63,17,74],"24":[17,33,17,61],"25":[4,17,4,53],"27":[4,17,4,28],"33":[4,17,4,54],"34":[17,63,17,74],"41":[3,9,5,10],"42":[21,37,21,57],"49":[3,9,5,10],"50":[21,37,21,71],"57":[3,9,5,10],"65":[8,17,8,24],"73":[8,29,8,53],"81":[8,17,8,54],"83":[8,17,8,28],"89":[8,17,8,55],"97":[7,9,9,10],"105":[7,9,9,10],"113":[7,9,9,10],"121":[12,17,12,24],"129":[12,29,12,52],"137":[12,17,12,53],"139":[12,17,12,28],"145":[12,17,12,54],"153":[11,9,13,10],"161":[11,9,13,10],"169":[11,9,13,10],"177":[2,23,14,2],"185":[2,23,14,2],"193":[2,23,14,2],"201":[17,30,17,31],"209":[17,30,17,31],"217":[17,30,17,31],"225":[17,33,17,42],"233":[17,45,17,54],"241":[17,45,17,61],"257":[17,63,17,72],"265":[17,63,17,74],"281":[18,32,18,41],"289":[18,42,18,51],"297":[18,32,18,52],"305":[18,32,18,52],"313":[18,32,18,52],"321":[19,21,19,29],"329":[20,41,20,49],"337":[21,44,21,52],"345":[21,53,21,56],"353":[21,44,21,57],"361":[21,61,21,71],"369":[22,41,22,49],"377":[22,50,22,53],"385":[22,41,22,56],"387":[22,41,22,54],"393":[22,41,22,57],"401":[20,41,20,49],"409":[20,25,24,26],"417":[20,25,24,26],"425":[15,1,27,2],"433":[15,1,27,2],"441":[15,1,27,2],"449":[15,1,27,2],"457":[15,1,27,2],"465":[28,1,28,4],"473":[28,5,28,20],"481":[28,1,28,21],"489":[28,1,28,21],"497":[1,2,29,2],"505":[1,2,29,2],"513":[1,2,29,2],"521":[15,1,27,2],"529":[1,2,29,2],"537":[1,2,29,2],"545":[1,1,29,5],"553":[1,1,29,5],"561":[1,1,29,5],"569":[3,9,5,10],"577":[3,9,5,10],"585":[7,9,9,10],"593":[7,9,9,10],"601":[11,9,13,10],"609":[11,9,13,10],"617":[21,33,23,34],"625":[19,17,25,18],"633":[17,9,26,10],"641":[17,9,26,10],"649":[15,1,27,2],"657":[15,1,27,2],"665":[1,2,29,2],"673":[1,2,29,2],"681":[1,1,29,5],"689":[1,1,29,5],"nBranches":6,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngloop2.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngloop2_jalangi_.js","code":"(function(){\nvar arrayOfFunction = [ \n        function() { \n                console.log(\"Inside First function\"); \n        }, \n        \n        function() { \n                console.log(\"Inside Second function\"); \n        }, \n        \n        function() { \n                console.log(\"Inside Third function\"); \n        }\t \n] \nfunction foo(){\n        //var object={}\n        for (var argsIndex = 0; argsIndex < arguments.length; argsIndex++) {\n                var iterable = arguments[argsIndex];\n                if (iterable) {\n                        for (var key in iterable) {\n                                if (typeof iterable[key] == 'function') {\n                                        iterable[key]();\n                                }\n                        }\n                }\n        }\n}\nfoo(arrayOfFunction)\n})()"};
jalangiLabel5:
    while (true) {
        try {
            J$.Se(561, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngloop2_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngloop2.js');
            J$.X1(553, J$.F(545, J$.T(537, function () {
                jalangiLabel4:
                    while (true) {
                        try {
                            J$.Fe(497, arguments.callee, this, arguments);
                            function foo() {
                                jalangiLabel3:
                                    while (true) {
                                        try {
                                            J$.Fe(425, arguments.callee, this, arguments);
                                            arguments = J$.N(433, 'arguments', arguments, 4);
                                            J$.N(441, 'argsIndex', argsIndex, 0);
                                            J$.N(449, 'iterable', iterable, 0);
                                            J$.N(457, 'key', key, 0);
                                            for (var argsIndex = J$.X1(217, J$.W(209, 'argsIndex', J$.T(201, 0, 22, false), argsIndex, 1)); J$.X1(633, J$.C(24, J$.B(10, '<', J$.R(225, 'argsIndex', argsIndex, 0), J$.G(241, J$.R(233, 'arguments', arguments, 2), 'length', 0), 0))); J$.X1(641, J$.B(34, '-', argsIndex = J$.W(265, 'argsIndex', J$.B(26, '+', J$.U(18, '+', J$.R(257, 'argsIndex', argsIndex, 0)), J$.T(249, 1, 22, false), 0), argsIndex, 0), J$.T(273, 1, 22, false), 0))) {
                                                var iterable = J$.X1(313, J$.W(305, 'iterable', J$.G(297, J$.R(281, 'arguments', arguments, 2), J$.R(289, 'argsIndex', argsIndex, 0), 4), iterable, 1));
                                                if (J$.X1(625, J$.C(16, J$.R(321, 'iterable', iterable, 0)))) {
                                                    for (J$._tm_p in J$.H(401, J$.R(329, 'iterable', iterable, 0))) {
                                                        var key = J$.X1(417, J$.W(409, 'key', J$._tm_p, key, 1));
                                                        {
                                                            {
                                                                if (J$.X1(617, J$.C(8, J$.B(50, '==', J$.U(42, 'typeof', J$.G(353, J$.R(337, 'iterable', iterable, 0), J$.R(345, 'key', key, 0), 4)), J$.T(361, 'function', 21, false), 0)))) {
                                                                    J$.X1(393, J$.M(385, J$.R(369, 'iterable', iterable, 0), J$.R(377, 'key', key, 0), 1)());
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        } catch (J$e) {
                                            J$.Ex(649, J$e);
                                        } finally {
                                            if (J$.Fr(657))
                                                continue jalangiLabel3;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(505, 'arguments', arguments, 4);
                            J$.N(513, 'arrayOfFunction', arrayOfFunction, 0);
                            foo = J$.N(529, 'foo', J$.T(521, foo, 12, false, 425), 0);
                            var arrayOfFunction = J$.X1(193, J$.W(185, 'arrayOfFunction', J$.T(177, [
                                J$.T(57, function () {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(41, arguments.callee, this, arguments);
                                                arguments = J$.N(49, 'arguments', arguments, 4);
                                                J$.X1(33, J$.M(25, J$.R(9, 'console', console, 2), 'log', 0)(J$.T(17, "Inside First function", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(569, J$e);
                                            } finally {
                                                if (J$.Fr(577))
                                                    continue jalangiLabel0;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 41),
                                J$.T(113, function () {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(97, arguments.callee, this, arguments);
                                                arguments = J$.N(105, 'arguments', arguments, 4);
                                                J$.X1(89, J$.M(81, J$.R(65, 'console', console, 2), 'log', 0)(J$.T(73, "Inside Second function", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(585, J$e);
                                            } finally {
                                                if (J$.Fr(593))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 97),
                                J$.T(169, function () {
                                    jalangiLabel2:
                                        while (true) {
                                            try {
                                                J$.Fe(153, arguments.callee, this, arguments);
                                                arguments = J$.N(161, 'arguments', arguments, 4);
                                                J$.X1(145, J$.M(137, J$.R(121, 'console', console, 2), 'log', 0)(J$.T(129, "Inside Third function", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(601, J$e);
                                            } finally {
                                                if (J$.Fr(609))
                                                    continue jalangiLabel2;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 153)
                            ], 10, false), arrayOfFunction, 1));
                            J$.X1(489, J$.F(481, J$.R(465, 'foo', foo, 0), 0)(J$.R(473, 'arrayOfFunction', arrayOfFunction, 0)));
                        } catch (J$e) {
                            J$.Ex(665, J$e);
                        } finally {
                            if (J$.Fr(673))
                                continue jalangiLabel4;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 497), 0)());
        } catch (J$e) {
            J$.Ex(681, J$e);
        } finally {
            if (J$.Sr(689)) {
                J$.L();
                continue jalangiLabel5;
            } else {
                J$.L();
                break jalangiLabel5;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

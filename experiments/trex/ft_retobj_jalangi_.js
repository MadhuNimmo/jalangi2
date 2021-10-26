J$.iids = {"9":[4,17,4,24],"17":[4,17,4,24],"25":[3,25,5,14],"33":[3,25,5,14],"41":[3,25,5,14],"49":[8,17,8,24],"57":[8,17,8,24],"65":[7,25,9,14],"73":[7,25,9,14],"81":[7,25,9,14],"89":[2,16,10,10],"97":[2,16,10,10],"105":[2,9,10,11],"113":[1,25,11,6],"121":[1,25,11,6],"129":[1,25,11,6],"137":[1,25,11,6],"145":[1,25,11,6],"153":[12,9,12,26],"161":[12,9,12,28],"169":[12,9,12,28],"177":[12,9,12,28],"185":[13,1,13,2],"193":[13,1,13,14],"195":[13,1,13,12],"201":[13,1,13,14],"209":[1,1,13,14],"217":[1,1,13,14],"225":[1,1,13,14],"233":[3,25,5,14],"241":[3,25,5,14],"249":[7,25,9,14],"257":[7,25,9,14],"265":[1,25,11,6],"273":[1,25,11,6],"281":[1,1,13,14],"289":[1,1,13,14],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_retobj.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_retobj_jalangi_.js","code":"var functionContainer = function() {\n        return {\n            function1 : function () {\n                return;\n            },\n    \n            function2 : function () {\n                return;\n            }\n        };\n    };\nvar x = functionContainer();\nx.function2()"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(209, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_retobj_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_retobj.js');
            J$.N(217, 'functionContainer', functionContainer, 0);
            J$.N(225, 'x', x, 0);
            var functionContainer = J$.X1(145, J$.W(137, 'functionContainer', J$.T(129, function () {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(113, arguments.callee, this, arguments);
                            arguments = J$.N(121, 'arguments', arguments, 4);
                            return J$.X1(105, J$.Rt(97, J$.T(89, {
                                function1: J$.T(41, function () {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(25, arguments.callee, this, arguments);
                                                arguments = J$.N(33, 'arguments', arguments, 4);
                                                return J$.X1(17, J$.Rt(9, undefined));
                                            } catch (J$e) {
                                                J$.Ex(233, J$e);
                                            } finally {
                                                if (J$.Fr(241))
                                                    continue jalangiLabel0;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 25),
                                function2: J$.T(81, function () {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(65, arguments.callee, this, arguments);
                                                arguments = J$.N(73, 'arguments', arguments, 4);
                                                return J$.X1(57, J$.Rt(49, undefined));
                                            } catch (J$e) {
                                                J$.Ex(249, J$e);
                                            } finally {
                                                if (J$.Fr(257))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 65)
                            }, 11, false)));
                        } catch (J$e) {
                            J$.Ex(265, J$e);
                        } finally {
                            if (J$.Fr(273))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 113), functionContainer, 3));
            var x = J$.X1(177, J$.W(169, 'x', J$.F(161, J$.R(153, 'functionContainer', functionContainer, 1), 0)(), x, 3));
            J$.X1(201, J$.M(193, J$.R(185, 'x', x, 1), 'function2', 0)());
        } catch (J$e) {
            J$.Ex(281, J$e);
        } finally {
            if (J$.Sr(289)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

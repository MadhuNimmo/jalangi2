J$.iids = {"9":[2,26,2,33],"17":[2,26,2,33],"25":[2,9,2,35],"33":[2,9,2,35],"41":[3,17,3,20],"49":[3,17,3,20],"57":[3,17,3,20],"65":[4,17,4,18],"73":[4,17,4,18],"81":[4,17,4,18],"89":[5,9,5,10],"97":[5,9,5,12],"105":[5,9,5,13],"113":[1,2,6,2],"121":[1,2,6,2],"129":[2,9,2,35],"137":[1,2,6,2],"145":[1,2,6,2],"153":[1,2,6,2],"161":[1,2,6,2],"169":[1,1,6,5],"177":[1,1,6,5],"185":[1,1,6,5],"193":[2,9,2,35],"201":[2,9,2,35],"209":[1,2,6,2],"217":[1,2,6,2],"225":[1,1,6,5],"233":[1,1,6,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_vardef.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_vardef_jalangi_.js","code":"(function () {\n        function bar() { return; }\n        var x = bar;\n        var y = x;\n        y();\n})()"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(185, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_vardef_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_vardef.js');
            J$.X1(177, J$.F(169, J$.T(161, function () {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(113, arguments.callee, this, arguments);
                            function bar() {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(25, arguments.callee, this, arguments);
                                            arguments = J$.N(33, 'arguments', arguments, 4);
                                            return J$.X1(17, J$.Rt(9, undefined));
                                        } catch (J$e) {
                                            J$.Ex(193, J$e);
                                        } finally {
                                            if (J$.Fr(201))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(121, 'arguments', arguments, 4);
                            bar = J$.N(137, 'bar', J$.T(129, bar, 12, false, 25), 0);
                            J$.N(145, 'x', x, 0);
                            J$.N(153, 'y', y, 0);
                            var x = J$.X1(57, J$.W(49, 'x', J$.R(41, 'bar', bar, 0), x, 1));
                            var y = J$.X1(81, J$.W(73, 'y', J$.R(65, 'x', x, 0), y, 1));
                            J$.X1(105, J$.F(97, J$.R(89, 'y', y, 0), 0)());
                        } catch (J$e) {
                            J$.Ex(209, J$e);
                        } finally {
                            if (J$.Fr(217))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 113), 0)());
        } catch (J$e) {
            J$.Ex(225, J$e);
        } finally {
            if (J$.Sr(233)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

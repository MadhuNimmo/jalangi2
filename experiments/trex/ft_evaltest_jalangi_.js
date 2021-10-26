J$.iids = {"9":[2,21,2,29],"10":[5,13,5,21],"17":[2,30,2,42],"25":[2,17,2,43],"33":[2,17,2,43],"41":[2,17,2,43],"49":[3,17,3,19],"57":[3,17,3,19],"65":[3,17,3,19],"73":[4,9,4,12],"81":[4,13,4,18],"89":[4,22,4,23],"97":[4,9,4,23],"105":[4,9,4,24],"113":[5,9,5,12],"121":[5,13,5,16],"129":[5,17,5,21],"137":[5,9,5,24],"139":[5,9,5,22],"145":[5,9,5,24],"153":[1,2,6,2],"161":[1,2,6,2],"169":[1,2,6,2],"177":[1,2,6,2],"185":[1,2,6,2],"193":[1,1,6,5],"201":[1,1,6,5],"209":[1,1,6,5],"217":[1,2,6,2],"225":[1,2,6,2],"233":[1,1,6,5],"241":[1,1,6,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_evaltest.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_evaltest_jalangi_.js","code":"(function(){\n        var x = new Function('return \"x\"');\n        var obj={}\n        obj[\"xyz\"] = x;\n        obj[\"x\"+\"yz\"]()\n})()"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(209, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_evaltest_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_evaltest.js');
            J$.X1(201, J$.F(193, J$.T(185, function () {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(153, arguments.callee, this, arguments);
                            arguments = J$.N(161, 'arguments', arguments, 4);
                            J$.N(169, 'x', x, 0);
                            J$.N(177, 'obj', obj, 0);
                            var x = J$.X1(41, J$.W(33, 'x', J$.F(25, J$.R(9, 'Function', Function, 2), 1)(J$.T(17, 'return "x"', 21, false)), x, 1));
                            var obj = J$.X1(65, J$.W(57, 'obj', J$.T(49, {}, 11, false), obj, 1));
                            J$.X1(105, J$.P(97, J$.R(73, 'obj', obj, 0), J$.T(81, "xyz", 21, false), J$.R(89, 'x', x, 0), 2));
                            J$.X1(145, J$.M(137, J$.R(113, 'obj', obj, 0), J$.B(10, '+', J$.T(121, "x", 21, false), J$.T(129, "yz", 21, false), 0), 1)());
                        } catch (J$e) {
                            J$.Ex(217, J$e);
                        } finally {
                            if (J$.Fr(225))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 153), 0)());
        } catch (J$e) {
            J$.Ex(233, J$e);
        } finally {
            if (J$.Sr(241)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

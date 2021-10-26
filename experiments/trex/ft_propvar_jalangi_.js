J$.iids = {"9":[4,24,4,32],"17":[4,33,4,43],"25":[4,20,4,44],"33":[4,20,4,44],"41":[4,17,4,44],"49":[6,23,6,24],"57":[6,23,6,24],"65":[6,17,6,24],"73":[5,10,7,10],"81":[8,9,8,10],"89":[8,9,8,12],"97":[8,9,8,12],"105":[10,24,10,25],"113":[10,31,10,35],"121":[10,24,10,36],"123":[10,24,10,30],"129":[10,24,10,36],"137":[10,17,10,36],"145":[9,17,11,10],"153":[9,17,11,10],"161":[9,17,11,10],"169":[9,17,11,10],"177":[9,17,11,10],"185":[12,9,12,10],"193":[12,9,12,12],"201":[12,9,12,13],"209":[1,2,13,2],"217":[1,2,13,2],"225":[1,2,13,2],"233":[1,2,13,2],"241":[1,2,13,2],"249":[1,1,13,5],"257":[1,1,13,5],"265":[1,1,13,5],"273":[9,17,11,10],"281":[9,17,11,10],"289":[1,2,13,2],"297":[1,2,13,2],"305":[1,1,13,5],"313":[1,1,13,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_propvar.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_propvar_jalangi_.js","code":"(function(){\n        var x;\n        try{\n                x= new Function(\"return 1\")\n        }catch(e){\n                throw e\n        }\n        x()\n        var y = function(){\n                return x.call(this)\n        }\n        y();\n})()"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(265, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_propvar_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_propvar.js');
            J$.X1(257, J$.F(249, J$.T(241, function () {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(209, arguments.callee, this, arguments);
                            arguments = J$.N(217, 'arguments', arguments, 4);
                            J$.N(225, 'x', x, 0);
                            J$.N(233, 'y', y, 0);
                            var x;
                            try {
                                J$.X1(41, x = J$.W(33, 'x', J$.F(25, J$.R(9, 'Function', Function, 2), 1)(J$.T(17, "return 1", 21, false)), x, 0));
                            } catch (e) {
                                e = J$.N(73, 'e', e, 1);
                                throw J$.X1(65, J$.Th(57, J$.R(49, 'e', e, 0)));
                            }
                            J$.X1(97, J$.F(89, J$.R(81, 'x', x, 0), 0)());
                            var y = J$.X1(177, J$.W(169, 'y', J$.T(161, function () {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(145, arguments.callee, this, arguments);
                                            arguments = J$.N(153, 'arguments', arguments, 4);
                                            return J$.X1(137, J$.Rt(129, J$.M(121, J$.R(105, 'x', x, 0), 'call', 0)(J$.R(113, 'this', this, 0))));
                                        } catch (J$e) {
                                            J$.Ex(273, J$e);
                                        } finally {
                                            if (J$.Fr(281))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 145), y, 1));
                            J$.X1(201, J$.F(193, J$.R(185, 'y', y, 0), 0)());
                        } catch (J$e) {
                            J$.Ex(289, J$e);
                        } finally {
                            if (J$.Fr(297))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 209), 0)());
        } catch (J$e) {
            J$.Ex(305, J$e);
        } finally {
            if (J$.Sr(313)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

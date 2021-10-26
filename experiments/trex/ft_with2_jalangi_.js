J$.iids = {"9":[2,30,2,34],"17":[2,30,2,34],"25":[2,23,2,34],"33":[2,9,2,35],"41":[2,9,2,35],"49":[4,30,4,35],"57":[4,48,4,56],"65":[4,57,4,93],"73":[4,44,4,94],"81":[4,24,4,95],"89":[4,24,4,95],"97":[4,17,4,95],"105":[3,9,5,10],"113":[3,9,5,10],"121":[6,17,6,20],"129":[6,17,6,22],"137":[6,17,6,22],"145":[6,17,6,22],"153":[7,9,7,10],"161":[7,9,7,19],"163":[7,9,7,17],"169":[7,9,7,19],"177":[1,2,8,2],"185":[1,2,8,2],"193":[2,9,2,35],"201":[1,2,8,2],"209":[3,9,5,10],"217":[1,2,8,2],"225":[1,2,8,2],"233":[1,2,8,2],"241":[1,1,8,5],"249":[1,1,8,6],"257":[1,1,9,7],"265":[2,9,2,35],"273":[2,9,2,35],"281":[3,9,5,10],"289":[3,9,5,10],"297":[1,2,8,2],"305":[1,2,8,2],"313":[1,1,9,7],"321":[1,1,9,7],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_with2.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_with2_jalangi_.js","code":"(function () {\n        function x(){ return true}\n        function foo() {\n                return {log: 'log',getlog: new Function(\"with(this) { if(x()){return log;}}\")}\n        }\n        var y = foo();\n        y.getlog()\n})();\n      "};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(257, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_with2_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_with2.js');
            J$.X1(249, J$.F(241, J$.T(233, function () {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(177, arguments.callee, this, arguments);
                            function x() {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(33, arguments.callee, this, arguments);
                                            arguments = J$.N(41, 'arguments', arguments, 4);
                                            return J$.X1(25, J$.Rt(17, J$.T(9, true, 23, false)));
                                        } catch (J$e) {
                                            J$.Ex(265, J$e);
                                        } finally {
                                            if (J$.Fr(273))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            function foo() {
                                jalangiLabel1:
                                    while (true) {
                                        try {
                                            J$.Fe(105, arguments.callee, this, arguments);
                                            arguments = J$.N(113, 'arguments', arguments, 4);
                                            return J$.X1(97, J$.Rt(89, J$.T(81, {
                                                log: J$.T(49, 'log', 21, false),
                                                getlog: J$.F(73, J$.R(57, 'Function', Function, 2), 1)(J$.T(65, "with(this) { if(x()){return log;}}", 21, false))
                                            }, 11, false)));
                                        } catch (J$e) {
                                            J$.Ex(281, J$e);
                                        } finally {
                                            if (J$.Fr(289))
                                                continue jalangiLabel1;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(185, 'arguments', arguments, 4);
                            x = J$.N(201, 'x', J$.T(193, x, 12, false, 33), 0);
                            foo = J$.N(217, 'foo', J$.T(209, foo, 12, false, 105), 0);
                            J$.N(225, 'y', y, 0);
                            var y = J$.X1(145, J$.W(137, 'y', J$.F(129, J$.R(121, 'foo', foo, 0), 0)(), y, 1));
                            J$.X1(169, J$.M(161, J$.R(153, 'y', y, 0), 'getlog', 0)());
                        } catch (J$e) {
                            J$.Ex(297, J$e);
                        } finally {
                            if (J$.Fr(305))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 177), 0)());
        } catch (J$e) {
            J$.Ex(313, J$e);
        } finally {
            if (J$.Sr(321)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

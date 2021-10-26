J$.ast_info = ["/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_applycall.js@5:1:7:2"];
J$.iids = {"9":[3,16,3,17],"17":[3,24,3,28],"25":[3,16,3,29],"27":[3,16,3,23],"33":[3,16,3,29],"41":[3,9,3,30],"49":[2,1,4,2],"57":[2,1,4,2],"65":[2,1,4,2],"73":[6,9,6,16],"81":[6,9,6,16],"89":[5,1,7,2],"97":[5,1,7,2],"105":[8,1,8,4],"113":[8,10,8,14],"121":[8,15,8,18],"129":[8,1,8,19],"131":[8,1,8,9],"137":[8,1,8,20],"145":[1,2,9,2],"153":[1,2,9,2],"161":[2,1,4,2],"169":[1,2,9,2],"177":[5,1,7,2],"185":[1,2,9,2],"193":[1,2,9,2],"201":[1,1,9,5],"209":[1,1,9,5],"217":[1,1,9,5],"225":[2,1,4,2],"233":[2,1,4,2],"241":[5,1,7,2],"249":[5,1,7,2],"257":[1,2,9,2],"265":[1,2,9,2],"273":[1,1,9,5],"281":[1,1,9,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_applycall.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_applycall_jalangi_.js","code":"(function(){\nfunction foo(x){ \n        return x.apply(this);\n}\nfunction bar(){ \n        return;\n}\nfoo.call(this,bar);\n})()"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(217, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_applycall_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_applycall.js');
            J$.X1(209, J$.F(201, J$.T(193, function () {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(145, arguments.callee, this, arguments);
                            function foo(x) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(49, arguments.callee, this, arguments);
                                            arguments = J$.N(57, 'arguments', arguments, 4);
                                            x = J$.N(65, 'x', x, 4);
                                            return J$.X1(41, J$.Rt(33, J$.M(25, J$.R(9, 'x', x, 0), 'apply', 0)(J$.R(17, 'this', this, 0))));
                                        } catch (J$e) {
                                            J$.Ex(225, J$e);
                                        } finally {
                                            if (J$.Fr(233))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            function bar() {
                                jalangiLabel1:
                                    while (true) {
                                        try {
                                            J$.Fe(89, arguments.callee, this, arguments);
                                            arguments = J$.N(97, 'arguments', arguments, 4);
                                            return J$.X1(81, J$.Rt(73, undefined));
                                        } catch (J$e) {
                                            J$.Ex(241, J$e);
                                        } finally {
                                            if (J$.Fr(249))
                                                continue jalangiLabel1;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(153, 'arguments', arguments, 4);
                            foo = J$.N(169, 'foo', J$.T(161, foo, 12, false, 49), 0);
                            bar = J$.N(185, 'bar', J$.T(177, bar, 12, false, 89), 0);
                            J$.X1(137, J$.M(129, J$.R(105, 'foo', foo, 0), 'call', 0)(J$.R(113, 'this', this, 0), J$.R(121, 'bar', bar, 0)));
                        } catch (J$e) {
                            J$.Ex(257, J$e);
                        } finally {
                            if (J$.Fr(265))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 145), 0)());
        } catch (J$e) {
            J$.Ex(273, J$e);
        } finally {
            if (J$.Sr(281)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

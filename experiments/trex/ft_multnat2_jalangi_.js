J$.iids = {"9":[3,22,3,28],"17":[5,20,5,24],"25":[5,20,5,34],"33":[5,20,5,34],"41":[5,13,5,35],"49":[4,21,6,12],"57":[4,21,6,12],"65":[4,21,6,12],"73":[2,20,7,10],"81":[2,20,7,10],"89":[2,20,7,10],"97":[10,18,10,22],"105":[10,18,10,31],"113":[10,18,10,31],"121":[10,11,10,32],"129":[9,9,11,10],"137":[9,9,11,10],"145":[12,24,12,28],"153":[12,34,12,38],"161":[12,24,12,39],"163":[12,24,12,33],"169":[12,24,12,46],"171":[12,24,12,44],"177":[12,24,12,46],"185":[12,24,12,46],"193":[13,9,13,17],"201":[13,9,13,19],"209":[13,9,13,20],"217":[1,2,14,8],"225":[1,2,14,8],"233":[1,2,14,8],"241":[9,9,11,10],"249":[1,2,14,8],"257":[1,2,14,8],"265":[1,2,14,8],"273":[1,1,14,11],"281":[1,1,14,12],"289":[1,1,15,7],"297":[4,21,6,12],"305":[4,21,6,12],"313":[9,9,11,10],"321":[9,9,11,10],"329":[1,2,14,8],"337":[1,2,14,8],"345":[1,1,15,7],"353":[1,1,15,7],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_multnat2.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_multnat2_jalangi_.js","code":"(function () {\n        var user = {\n          firstName: \"John\",\n          fullName: function () {\n            return this.firstName;\n          },\n        };\n      \n        function func() {\n          return this.fullName;\n        }\n        var funcUser = func.bind(user).call();\n        funcUser();\n      })();\n      "};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(289, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_multnat2_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_multnat2.js');
            J$.X1(281, J$.F(273, J$.T(265, function () {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(217, arguments.callee, this, arguments);
                            function func() {
                                jalangiLabel1:
                                    while (true) {
                                        try {
                                            J$.Fe(129, arguments.callee, this, arguments);
                                            arguments = J$.N(137, 'arguments', arguments, 4);
                                            return J$.X1(121, J$.Rt(113, J$.G(105, J$.R(97, 'this', this, 0), 'fullName', 0)));
                                        } catch (J$e) {
                                            J$.Ex(313, J$e);
                                        } finally {
                                            if (J$.Fr(321))
                                                continue jalangiLabel1;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(225, 'arguments', arguments, 4);
                            J$.N(233, 'user', user, 0);
                            func = J$.N(249, 'func', J$.T(241, func, 12, false, 129), 0);
                            J$.N(257, 'funcUser', funcUser, 0);
                            var user = J$.X1(89, J$.W(81, 'user', J$.T(73, {
                                firstName: J$.T(9, "John", 21, false),
                                fullName: J$.T(65, function () {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(49, arguments.callee, this, arguments);
                                                arguments = J$.N(57, 'arguments', arguments, 4);
                                                return J$.X1(41, J$.Rt(33, J$.G(25, J$.R(17, 'this', this, 0), 'firstName', 0)));
                                            } catch (J$e) {
                                                J$.Ex(297, J$e);
                                            } finally {
                                                if (J$.Fr(305))
                                                    continue jalangiLabel0;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 49)
                            }, 11, false), user, 1));
                            var funcUser = J$.X1(185, J$.W(177, 'funcUser', J$.M(169, J$.M(161, J$.R(145, 'func', func, 0), 'bind', 0)(J$.R(153, 'user', user, 0)), 'call', 0)(), funcUser, 1));
                            J$.X1(209, J$.F(201, J$.R(193, 'funcUser', funcUser, 0), 0)());
                        } catch (J$e) {
                            J$.Ex(329, J$e);
                        } finally {
                            if (J$.Fr(337))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 217), 0)());
        } catch (J$e) {
            J$.Ex(345, J$e);
        } finally {
            if (J$.Sr(353)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

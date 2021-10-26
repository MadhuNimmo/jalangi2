J$.iids = {"9":[3,16,3,22],"17":[5,14,5,18],"25":[5,14,5,28],"33":[5,14,5,28],"41":[5,7,5,29],"49":[4,15,6,6],"57":[4,15,6,6],"65":[4,15,6,6],"73":[2,14,7,4],"81":[2,14,7,4],"89":[2,14,7,4],"97":[10,12,10,16],"105":[10,12,10,25],"113":[10,12,10,25],"121":[10,5,10,26],"129":[9,3,11,4],"137":[9,3,11,4],"145":[12,18,12,22],"153":[12,28,12,32],"161":[12,18,12,33],"163":[12,18,12,27],"169":[12,18,12,33],"177":[12,18,12,33],"185":[13,21,13,29],"193":[13,21,13,31],"201":[13,21,13,31],"209":[13,21,13,31],"217":[14,3,14,14],"225":[14,3,14,16],"233":[14,3,14,17],"241":[1,2,15,2],"249":[1,2,15,2],"257":[1,2,15,2],"265":[9,3,11,4],"273":[1,2,15,2],"281":[1,2,15,2],"289":[1,2,15,2],"297":[1,2,15,2],"305":[1,1,15,5],"313":[1,1,15,6],"321":[1,1,16,1],"329":[4,15,6,6],"337":[4,15,6,6],"345":[9,3,11,4],"353":[9,3,11,4],"361":[1,2,15,2],"369":[1,2,15,2],"377":[1,1,16,1],"385":[1,1,16,1],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_bind.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_bind_jalangi_.js","code":"(function () {\n  var user = {\n    firstName: \"John\",\n    fullName: function () {\n      return this.firstName;\n    },\n  };\n\n  function func() {\n    return this.fullName;\n  }\n  var funcUser = func.bind(user);\n  var newFullName = funcUser();\n  newFullName();\n})();\n"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(321, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_bind_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_bind.js');
            J$.X1(313, J$.F(305, J$.T(297, function () {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(241, arguments.callee, this, arguments);
                            function func() {
                                jalangiLabel1:
                                    while (true) {
                                        try {
                                            J$.Fe(129, arguments.callee, this, arguments);
                                            arguments = J$.N(137, 'arguments', arguments, 4);
                                            return J$.X1(121, J$.Rt(113, J$.G(105, J$.R(97, 'this', this, 0), 'fullName', 0)));
                                        } catch (J$e) {
                                            J$.Ex(345, J$e);
                                        } finally {
                                            if (J$.Fr(353))
                                                continue jalangiLabel1;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(249, 'arguments', arguments, 4);
                            J$.N(257, 'user', user, 0);
                            func = J$.N(273, 'func', J$.T(265, func, 12, false, 129), 0);
                            J$.N(281, 'funcUser', funcUser, 0);
                            J$.N(289, 'newFullName', newFullName, 0);
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
                                                J$.Ex(329, J$e);
                                            } finally {
                                                if (J$.Fr(337))
                                                    continue jalangiLabel0;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 49)
                            }, 11, false), user, 1));
                            var funcUser = J$.X1(177, J$.W(169, 'funcUser', J$.M(161, J$.R(145, 'func', func, 0), 'bind', 0)(J$.R(153, 'user', user, 0)), funcUser, 1));
                            var newFullName = J$.X1(209, J$.W(201, 'newFullName', J$.F(193, J$.R(185, 'funcUser', funcUser, 0), 0)(), newFullName, 1));
                            J$.X1(233, J$.F(225, J$.R(217, 'newFullName', newFullName, 0), 0)());
                        } catch (J$e) {
                            J$.Ex(361, J$e);
                        } finally {
                            if (J$.Fr(369))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 241), 0)());
        } catch (J$e) {
            J$.Ex(377, J$e);
        } finally {
            if (J$.Sr(385)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

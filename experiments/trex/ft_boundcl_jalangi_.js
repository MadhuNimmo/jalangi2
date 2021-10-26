J$.iids = {"9":[3,22,3,28],"17":[5,20,5,24],"25":[5,20,5,34],"33":[5,20,5,34],"41":[5,13,5,35],"49":[4,21,6,12],"57":[4,21,6,12],"65":[4,21,6,12],"73":[2,20,7,10],"81":[2,20,7,10],"89":[2,20,7,10],"97":[10,18,10,22],"105":[10,18,10,31],"113":[10,18,10,31],"121":[10,11,10,32],"129":[9,9,11,10],"137":[9,9,11,10],"145":[12,24,12,28],"153":[12,34,12,38],"161":[12,24,12,39],"163":[12,24,12,33],"169":[12,24,12,39],"177":[12,24,12,39],"185":[13,27,13,35],"193":[13,27,13,37],"201":[13,27,13,37],"209":[13,27,13,37],"217":[14,9,14,20],"225":[14,9,14,22],"233":[14,9,14,23],"241":[15,28,15,36],"249":[15,42,15,46],"257":[15,28,15,47],"259":[15,28,15,41],"265":[15,28,15,47],"273":[15,28,15,47],"281":[16,9,16,21],"289":[16,9,16,23],"297":[16,9,16,24],"305":[1,2,17,2],"313":[1,2,17,2],"321":[1,2,17,2],"329":[9,9,11,10],"337":[1,2,17,2],"345":[1,2,17,2],"353":[1,2,17,2],"361":[1,2,17,2],"369":[1,2,17,2],"377":[1,1,17,5],"385":[1,1,17,6],"393":[1,1,18,7],"401":[4,21,6,12],"409":[4,21,6,12],"417":[9,9,11,10],"425":[9,9,11,10],"433":[1,2,17,2],"441":[1,2,17,2],"449":[1,1,18,7],"457":[1,1,18,7],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_boundcl.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_boundcl_jalangi_.js","code":"(function () {\n        var user = {\n          firstName: \"John\",\n          fullName: function () {\n            return this.firstName;\n          },\n        };\n      \n        function func() {\n          return this.fullName;\n        }\n        var funcUser = func.bind(user);\n        var newFullName = funcUser();\n        newFullName();\n        var newFullName2 = funcUser.call(this);\n        newFullName2();\n})();\n      "};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(393, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_boundcl_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_boundcl.js');
            J$.X1(385, J$.F(377, J$.T(369, function () {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(305, arguments.callee, this, arguments);
                            function func() {
                                jalangiLabel1:
                                    while (true) {
                                        try {
                                            J$.Fe(129, arguments.callee, this, arguments);
                                            arguments = J$.N(137, 'arguments', arguments, 4);
                                            return J$.X1(121, J$.Rt(113, J$.G(105, J$.R(97, 'this', this, 0), 'fullName', 0)));
                                        } catch (J$e) {
                                            J$.Ex(417, J$e);
                                        } finally {
                                            if (J$.Fr(425))
                                                continue jalangiLabel1;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(313, 'arguments', arguments, 4);
                            J$.N(321, 'user', user, 0);
                            func = J$.N(337, 'func', J$.T(329, func, 12, false, 129), 0);
                            J$.N(345, 'funcUser', funcUser, 0);
                            J$.N(353, 'newFullName', newFullName, 0);
                            J$.N(361, 'newFullName2', newFullName2, 0);
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
                                                J$.Ex(401, J$e);
                                            } finally {
                                                if (J$.Fr(409))
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
                            var newFullName2 = J$.X1(273, J$.W(265, 'newFullName2', J$.M(257, J$.R(241, 'funcUser', funcUser, 0), 'call', 0)(J$.R(249, 'this', this, 0)), newFullName2, 1));
                            J$.X1(297, J$.F(289, J$.R(281, 'newFullName2', newFullName2, 0), 0)());
                        } catch (J$e) {
                            J$.Ex(433, J$e);
                        } finally {
                            if (J$.Fr(441))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 305), 0)());
        } catch (J$e) {
            J$.Ex(449, J$e);
        } finally {
            if (J$.Sr(457)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

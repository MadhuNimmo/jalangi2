J$.iids = {"9":[1,13,1,15],"17":[1,13,1,15],"25":[1,13,1,15],"33":[2,1,2,6],"41":[2,35,2,41],"49":[2,35,2,41],"57":[2,28,2,41],"65":[2,15,2,42],"73":[2,15,2,42],"81":[2,15,2,42],"89":[2,1,2,42],"97":[2,1,2,43],"105":[3,1,3,7],"113":[3,23,3,28],"121":[3,30,3,40],"129":[4,24,4,28],"137":[4,24,4,36],"139":[4,24,4,34],"145":[4,24,4,36],"153":[4,17,4,37],"161":[4,6,4,38],"169":[4,6,4,38],"177":[4,6,4,38],"185":[5,20,5,24],"193":[5,33,5,36],"201":[5,20,5,36],"209":[5,20,5,37],"217":[5,6,5,38],"225":[5,6,5,38],"233":[5,6,5,38],"241":[5,6,5,38],"249":[6,13,6,17],"257":[7,15,7,19],"265":[3,42,8,2],"273":[3,1,8,3],"275":[3,1,3,22],"281":[3,1,8,4],"289":[9,1,9,6],"297":[9,38,9,46],"305":[9,38,9,46],"313":[9,31,9,46],"321":[9,18,9,47],"329":[9,18,9,47],"337":[9,18,9,47],"345":[9,1,9,47],"353":[9,1,9,47],"361":[10,1,10,8],"369":[10,13,10,18],"377":[10,13,10,27],"385":[10,1,10,28],"387":[10,1,10,12],"393":[10,1,10,29],"401":[1,1,10,29],"409":[1,1,10,29],"417":[2,15,2,42],"425":[2,15,2,42],"433":[4,6,4,38],"441":[4,6,4,38],"449":[5,6,5,38],"457":[5,6,5,38],"465":[9,18,9,47],"473":[9,18,9,47],"481":[1,1,10,29],"489":[1,1,10,29],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_gtrstr.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_gtrstr_jalangi_.js","code":"var userX = {};\nuserX.nameX = function (){ return \"John\"};\nObject.defineProperty(userX, \"fullName\", {\nget: function(){return this.nameX();},\nset: function(val){this.nameX = val;},\nenumerable: true,\nconfigurable: true,\n});\nuserX.fullName = function (){ return \"Catana\"}\nconsole.log(userX.fullName);"};
jalangiLabel4:
    while (true) {
        try {
            J$.Se(401, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_gtrstr_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_gtrstr.js');
            J$.N(409, 'userX', userX, 0);
            var userX = J$.X1(25, J$.W(17, 'userX', J$.T(9, {}, 11, false), userX, 3));
            J$.X1(97, J$.P(89, J$.R(33, 'userX', userX, 1), 'nameX', J$.T(81, function () {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(65, arguments.callee, this, arguments);
                            arguments = J$.N(73, 'arguments', arguments, 4);
                            return J$.X1(57, J$.Rt(49, J$.T(41, "John", 21, false)));
                        } catch (J$e) {
                            J$.Ex(417, J$e);
                        } finally {
                            if (J$.Fr(425))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 65), 0));
            J$.X1(281, J$.M(273, J$.R(105, 'Object', Object, 2), 'defineProperty', 0)(J$.R(113, 'userX', userX, 1), J$.T(121, "fullName", 21, false), J$.T(265, {
                get: J$.T(177, function () {
                    jalangiLabel1:
                        while (true) {
                            try {
                                J$.Fe(161, arguments.callee, this, arguments);
                                arguments = J$.N(169, 'arguments', arguments, 4);
                                return J$.X1(153, J$.Rt(145, J$.M(137, J$.R(129, 'this', this, 0), 'nameX', 0)()));
                            } catch (J$e) {
                                J$.Ex(433, J$e);
                            } finally {
                                if (J$.Fr(441))
                                    continue jalangiLabel1;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 161),
                set: J$.T(241, function (val) {
                    jalangiLabel2:
                        while (true) {
                            try {
                                J$.Fe(217, arguments.callee, this, arguments);
                                arguments = J$.N(225, 'arguments', arguments, 4);
                                val = J$.N(233, 'val', val, 4);
                                J$.X1(209, J$.P(201, J$.R(185, 'this', this, 0), 'nameX', J$.R(193, 'val', val, 0), 0));
                            } catch (J$e) {
                                J$.Ex(449, J$e);
                            } finally {
                                if (J$.Fr(457))
                                    continue jalangiLabel2;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 217),
                enumerable: J$.T(249, true, 23, false),
                configurable: J$.T(257, true, 23, false)
            }, 11, false)));
            J$.X1(353, J$.P(345, J$.R(289, 'userX', userX, 1), 'fullName', J$.T(337, function () {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(321, arguments.callee, this, arguments);
                            arguments = J$.N(329, 'arguments', arguments, 4);
                            return J$.X1(313, J$.Rt(305, J$.T(297, "Catana", 21, false)));
                        } catch (J$e) {
                            J$.Ex(465, J$e);
                        } finally {
                            if (J$.Fr(473))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 321), 0));
            J$.X1(393, J$.M(385, J$.R(361, 'console', console, 2), 'log', 0)(J$.G(377, J$.R(369, 'userX', userX, 1), 'fullName', 0)));
        } catch (J$e) {
            J$.Ex(481, J$e);
        } finally {
            if (J$.Sr(489)) {
                J$.L();
                continue jalangiLabel4;
            } else {
                J$.L();
                break jalangiLabel4;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

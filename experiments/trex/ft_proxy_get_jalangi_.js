J$.iids = {"9":[2,6,2,8],"17":[4,12,4,13],"25":[4,12,4,13],"33":[4,5,4,14],"41":[3,6,5,4],"49":[3,6,5,4],"57":[3,6,5,4],"65":[1,26,6,2],"73":[1,26,6,2],"81":[1,26,6,2],"89":[10,14,10,16],"97":[10,14,10,16],"105":[10,7,10,17],"113":[9,12,11,6],"121":[9,12,11,6],"129":[9,12,11,6],"137":[9,12,11,6],"145":[9,5,11,7],"153":[8,8,12,4],"161":[8,8,12,4],"169":[8,8,12,4],"177":[8,8,12,4],"185":[8,8,12,4],"193":[7,15,13,2],"201":[7,15,13,2],"209":[7,15,13,2],"217":[14,19,14,24],"225":[14,25,14,31],"233":[14,33,14,40],"241":[14,15,14,41],"249":[14,15,14,41],"257":[14,15,14,41],"265":[15,9,15,16],"273":[15,9,15,18],"281":[15,9,15,18],"289":[15,9,15,18],"297":[16,1,16,2],"305":[16,1,16,4],"313":[16,1,16,5],"321":[1,2,17,2],"329":[1,2,17,2],"337":[1,2,17,2],"345":[1,2,17,2],"353":[1,2,17,2],"361":[1,2,17,2],"369":[1,2,17,2],"377":[1,1,17,5],"385":[1,1,17,5],"393":[1,1,17,5],"401":[3,6,5,4],"409":[3,6,5,4],"417":[9,12,11,6],"425":[9,12,11,6],"433":[8,8,12,4],"441":[8,8,12,4],"449":[1,2,17,2],"457":[1,2,17,2],"465":[1,1,17,5],"473":[1,1,17,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy_get.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy_get_jalangi_.js","code":"(function(){var target = {\n  x: 10,\n  y: function () {\n    return x;\n  },\n};\nvar handler = {\n  get: function (obj, prop) {\n    return function () {\n      return 42;\n    };\n  },\n};\nvar target1 = new Proxy(target, handler);\nvar z = target1.y;\nz();\n})()"};
jalangiLabel4:
    while (true) {
        try {
            J$.Se(393, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy_get_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy_get.js');
            J$.X1(385, J$.F(377, J$.T(369, function () {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(321, arguments.callee, this, arguments);
                            arguments = J$.N(329, 'arguments', arguments, 4);
                            J$.N(337, 'target', target, 0);
                            J$.N(345, 'handler', handler, 0);
                            J$.N(353, 'target1', target1, 0);
                            J$.N(361, 'z', z, 0);
                            var target = J$.X1(81, J$.W(73, 'target', J$.T(65, {
                                x: J$.T(9, 10, 22, false),
                                y: J$.T(57, function () {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(41, arguments.callee, this, arguments);
                                                arguments = J$.N(49, 'arguments', arguments, 4);
                                                return J$.X1(33, J$.Rt(25, J$.R(17, 'x', x, 2)));
                                            } catch (J$e) {
                                                J$.Ex(401, J$e);
                                            } finally {
                                                if (J$.Fr(409))
                                                    continue jalangiLabel0;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 41)
                            }, 11, false), target, 1));
                            var handler = J$.X1(209, J$.W(201, 'handler', J$.T(193, {
                                get: J$.T(185, function (obj, prop) {
                                    jalangiLabel2:
                                        while (true) {
                                            try {
                                                J$.Fe(153, arguments.callee, this, arguments);
                                                arguments = J$.N(161, 'arguments', arguments, 4);
                                                obj = J$.N(169, 'obj', obj, 4);
                                                prop = J$.N(177, 'prop', prop, 4);
                                                return J$.X1(145, J$.Rt(137, J$.T(129, function () {
                                                    jalangiLabel1:
                                                        while (true) {
                                                            try {
                                                                J$.Fe(113, arguments.callee, this, arguments);
                                                                arguments = J$.N(121, 'arguments', arguments, 4);
                                                                return J$.X1(105, J$.Rt(97, J$.T(89, 42, 22, false)));
                                                            } catch (J$e) {
                                                                J$.Ex(417, J$e);
                                                            } finally {
                                                                if (J$.Fr(425))
                                                                    continue jalangiLabel1;
                                                                else
                                                                    return J$.Ra();
                                                            }
                                                        }
                                                }, 12, false, 113)));
                                            } catch (J$e) {
                                                J$.Ex(433, J$e);
                                            } finally {
                                                if (J$.Fr(441))
                                                    continue jalangiLabel2;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 153)
                            }, 11, false), handler, 1));
                            var target1 = J$.X1(257, J$.W(249, 'target1', J$.F(241, J$.R(217, 'Proxy', Proxy, 2), 1)(J$.R(225, 'target', target, 0), J$.R(233, 'handler', handler, 0)), target1, 1));
                            var z = J$.X1(289, J$.W(281, 'z', J$.G(273, J$.R(265, 'target1', target1, 0), 'y', 0), z, 1));
                            J$.X1(313, J$.F(305, J$.R(297, 'z', z, 0), 0)());
                        } catch (J$e) {
                            J$.Ex(449, J$e);
                        } finally {
                            if (J$.Fr(457))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 321), 0)());
        } catch (J$e) {
            J$.Ex(465, J$e);
        } finally {
            if (J$.Sr(473)) {
                J$.L();
                continue jalangiLabel4;
            } else {
                J$.L();
                break jalangiLabel4;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

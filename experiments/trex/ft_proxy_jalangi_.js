J$.iids = {"8":[10,9,10,39],"9":[2,13,2,20],"10":[10,9,10,25],"17":[4,12,4,16],"18":[10,9,10,39],"25":[4,12,4,25],"33":[4,12,4,25],"41":[4,5,4,26],"49":[3,12,5,4],"57":[3,12,5,4],"65":[3,12,5,4],"73":[1,15,6,2],"81":[1,15,6,2],"89":[1,15,6,2],"97":[9,21,9,27],"105":[9,28,9,32],"113":[9,21,9,33],"121":[9,21,9,33],"129":[9,21,9,33],"137":[10,16,10,25],"145":[10,29,10,39],"153":[11,14,11,23],"161":[11,14,11,23],"169":[11,7,11,24],"177":[14,16,14,25],"185":[14,16,14,27],"193":[14,16,14,27],"201":[14,9,14,28],"209":[13,14,15,8],"217":[13,14,15,8],"225":[13,14,15,8],"233":[13,14,15,8],"241":[13,7,15,9],"249":[8,8,17,4],"257":[8,8,17,4],"265":[8,8,17,4],"273":[8,8,17,4],"281":[8,8,17,4],"289":[8,8,17,4],"297":[7,16,18,2],"305":[7,16,18,2],"313":[7,16,18,2],"321":[19,18,19,23],"329":[19,24,19,31],"337":[19,33,19,41],"345":[19,14,19,42],"353":[19,14,19,42],"361":[19,14,19,42],"369":[20,1,20,7],"377":[20,1,20,17],"379":[20,1,20,15],"385":[20,1,20,18],"393":[1,1,29,3],"401":[1,1,29,3],"409":[1,1,29,3],"417":[1,1,29,3],"425":[3,12,5,4],"433":[3,12,5,4],"441":[13,14,15,8],"449":[13,14,15,8],"457":[10,5,16,6],"465":[8,8,17,4],"473":[8,8,17,4],"481":[1,1,29,3],"489":[1,1,29,3],"nBranches":2,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy_jalangi_.js","code":"var target1 = {\n  message1: \"hello\",\n  method1: function() {\n    return this.message1;\n  },\n};\nvar handler2 = {\n  get: function (target, prop) {\n    var propValue = target[prop];\n    if (typeof propValue != \"function\") {\n      return propValue;\n    } else {\n      return function () {\n        return propValue();\n      };\n    }\n  },\n};\nvar proxy2 = new Proxy(target1, handler2);\nproxy2.method1();\n/*\n{ '(/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy.js:19:14:19:42)': [ 'Proxy (Native)' ],\n  'system (Native)':\n   [ '(/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy.js:8:8:17:4)' ],\n  '(/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy.js:20:1:20:17)':\n   [ '(/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy.js:13:14:15:8)' ],\n  '(/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy.js:14:16:14:27)':\n   [ '(/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy.js:3:12:5:4)' ] }\n*/"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(393, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy.js');
            J$.N(401, 'target1', target1, 0);
            J$.N(409, 'handler2', handler2, 0);
            J$.N(417, 'proxy2', proxy2, 0);
            var target1 = J$.X1(89, J$.W(81, 'target1', J$.T(73, {
                message1: J$.T(9, "hello", 21, false),
                method1: J$.T(65, function () {
                    jalangiLabel0:
                        while (true) {
                            try {
                                J$.Fe(49, arguments.callee, this, arguments);
                                arguments = J$.N(57, 'arguments', arguments, 4);
                                return J$.X1(41, J$.Rt(33, J$.G(25, J$.R(17, 'this', this, 0), 'message1', 0)));
                            } catch (J$e) {
                                J$.Ex(425, J$e);
                            } finally {
                                if (J$.Fr(433))
                                    continue jalangiLabel0;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 49)
            }, 11, false), target1, 3));
            var handler2 = J$.X1(313, J$.W(305, 'handler2', J$.T(297, {
                get: J$.T(289, function (target, prop) {
                    jalangiLabel2:
                        while (true) {
                            try {
                                J$.Fe(249, arguments.callee, this, arguments);
                                arguments = J$.N(257, 'arguments', arguments, 4);
                                target = J$.N(265, 'target', target, 4);
                                prop = J$.N(273, 'prop', prop, 4);
                                J$.N(281, 'propValue', propValue, 0);
                                var propValue = J$.X1(129, J$.W(121, 'propValue', J$.G(113, J$.R(97, 'target', target, 0), J$.R(105, 'prop', prop, 0), 4), propValue, 1));
                                if (J$.X1(457, J$.C(8, J$.B(18, '!=', J$.U(10, 'typeof', J$.R(137, 'propValue', propValue, 0)), J$.T(145, "function", 21, false), 0)))) {
                                    return J$.X1(169, J$.Rt(161, J$.R(153, 'propValue', propValue, 0)));
                                } else {
                                    return J$.X1(241, J$.Rt(233, J$.T(225, function () {
                                        jalangiLabel1:
                                            while (true) {
                                                try {
                                                    J$.Fe(209, arguments.callee, this, arguments);
                                                    arguments = J$.N(217, 'arguments', arguments, 4);
                                                    return J$.X1(201, J$.Rt(193, J$.F(185, J$.R(177, 'propValue', propValue, 0), 0)()));
                                                } catch (J$e) {
                                                    J$.Ex(441, J$e);
                                                } finally {
                                                    if (J$.Fr(449))
                                                        continue jalangiLabel1;
                                                    else
                                                        return J$.Ra();
                                                }
                                            }
                                    }, 12, false, 209)));
                                }
                            } catch (J$e) {
                                J$.Ex(465, J$e);
                            } finally {
                                if (J$.Fr(473))
                                    continue jalangiLabel2;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 249)
            }, 11, false), handler2, 3));
            var proxy2 = J$.X1(361, J$.W(353, 'proxy2', J$.F(345, J$.R(321, 'Proxy', Proxy, 2), 1)(J$.R(329, 'target1', target1, 1), J$.R(337, 'handler2', handler2, 1)), proxy2, 3));
            J$.X1(385, J$.M(377, J$.R(369, 'proxy2', proxy2, 1), 'method1', 0)());
        } catch (J$e) {
            J$.Ex(481, J$e);
        } finally {
            if (J$.Sr(489)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

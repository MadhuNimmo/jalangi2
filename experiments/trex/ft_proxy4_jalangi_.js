J$.iids = {"9":[3,22,3,23],"10":[3,22,3,27],"17":[3,26,3,27],"18":[9,24,9,71],"25":[3,22,3,27],"33":[3,15,3,28],"41":[2,15,4,14],"49":[2,15,4,14],"57":[2,15,4,14],"65":[2,15,4,14],"73":[2,15,4,14],"81":[1,10,5,12],"89":[1,10,5,12],"97":[1,10,5,12],"105":[9,24,9,30],"113":[9,31,9,44],"121":[9,45,9,46],"129":[9,31,9,47],"137":[9,49,9,62],"145":[9,63,9,64],"153":[9,49,9,65],"161":[9,24,9,66],"169":[9,69,9,71],"177":[9,24,9,71],"185":[9,17,9,72],"193":[8,22,10,16],"201":[8,22,10,16],"209":[8,22,10,16],"217":[8,22,10,16],"225":[8,22,10,16],"233":[8,22,10,16],"241":[7,21,11,14],"249":[7,21,11,14],"257":[7,21,11,14],"265":[12,24,12,29],"273":[12,30,12,33],"281":[12,35,12,42],"289":[12,20,12,43],"297":[12,20,12,43],"305":[12,20,12,43],"313":[14,7,14,13],"321":[14,18,14,19],"329":[14,21,14,22],"337":[14,7,14,23],"339":[14,7,14,17],"345":[14,7,14,24],"353":[1,1,19,6],"361":[1,1,19,6],"369":[1,1,19,6],"377":[1,1,19,6],"385":[2,15,4,14],"393":[2,15,4,14],"401":[8,22,10,16],"409":[8,22,10,16],"417":[1,1,19,6],"425":[1,1,19,6],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy4.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy4_jalangi_.js","code":"var obj ={\n        sum : function(a, b) {\n              return a + b;\n            }\n          }\n            \n      var handler = {\n              apply: function (target, thisArg, argumentsList) {      \n                return target(argumentsList[0], argumentsList[1]) * 10;\n              }\n            };\n      var proxy1 = new Proxy(obj, handler);\n            \n      proxy1.sum(1, 2);  \n/*\n{ '(/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy4.js:12:20:12:43)': [ 'Proxy (Native)' ],\n  '(/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy4.js:14:7:14:23)':\n   [ '(/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy4.js:2:15:4:14)' ] }\n   */"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(353, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy4_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy4.js');
            J$.N(361, 'obj', obj, 0);
            J$.N(369, 'handler', handler, 0);
            J$.N(377, 'proxy1', proxy1, 0);
            var obj = J$.X1(97, J$.W(89, 'obj', J$.T(81, {
                sum: J$.T(73, function (a, b) {
                    jalangiLabel0:
                        while (true) {
                            try {
                                J$.Fe(41, arguments.callee, this, arguments);
                                arguments = J$.N(49, 'arguments', arguments, 4);
                                a = J$.N(57, 'a', a, 4);
                                b = J$.N(65, 'b', b, 4);
                                return J$.X1(33, J$.Rt(25, J$.B(10, '+', J$.R(9, 'a', a, 0), J$.R(17, 'b', b, 0), 0)));
                            } catch (J$e) {
                                J$.Ex(385, J$e);
                            } finally {
                                if (J$.Fr(393))
                                    continue jalangiLabel0;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 41)
            }, 11, false), obj, 3));
            var handler = J$.X1(257, J$.W(249, 'handler', J$.T(241, {
                apply: J$.T(233, function (target, thisArg, argumentsList) {
                    jalangiLabel1:
                        while (true) {
                            try {
                                J$.Fe(193, arguments.callee, this, arguments);
                                arguments = J$.N(201, 'arguments', arguments, 4);
                                target = J$.N(209, 'target', target, 4);
                                thisArg = J$.N(217, 'thisArg', thisArg, 4);
                                argumentsList = J$.N(225, 'argumentsList', argumentsList, 4);
                                return J$.X1(185, J$.Rt(177, J$.B(18, '*', J$.F(161, J$.R(105, 'target', target, 0), 0)(J$.G(129, J$.R(113, 'argumentsList', argumentsList, 0), J$.T(121, 0, 22, false), 4), J$.G(153, J$.R(137, 'argumentsList', argumentsList, 0), J$.T(145, 1, 22, false), 4)), J$.T(169, 10, 22, false), 0)));
                            } catch (J$e) {
                                J$.Ex(401, J$e);
                            } finally {
                                if (J$.Fr(409))
                                    continue jalangiLabel1;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 193)
            }, 11, false), handler, 3));
            var proxy1 = J$.X1(305, J$.W(297, 'proxy1', J$.F(289, J$.R(265, 'Proxy', Proxy, 2), 1)(J$.R(273, 'obj', obj, 1), J$.R(281, 'handler', handler, 1)), proxy1, 3));
            J$.X1(345, J$.M(337, J$.R(313, 'proxy1', proxy1, 1), 'sum', 0)(J$.T(321, 1, 22, false), J$.T(329, 2, 22, false)));
        } catch (J$e) {
            J$.Ex(417, J$e);
        } finally {
            if (J$.Sr(425)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

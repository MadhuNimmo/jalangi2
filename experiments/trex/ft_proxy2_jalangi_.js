J$.iids = {"9":[2,16,2,17],"10":[2,16,2,21],"17":[2,20,2,21],"18":[7,18,7,65],"25":[2,16,2,21],"33":[2,9,2,22],"41":[1,1,3,8],"49":[1,1,3,8],"57":[1,1,3,8],"65":[1,1,3,8],"73":[7,18,7,24],"81":[7,25,7,38],"89":[7,39,7,40],"97":[7,25,7,41],"105":[7,43,7,56],"113":[7,57,7,58],"121":[7,43,7,59],"129":[7,18,7,60],"137":[7,63,7,65],"145":[7,18,7,65],"153":[7,11,7,66],"161":[6,16,8,10],"169":[6,16,8,10],"177":[6,16,8,10],"185":[6,16,8,10],"193":[6,16,8,10],"201":[6,16,8,10],"209":[5,15,9,8],"217":[5,15,9,8],"225":[5,15,9,8],"233":[10,18,10,23],"241":[10,24,10,27],"249":[10,29,10,36],"257":[10,14,10,37],"265":[10,14,10,37],"273":[10,14,10,37],"281":[11,1,11,7],"289":[11,8,11,9],"297":[11,11,11,12],"305":[11,1,11,13],"313":[11,1,11,14],"321":[1,1,19,3],"329":[1,1,3,8],"337":[1,1,19,3],"345":[1,1,19,3],"353":[1,1,19,3],"361":[1,1,3,8],"369":[1,1,3,8],"377":[6,16,8,10],"385":[6,16,8,10],"393":[1,1,19,3],"401":[1,1,19,3],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy2.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy2_jalangi_.js","code":"function sum(a, b) {\n        return a + b;\n      }\n      \nvar handler = {\n        apply: function (target, thisArg, argumentsList) {      \n          return target(argumentsList[0], argumentsList[1]) * 10;\n        }\n      };\nvar proxy1 = new Proxy(sum, handler);\nproxy1(1, 2);\n/*\n{ '(/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy2.js:10:14:10:37)': [ 'Proxy (Native)' ],\n  '(/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy2.js:12:1:12:13)': [ 'sum (Native)' ],\n  'sum (Native)':\n   [ '(/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy2.js:6:16:8:10)' ],\n  '(/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy2.js:7:18:7:60)':\n   [ '(/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy2.js:1:1:3:8)' ] }\n*/"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(321, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy2_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_proxy2.js');
            function sum(a, b) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(41, arguments.callee, this, arguments);
                            arguments = J$.N(49, 'arguments', arguments, 4);
                            a = J$.N(57, 'a', a, 4);
                            b = J$.N(65, 'b', b, 4);
                            return J$.X1(33, J$.Rt(25, J$.B(10, '+', J$.R(9, 'a', a, 0), J$.R(17, 'b', b, 0), 0)));
                        } catch (J$e) {
                            J$.Ex(361, J$e);
                        } finally {
                            if (J$.Fr(369))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            sum = J$.N(337, 'sum', J$.T(329, sum, 12, false, 41), 0);
            J$.N(345, 'handler', handler, 0);
            J$.N(353, 'proxy1', proxy1, 0);
            var handler = J$.X1(225, J$.W(217, 'handler', J$.T(209, {
                apply: J$.T(201, function (target, thisArg, argumentsList) {
                    jalangiLabel1:
                        while (true) {
                            try {
                                J$.Fe(161, arguments.callee, this, arguments);
                                arguments = J$.N(169, 'arguments', arguments, 4);
                                target = J$.N(177, 'target', target, 4);
                                thisArg = J$.N(185, 'thisArg', thisArg, 4);
                                argumentsList = J$.N(193, 'argumentsList', argumentsList, 4);
                                return J$.X1(153, J$.Rt(145, J$.B(18, '*', J$.F(129, J$.R(73, 'target', target, 0), 0)(J$.G(97, J$.R(81, 'argumentsList', argumentsList, 0), J$.T(89, 0, 22, false), 4), J$.G(121, J$.R(105, 'argumentsList', argumentsList, 0), J$.T(113, 1, 22, false), 4)), J$.T(137, 10, 22, false), 0)));
                            } catch (J$e) {
                                J$.Ex(377, J$e);
                            } finally {
                                if (J$.Fr(385))
                                    continue jalangiLabel1;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 161)
            }, 11, false), handler, 3));
            var proxy1 = J$.X1(273, J$.W(265, 'proxy1', J$.F(257, J$.R(233, 'Proxy', Proxy, 2), 1)(J$.R(241, 'sum', sum, 1), J$.R(249, 'handler', handler, 1)), proxy1, 3));
            J$.X1(313, J$.F(305, J$.R(281, 'proxy1', proxy1, 1), 0)(J$.T(289, 1, 22, false), J$.T(297, 2, 22, false)));
        } catch (J$e) {
            J$.Ex(393, J$e);
        } finally {
            if (J$.Sr(401)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

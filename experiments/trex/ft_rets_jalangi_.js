J$.iids = {"9":[2,32,2,38],"17":[2,32,2,38],"25":[2,25,2,38],"33":[2,13,2,39],"41":[2,13,2,39],"49":[2,13,2,39],"57":[3,31,3,33],"65":[3,31,3,35],"73":[3,31,3,35],"81":[3,24,3,35],"89":[3,12,3,36],"97":[3,12,3,36],"105":[3,12,3,36],"113":[1,10,4,2],"121":[1,10,4,2],"129":[1,10,4,2],"137":[5,10,5,14],"145":[5,15,5,19],"153":[5,9,5,20],"161":[5,9,5,20],"169":[5,9,5,20],"177":[6,22,6,25],"185":[6,26,6,29],"193":[6,30,6,31],"201":[6,26,6,32],"209":[6,22,6,35],"211":[6,22,6,33],"217":[6,22,6,35],"225":[6,15,6,35],"233":[6,1,6,36],"241":[6,1,6,36],"249":[7,22,7,25],"257":[7,26,7,29],"265":[7,30,7,31],"273":[7,26,7,32],"281":[7,22,7,35],"283":[7,22,7,33],"289":[7,22,7,35],"297":[7,15,7,35],"305":[7,1,7,36],"313":[7,1,7,36],"321":[8,8,8,10],"329":[8,8,8,12],"337":[8,8,8,12],"345":[8,8,8,12],"353":[1,1,8,13],"361":[1,1,8,13],"369":[1,1,8,13],"377":[6,1,6,36],"385":[1,1,8,13],"393":[7,1,7,36],"401":[1,1,8,13],"409":[1,1,8,13],"417":[2,13,2,39],"425":[2,13,2,39],"433":[3,12,3,36],"441":[3,12,3,36],"449":[6,1,6,36],"457":[6,1,6,36],"465":[7,1,7,36],"473":[7,1,7,36],"481":[1,1,8,13],"489":[1,1,8,13],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_rets.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_rets_jalangi_.js","code":"var obj ={\n        z1: function (){return \"done\"},\n        x1:function (){return y1()}\n}\nvar arr=[\"z1\",\"x1\"]\nfunction y1(){return obj[arr[0]]()}\nfunction w1(){return obj[arr[1]]()}\nvar x= w1();"};
jalangiLabel4:
    while (true) {
        try {
            J$.Se(353, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_rets_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_rets.js');
            function y1() {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(233, arguments.callee, this, arguments);
                            arguments = J$.N(241, 'arguments', arguments, 4);
                            return J$.X1(225, J$.Rt(217, J$.M(209, J$.R(177, 'obj', obj, 1), J$.G(201, J$.R(185, 'arr', arr, 1), J$.T(193, 0, 22, false), 4), 1)()));
                        } catch (J$e) {
                            J$.Ex(449, J$e);
                        } finally {
                            if (J$.Fr(457))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function w1() {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(305, arguments.callee, this, arguments);
                            arguments = J$.N(313, 'arguments', arguments, 4);
                            return J$.X1(297, J$.Rt(289, J$.M(281, J$.R(249, 'obj', obj, 1), J$.G(273, J$.R(257, 'arr', arr, 1), J$.T(265, 1, 22, false), 4), 1)()));
                        } catch (J$e) {
                            J$.Ex(465, J$e);
                        } finally {
                            if (J$.Fr(473))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(361, 'obj', obj, 0);
            J$.N(369, 'arr', arr, 0);
            y1 = J$.N(385, 'y1', J$.T(377, y1, 12, false, 233), 0);
            w1 = J$.N(401, 'w1', J$.T(393, w1, 12, false, 305), 0);
            J$.N(409, 'x', x, 0);
            var obj = J$.X1(129, J$.W(121, 'obj', J$.T(113, {
                z1: J$.T(49, function () {
                    jalangiLabel0:
                        while (true) {
                            try {
                                J$.Fe(33, arguments.callee, this, arguments);
                                arguments = J$.N(41, 'arguments', arguments, 4);
                                return J$.X1(25, J$.Rt(17, J$.T(9, "done", 21, false)));
                            } catch (J$e) {
                                J$.Ex(417, J$e);
                            } finally {
                                if (J$.Fr(425))
                                    continue jalangiLabel0;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 33),
                x1: J$.T(105, function () {
                    jalangiLabel1:
                        while (true) {
                            try {
                                J$.Fe(89, arguments.callee, this, arguments);
                                arguments = J$.N(97, 'arguments', arguments, 4);
                                return J$.X1(81, J$.Rt(73, J$.F(65, J$.R(57, 'y1', y1, 1), 0)()));
                            } catch (J$e) {
                                J$.Ex(433, J$e);
                            } finally {
                                if (J$.Fr(441))
                                    continue jalangiLabel1;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 89)
            }, 11, false), obj, 3));
            var arr = J$.X1(169, J$.W(161, 'arr', J$.T(153, [
                J$.T(137, "z1", 21, false),
                J$.T(145, "x1", 21, false)
            ], 10, false), arr, 3));
            var x = J$.X1(345, J$.W(337, 'x', J$.F(329, J$.R(321, 'w1', w1, 1), 0)(), x, 3));
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

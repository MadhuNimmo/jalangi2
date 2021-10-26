J$.iids = {"9":[3,19,3,21],"10":[5,21,5,29],"17":[3,19,3,21],"25":[3,19,3,21],"33":[4,9,4,12],"41":[4,13,4,18],"49":[4,38,4,39],"57":[4,38,4,39],"65":[4,31,4,39],"73":[4,20,4,40],"81":[4,20,4,40],"89":[4,20,4,40],"97":[4,9,4,40],"105":[4,9,4,40],"113":[5,17,5,20],"121":[5,21,5,24],"129":[5,25,5,29],"137":[5,17,5,30],"145":[5,17,5,30],"153":[5,9,5,30],"161":[6,9,6,15],"169":[6,9,6,17],"177":[6,9,6,17],"185":[8,17,8,23],"193":[8,17,8,25],"201":[8,17,8,25],"209":[7,9,9,10],"217":[7,9,9,10],"225":[10,9,10,12],"233":[10,9,10,14],"241":[10,9,10,14],"249":[1,2,11,2],"257":[1,2,11,2],"265":[1,2,11,2],"273":[1,2,11,2],"281":[7,9,9,10],"289":[1,2,11,2],"297":[1,2,11,2],"305":[1,1,11,5],"313":[1,1,11,5],"321":[1,1,11,5],"329":[4,20,4,40],"337":[4,20,4,40],"345":[7,9,9,10],"353":[7,9,9,10],"361":[1,2,11,2],"369":[1,2,11,2],"377":[1,1,11,5],"385":[1,1,11,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_render2.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_render2_jalangi_.js","code":"(function(){\n        var render;\n        var obj = {}\n        obj[\"xyz\"]=function(){return 2}\n        render= obj[\"x\"+\"yz\"]\n        render()\n        function foo(){\n                render()\n        }\n        foo()\n})()"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(321, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_render2_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_render2.js');
            J$.X1(313, J$.F(305, J$.T(297, function () {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(249, arguments.callee, this, arguments);
                            function foo() {
                                jalangiLabel1:
                                    while (true) {
                                        try {
                                            J$.Fe(209, arguments.callee, this, arguments);
                                            arguments = J$.N(217, 'arguments', arguments, 4);
                                            J$.X1(201, J$.F(193, J$.R(185, 'render', render, 0), 0)());
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
                            arguments = J$.N(257, 'arguments', arguments, 4);
                            J$.N(265, 'render', render, 0);
                            J$.N(273, 'obj', obj, 0);
                            foo = J$.N(289, 'foo', J$.T(281, foo, 12, false, 209), 0);
                            var render;
                            var obj = J$.X1(25, J$.W(17, 'obj', J$.T(9, {}, 11, false), obj, 1));
                            J$.X1(105, J$.P(97, J$.R(33, 'obj', obj, 0), J$.T(41, "xyz", 21, false), J$.T(89, function () {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(73, arguments.callee, this, arguments);
                                            arguments = J$.N(81, 'arguments', arguments, 4);
                                            return J$.X1(65, J$.Rt(57, J$.T(49, 2, 22, false)));
                                        } catch (J$e) {
                                            J$.Ex(329, J$e);
                                        } finally {
                                            if (J$.Fr(337))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 73), 2));
                            J$.X1(153, render = J$.W(145, 'render', J$.G(137, J$.R(113, 'obj', obj, 0), J$.B(10, '+', J$.T(121, "x", 21, false), J$.T(129, "yz", 21, false), 0), 4), render, 0));
                            J$.X1(177, J$.F(169, J$.R(161, 'render', render, 0), 0)());
                            J$.X1(241, J$.F(233, J$.R(225, 'foo', foo, 0), 0)());
                        } catch (J$e) {
                            J$.Ex(361, J$e);
                        } finally {
                            if (J$.Fr(369))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 249), 0)());
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

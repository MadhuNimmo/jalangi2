J$.iids = {"9":[4,30,4,31],"10":[9,65,9,70],"17":[4,32,4,33],"25":[4,29,4,34],"33":[5,29,5,31],"41":[3,29,5,32],"49":[3,23,6,26],"57":[8,30,8,34],"65":[8,30,8,39],"73":[8,30,8,44],"81":[8,30,8,48],"89":[8,30,8,48],"97":[8,30,8,48],"105":[9,27,9,32],"113":[9,65,9,66],"121":[9,69,9,70],"129":[9,65,9,70],"137":[9,58,9,70],"145":[9,40,9,71],"153":[9,40,9,71],"161":[9,40,9,71],"169":[9,40,9,71],"177":[9,40,9,71],"185":[9,73,9,74],"193":[9,27,9,75],"195":[9,27,9,39],"201":[9,27,9,75],"209":[9,27,9,75],"217":[7,23,18,18],"225":[7,23,18,18],"233":[7,23,18,18],"241":[7,23,18,18],"249":[7,23,18,18],"257":[2,20,19,16],"265":[2,20,19,16],"273":[2,20,19,16],"281":[21,9,21,13],"289":[21,9,21,20],"291":[21,9,21,18],"297":[21,9,21,21],"305":[1,2,22,2],"313":[1,2,22,2],"321":[1,2,22,2],"329":[1,2,22,2],"337":[1,1,22,5],"345":[1,1,22,5],"353":[1,1,22,5],"361":[9,40,9,71],"369":[9,40,9,71],"377":[7,23,18,18],"385":[7,23,18,18],"393":[1,2,22,2],"401":[1,2,22,2],"409":[1,1,22,5],"417":[1,1,22,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_msngnat.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_msngnat_jalangi_.js","code":"(function(){\n        var test = {\n                prop: {typs:{\n                        arr:[1,2],\n                        str:\"\"},\n                        },\n                func: function() {\n                  var todos= this.prop.typs.arr\n                  var x = todos.reduce(function (a, b) { return a + b}, 0)\n                  /*return todos.filter(function(x){ \n                        switch (x){\n                                case 1:\n                                        return !1;\n                                default:\n                                        return true\n                        }\n                  },this);*/\n                },\n              };\n              \n        test.func();\n})()"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(353, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_msngnat_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_msngnat.js');
            J$.X1(345, J$.F(337, J$.T(329, function () {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(305, arguments.callee, this, arguments);
                            arguments = J$.N(313, 'arguments', arguments, 4);
                            J$.N(321, 'test', test, 0);
                            var test = J$.X1(273, J$.W(265, 'test', J$.T(257, {
                                prop: J$.T(49, {
                                    typs: J$.T(41, {
                                        arr: J$.T(25, [
                                            J$.T(9, 1, 22, false),
                                            J$.T(17, 2, 22, false)
                                        ], 10, false),
                                        str: J$.T(33, "", 21, false)
                                    }, 11, false)
                                }, 11, false),
                                func: J$.T(249, function () {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(217, arguments.callee, this, arguments);
                                                arguments = J$.N(225, 'arguments', arguments, 4);
                                                J$.N(233, 'todos', todos, 0);
                                                J$.N(241, 'x', x, 0);
                                                var todos = J$.X1(97, J$.W(89, 'todos', J$.G(81, J$.G(73, J$.G(65, J$.R(57, 'this', this, 0), 'prop', 0), 'typs', 0), 'arr', 0), todos, 1));
                                                var x = J$.X1(209, J$.W(201, 'x', J$.M(193, J$.R(105, 'todos', todos, 0), 'reduce', 0)(J$.T(177, function (a, b) {
                                                    jalangiLabel0:
                                                        while (true) {
                                                            try {
                                                                J$.Fe(145, arguments.callee, this, arguments);
                                                                arguments = J$.N(153, 'arguments', arguments, 4);
                                                                a = J$.N(161, 'a', a, 4);
                                                                b = J$.N(169, 'b', b, 4);
                                                                return J$.X1(137, J$.Rt(129, J$.B(10, '+', J$.R(113, 'a', a, 0), J$.R(121, 'b', b, 0), 0)));
                                                            } catch (J$e) {
                                                                J$.Ex(361, J$e);
                                                            } finally {
                                                                if (J$.Fr(369))
                                                                    continue jalangiLabel0;
                                                                else
                                                                    return J$.Ra();
                                                            }
                                                        }
                                                }, 12, false, 145), J$.T(185, 0, 22, false)), x, 1));
                                            } catch (J$e) {
                                                J$.Ex(377, J$e);
                                            } finally {
                                                if (J$.Fr(385))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 217)
                            }, 11, false), test, 1));
                            J$.X1(297, J$.M(289, J$.R(281, 'test', test, 0), 'func', 0)());
                        } catch (J$e) {
                            J$.Ex(393, J$e);
                        } finally {
                            if (J$.Fr(401))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 305), 0)());
        } catch (J$e) {
            J$.Ex(409, J$e);
        } finally {
            if (J$.Sr(417)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

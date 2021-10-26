J$.iids = {"9":[4,25,4,32],"17":[4,37,4,60],"25":[4,25,4,61],"27":[4,25,4,36],"33":[4,25,4,62],"41":[3,24,5,18],"49":[3,24,5,18],"57":[3,24,5,18],"65":[8,25,8,32],"73":[8,37,8,61],"81":[8,25,8,62],"83":[8,25,8,36],"89":[8,25,8,63],"97":[7,24,9,18],"105":[7,24,9,18],"113":[7,24,9,18],"121":[12,25,12,32],"129":[12,37,12,60],"137":[12,25,12,61],"139":[12,25,12,36],"145":[12,25,12,62],"153":[11,24,13,18],"161":[11,24,13,18],"169":[11,24,13,18],"177":[14,24,14,30],"185":[2,31,15,10],"193":[2,31,15,10],"201":[2,31,15,10],"209":[17,17,17,26],"217":[17,27,17,28],"225":[17,17,17,31],"227":[17,17,17,29],"233":[17,17,17,31],"241":[16,9,20,10],"249":[16,9,20,10],"257":[21,9,21,12],"265":[21,13,21,28],"273":[21,29,21,35],"281":[21,13,21,36],"289":[21,9,21,37],"297":[21,9,21,37],"305":[1,2,22,10],"313":[1,2,22,10],"321":[1,2,22,10],"329":[16,9,20,10],"337":[1,2,22,10],"345":[1,2,22,10],"353":[1,1,22,13],"361":[1,1,22,13],"369":[1,1,22,13],"377":[3,24,5,18],"385":[3,24,5,18],"393":[7,24,9,18],"401":[7,24,9,18],"409":[11,24,13,18],"417":[11,24,13,18],"425":[16,9,20,10],"433":[16,9,20,10],"441":[1,2,22,10],"449":[1,2,22,10],"457":[1,1,22,13],"465":[1,1,22,13],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngargs.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngargs_jalangi_.js","code":"(function(){\n        var arrayOfFunction = {\n                \"fun1\":function() { \n                        console.log(\"Inside First function\"); \n                }, \n                \n                \"fun2\":function() { \n                        console.log(\"Inside Second function\"); \n                }, \n                \n                \"fun3\":function() { \n                        console.log(\"Inside Third function\"); \n                },\n                \"fun4\":\"fun3\"\n        }\n        function foo(){\n                arguments[0]()\n                //x()\n                \n        }\n        foo(arrayOfFunction[\"fun1\"])\n        })()"};
jalangiLabel5:
    while (true) {
        try {
            J$.Se(369, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngargs_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngargs.js');
            J$.X1(361, J$.F(353, J$.T(345, function () {
                jalangiLabel4:
                    while (true) {
                        try {
                            J$.Fe(305, arguments.callee, this, arguments);
                            function foo() {
                                jalangiLabel3:
                                    while (true) {
                                        try {
                                            J$.Fe(241, arguments.callee, this, arguments);
                                            arguments = J$.N(249, 'arguments', arguments, 4);
                                            J$.X1(233, J$.M(225, J$.R(209, 'arguments', arguments, 2), J$.T(217, 0, 22, false), 1)());
                                        } catch (J$e) {
                                            J$.Ex(425, J$e);
                                        } finally {
                                            if (J$.Fr(433))
                                                continue jalangiLabel3;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(313, 'arguments', arguments, 4);
                            J$.N(321, 'arrayOfFunction', arrayOfFunction, 0);
                            foo = J$.N(337, 'foo', J$.T(329, foo, 12, false, 241), 0);
                            var arrayOfFunction = J$.X1(201, J$.W(193, 'arrayOfFunction', J$.T(185, {
                                "fun1": J$.T(57, function () {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(41, arguments.callee, this, arguments);
                                                arguments = J$.N(49, 'arguments', arguments, 4);
                                                J$.X1(33, J$.M(25, J$.R(9, 'console', console, 2), 'log', 0)(J$.T(17, "Inside First function", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(377, J$e);
                                            } finally {
                                                if (J$.Fr(385))
                                                    continue jalangiLabel0;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 41),
                                "fun2": J$.T(113, function () {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(97, arguments.callee, this, arguments);
                                                arguments = J$.N(105, 'arguments', arguments, 4);
                                                J$.X1(89, J$.M(81, J$.R(65, 'console', console, 2), 'log', 0)(J$.T(73, "Inside Second function", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(393, J$e);
                                            } finally {
                                                if (J$.Fr(401))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 97),
                                "fun3": J$.T(169, function () {
                                    jalangiLabel2:
                                        while (true) {
                                            try {
                                                J$.Fe(153, arguments.callee, this, arguments);
                                                arguments = J$.N(161, 'arguments', arguments, 4);
                                                J$.X1(145, J$.M(137, J$.R(121, 'console', console, 2), 'log', 0)(J$.T(129, "Inside Third function", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(409, J$e);
                                            } finally {
                                                if (J$.Fr(417))
                                                    continue jalangiLabel2;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 153),
                                "fun4": J$.T(177, "fun3", 21, false)
                            }, 11, false), arrayOfFunction, 1));
                            J$.X1(297, J$.F(289, J$.R(257, 'foo', foo, 0), 0)(J$.G(281, J$.R(265, 'arrayOfFunction', arrayOfFunction, 0), J$.T(273, "fun1", 21, false), 4)));
                        } catch (J$e) {
                            J$.Ex(441, J$e);
                        } finally {
                            if (J$.Fr(449))
                                continue jalangiLabel4;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 305), 0)());
        } catch (J$e) {
            J$.Ex(457, J$e);
        } finally {
            if (J$.Sr(465)) {
                J$.L();
                continue jalangiLabel5;
            } else {
                J$.L();
                break jalangiLabel5;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

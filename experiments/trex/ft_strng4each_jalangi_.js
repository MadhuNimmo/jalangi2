J$.iids = {"9":[2,18,2,20],"10":[9,47,9,51],"17":[2,18,2,20],"25":[2,18,2,20],"33":[4,33,4,36],"41":[5,25,5,28],"49":[5,29,5,32],"57":[5,33,5,37],"65":[5,29,5,38],"73":[5,25,5,39],"81":[5,25,5,39],"89":[4,33,4,36],"97":[4,17,6,18],"105":[4,17,6,18],"113":[3,9,7,10],"121":[3,9,7,10],"129":[3,9,7,10],"137":[3,9,7,10],"145":[3,9,7,10],"153":[8,9,8,13],"161":[8,15,8,24],"169":[8,25,8,34],"177":[8,14,8,35],"185":[9,15,9,18],"193":[9,19,9,23],"201":[9,48,9,51],"209":[9,47,9,51],"217":[9,40,9,51],"225":[9,28,9,52],"233":[9,28,9,52],"241":[9,28,9,52],"249":[9,15,9,52],"257":[9,15,9,52],"265":[8,36,10,10],"273":[8,36,10,10],"281":[8,36,10,10],"289":[8,36,10,10],"297":[8,9,10,11],"305":[8,9,10,11],"313":[11,9,11,12],"321":[11,9,11,22],"323":[11,9,11,20],"329":[11,9,11,22],"337":[1,2,12,2],"345":[1,2,12,2],"353":[1,2,12,2],"361":[3,9,7,10],"369":[1,2,12,2],"377":[1,2,12,2],"385":[1,1,12,5],"393":[1,1,12,5],"401":[1,1,12,5],"409":[3,9,7,10],"417":[3,9,7,10],"425":[9,28,9,52],"433":[9,28,9,52],"441":[8,36,10,10],"449":[8,36,10,10],"457":[1,2,12,2],"465":[1,2,12,2],"473":[1,1,12,5],"481":[1,1,12,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng4each.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng4each_jalangi_.js","code":"(function(){\n        var obj= {}\n        function each(lst,fun){\n                for(var item in lst){\n                        fun(lst[item])\n                }\n        }\n        each([\"MyHobby\",\"MyPhone\"],function(name){\n              obj[name]  = function(){ return +\"x\"}\n        })\n        obj.MyPhone()\n})()"};
jalangiLabel4:
    while (true) {
        try {
            J$.Se(401, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng4each_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng4each.js');
            J$.X1(393, J$.F(385, J$.T(377, function () {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(337, arguments.callee, this, arguments);
                            function each(lst, fun) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(113, arguments.callee, this, arguments);
                                            arguments = J$.N(121, 'arguments', arguments, 4);
                                            lst = J$.N(129, 'lst', lst, 4);
                                            fun = J$.N(137, 'fun', fun, 4);
                                            J$.N(145, 'item', item, 0);
                                            for (J$._tm_p in J$.H(89, J$.R(33, 'lst', lst, 0))) {
                                                var item = J$.X1(105, J$.W(97, 'item', J$._tm_p, item, 1));
                                                {
                                                    {
                                                        J$.X1(81, J$.F(73, J$.R(41, 'fun', fun, 0), 0)(J$.G(65, J$.R(49, 'lst', lst, 0), J$.R(57, 'item', item, 0), 4)));
                                                    }
                                                }
                                            }
                                        } catch (J$e) {
                                            J$.Ex(409, J$e);
                                        } finally {
                                            if (J$.Fr(417))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(345, 'arguments', arguments, 4);
                            J$.N(353, 'obj', obj, 0);
                            each = J$.N(369, 'each', J$.T(361, each, 12, false, 113), 0);
                            var obj = J$.X1(25, J$.W(17, 'obj', J$.T(9, {}, 11, false), obj, 1));
                            J$.X1(305, J$.F(297, J$.R(153, 'each', each, 0), 0)(J$.T(177, [
                                J$.T(161, "MyHobby", 21, false),
                                J$.T(169, "MyPhone", 21, false)
                            ], 10, false), J$.T(289, function (name) {
                                jalangiLabel2:
                                    while (true) {
                                        try {
                                            J$.Fe(265, arguments.callee, this, arguments);
                                            arguments = J$.N(273, 'arguments', arguments, 4);
                                            name = J$.N(281, 'name', name, 4);
                                            J$.X1(257, J$.P(249, J$.R(185, 'obj', obj, 0), J$.R(193, 'name', name, 0), J$.T(241, function () {
                                                jalangiLabel1:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(225, arguments.callee, this, arguments);
                                                            arguments = J$.N(233, 'arguments', arguments, 4);
                                                            return J$.X1(217, J$.Rt(209, J$.U(10, '+', J$.T(201, "x", 21, false))));
                                                        } catch (J$e) {
                                                            J$.Ex(425, J$e);
                                                        } finally {
                                                            if (J$.Fr(433))
                                                                continue jalangiLabel1;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }, 12, false, 225), 2));
                                        } catch (J$e) {
                                            J$.Ex(441, J$e);
                                        } finally {
                                            if (J$.Fr(449))
                                                continue jalangiLabel2;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 265)));
                            J$.X1(329, J$.M(321, J$.R(313, 'obj', obj, 0), 'MyPhone', 0)());
                        } catch (J$e) {
                            J$.Ex(457, J$e);
                        } finally {
                            if (J$.Fr(465))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 337), 0)());
        } catch (J$e) {
            J$.Ex(473, J$e);
        } finally {
            if (J$.Sr(481)) {
                J$.L();
                continue jalangiLabel4;
            } else {
                J$.L();
                break jalangiLabel4;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

J$.iids = {"9":[2,18,2,20],"17":[2,18,2,20],"25":[2,18,2,20],"33":[3,9,3,12],"41":[3,13,3,21],"49":[4,35,4,44],"57":[4,35,4,44],"65":[4,35,4,44],"73":[5,32,5,39],"81":[5,32,5,39],"89":[5,25,5,39],"97":[3,24,6,18],"105":[3,24,6,18],"113":[3,24,6,18],"121":[3,24,6,18],"129":[3,9,6,18],"137":[3,9,6,18],"145":[7,9,7,12],"153":[7,13,7,22],"161":[8,32,8,37],"169":[8,32,8,37],"177":[8,25,8,37],"185":[7,25,9,18],"193":[7,25,9,18],"201":[7,25,9,18],"209":[7,9,9,18],"217":[7,9,9,18],"225":[10,24,10,27],"233":[11,25,11,28],"241":[11,29,11,32],"249":[11,25,11,35],"251":[11,25,11,33],"257":[11,25,11,35],"265":[10,24,10,27],"273":[10,9,12,10],"281":[10,9,12,10],"289":[1,2,13,2],"297":[1,2,13,2],"305":[1,2,13,2],"313":[1,2,13,2],"321":[1,2,13,2],"329":[1,1,13,5],"337":[1,1,13,5],"345":[1,1,13,5],"353":[3,24,6,18],"361":[3,24,6,18],"369":[7,25,9,18],"377":[7,25,9,18],"385":[1,2,13,2],"393":[1,2,13,2],"401":[1,1,13,5],"409":[1,1,13,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng3.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng3_jalangi_.js","code":"(function(){\n        var obj= {}\n        obj[\"MyName\"]= function(){\n                        var xyz = \"MyPhone\"\n                        return \"Nimmo\"\n                }\n        obj[\"MyPhone\"]= function(){\n                        return \"XXX\"\n                }\n        for(var key in obj){\n                        obj[key]()\n        }\n})()"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(345, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng3_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng3.js');
            J$.X1(337, J$.F(329, J$.T(321, function () {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(289, arguments.callee, this, arguments);
                            arguments = J$.N(297, 'arguments', arguments, 4);
                            J$.N(305, 'obj', obj, 0);
                            J$.N(313, 'key', key, 0);
                            var obj = J$.X1(25, J$.W(17, 'obj', J$.T(9, {}, 11, false), obj, 1));
                            J$.X1(137, J$.P(129, J$.R(33, 'obj', obj, 0), J$.T(41, "MyName", 21, false), J$.T(121, function () {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(97, arguments.callee, this, arguments);
                                            arguments = J$.N(105, 'arguments', arguments, 4);
                                            J$.N(113, 'xyz', xyz, 0);
                                            var xyz = J$.X1(65, J$.W(57, 'xyz', J$.T(49, "MyPhone", 21, false), xyz, 1));
                                            return J$.X1(89, J$.Rt(81, J$.T(73, "Nimmo", 21, false)));
                                        } catch (J$e) {
                                            J$.Ex(353, J$e);
                                        } finally {
                                            if (J$.Fr(361))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 97), 2));
                            J$.X1(217, J$.P(209, J$.R(145, 'obj', obj, 0), J$.T(153, "MyPhone", 21, false), J$.T(201, function () {
                                jalangiLabel1:
                                    while (true) {
                                        try {
                                            J$.Fe(185, arguments.callee, this, arguments);
                                            arguments = J$.N(193, 'arguments', arguments, 4);
                                            return J$.X1(177, J$.Rt(169, J$.T(161, "XXX", 21, false)));
                                        } catch (J$e) {
                                            J$.Ex(369, J$e);
                                        } finally {
                                            if (J$.Fr(377))
                                                continue jalangiLabel1;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 185), 2));
                            for (J$._tm_p in J$.H(265, J$.R(225, 'obj', obj, 0))) {
                                var key = J$.X1(281, J$.W(273, 'key', J$._tm_p, key, 1));
                                {
                                    {
                                        J$.X1(257, J$.M(249, J$.R(233, 'obj', obj, 0), J$.R(241, 'key', key, 0), 1)());
                                    }
                                }
                            }
                        } catch (J$e) {
                            J$.Ex(385, J$e);
                        } finally {
                            if (J$.Fr(393))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 289), 0)());
        } catch (J$e) {
            J$.Ex(401, J$e);
        } finally {
            if (J$.Sr(409)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

J$.iids = {"9":[4,32,4,42],"17":[4,32,4,42],"25":[4,25,4,42],"33":[3,24,5,18],"41":[3,24,5,18],"49":[3,24,5,18],"57":[7,32,7,37],"65":[7,32,7,37],"73":[7,25,7,37],"81":[6,25,8,18],"89":[6,25,8,18],"97":[6,25,8,18],"105":[2,18,9,10],"113":[2,18,9,10],"121":[2,18,9,10],"129":[13,26,13,34],"137":[13,45,13,56],"145":[13,18,13,57],"153":[13,18,13,57],"161":[13,18,13,57],"169":[14,24,14,26],"177":[15,17,15,24],"185":[15,29,15,32],"193":[15,17,15,33],"195":[15,17,15,28],"201":[15,17,15,33],"209":[14,24,14,26],"217":[14,9,16,10],"225":[14,9,16,10],"233":[1,2,17,2],"241":[1,2,17,2],"249":[1,2,17,2],"257":[1,2,17,2],"265":[1,2,17,2],"273":[1,2,17,2],"281":[1,1,17,5],"289":[1,1,17,5],"297":[1,1,17,5],"305":[3,24,5,18],"313":[3,24,5,18],"321":[6,25,8,18],"329":[6,25,8,18],"337":[1,2,17,2],"345":[1,2,17,2],"353":[1,1,17,5],"361":[1,1,17,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng2.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng2_jalangi_.js","code":"(function(){\n        var obj= {\n                MyName:function(){\n                        return \"John Doe\"\n                },\n                MyPhone:function(){\n                        return \"XXX\"\n                }\n        }\n        /*var x = \"MyName\"\n        var y=x\n        obj[y]()*/\n        var ob = {\"name\":\"MyName\",\"address\":\"MyAddress\"}\n        for(var key in ob){\n                console.log(key)//works\n        }\n})()"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(297, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng2_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng2.js');
            J$.X1(289, J$.F(281, J$.T(273, function () {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(233, arguments.callee, this, arguments);
                            arguments = J$.N(241, 'arguments', arguments, 4);
                            J$.N(249, 'obj', obj, 0);
                            J$.N(257, 'ob', ob, 0);
                            J$.N(265, 'key', key, 0);
                            var obj = J$.X1(121, J$.W(113, 'obj', J$.T(105, {
                                MyName: J$.T(49, function () {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(33, arguments.callee, this, arguments);
                                                arguments = J$.N(41, 'arguments', arguments, 4);
                                                return J$.X1(25, J$.Rt(17, J$.T(9, "John Doe", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(305, J$e);
                                            } finally {
                                                if (J$.Fr(313))
                                                    continue jalangiLabel0;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 33),
                                MyPhone: J$.T(97, function () {
                                    jalangiLabel1:
                                        while (true) {
                                            try {
                                                J$.Fe(81, arguments.callee, this, arguments);
                                                arguments = J$.N(89, 'arguments', arguments, 4);
                                                return J$.X1(73, J$.Rt(65, J$.T(57, "XXX", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(321, J$e);
                                            } finally {
                                                if (J$.Fr(329))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 81)
                            }, 11, false), obj, 1));
                            var ob = J$.X1(161, J$.W(153, 'ob', J$.T(145, {
                                "name": J$.T(129, "MyName", 21, false),
                                "address": J$.T(137, "MyAddress", 21, false)
                            }, 11, false), ob, 1));
                            for (J$._tm_p in J$.H(209, J$.R(169, 'ob', ob, 0))) {
                                var key = J$.X1(225, J$.W(217, 'key', J$._tm_p, key, 1));
                                {
                                    {
                                        J$.X1(201, J$.M(193, J$.R(177, 'console', console, 2), 'log', 0)(J$.R(185, 'key', key, 0)));
                                    }
                                }
                            }
                        } catch (J$e) {
                            J$.Ex(337, J$e);
                        } finally {
                            if (J$.Fr(345))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 233), 0)());
        } catch (J$e) {
            J$.Ex(353, J$e);
        } finally {
            if (J$.Sr(361)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

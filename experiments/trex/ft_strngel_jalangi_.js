J$.iids = {"9":[4,32,4,39],"17":[4,32,4,39],"25":[4,25,4,39],"33":[3,24,5,18],"41":[3,24,5,18],"49":[3,24,5,18],"57":[7,32,7,46],"65":[7,32,7,46],"73":[7,25,7,46],"81":[6,25,8,18],"89":[6,25,8,18],"97":[6,25,8,18],"105":[10,32,10,43],"113":[10,32,10,43],"121":[10,25,10,43],"129":[9,27,11,18],"137":[9,27,11,18],"145":[9,27,11,18],"153":[13,32,13,41],"161":[13,32,13,41],"169":[13,25,13,41],"177":[12,25,14,18],"185":[12,25,14,18],"193":[12,25,14,18],"201":[2,18,17,10],"209":[2,18,17,10],"217":[2,18,17,10],"225":[27,17,27,20],"233":[27,17,27,28],"241":[27,17,27,28],"249":[27,17,27,28],"257":[1,2,31,2],"265":[1,2,31,2],"273":[1,2,31,2],"281":[1,2,31,2],"289":[1,2,31,2],"297":[1,2,31,2],"305":[1,1,31,5],"313":[1,1,31,5],"321":[1,1,31,5],"329":[3,24,5,18],"337":[3,24,5,18],"345":[6,25,8,18],"353":[6,25,8,18],"361":[9,27,11,18],"369":[9,27,11,18],"377":[12,25,14,18],"385":[12,25,14,18],"393":[1,2,31,2],"401":[1,2,31,2],"409":[1,1,31,5],"417":[1,1,31,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngel.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngel_jalangi_.js","code":"(function(arr){\n        var obj= {\n                MyName:function(){\n                        return \"Nimmo\"\n                },\n                MyPhone:function(){\n                        return \"XXX-XXX-XXXX\"\n                },\n                MyAddress:function(){\n                        return \"Riverside\"\n                },\n                MyHobby:function(){\n                        return \"Nothing\"\n                }\n\n\n        }\n        //var arr = [\"MyHobby\"]\n        //arr[1] = \"MyPhone\"\n        //obj[arr[1]]() //Array element\n        /*var obj = {MyPhone:function(){\n                return \"XXX-XXX-XXXX\"\n        }}*/\n        //var ob = {\"phn\":\"MyPhone\",\"address\":\"MyAddress\"}\n        //var arr = [\"MyPhone\",\"MyAddress\"]\n        //var lst= arr[0]\n        var x = obj.MyPhone\n        //obj[arr[1]]() //It was string manipulation operation earlier but got updated to Array Access\n\n        //obj[ob[\"address\"]]() //object value*/\n})()"};
jalangiLabel5:
    while (true) {
        try {
            J$.Se(321, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngel_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngel.js');
            J$.X1(313, J$.F(305, J$.T(297, function (arr) {
                jalangiLabel4:
                    while (true) {
                        try {
                            J$.Fe(257, arguments.callee, this, arguments);
                            arguments = J$.N(265, 'arguments', arguments, 4);
                            arr = J$.N(273, 'arr', arr, 4);
                            J$.N(281, 'obj', obj, 0);
                            J$.N(289, 'x', x, 0);
                            var obj = J$.X1(217, J$.W(209, 'obj', J$.T(201, {
                                MyName: J$.T(49, function () {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(33, arguments.callee, this, arguments);
                                                arguments = J$.N(41, 'arguments', arguments, 4);
                                                return J$.X1(25, J$.Rt(17, J$.T(9, "Nimmo", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(329, J$e);
                                            } finally {
                                                if (J$.Fr(337))
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
                                                return J$.X1(73, J$.Rt(65, J$.T(57, "XXX-XXX-XXXX", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(345, J$e);
                                            } finally {
                                                if (J$.Fr(353))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 81),
                                MyAddress: J$.T(145, function () {
                                    jalangiLabel2:
                                        while (true) {
                                            try {
                                                J$.Fe(129, arguments.callee, this, arguments);
                                                arguments = J$.N(137, 'arguments', arguments, 4);
                                                return J$.X1(121, J$.Rt(113, J$.T(105, "Riverside", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(361, J$e);
                                            } finally {
                                                if (J$.Fr(369))
                                                    continue jalangiLabel2;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 129),
                                MyHobby: J$.T(193, function () {
                                    jalangiLabel3:
                                        while (true) {
                                            try {
                                                J$.Fe(177, arguments.callee, this, arguments);
                                                arguments = J$.N(185, 'arguments', arguments, 4);
                                                return J$.X1(169, J$.Rt(161, J$.T(153, "Nothing", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(377, J$e);
                                            } finally {
                                                if (J$.Fr(385))
                                                    continue jalangiLabel3;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 177)
                            }, 11, false), obj, 1));
                            var x = J$.X1(249, J$.W(241, 'x', J$.G(233, J$.R(225, 'obj', obj, 0), 'MyPhone', 0), x, 1));
                        } catch (J$e) {
                            J$.Ex(393, J$e);
                        } finally {
                            if (J$.Fr(401))
                                continue jalangiLabel4;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 257), 0)());
        } catch (J$e) {
            J$.Ex(409, J$e);
        } finally {
            if (J$.Sr(417)) {
                J$.L();
                continue jalangiLabel5;
            } else {
                J$.L();
                break jalangiLabel5;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

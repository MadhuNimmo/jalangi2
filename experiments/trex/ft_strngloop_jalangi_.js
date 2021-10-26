J$.iids = {"9":[5,32,5,39],"10":[14,13,14,25],"17":[5,32,5,39],"25":[5,25,5,39],"33":[4,24,6,18],"41":[4,24,6,18],"49":[4,24,6,18],"57":[8,32,8,46],"65":[8,32,8,46],"73":[8,25,8,46],"81":[7,25,9,18],"89":[7,25,9,18],"97":[7,25,9,18],"105":[11,32,11,43],"113":[11,32,11,43],"121":[11,25,11,43],"129":[10,27,12,18],"137":[10,27,12,18],"145":[10,27,12,18],"153":[3,18,13,10],"161":[3,18,13,10],"169":[3,18,13,10],"177":[14,9,14,12],"185":[14,13,14,17],"193":[14,18,14,25],"201":[15,24,15,33],"209":[15,24,15,33],"217":[15,17,15,33],"225":[14,29,16,10],"233":[14,29,16,10],"241":[14,29,16,10],"249":[14,9,16,10],"257":[14,9,16,10],"265":[17,9,17,12],"273":[17,13,17,14],"281":[17,9,17,17],"283":[17,9,17,15],"289":[17,9,17,17],"297":[2,9,18,10],"305":[2,9,18,10],"313":[2,9,18,10],"321":[2,9,18,10],"329":[19,20,19,28],"337":[19,29,19,38],"345":[19,19,19,39],"353":[19,19,19,39],"361":[19,19,19,39],"369":[37,25,37,28],"377":[38,17,38,20],"385":[38,21,38,24],"393":[38,25,38,29],"401":[38,21,38,30],"409":[38,17,38,31],"417":[38,17,38,31],"425":[37,25,37,28],"433":[37,9,39,10],"441":[37,9,39,10],"449":[1,2,41,2],"457":[1,2,41,2],"465":[2,9,18,10],"473":[1,2,41,2],"481":[1,2,41,2],"489":[1,2,41,2],"497":[1,2,41,2],"505":[1,1,41,5],"513":[1,1,41,5],"521":[1,1,41,5],"529":[4,24,6,18],"537":[4,24,6,18],"545":[7,25,9,18],"553":[7,25,9,18],"561":[10,27,12,18],"569":[10,27,12,18],"577":[14,29,16,10],"585":[14,29,16,10],"593":[2,9,18,10],"601":[2,9,18,10],"609":[1,2,41,2],"617":[1,2,41,2],"625":[1,1,41,5],"633":[1,1,41,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngloop.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngloop_jalangi_.js","code":"(function(){\n        function foo(x){\n        var obj= {\n                MyName:function(){\n                        return \"Nimmo\"\n                },\n                MyPhone:function(){\n                        return \"XXX-XXX-XXXX\"\n                },\n                MyAddress:function(){\n                        return \"Riverside\"\n                }\n        }\n        obj['My'+'Hobby'] = function(){\n                return \"Nothing\"\n        }\n        obj[x]()\n        }\n        var arr = [\"MyName\",\"MyHobby\"]\n        //var ob = {\"name\":\"MyName\",\"address\":\"MyAddress\"}\n        /*for(var item of arr){\n                obj[item]()//for of does not work, for in does??\n        }*/\n        /*for(var key in arr){\n                obj[arr[key]]()//works\n        }*/\n        /*for(var i=0;i<arr.length;i++){\n                obj[arr[i]]()\n        }*/\n        /*var arr2= [\"MyCountry\"]\n        for(var item of arr2){\n                obj[item]=function(){\n                        return \"India\"\n                }\n        }\n        obj[\"MyCountry\"]();*/\n        for(var item in arr){\n                foo(arr[item])//for of does not work, for in does??\n        }\n\n})()"};
jalangiLabel6:
    while (true) {
        try {
            J$.Se(521, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngloop_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngloop.js');
            J$.X1(513, J$.F(505, J$.T(497, function () {
                jalangiLabel5:
                    while (true) {
                        try {
                            J$.Fe(449, arguments.callee, this, arguments);
                            function foo(x) {
                                jalangiLabel4:
                                    while (true) {
                                        try {
                                            J$.Fe(297, arguments.callee, this, arguments);
                                            arguments = J$.N(305, 'arguments', arguments, 4);
                                            x = J$.N(313, 'x', x, 4);
                                            J$.N(321, 'obj', obj, 0);
                                            var obj = J$.X1(169, J$.W(161, 'obj', J$.T(153, {
                                                MyName: J$.T(49, function () {
                                                    jalangiLabel0:
                                                        while (true) {
                                                            try {
                                                                J$.Fe(33, arguments.callee, this, arguments);
                                                                arguments = J$.N(41, 'arguments', arguments, 4);
                                                                return J$.X1(25, J$.Rt(17, J$.T(9, "Nimmo", 21, false)));
                                                            } catch (J$e) {
                                                                J$.Ex(529, J$e);
                                                            } finally {
                                                                if (J$.Fr(537))
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
                                                                J$.Ex(545, J$e);
                                                            } finally {
                                                                if (J$.Fr(553))
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
                                                                J$.Ex(561, J$e);
                                                            } finally {
                                                                if (J$.Fr(569))
                                                                    continue jalangiLabel2;
                                                                else
                                                                    return J$.Ra();
                                                            }
                                                        }
                                                }, 12, false, 129)
                                            }, 11, false), obj, 1));
                                            J$.X1(257, J$.P(249, J$.R(177, 'obj', obj, 0), J$.B(10, '+', J$.T(185, 'My', 21, false), J$.T(193, 'Hobby', 21, false), 0), J$.T(241, function () {
                                                jalangiLabel3:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(225, arguments.callee, this, arguments);
                                                            arguments = J$.N(233, 'arguments', arguments, 4);
                                                            return J$.X1(217, J$.Rt(209, J$.T(201, "Nothing", 21, false)));
                                                        } catch (J$e) {
                                                            J$.Ex(577, J$e);
                                                        } finally {
                                                            if (J$.Fr(585))
                                                                continue jalangiLabel3;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }, 12, false, 225), 2));
                                            J$.X1(289, J$.M(281, J$.R(265, 'obj', obj, 0), J$.R(273, 'x', x, 0), 1)());
                                        } catch (J$e) {
                                            J$.Ex(593, J$e);
                                        } finally {
                                            if (J$.Fr(601))
                                                continue jalangiLabel4;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(457, 'arguments', arguments, 4);
                            foo = J$.N(473, 'foo', J$.T(465, foo, 12, false, 297), 0);
                            J$.N(481, 'arr', arr, 0);
                            J$.N(489, 'item', item, 0);
                            var arr = J$.X1(361, J$.W(353, 'arr', J$.T(345, [
                                J$.T(329, "MyName", 21, false),
                                J$.T(337, "MyHobby", 21, false)
                            ], 10, false), arr, 1));
                            for (J$._tm_p in J$.H(425, J$.R(369, 'arr', arr, 0))) {
                                var item = J$.X1(441, J$.W(433, 'item', J$._tm_p, item, 1));
                                {
                                    {
                                        J$.X1(417, J$.F(409, J$.R(377, 'foo', foo, 0), 0)(J$.G(401, J$.R(385, 'arr', arr, 0), J$.R(393, 'item', item, 0), 4)));
                                    }
                                }
                            }
                        } catch (J$e) {
                            J$.Ex(609, J$e);
                        } finally {
                            if (J$.Fr(617))
                                continue jalangiLabel5;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 449), 0)());
        } catch (J$e) {
            J$.Ex(625, J$e);
        } finally {
            if (J$.Sr(633)) {
                J$.L();
                continue jalangiLabel6;
            } else {
                J$.L();
                break jalangiLabel6;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

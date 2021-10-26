J$.iids = {"9":[4,32,4,39],"17":[4,32,4,39],"25":[4,25,4,39],"33":[3,24,5,18],"41":[3,24,5,18],"49":[3,24,5,18],"57":[7,32,7,46],"65":[7,32,7,46],"73":[7,25,7,46],"81":[6,25,8,18],"89":[6,25,8,18],"97":[6,25,8,18],"105":[10,32,10,43],"113":[10,32,10,43],"121":[10,25,10,43],"129":[9,27,11,18],"137":[9,27,11,18],"145":[9,27,11,18],"153":[13,32,13,41],"161":[13,32,13,41],"169":[13,25,13,41],"177":[12,25,14,18],"185":[12,25,14,18],"193":[12,25,14,18],"201":[2,18,17,10],"209":[2,18,17,10],"217":[2,18,17,10],"225":[29,18,29,29],"233":[29,30,29,39],"241":[29,40,29,48],"249":[29,17,29,49],"257":[29,17,29,49],"265":[29,17,29,49],"273":[30,16,30,19],"281":[30,20,30,23],"289":[30,24,30,25],"297":[30,20,30,26],"305":[30,16,30,27],"313":[30,16,30,27],"321":[30,16,30,27],"329":[31,9,31,10],"337":[31,9,31,12],"345":[31,9,31,13],"353":[32,16,32,19],"361":[32,20,32,23],"369":[32,24,32,25],"377":[32,20,32,26],"385":[32,16,32,27],"393":[32,16,32,27],"401":[32,16,32,27],"409":[33,9,33,10],"417":[33,9,33,12],"425":[33,9,33,13],"433":[34,16,34,19],"441":[34,20,34,23],"449":[34,24,34,25],"457":[34,20,34,26],"465":[34,16,34,27],"473":[34,16,34,27],"481":[34,16,34,27],"489":[35,9,35,10],"497":[35,9,35,12],"505":[35,9,35,13],"513":[36,9,36,12],"521":[36,13,36,24],"529":[36,9,36,27],"531":[36,9,36,25],"537":[36,9,36,27],"545":[1,2,67,2],"553":[1,2,67,2],"561":[1,2,67,2],"569":[1,2,67,2],"577":[1,2,67,2],"585":[1,2,67,2],"593":[1,2,67,2],"601":[1,2,67,2],"609":[1,1,67,5],"617":[1,1,67,5],"625":[1,1,67,5],"633":[3,24,5,18],"641":[3,24,5,18],"649":[6,25,8,18],"657":[6,25,8,18],"665":[9,27,11,18],"673":[9,27,11,18],"681":[12,25,14,18],"689":[12,25,14,18],"697":[1,2,67,2],"705":[1,2,67,2],"713":[1,1,67,5],"721":[1,1,67,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng_jalangi_.js","code":"(function(){\n        var obj= {\n                MyName:function(){\n                        return \"Nimmo\"\n                },\n                MyPhone:function(){\n                        return \"XXX-XXX-XXXX\"\n                },\n                MyAddress:function(){\n                        return \"Riverside\"\n                },\n                MyHobby:function(){\n                        return \"Nothing\"\n                }\n\n\n        }\n        /*var retAddress = function(x){\n                return \"MyAddress\"\n        }\n        var xyz= retAddress();\n        var arr = [\"MyHobby\",\"MyPhone\"]\n        var ob = {\"name\":\"MyName\",\"address\":\"MyAddress\"}\n        var x = obj[\"My\"+\"Name\"]; //String manipulation\n        var y = \"My\"+\"Phone\"; //String manipulation False Positive \n        var z=y\n        obj[z]();*/// this strategy works as long as we dont track reads/writes just manipulations\n        //Will not be an issue unless the path is missing for altogether different reasons\n        var arr=[\"MyAddress\",\"MyHobby\",\"MyName\"]\n        var x =obj[arr[0]];\n        x();\n        var y =obj[arr[1]];\n        y();\n        var z =obj[arr[2]];\n        z();\n        obj[\"MyAddress\"]()\n        /*var x =obj[\"My\"+\"Hobby\"];\n        x();\n        var y =obj[\"MyAddress\"];\n        y();\n        var z =obj[\"My\"+\"Name\"];\n        z();*/\n        /*obj[retAddress()](); //Interprocedural\n        obj[xyz]();\n        obj[arr[0]]() //Array element\n        obj[arr[1]]() //It was string manipulation operation earlier but got updated to Array Access\n        obj[ob.name]() //object value\n        obj[ob[\"address\"]]() //object value\n        for(var item of arr){\n                obj[item]()//for of does not work, for in does??\n        }\n        for(var key in ob){\n                obj[ob[key]]()//works\n        }\n        var arr2= [\"MyCountry\"]\n        for(var item of arr2){\n                obj[item]=function(){\n                        return \"India\"\n                }\n        }\n        obj[\"MyCountry\"]();*///does not work*/\n        // sfu\n        /*get-> var - read\n        get->get\n        var->get - write*/\n\n})()"};
jalangiLabel5:
    while (true) {
        try {
            J$.Se(625, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strng.js');
            J$.X1(617, J$.F(609, J$.T(601, function () {
                jalangiLabel4:
                    while (true) {
                        try {
                            J$.Fe(545, arguments.callee, this, arguments);
                            arguments = J$.N(553, 'arguments', arguments, 4);
                            J$.N(561, 'obj', obj, 0);
                            J$.N(569, 'arr', arr, 0);
                            J$.N(577, 'x', x, 0);
                            J$.N(585, 'y', y, 0);
                            J$.N(593, 'z', z, 0);
                            var obj = J$.X1(217, J$.W(209, 'obj', J$.T(201, {
                                MyName: J$.T(49, function () {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(33, arguments.callee, this, arguments);
                                                arguments = J$.N(41, 'arguments', arguments, 4);
                                                return J$.X1(25, J$.Rt(17, J$.T(9, "Nimmo", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(633, J$e);
                                            } finally {
                                                if (J$.Fr(641))
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
                                                J$.Ex(649, J$e);
                                            } finally {
                                                if (J$.Fr(657))
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
                                                J$.Ex(665, J$e);
                                            } finally {
                                                if (J$.Fr(673))
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
                                                J$.Ex(681, J$e);
                                            } finally {
                                                if (J$.Fr(689))
                                                    continue jalangiLabel3;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 177)
                            }, 11, false), obj, 1));
                            var arr = J$.X1(265, J$.W(257, 'arr', J$.T(249, [
                                J$.T(225, "MyAddress", 21, false),
                                J$.T(233, "MyHobby", 21, false),
                                J$.T(241, "MyName", 21, false)
                            ], 10, false), arr, 1));
                            var x = J$.X1(321, J$.W(313, 'x', J$.G(305, J$.R(273, 'obj', obj, 0), J$.G(297, J$.R(281, 'arr', arr, 0), J$.T(289, 0, 22, false), 4), 4), x, 1));
                            J$.X1(345, J$.F(337, J$.R(329, 'x', x, 0), 0)());
                            var y = J$.X1(401, J$.W(393, 'y', J$.G(385, J$.R(353, 'obj', obj, 0), J$.G(377, J$.R(361, 'arr', arr, 0), J$.T(369, 1, 22, false), 4), 4), y, 1));
                            J$.X1(425, J$.F(417, J$.R(409, 'y', y, 0), 0)());
                            var z = J$.X1(481, J$.W(473, 'z', J$.G(465, J$.R(433, 'obj', obj, 0), J$.G(457, J$.R(441, 'arr', arr, 0), J$.T(449, 2, 22, false), 4), 4), z, 1));
                            J$.X1(505, J$.F(497, J$.R(489, 'z', z, 0), 0)());
                            J$.X1(537, J$.M(529, J$.R(513, 'obj', obj, 0), J$.T(521, "MyAddress", 21, false), 1)());
                        } catch (J$e) {
                            J$.Ex(697, J$e);
                        } finally {
                            if (J$.Fr(705))
                                continue jalangiLabel4;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 545), 0)());
        } catch (J$e) {
            J$.Ex(713, J$e);
        } finally {
            if (J$.Sr(721)) {
                J$.L();
                continue jalangiLabel5;
            } else {
                J$.L();
                break jalangiLabel5;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

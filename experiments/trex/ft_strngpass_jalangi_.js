J$.iids = {"8":[17,21,17,45],"9":[4,32,4,39],"17":[4,32,4,39],"25":[4,25,4,39],"33":[3,24,5,18],"41":[3,24,5,18],"49":[3,24,5,18],"57":[7,32,7,46],"65":[7,32,7,46],"73":[7,25,7,46],"81":[6,25,8,18],"89":[6,25,8,18],"97":[6,25,8,18],"105":[2,18,9,10],"113":[2,18,9,10],"121":[2,18,9,10],"129":[12,24,12,25],"137":[12,24,12,27],"145":[12,24,12,27],"153":[12,17,12,28],"161":[10,9,13,10],"169":[10,9,13,10],"177":[10,9,13,10],"185":[10,9,13,10],"193":[10,9,13,10],"201":[15,20,15,28],"209":[15,19,15,29],"217":[15,19,15,29],"225":[15,19,15,29],"233":[16,25,16,28],"241":[17,21,17,24],"249":[17,40,17,44],"257":[17,21,17,45],"259":[17,21,17,39],"265":[18,25,18,28],"273":[18,34,18,38],"281":[18,39,18,42],"289":[18,43,18,47],"297":[18,39,18,48],"305":[18,49,18,53],"313":[18,54,18,57],"321":[18,25,18,58],"323":[18,25,18,33],"329":[18,25,18,58],"337":[16,25,16,28],"345":[16,9,21,10],"353":[16,9,21,10],"361":[1,2,23,2],"369":[1,2,23,2],"377":[1,2,23,2],"385":[10,9,13,10],"393":[1,2,23,2],"401":[1,2,23,2],"409":[1,2,23,2],"417":[1,2,23,2],"425":[1,1,23,5],"433":[1,1,23,5],"441":[1,1,23,5],"449":[3,24,5,18],"457":[3,24,5,18],"465":[6,25,8,18],"473":[6,25,8,18],"481":[10,9,13,10],"489":[10,9,13,10],"497":[17,17,19,18],"505":[1,2,23,2],"513":[1,2,23,2],"521":[1,1,23,5],"529":[1,1,23,5],"nBranches":2,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngpass.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngpass_jalangi_.js","code":"(function(){\n        var obj= {\n                MyName:function(){\n                        return \"Nimmo\"\n                },\n                MyPhone:function(){\n                        return \"XXX-XXX-XXXX\"\n                }\n        }\n        function foo(x,y,z){\n                //var y = \"MyName\"\n                return x();\n        }\n        \n        var arr = [\"MyName\"]\n        for(var item in obj){\n                if (obj.hasOwnProperty(item)) {\n                        foo.call(this,obj[item],item,obj)\n                }\n                //foo(obj[\"MyName\"])\n        }\n        \n})()"};
jalangiLabel4:
    while (true) {
        try {
            J$.Se(441, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngpass_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngpass.js');
            J$.X1(433, J$.F(425, J$.T(417, function () {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(361, arguments.callee, this, arguments);
                            function foo(x, y, z) {
                                jalangiLabel2:
                                    while (true) {
                                        try {
                                            J$.Fe(161, arguments.callee, this, arguments);
                                            arguments = J$.N(169, 'arguments', arguments, 4);
                                            x = J$.N(177, 'x', x, 4);
                                            y = J$.N(185, 'y', y, 4);
                                            z = J$.N(193, 'z', z, 4);
                                            return J$.X1(153, J$.Rt(145, J$.F(137, J$.R(129, 'x', x, 0), 0)()));
                                        } catch (J$e) {
                                            J$.Ex(481, J$e);
                                        } finally {
                                            if (J$.Fr(489))
                                                continue jalangiLabel2;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(369, 'arguments', arguments, 4);
                            J$.N(377, 'obj', obj, 0);
                            foo = J$.N(393, 'foo', J$.T(385, foo, 12, false, 161), 0);
                            J$.N(401, 'arr', arr, 0);
                            J$.N(409, 'item', item, 0);
                            var obj = J$.X1(121, J$.W(113, 'obj', J$.T(105, {
                                MyName: J$.T(49, function () {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(33, arguments.callee, this, arguments);
                                                arguments = J$.N(41, 'arguments', arguments, 4);
                                                return J$.X1(25, J$.Rt(17, J$.T(9, "Nimmo", 21, false)));
                                            } catch (J$e) {
                                                J$.Ex(449, J$e);
                                            } finally {
                                                if (J$.Fr(457))
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
                                                J$.Ex(465, J$e);
                                            } finally {
                                                if (J$.Fr(473))
                                                    continue jalangiLabel1;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 81)
                            }, 11, false), obj, 1));
                            var arr = J$.X1(225, J$.W(217, 'arr', J$.T(209, [J$.T(201, "MyName", 21, false)], 10, false), arr, 1));
                            for (J$._tm_p in J$.H(337, J$.R(233, 'obj', obj, 0))) {
                                var item = J$.X1(353, J$.W(345, 'item', J$._tm_p, item, 1));
                                {
                                    {
                                        if (J$.X1(497, J$.C(8, J$.M(257, J$.R(241, 'obj', obj, 0), 'hasOwnProperty', 0)(J$.R(249, 'item', item, 0))))) {
                                            J$.X1(329, J$.M(321, J$.R(265, 'foo', foo, 0), 'call', 0)(J$.R(273, 'this', this, 0), J$.G(297, J$.R(281, 'obj', obj, 0), J$.R(289, 'item', item, 0), 4), J$.R(305, 'item', item, 0), J$.R(313, 'obj', obj, 0)));
                                        }
                                    }
                                }
                            }
                        } catch (J$e) {
                            J$.Ex(505, J$e);
                        } finally {
                            if (J$.Fr(513))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 361), 0)());
        } catch (J$e) {
            J$.Ex(521, J$e);
        } finally {
            if (J$.Sr(529)) {
                J$.L();
                continue jalangiLabel4;
            } else {
                J$.L();
                break jalangiLabel4;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

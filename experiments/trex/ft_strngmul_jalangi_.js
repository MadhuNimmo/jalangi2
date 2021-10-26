J$.iids = {"9":[2,18,3,10],"10":[7,21,7,37],"17":[2,18,3,10],"25":[2,18,3,10],"33":[4,20,4,29],"41":[4,19,4,30],"49":[4,19,4,30],"57":[4,19,4,30],"65":[5,9,5,12],"73":[5,13,5,14],"81":[5,18,5,27],"89":[5,9,5,27],"97":[5,9,5,27],"105":[6,25,6,28],"113":[7,17,7,20],"121":[7,21,7,24],"129":[7,25,7,29],"137":[7,21,7,30],"145":[7,31,7,37],"153":[7,59,7,63],"161":[7,59,7,63],"169":[7,52,7,63],"177":[7,40,7,64],"185":[7,40,7,64],"193":[7,40,7,64],"201":[7,17,7,64],"209":[7,17,7,64],"217":[6,25,6,28],"225":[6,9,8,10],"233":[6,9,8,10],"241":[10,9,10,12],"249":[10,13,10,26],"257":[10,9,10,29],"259":[10,9,10,27],"265":[10,9,10,29],"273":[1,2,11,2],"281":[1,2,11,2],"289":[1,2,11,2],"297":[1,2,11,2],"305":[1,2,11,2],"313":[1,2,11,2],"321":[11,4,11,17],"329":[1,1,11,18],"337":[1,1,11,18],"345":[1,1,18,37],"353":[7,40,7,64],"361":[7,40,7,64],"369":[1,2,11,2],"377":[1,2,11,2],"385":[1,1,18,37],"393":[1,1,18,37],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngmul.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngmul_jalangi_.js","code":"(function(){\n        var obj= {\n        }\n        var arr = [\"MyHobby\"]\n        arr[1] = \"MyPhone\"\n        for(var item in arr){\n                obj[arr[item]+\"With\"]= function(){ return item}\n        }\n\n        obj[\"MyPhoneWith\"]()\n})(\"MyPhoneWith\")\n\n/*\n\"Dynamic Property Access due to String Manipulation\"\nuse set(propnames)-> generate the string trace\nget(prop,loc)\nAdd filtering get()  until the \npropName : filtering get and @put */"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(345, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngmul_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngmul.js');
            J$.X1(337, J$.F(329, J$.T(313, function () {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(273, arguments.callee, this, arguments);
                            arguments = J$.N(281, 'arguments', arguments, 4);
                            J$.N(289, 'obj', obj, 0);
                            J$.N(297, 'arr', arr, 0);
                            J$.N(305, 'item', item, 0);
                            var obj = J$.X1(25, J$.W(17, 'obj', J$.T(9, {}, 11, false), obj, 1));
                            var arr = J$.X1(57, J$.W(49, 'arr', J$.T(41, [J$.T(33, "MyHobby", 21, false)], 10, false), arr, 1));
                            J$.X1(97, J$.P(89, J$.R(65, 'arr', arr, 0), J$.T(73, 1, 22, false), J$.T(81, "MyPhone", 21, false), 2));
                            for (J$._tm_p in J$.H(217, J$.R(105, 'arr', arr, 0))) {
                                var item = J$.X1(233, J$.W(225, 'item', J$._tm_p, item, 1));
                                {
                                    {
                                        J$.X1(209, J$.P(201, J$.R(113, 'obj', obj, 0), J$.B(10, '+', J$.G(137, J$.R(121, 'arr', arr, 0), J$.R(129, 'item', item, 0), 4), J$.T(145, "With", 21, false), 0), J$.T(193, function () {
                                            jalangiLabel0:
                                                while (true) {
                                                    try {
                                                        J$.Fe(177, arguments.callee, this, arguments);
                                                        arguments = J$.N(185, 'arguments', arguments, 4);
                                                        return J$.X1(169, J$.Rt(161, J$.R(153, 'item', item, 0)));
                                                    } catch (J$e) {
                                                        J$.Ex(353, J$e);
                                                    } finally {
                                                        if (J$.Fr(361))
                                                            continue jalangiLabel0;
                                                        else
                                                            return J$.Ra();
                                                    }
                                                }
                                        }, 12, false, 177), 2));
                                    }
                                }
                            }
                            J$.X1(265, J$.M(257, J$.R(241, 'obj', obj, 0), J$.T(249, "MyPhoneWith", 21, false), 1)());
                        } catch (J$e) {
                            J$.Ex(369, J$e);
                        } finally {
                            if (J$.Fr(377))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 273), 0)(J$.T(321, "MyPhoneWith", 21, false)));
        } catch (J$e) {
            J$.Ex(385, J$e);
        } finally {
            if (J$.Sr(393)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

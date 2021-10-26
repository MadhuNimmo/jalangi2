J$.iids = {"9":[3,20,3,22],"17":[2,23,4,10],"25":[2,23,4,10],"33":[2,23,4,10],"41":[5,27,5,33],"49":[5,59,5,66],"57":[5,68,5,79],"65":[5,27,5,80],"67":[5,27,5,58],"73":[5,27,5,80],"81":[5,27,5,80],"89":[6,9,6,16],"97":[6,21,6,32],"105":[6,21,6,45],"113":[6,9,6,46],"115":[6,9,6,20],"121":[6,9,6,47],"129":[7,9,7,16],"137":[7,21,7,32],"145":[7,21,7,38],"153":[7,9,7,39],"155":[7,9,7,20],"161":[7,9,7,40],"169":[1,2,8,2],"177":[1,2,8,2],"185":[1,2,8,2],"193":[1,2,8,2],"201":[1,2,8,2],"209":[1,1,8,5],"217":[1,1,8,5],"225":[1,1,9,1],"233":[1,2,8,2],"241":[1,2,8,2],"249":[1,1,9,1],"257":[1,1,9,1],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_natmiss4.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_natmiss4_jalangi_.js","code":"(function(){\n        var object1 = {\n        property1: 42\n        };\n        var descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');\n        console.log(descriptor1.configurable); // expected output: true\n        console.log(descriptor1.value);\n})()\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(225, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_natmiss4_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_natmiss4.js');
            J$.X1(217, J$.F(209, J$.T(201, function () {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(169, arguments.callee, this, arguments);
                            arguments = J$.N(177, 'arguments', arguments, 4);
                            J$.N(185, 'object1', object1, 0);
                            J$.N(193, 'descriptor1', descriptor1, 0);
                            var object1 = J$.X1(33, J$.W(25, 'object1', J$.T(17, {
                                property1: J$.T(9, 42, 22, false)
                            }, 11, false), object1, 1));
                            var descriptor1 = J$.X1(81, J$.W(73, 'descriptor1', J$.M(65, J$.R(41, 'Object', Object, 2), 'getOwnPropertyDescriptor', 0)(J$.R(49, 'object1', object1, 0), J$.T(57, 'property1', 21, false)), descriptor1, 1));
                            J$.X1(121, J$.M(113, J$.R(89, 'console', console, 2), 'log', 0)(J$.G(105, J$.R(97, 'descriptor1', descriptor1, 0), 'configurable', 0)));
                            J$.X1(161, J$.M(153, J$.R(129, 'console', console, 2), 'log', 0)(J$.G(145, J$.R(137, 'descriptor1', descriptor1, 0), 'value', 0)));
                        } catch (J$e) {
                            J$.Ex(233, J$e);
                        } finally {
                            if (J$.Fr(241))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 169), 0)());
        } catch (J$e) {
            J$.Ex(249, J$e);
        } finally {
            if (J$.Sr(257)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

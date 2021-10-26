J$.iids = {"9":[2,9,2,13],"10":[7,32,7,52],"17":[2,26,2,31],"18":[7,32,7,68],"25":[2,9,2,31],"33":[2,9,2,32],"41":[3,9,3,13],"49":[3,25,3,29],"57":[3,9,3,29],"65":[3,9,3,30],"73":[1,13,4,8],"81":[1,13,4,8],"89":[1,13,4,8],"97":[1,13,4,8],"105":[1,13,4,8],"113":[1,13,4,8],"121":[6,17,6,23],"129":[6,17,6,33],"137":[6,34,6,35],"145":[7,32,7,36],"153":[7,32,7,46],"161":[7,49,7,52],"169":[7,55,7,59],"177":[7,55,7,68],"185":[7,32,7,68],"193":[7,25,7,69],"201":[6,39,8,18],"209":[6,39,8,18],"217":[6,39,8,18],"225":[6,17,8,18],"233":[6,17,8,19],"241":[5,7,9,10],"249":[5,7,9,10],"257":[5,7,9,10],"265":[10,7,10,10],"273":[10,11,10,17],"281":[10,7,10,18],"289":[10,7,10,18],"297":[11,26,11,32],"305":[11,33,11,39],"313":[11,41,11,46],"321":[11,48,11,50],"329":[11,52,11,58],"337":[11,22,11,59],"345":[11,22,11,59],"353":[11,22,11,59],"361":[12,7,12,15],"369":[12,7,12,22],"371":[12,7,12,20],"377":[12,7,12,22],"385":[1,2,14,2],"393":[1,2,14,2],"401":[1,13,4,8],"409":[1,2,14,2],"417":[5,7,9,10],"425":[1,2,14,2],"433":[1,2,14,2],"441":[1,2,14,2],"449":[1,1,14,5],"457":[1,1,14,5],"465":[1,1,14,5],"473":[1,13,4,8],"481":[1,13,4,8],"489":[6,39,8,18],"497":[6,39,8,18],"505":[5,7,9,10],"513":[5,7,9,10],"521":[1,2,14,2],"529":[1,2,14,2],"537":[1,1,14,5],"545":[1,1,14,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngproto.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngproto_jalangi_.js","code":"(function(){function Person(first, last, age, eyecolor) {\n        this.firstName = first;\n        this.lastName = last;\n      }\n      function foo(x){\n                Person.prototype[x] = function() {\n                        return this.firstName + \" \" + this.lastName;\n                };\n        }\n      foo(\"name\")\n      var myFather = new Person(\"John\", \"Doe\", 50, \"blue\");\n      myFather.name()\n\n})()"};
jalangiLabel4:
    while (true) {
        try {
            J$.Se(465, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngproto_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_strngproto.js');
            J$.X1(457, J$.F(449, J$.T(441, function () {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(385, arguments.callee, this, arguments);
                            function Person(first, last, age, eyecolor) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(73, arguments.callee, this, arguments);
                                            arguments = J$.N(81, 'arguments', arguments, 4);
                                            first = J$.N(89, 'first', first, 4);
                                            last = J$.N(97, 'last', last, 4);
                                            age = J$.N(105, 'age', age, 4);
                                            eyecolor = J$.N(113, 'eyecolor', eyecolor, 4);
                                            J$.X1(33, J$.P(25, J$.R(9, 'this', this, 0), 'firstName', J$.R(17, 'first', first, 0), 0));
                                            J$.X1(65, J$.P(57, J$.R(41, 'this', this, 0), 'lastName', J$.R(49, 'last', last, 0), 0));
                                        } catch (J$e) {
                                            J$.Ex(473, J$e);
                                        } finally {
                                            if (J$.Fr(481))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            function foo(x) {
                                jalangiLabel2:
                                    while (true) {
                                        try {
                                            J$.Fe(241, arguments.callee, this, arguments);
                                            arguments = J$.N(249, 'arguments', arguments, 4);
                                            x = J$.N(257, 'x', x, 4);
                                            J$.X1(233, J$.P(225, J$.G(129, J$.R(121, 'Person', Person, 0), 'prototype', 0), J$.R(137, 'x', x, 0), J$.T(217, function () {
                                                jalangiLabel1:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(201, arguments.callee, this, arguments);
                                                            arguments = J$.N(209, 'arguments', arguments, 4);
                                                            return J$.X1(193, J$.Rt(185, J$.B(18, '+', J$.B(10, '+', J$.G(153, J$.R(145, 'this', this, 0), 'firstName', 0), J$.T(161, " ", 21, false), 0), J$.G(177, J$.R(169, 'this', this, 0), 'lastName', 0), 0)));
                                                        } catch (J$e) {
                                                            J$.Ex(489, J$e);
                                                        } finally {
                                                            if (J$.Fr(497))
                                                                continue jalangiLabel1;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }, 12, false, 201), 2));
                                        } catch (J$e) {
                                            J$.Ex(505, J$e);
                                        } finally {
                                            if (J$.Fr(513))
                                                continue jalangiLabel2;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(393, 'arguments', arguments, 4);
                            Person = J$.N(409, 'Person', J$.T(401, Person, 12, false, 73), 0);
                            foo = J$.N(425, 'foo', J$.T(417, foo, 12, false, 241), 0);
                            J$.N(433, 'myFather', myFather, 0);
                            J$.X1(289, J$.F(281, J$.R(265, 'foo', foo, 0), 0)(J$.T(273, "name", 21, false)));
                            var myFather = J$.X1(353, J$.W(345, 'myFather', J$.F(337, J$.R(297, 'Person', Person, 0), 1)(J$.T(305, "John", 21, false), J$.T(313, "Doe", 21, false), J$.T(321, 50, 22, false), J$.T(329, "blue", 21, false)), myFather, 1));
                            J$.X1(377, J$.M(369, J$.R(361, 'myFather', myFather, 0), 'name', 0)());
                        } catch (J$e) {
                            J$.Ex(521, J$e);
                        } finally {
                            if (J$.Fr(529))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 385), 0)());
        } catch (J$e) {
            J$.Ex(537, J$e);
        } finally {
            if (J$.Sr(545)) {
                J$.L();
                continue jalangiLabel4;
            } else {
                J$.L();
                break jalangiLabel4;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

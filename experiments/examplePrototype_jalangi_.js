J$.iids = {"9":[2,3,2,7],"10":[7,10,7,30],"17":[2,20,2,25],"18":[7,10,7,46],"25":[2,3,2,25],"33":[2,3,2,26],"41":[3,3,3,7],"49":[3,19,3,23],"57":[3,3,3,23],"65":[3,3,3,24],"73":[1,1,4,2],"81":[1,1,4,2],"89":[1,1,4,2],"97":[1,1,4,2],"105":[6,1,6,7],"113":[7,10,7,14],"121":[7,10,7,24],"129":[7,27,7,30],"137":[7,33,7,37],"145":[7,33,7,46],"153":[7,10,7,46],"161":[7,3,7,47],"169":[6,15,8,2],"177":[6,15,8,2],"185":[6,15,8,2],"193":[6,1,8,2],"201":[6,1,8,3],"209":[10,16,10,22],"217":[10,23,10,29],"225":[10,31,10,36],"233":[10,12,10,37],"241":[10,12,10,37],"249":[10,12,10,37],"257":[11,1,11,5],"265":[11,1,11,12],"267":[11,1,11,10],"273":[11,1,11,13],"281":[1,1,12,1],"289":[1,1,4,2],"297":[1,1,12,1],"305":[1,1,12,1],"313":[1,1,4,2],"321":[1,1,4,2],"329":[6,15,8,2],"337":[6,15,8,2],"345":[1,1,12,1],"353":[1,1,12,1],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/examplePrototype.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/examplePrototype_jalangi_.js","code":"function Person(first, last) {\n  this.firstName = first;\n  this.lastName = last;\n}\n\nPerson.name = function () {\n  return this.firstName + \" \" + this.lastName;\n};\n\nvar john = new Person(\"John\", \"Doe\");\njohn.name();\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(281, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/examplePrototype_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/examplePrototype.js');
            function Person(first, last) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(73, arguments.callee, this, arguments);
                            arguments = J$.N(81, 'arguments', arguments, 4);
                            first = J$.N(89, 'first', first, 4);
                            last = J$.N(97, 'last', last, 4);
                            J$.X1(33, J$.P(25, J$.R(9, 'this', this, 0), 'firstName', J$.R(17, 'first', first, 0), 0));
                            J$.X1(65, J$.P(57, J$.R(41, 'this', this, 0), 'lastName', J$.R(49, 'last', last, 0), 0));
                        } catch (J$e) {
                            J$.Ex(313, J$e);
                        } finally {
                            if (J$.Fr(321))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            Person = J$.N(297, 'Person', J$.T(289, Person, 12, false, 73), 0);
            J$.N(305, 'john', john, 0);
            J$.X1(201, J$.P(193, J$.R(105, 'Person', Person, 1), 'name', J$.T(185, function () {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(169, arguments.callee, this, arguments);
                            arguments = J$.N(177, 'arguments', arguments, 4);
                            return J$.X1(161, J$.Rt(153, J$.B(18, '+', J$.B(10, '+', J$.G(121, J$.R(113, 'this', this, 0), 'firstName', 0), J$.T(129, " ", 21, false), 0), J$.G(145, J$.R(137, 'this', this, 0), 'lastName', 0), 0)));
                        } catch (J$e) {
                            J$.Ex(329, J$e);
                        } finally {
                            if (J$.Fr(337))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 169), 0));
            var john = J$.X1(249, J$.W(241, 'john', J$.F(233, J$.R(209, 'Person', Person, 1), 1)(J$.T(217, "John", 21, false), J$.T(225, "Doe", 21, false)), john, 3));
            J$.X1(273, J$.M(265, J$.R(257, 'john', john, 1), 'name', 0)());
        } catch (J$e) {
            J$.Ex(345, J$e);
        } finally {
            if (J$.Sr(353)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

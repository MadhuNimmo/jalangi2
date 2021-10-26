J$.iids = {"8":[8,9,8,20],"9":[2,9,2,16],"10":[8,9,8,20],"17":[2,9,2,16],"25":[1,1,3,2],"33":[1,1,3,2],"41":[5,9,5,16],"49":[5,9,5,16],"57":[4,1,6,2],"65":[4,1,6,2],"73":[8,9,8,13],"81":[8,15,8,20],"89":[8,21,8,24],"97":[8,21,8,26],"105":[8,27,8,30],"113":[8,36,8,40],"121":[8,27,8,41],"123":[8,27,8,35],"129":[8,9,8,42],"137":[7,1,9,2],"145":[7,1,9,2],"153":[7,1,9,2],"161":[11,1,11,5],"169":[11,6,11,11],"177":[11,1,11,12],"185":[11,1,11,12],"193":[1,1,11,12],"201":[1,1,3,2],"209":[1,1,11,12],"217":[4,1,6,2],"225":[1,1,11,12],"233":[7,1,9,2],"241":[1,1,11,12],"249":[1,1,3,2],"257":[1,1,3,2],"265":[4,1,6,2],"273":[4,1,6,2],"281":[8,9,8,41],"289":[7,1,9,2],"297":[7,1,9,2],"305":[1,1,11,12],"313":[1,1,11,12],"nBranches":2,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/exampleNestCall.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/exampleNestCall_jalangi_.js","code":"function foo(){\n        return;\n}\nfunction bar(){\n        return;\n}\nfunction main(temp){\n        temp==\"foo\"?foo():bar.call(this);\n}\n\nmain(\"bar\")"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(193, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/exampleNestCall_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/exampleNestCall.js');
            function foo() {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(25, arguments.callee, this, arguments);
                            arguments = J$.N(33, 'arguments', arguments, 4);
                            return J$.X1(17, J$.Rt(9, undefined));
                        } catch (J$e) {
                            J$.Ex(249, J$e);
                        } finally {
                            if (J$.Fr(257))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function bar() {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(57, arguments.callee, this, arguments);
                            arguments = J$.N(65, 'arguments', arguments, 4);
                            return J$.X1(49, J$.Rt(41, undefined));
                        } catch (J$e) {
                            J$.Ex(265, J$e);
                        } finally {
                            if (J$.Fr(273))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function main(temp) {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(137, arguments.callee, this, arguments);
                            arguments = J$.N(145, 'arguments', arguments, 4);
                            temp = J$.N(153, 'temp', temp, 4);
                            J$.X1(129, J$.X1(281, J$.C(8, J$.B(10, '==', J$.R(73, 'temp', temp, 0), J$.T(81, "foo", 21, false), 0))) ? J$.F(97, J$.R(89, 'foo', foo, 1), 0)() : J$.M(121, J$.R(105, 'bar', bar, 1), 'call', 0)(J$.R(113, 'this', this, 0)));
                        } catch (J$e) {
                            J$.Ex(289, J$e);
                        } finally {
                            if (J$.Fr(297))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }
            foo = J$.N(209, 'foo', J$.T(201, foo, 12, false, 25), 0);
            bar = J$.N(225, 'bar', J$.T(217, bar, 12, false, 57), 0);
            main = J$.N(241, 'main', J$.T(233, main, 12, false, 137), 0);
            J$.X1(185, J$.F(177, J$.R(161, 'main', main, 1), 0)(J$.T(169, "bar", 21, false)));
        } catch (J$e) {
            J$.Ex(305, J$e);
        } finally {
            if (J$.Sr(313)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

J$.iids = {"9":[2,16,2,21],"17":[2,16,2,21],"25":[2,9,2,22],"33":[1,1,3,2],"41":[1,1,3,2],"49":[1,1,3,2],"57":[4,1,4,4],"65":[4,10,4,14],"73":[4,15,4,27],"81":[4,1,4,28],"83":[4,1,4,9],"89":[4,1,4,29],"97":[6,9,6,16],"105":[6,21,6,33],"113":[6,9,6,34],"115":[6,9,6,20],"121":[6,9,6,35],"129":[5,1,7,2],"137":[5,1,7,2],"145":[8,1,8,4],"153":[8,10,8,14],"161":[8,15,8,28],"169":[8,1,8,29],"171":[8,1,8,9],"177":[8,1,8,30],"185":[1,1,8,30],"193":[1,1,3,2],"201":[1,1,8,30],"209":[5,1,7,2],"217":[1,1,8,30],"225":[1,1,3,2],"233":[1,1,3,2],"241":[5,1,7,2],"249":[5,1,7,2],"257":[1,1,8,30],"265":[1,1,8,30],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/example10.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/example10_jalangi_.js","code":"function foo(quote){ \n        return quote;\n}\nfoo.call(this,\"foo called\");\nfunction bar(){ \n        console.log(\"bar called\");\n}\nbar.call(this,\"foo2 called\");"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(185, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/example10_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/example10.js');
            function foo(quote) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(33, arguments.callee, this, arguments);
                            arguments = J$.N(41, 'arguments', arguments, 4);
                            quote = J$.N(49, 'quote', quote, 4);
                            return J$.X1(25, J$.Rt(17, J$.R(9, 'quote', quote, 0)));
                        } catch (J$e) {
                            J$.Ex(225, J$e);
                        } finally {
                            if (J$.Fr(233))
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
                            J$.Fe(129, arguments.callee, this, arguments);
                            arguments = J$.N(137, 'arguments', arguments, 4);
                            J$.X1(121, J$.M(113, J$.R(97, 'console', console, 2), 'log', 0)(J$.T(105, "bar called", 21, false)));
                        } catch (J$e) {
                            J$.Ex(241, J$e);
                        } finally {
                            if (J$.Fr(249))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            foo = J$.N(201, 'foo', J$.T(193, foo, 12, false, 33), 0);
            bar = J$.N(217, 'bar', J$.T(209, bar, 12, false, 129), 0);
            J$.X1(89, J$.M(81, J$.R(57, 'foo', foo, 1), 'call', 0)(J$.R(65, 'this', this, 0), J$.T(73, "foo called", 21, false)));
            J$.X1(177, J$.M(169, J$.R(145, 'bar', bar, 1), 'call', 0)(J$.R(153, 'this', this, 0), J$.T(161, "foo2 called", 21, false)));
        } catch (J$e) {
            J$.Ex(257, J$e);
        } finally {
            if (J$.Sr(265)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

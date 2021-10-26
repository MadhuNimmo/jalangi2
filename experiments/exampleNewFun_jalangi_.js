J$.iids = {"9":[1,31,1,39],"17":[2,3,2,79],"25":[1,27,3,2],"33":[1,27,3,4],"41":[1,27,3,4],"49":[1,27,3,4],"57":[4,1,4,8],"65":[4,1,4,10],"73":[4,11,4,16],"81":[4,1,4,19],"83":[4,1,4,17],"89":[4,1,4,20],"97":[1,2,5,2],"105":[1,2,5,2],"113":[1,2,5,2],"121":[1,2,5,2],"129":[1,1,5,5],"137":[1,1,5,5],"145":[1,1,5,5],"153":[1,2,5,2],"161":[1,2,5,2],"169":[1,1,5,5],"177":[1,1,5,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/exampleNewFun.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/exampleNewFun_jalangi_.js","code":"(function(){var funName = new Function(\n  \"return function () {return {foo: function foo() {return('foo called');},}}\"\n)();\nfunName()[\"foo\"]();\n})()"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(145, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/exampleNewFun_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/exampleNewFun.js');
            J$.X1(137, J$.F(129, J$.T(121, function () {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(97, arguments.callee, this, arguments);
                            arguments = J$.N(105, 'arguments', arguments, 4);
                            J$.N(113, 'funName', funName, 0);
                            var funName = J$.X1(49, J$.W(41, 'funName', J$.F(33, J$.F(25, J$.R(9, 'Function', Function, 2), 1)(J$.T(17, "return function () {return {foo: function foo() {return('foo called');},}}", 21, false)), 0)(), funName, 1));
                            J$.X1(89, J$.M(81, J$.F(65, J$.R(57, 'funName', funName, 0), 0)(), J$.T(73, "foo", 21, false), 1)());
                        } catch (J$e) {
                            J$.Ex(153, J$e);
                        } finally {
                            if (J$.Fr(161))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 97), 0)());
        } catch (J$e) {
            J$.Ex(169, J$e);
        } finally {
            if (J$.Sr(177)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

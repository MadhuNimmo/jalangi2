J$.iids = {"9":[3,16,3,24],"17":[4,7,4,87],"25":[3,12,5,6],"33":[3,12,5,6],"41":[3,5,5,7],"49":[2,3,6,4],"57":[2,3,6,4],"65":[7,11,7,14],"73":[7,11,7,16],"81":[7,11,7,16],"89":[7,11,7,16],"97":[8,3,8,4],"105":[8,3,8,6],"113":[8,3,8,6],"121":[1,2,9,2],"129":[1,2,9,2],"137":[2,3,6,4],"145":[1,2,9,2],"153":[1,2,9,2],"161":[1,2,9,2],"169":[1,1,9,5],"177":[1,1,9,6],"185":[1,1,10,1],"193":[2,3,6,4],"201":[2,3,6,4],"209":[1,2,9,2],"217":[1,2,9,2],"225":[1,1,10,1],"233":[1,1,10,1],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_with.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_with_jalangi_.js","code":"(function () {\n  function foo() {\n    return new Function(\n      \"with( {log: 'log',getlog: function () {return this.log;}}) { return getlog();}\"\n    );\n  }\n  var x = foo();\n  x()\n})();\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(185, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_with_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_with.js');
            J$.X1(177, J$.F(169, J$.T(161, function () {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(121, arguments.callee, this, arguments);
                            function foo() {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(49, arguments.callee, this, arguments);
                                            arguments = J$.N(57, 'arguments', arguments, 4);
                                            return J$.X1(41, J$.Rt(33, J$.F(25, J$.R(9, 'Function', Function, 2), 1)(J$.T(17, "with( {log: 'log',getlog: function () {return this.log;}}) { return getlog();}", 21, false))));
                                        } catch (J$e) {
                                            J$.Ex(193, J$e);
                                        } finally {
                                            if (J$.Fr(201))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(129, 'arguments', arguments, 4);
                            foo = J$.N(145, 'foo', J$.T(137, foo, 12, false, 49), 0);
                            J$.N(153, 'x', x, 0);
                            var x = J$.X1(89, J$.W(81, 'x', J$.F(73, J$.R(65, 'foo', foo, 0), 0)(), x, 1));
                            J$.X1(113, J$.F(105, J$.R(97, 'x', x, 0), 0)());
                        } catch (J$e) {
                            J$.Ex(209, J$e);
                        } finally {
                            if (J$.Fr(217))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 121), 0)());
        } catch (J$e) {
            J$.Ex(225, J$e);
        } finally {
            if (J$.Sr(233)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

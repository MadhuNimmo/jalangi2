J$.iids = {"9":[3,29,3,31],"17":[3,29,3,31],"25":[3,29,3,31],"33":[4,17,4,23],"41":[4,29,4,39],"49":[4,17,4,40],"51":[4,17,4,28],"57":[4,17,4,40],"65":[5,24,5,32],"73":[5,39,5,43],"81":[5,44,5,50],"89":[5,24,5,51],"91":[5,24,5,38],"97":[5,24,5,51],"105":[5,17,5,51],"113":[2,9,6,10],"121":[2,9,6,10],"129":[2,9,6,10],"137":[7,9,7,12],"145":[7,9,7,14],"153":[7,20,7,24],"161":[7,9,7,25],"163":[7,9,7,19],"169":[7,9,7,25],"177":[1,2,8,2],"185":[1,2,8,2],"193":[2,9,6,10],"201":[1,2,8,2],"209":[1,2,8,2],"217":[1,1,8,5],"225":[1,1,8,5],"233":[1,1,8,5],"241":[2,9,6,10],"249":[2,9,6,10],"257":[1,2,8,2],"265":[1,2,8,2],"273":[1,1,8,5],"281":[1,1,8,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_multnat3.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_multnat3_jalangi_.js","code":"(function(){\n        function foo(params){\n                var params =[]\n                params.push(\"return 3\")\n                return Function.apply(this,params)\n        }\n        foo().call(this)\n})()"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(233, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_multnat3_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_multnat3.js');
            J$.X1(225, J$.F(217, J$.T(209, function () {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(177, arguments.callee, this, arguments);
                            function foo(params) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(113, arguments.callee, this, arguments);
                                            arguments = J$.N(121, 'arguments', arguments, 4);
                                            params = J$.N(129, 'params', params, 4);
                                            var params = J$.X1(25, J$.W(17, 'params', J$.T(9, [], 10, false), params, 1));
                                            J$.X1(57, J$.M(49, J$.R(33, 'params', params, 0), 'push', 0)(J$.T(41, "return 3", 21, false)));
                                            return J$.X1(105, J$.Rt(97, J$.M(89, J$.R(65, 'Function', Function, 2), 'apply', 0)(J$.R(73, 'this', this, 0), J$.R(81, 'params', params, 0))));
                                        } catch (J$e) {
                                            J$.Ex(241, J$e);
                                        } finally {
                                            if (J$.Fr(249))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(185, 'arguments', arguments, 4);
                            foo = J$.N(201, 'foo', J$.T(193, foo, 12, false, 113), 0);
                            J$.X1(169, J$.M(161, J$.F(145, J$.R(137, 'foo', foo, 0), 0)(), 'call', 0)(J$.R(153, 'this', this, 0)));
                        } catch (J$e) {
                            J$.Ex(257, J$e);
                        } finally {
                            if (J$.Fr(265))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 177), 0)());
        } catch (J$e) {
            J$.Ex(273, J$e);
        } finally {
            if (J$.Sr(281)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

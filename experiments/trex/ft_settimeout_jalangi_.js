J$.iids = {"9":[2,21,2,27],"17":[2,28,2,33],"25":[2,21,2,34],"33":[2,21,2,34],"41":[2,21,2,34],"49":[3,22,3,32],"57":[3,53,3,60],"65":[3,53,3,60],"73":[3,46,3,61],"81":[3,33,3,63],"89":[3,33,3,63],"97":[3,33,3,63],"105":[3,65,3,68],"113":[3,22,3,69],"121":[3,22,3,69],"129":[3,22,3,69],"137":[1,1,4,8],"145":[1,1,4,8],"153":[1,1,4,8],"161":[1,1,4,8],"169":[5,1,5,12],"177":[5,1,5,14],"185":[5,1,5,14],"193":[1,1,6,1],"201":[1,1,4,8],"209":[1,1,6,1],"217":[3,33,3,63],"225":[3,33,3,63],"233":[1,1,4,8],"241":[1,1,4,8],"249":[1,1,6,1],"257":[1,1,6,1],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_settimeout.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_settimeout_jalangi_.js","code":"function myFunction1() {\n        var words = Number('123')//Number.isNaN('100F')\n        var words2 = setTimeout(function(){  return \"Hello\"; }, 300);\n      }\nmyFunction1()\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(193, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_settimeout_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_settimeout.js');
            function myFunction1() {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(137, arguments.callee, this, arguments);
                            arguments = J$.N(145, 'arguments', arguments, 4);
                            J$.N(153, 'words', words, 0);
                            J$.N(161, 'words2', words2, 0);
                            var words = J$.X1(41, J$.W(33, 'words', J$.F(25, J$.R(9, 'Number', Number, 2), 0)(J$.T(17, '123', 21, false)), words, 1));
                            var words2 = J$.X1(129, J$.W(121, 'words2', J$.F(113, J$.R(49, 'setTimeout', setTimeout, 2), 0)(J$.T(97, function () {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(81, arguments.callee, this, arguments);
                                            arguments = J$.N(89, 'arguments', arguments, 4);
                                            return J$.X1(73, J$.Rt(65, J$.T(57, "Hello", 21, false)));
                                        } catch (J$e) {
                                            J$.Ex(217, J$e);
                                        } finally {
                                            if (J$.Fr(225))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 81), J$.T(105, 300, 22, false)), words2, 1));
                        } catch (J$e) {
                            J$.Ex(233, J$e);
                        } finally {
                            if (J$.Fr(241))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            myFunction1 = J$.N(209, 'myFunction1', J$.T(201, myFunction1, 12, false, 137), 0);
            J$.X1(185, J$.F(177, J$.R(169, 'myFunction1', myFunction1, 1), 0)());
        } catch (J$e) {
            J$.Ex(249, J$e);
        } finally {
            if (J$.Sr(257)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

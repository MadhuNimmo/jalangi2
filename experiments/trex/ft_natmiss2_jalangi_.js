J$.iids = {"9":[2,22,2,27],"17":[2,22,2,27],"25":[2,22,2,27],"33":[3,32,3,38],"41":[3,39,3,45],"49":[3,47,3,50],"57":[3,28,3,51],"65":[3,28,3,51],"73":[3,28,3,51],"81":[5,27,5,30],"89":[5,27,5,30],"97":[5,27,5,30],"105":[6,39,6,50],"113":[6,39,6,50],"121":[6,32,6,51],"129":[6,20,6,52],"137":[6,20,6,52],"145":[6,20,6,52],"153":[6,20,6,52],"161":[6,20,6,52],"169":[7,22,7,29],"177":[7,38,7,50],"185":[7,52,7,56],"193":[7,22,7,57],"195":[7,22,7,37],"201":[7,22,7,57],"209":[7,22,7,57],"217":[1,2,13,2],"225":[1,2,13,2],"233":[1,2,13,2],"241":[1,2,13,2],"249":[1,2,13,2],"257":[1,2,13,2],"265":[1,2,13,2],"273":[1,2,13,2],"281":[1,1,13,5],"289":[1,1,13,5],"297":[1,1,13,5],"305":[6,20,6,52],"313":[6,20,6,52],"321":[1,2,13,2],"329":[1,2,13,2],"337":[1,1,13,5],"345":[1,1,13,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_natmiss2.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_natmiss2_jalangi_.js","code":"(function(){\n        var search = '\\\\+';\n        var searchRegExp = new RegExp(search, 'g'); // Throws SyntaxError\n        \n        var replaceWith = '-';\n        var func = function(){ return replaceWith;}\n        var result = '5+2+1'.replace(searchRegExp, func);\n        //console.log(result);\n        /*var birthday = new Date('August 19, 1975 23:15:30');\n        var day1 = birthday.getDay();\n        console.log(day1)\n        console.log(\"v\")*/\n})()"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(297, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_natmiss2_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_natmiss2.js');
            J$.X1(289, J$.F(281, J$.T(273, function () {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(217, arguments.callee, this, arguments);
                            arguments = J$.N(225, 'arguments', arguments, 4);
                            J$.N(233, 'search', search, 0);
                            J$.N(241, 'searchRegExp', searchRegExp, 0);
                            J$.N(249, 'replaceWith', replaceWith, 0);
                            J$.N(257, 'func', func, 0);
                            J$.N(265, 'result', result, 0);
                            var search = J$.X1(25, J$.W(17, 'search', J$.T(9, '\\+', 21, false), search, 1));
                            var searchRegExp = J$.X1(73, J$.W(65, 'searchRegExp', J$.F(57, J$.R(33, 'RegExp', RegExp, 2), 1)(J$.R(41, 'search', search, 0), J$.T(49, 'g', 21, false)), searchRegExp, 1));
                            var replaceWith = J$.X1(97, J$.W(89, 'replaceWith', J$.T(81, '-', 21, false), replaceWith, 1));
                            var func = J$.X1(161, J$.W(153, 'func', J$.T(145, function () {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(129, arguments.callee, this, arguments);
                                            arguments = J$.N(137, 'arguments', arguments, 4);
                                            return J$.X1(121, J$.Rt(113, J$.R(105, 'replaceWith', replaceWith, 0)));
                                        } catch (J$e) {
                                            J$.Ex(305, J$e);
                                        } finally {
                                            if (J$.Fr(313))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 129), func, 1));
                            var result = J$.X1(209, J$.W(201, 'result', J$.M(193, J$.T(169, '5+2+1', 21, false), 'replace', 0)(J$.R(177, 'searchRegExp', searchRegExp, 0), J$.R(185, 'func', func, 0)), result, 1));
                        } catch (J$e) {
                            J$.Ex(321, J$e);
                        } finally {
                            if (J$.Fr(329))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 217), 0)());
        } catch (J$e) {
            J$.Ex(337, J$e);
        } finally {
            if (J$.Sr(345)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

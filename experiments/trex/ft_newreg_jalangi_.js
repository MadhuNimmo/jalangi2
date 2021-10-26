J$.iids = {"8":[17,20,17,34],"9":[12,26,12,36],"10":[16,61,16,62],"17":[12,57,12,64],"18":[17,20,17,34],"25":[12,57,12,64],"33":[12,50,12,65],"41":[12,37,12,67],"49":[12,37,12,67],"57":[12,37,12,67],"65":[12,69,12,70],"73":[12,26,12,71],"81":[12,26,12,71],"89":[12,17,12,72],"97":[11,9,13,16],"105":[11,9,13,16],"113":[15,23,15,24],"121":[15,23,15,24],"129":[15,23,15,24],"137":[16,24,16,35],"145":[16,61,16,62],"153":[16,49,16,57],"161":[16,49,16,62],"169":[16,49,16,63],"177":[17,20,17,28],"185":[17,33,17,34],"193":[18,21,18,34],"201":[18,35,18,43],"209":[18,21,18,44],"217":[18,21,18,45],"225":[16,36,19,20],"233":[16,36,19,20],"241":[16,36,19,20],"249":[19,22,19,24],"257":[16,24,19,25],"265":[16,24,19,25],"273":[16,24,19,25],"281":[14,9,20,10],"289":[14,9,20,10],"297":[14,9,20,10],"305":[14,9,20,10],"313":[21,9,21,20],"321":[21,9,21,22],"329":[21,9,21,23],"337":[22,9,22,20],"345":[22,9,22,22],"353":[22,9,22,23],"361":[23,9,23,21],"369":[23,22,23,28],"377":[23,9,23,29],"385":[23,9,23,30],"393":[9,2,24,2],"401":[9,2,24,2],"409":[9,2,24,2],"417":[11,9,13,16],"425":[9,2,24,2],"433":[14,9,20,10],"441":[9,2,24,2],"449":[9,2,24,2],"457":[9,1,24,5],"465":[9,1,24,6],"473":[1,1,24,6],"481":[12,37,12,67],"489":[12,37,12,67],"497":[11,9,13,16],"505":[11,9,13,16],"513":[17,17,19,18],"521":[16,36,19,20],"529":[16,36,19,20],"537":[14,9,20,10],"545":[14,9,20,10],"553":[9,2,24,2],"561":[9,2,24,2],"569":[1,1,24,6],"577":[1,1,24,6],"nBranches":2,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_newreg.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_newreg_jalangi_.js","code":"/*(function(){\n        var strng = \"what\";\n        var reg = new RegExp('\\\\w');\n        strng.match(reg);\n        var xyx = Date('December 17, 1995 03:24:00');\n        var z = new Function(\"return 2\");\n\n})()*/\n(function () {\n        var myTime;\n        function myFunction1() {\n                myTime = setTimeout(function(){  return \"Hello\"; }, 1);\n              }\n        function myFunction2() {\n        var timesRun =0;\n        var interval = setInterval(function(){  timesRun += 1;\n                if(timesRun === 2){\n                    clearInterval(interval);\n                } }, 30);\n        }\n        myFunction1();\n        myFunction2();\n        clearTimeout(myTime);\n})();"};
jalangiLabel7:
    while (true) {
        try {
            J$.Se(473, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_newreg_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_newreg.js');
            J$.X1(465, J$.F(457, J$.T(449, function () {
                jalangiLabel6:
                    while (true) {
                        try {
                            J$.Fe(393, arguments.callee, this, arguments);
                            function myFunction1() {
                                jalangiLabel3:
                                    while (true) {
                                        try {
                                            J$.Fe(97, arguments.callee, this, arguments);
                                            arguments = J$.N(105, 'arguments', arguments, 4);
                                            J$.X1(89, myTime = J$.W(81, 'myTime', J$.F(73, J$.R(9, 'setTimeout', setTimeout, 2), 0)(J$.T(57, function () {
                                                jalangiLabel2:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(41, arguments.callee, this, arguments);
                                                            arguments = J$.N(49, 'arguments', arguments, 4);
                                                            return J$.X1(33, J$.Rt(25, J$.T(17, "Hello", 21, false)));
                                                        } catch (J$e) {
                                                            J$.Ex(481, J$e);
                                                        } finally {
                                                            if (J$.Fr(489))
                                                                continue jalangiLabel2;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }, 12, false, 41), J$.T(65, 1, 22, false)), myTime, 0));
                                        } catch (J$e) {
                                            J$.Ex(497, J$e);
                                        } finally {
                                            if (J$.Fr(505))
                                                continue jalangiLabel3;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            function myFunction2() {
                                jalangiLabel5:
                                    while (true) {
                                        try {
                                            J$.Fe(281, arguments.callee, this, arguments);
                                            arguments = J$.N(289, 'arguments', arguments, 4);
                                            J$.N(297, 'timesRun', timesRun, 0);
                                            J$.N(305, 'interval', interval, 0);
                                            var timesRun = J$.X1(129, J$.W(121, 'timesRun', J$.T(113, 0, 22, false), timesRun, 1));
                                            var interval = J$.X1(273, J$.W(265, 'interval', J$.F(257, J$.R(137, 'setInterval', setInterval, 2), 0)(J$.T(241, function () {
                                                jalangiLabel4:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(225, arguments.callee, this, arguments);
                                                            arguments = J$.N(233, 'arguments', arguments, 4);
                                                            J$.X1(169, timesRun = J$.W(161, 'timesRun', J$.B(10, '+', J$.R(153, 'timesRun', timesRun, 0), J$.T(145, 1, 22, false), 0), timesRun, 0));
                                                            if (J$.X1(513, J$.C(8, J$.B(18, '===', J$.R(177, 'timesRun', timesRun, 0), J$.T(185, 2, 22, false), 0)))) {
                                                                J$.X1(217, J$.F(209, J$.R(193, 'clearInterval', clearInterval, 2), 0)(J$.R(201, 'interval', interval, 0)));
                                                            }
                                                        } catch (J$e) {
                                                            J$.Ex(521, J$e);
                                                        } finally {
                                                            if (J$.Fr(529))
                                                                continue jalangiLabel4;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }, 12, false, 225), J$.T(249, 30, 22, false)), interval, 1));
                                        } catch (J$e) {
                                            J$.Ex(537, J$e);
                                        } finally {
                                            if (J$.Fr(545))
                                                continue jalangiLabel5;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(401, 'arguments', arguments, 4);
                            J$.N(409, 'myTime', myTime, 0);
                            myFunction1 = J$.N(425, 'myFunction1', J$.T(417, myFunction1, 12, false, 97), 0);
                            myFunction2 = J$.N(441, 'myFunction2', J$.T(433, myFunction2, 12, false, 281), 0);
                            var myTime;
                            J$.X1(329, J$.F(321, J$.R(313, 'myFunction1', myFunction1, 0), 0)());
                            J$.X1(353, J$.F(345, J$.R(337, 'myFunction2', myFunction2, 0), 0)());
                            J$.X1(385, J$.F(377, J$.R(361, 'clearTimeout', clearTimeout, 2), 0)(J$.R(369, 'myTime', myTime, 0)));
                        } catch (J$e) {
                            J$.Ex(553, J$e);
                        } finally {
                            if (J$.Fr(561))
                                continue jalangiLabel6;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 393), 0)());
        } catch (J$e) {
            J$.Ex(569, J$e);
        } finally {
            if (J$.Sr(577)) {
                J$.L();
                continue jalangiLabel7;
            } else {
                J$.L();
                break jalangiLabel7;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

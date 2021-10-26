J$.iids = {"8":[11,12,11,26],"9":[6,18,6,28],"10":[10,53,10,54],"17":[6,49,6,56],"18":[11,12,11,26],"25":[6,49,6,56],"33":[6,42,6,57],"41":[6,29,6,59],"49":[6,29,6,59],"57":[6,29,6,59],"65":[6,61,6,62],"73":[6,18,6,63],"81":[6,18,6,63],"89":[6,9,6,64],"97":[5,1,7,8],"105":[5,1,7,8],"113":[9,15,9,16],"121":[9,15,9,16],"129":[9,15,9,16],"137":[10,16,10,27],"145":[10,53,10,54],"153":[10,41,10,49],"161":[10,41,10,54],"169":[10,41,10,55],"177":[11,12,11,20],"185":[11,25,11,26],"193":[12,13,12,26],"201":[12,27,12,35],"209":[12,13,12,36],"217":[12,13,12,37],"225":[10,28,13,12],"233":[10,28,13,12],"241":[10,28,13,12],"249":[13,14,13,16],"257":[10,16,13,17],"265":[10,16,13,17],"273":[10,16,13,17],"281":[8,1,14,2],"289":[8,1,14,2],"297":[8,1,14,2],"305":[8,1,14,2],"313":[15,1,15,12],"321":[15,1,15,14],"329":[15,1,15,14],"337":[16,1,16,12],"345":[16,1,16,14],"353":[16,1,16,14],"361":[17,13,17,21],"369":[17,22,17,32],"377":[17,9,17,33],"385":[17,9,17,33],"393":[17,9,17,33],"401":[18,1,18,2],"409":[18,1,18,4],"417":[18,1,18,5],"425":[19,1,19,13],"433":[19,14,19,20],"441":[19,1,19,21],"449":[19,1,19,22],"457":[1,1,20,1],"465":[1,1,20,1],"473":[5,1,7,8],"481":[1,1,20,1],"489":[8,1,14,2],"497":[1,1,20,1],"505":[1,1,20,1],"513":[6,29,6,59],"521":[6,29,6,59],"529":[5,1,7,8],"537":[5,1,7,8],"545":[11,9,13,10],"553":[10,28,13,12],"561":[10,28,13,12],"569":[8,1,14,2],"577":[8,1,14,2],"585":[1,1,20,1],"593":[1,1,20,1],"nBranches":2,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/xssTest.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/xssTest_jalangi_.js","code":"/*eval('var x = function(){return 2}');\nx()\n*/\nvar myTime;\nfunction myFunction1() {\n        myTime = setTimeout(function(){  return \"Hello\"; }, 1);\n      }\nfunction myFunction2() {\nvar timesRun =0;\nvar interval = setInterval(function(){  timesRun += 1;\n        if(timesRun === 2){\n            clearInterval(interval);\n        } }, 30);\n}\nmyFunction1()\nmyFunction2()\nvar y = new Function(\"return 3\")\ny();\nclearTimeout(myTime);\n"};
jalangiLabel4:
    while (true) {
        try {
            J$.Se(457, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/xssTest_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/xssTest.js');
            function myFunction1() {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(97, arguments.callee, this, arguments);
                            arguments = J$.N(105, 'arguments', arguments, 4);
                            J$.X1(89, myTime = J$.W(81, 'myTime', J$.F(73, J$.R(9, 'setTimeout', setTimeout, 2), 0)(J$.T(57, function () {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(41, arguments.callee, this, arguments);
                                            arguments = J$.N(49, 'arguments', arguments, 4);
                                            return J$.X1(33, J$.Rt(25, J$.T(17, "Hello", 21, false)));
                                        } catch (J$e) {
                                            J$.Ex(513, J$e);
                                        } finally {
                                            if (J$.Fr(521))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 41), J$.T(65, 1, 22, false)), myTime, 2));
                        } catch (J$e) {
                            J$.Ex(529, J$e);
                        } finally {
                            if (J$.Fr(537))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function myFunction2() {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(281, arguments.callee, this, arguments);
                            arguments = J$.N(289, 'arguments', arguments, 4);
                            J$.N(297, 'timesRun', timesRun, 0);
                            J$.N(305, 'interval', interval, 0);
                            var timesRun = J$.X1(129, J$.W(121, 'timesRun', J$.T(113, 0, 22, false), timesRun, 1));
                            var interval = J$.X1(273, J$.W(265, 'interval', J$.F(257, J$.R(137, 'setInterval', setInterval, 2), 0)(J$.T(241, function () {
                                jalangiLabel2:
                                    while (true) {
                                        try {
                                            J$.Fe(225, arguments.callee, this, arguments);
                                            arguments = J$.N(233, 'arguments', arguments, 4);
                                            J$.X1(169, timesRun = J$.W(161, 'timesRun', J$.B(10, '+', J$.R(153, 'timesRun', timesRun, 0), J$.T(145, 1, 22, false), 0), timesRun, 0));
                                            if (J$.X1(545, J$.C(8, J$.B(18, '===', J$.R(177, 'timesRun', timesRun, 0), J$.T(185, 2, 22, false), 0)))) {
                                                J$.X1(217, J$.F(209, J$.R(193, 'clearInterval', clearInterval, 2), 0)(J$.R(201, 'interval', interval, 0)));
                                            }
                                        } catch (J$e) {
                                            J$.Ex(553, J$e);
                                        } finally {
                                            if (J$.Fr(561))
                                                continue jalangiLabel2;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 225), J$.T(249, 30, 22, false)), interval, 1));
                        } catch (J$e) {
                            J$.Ex(569, J$e);
                        } finally {
                            if (J$.Fr(577))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(465, 'myTime', myTime, 0);
            myFunction1 = J$.N(481, 'myFunction1', J$.T(473, myFunction1, 12, false, 97), 0);
            myFunction2 = J$.N(497, 'myFunction2', J$.T(489, myFunction2, 12, false, 281), 0);
            J$.N(505, 'y', y, 0);
            var myTime;
            J$.X1(329, J$.F(321, J$.R(313, 'myFunction1', myFunction1, 1), 0)());
            J$.X1(353, J$.F(345, J$.R(337, 'myFunction2', myFunction2, 1), 0)());
            var y = J$.X1(393, J$.W(385, 'y', J$.F(377, J$.R(361, 'Function', Function, 2), 1)(J$.T(369, "return 3", 21, false)), y, 3));
            J$.X1(417, J$.F(409, J$.R(401, 'y', y, 1), 0)());
            J$.X1(449, J$.F(441, J$.R(425, 'clearTimeout', clearTimeout, 2), 0)(J$.R(433, 'myTime', myTime, 1)));
        } catch (J$e) {
            J$.Ex(585, J$e);
        } finally {
            if (J$.Sr(593)) {
                J$.L();
                continue jalangiLabel4;
            } else {
                J$.L();
                break jalangiLabel4;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

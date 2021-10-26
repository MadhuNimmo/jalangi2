J$.iids = {"8":[22,7,22,16],"9":[2,2,2,9],"10":[21,17,21,23],"16":[21,17,21,23],"17":[2,14,2,26],"18":[21,25,21,28],"25":[2,2,2,27],"27":[2,2,2,13],"33":[2,2,2,28],"34":[21,25,21,28],"41":[5,3,5,6],"42":[22,7,22,10],"49":[5,3,5,8],"50":[22,7,22,16],"57":[5,3,5,9],"65":[1,11,6,2],"73":[1,11,6,2],"81":[1,11,6,2],"89":[1,11,6,2],"97":[1,11,6,2],"105":[9,3,9,10],"113":[9,15,9,27],"121":[9,3,9,28],"123":[9,3,9,14],"129":[9,3,9,29],"137":[8,1,10,2],"145":[8,1,10,2],"153":[13,2,13,9],"161":[13,14,13,27],"169":[13,2,13,28],"171":[13,2,13,13],"177":[13,2,13,29],"185":[12,11,14,2],"193":[12,11,14,2],"201":[12,11,14,2],"209":[12,11,14,2],"217":[12,11,14,2],"225":[12,11,14,2],"233":[18,13,18,20],"241":[18,25,18,36],"249":[18,13,18,37],"251":[18,13,18,24],"257":[18,13,18,37],"265":[17,17,19,10],"273":[17,17,19,10],"281":[17,17,19,10],"289":[17,16,19,13],"297":[17,16,19,13],"305":[17,9,19,14],"313":[16,14,20,2],"321":[16,14,20,2],"329":[16,14,20,2],"337":[16,14,20,2],"345":[16,14,20,2],"353":[21,14,21,15],"361":[21,14,21,15],"369":[21,14,21,15],"377":[21,17,21,18],"385":[21,21,21,23],"401":[21,25,21,26],"409":[21,25,21,28],"425":[22,7,22,8],"433":[22,9,22,10],"441":[22,15,22,16],"449":[23,5,23,8],"457":[23,5,23,10],"465":[23,5,23,11],"473":[25,5,25,8],"481":[25,5,25,10],"489":[25,5,25,11],"497":[28,1,28,7],"505":[28,1,28,9],"513":[28,1,28,10],"521":[29,1,29,8],"529":[29,13,29,19],"537":[29,1,29,20],"539":[29,1,29,12],"545":[29,1,29,21],"553":[1,1,30,1],"561":[1,1,30,1],"569":[8,1,10,2],"577":[1,1,30,1],"585":[1,1,30,1],"593":[1,1,30,1],"601":[1,1,30,1],"609":[1,11,6,2],"617":[1,11,6,2],"625":[8,1,10,2],"633":[8,1,10,2],"641":[12,11,14,2],"649":[12,11,14,2],"657":[17,17,19,10],"665":[17,17,19,10],"673":[16,14,20,2],"681":[16,14,20,2],"689":[22,3,26,4],"697":[21,1,27,2],"705":[21,1,27,2],"713":[1,1,30,1],"721":[1,1,30,1],"nBranches":4,"originalCodeFileName":"/home/nimmo/jalangi2/experiments/example_anon.js","instrumentedCodeFileName":"/home/nimmo/jalangi2/experiments/example_anon_jalangi_.js","code":"var foo = function(){\r\n console.log(\"foo called\");\r\n //function(x) { console.log(\"foo2 called\");} \r\n  //bar();\r\n  pup();\r\n}\r\n\r\nfunction bar(){\r\n  console.log(\"bar called\");\r\n}\r\n\r\nvar pup = function pup2() {\r\n\tconsole.log('Hello World');\r\n}\r\n\r\nvar sample = function() {\r\n        return (function() { \r\n            console.log(\"something\")\r\n        })();\r\n}\r\nfor (var i = 0; i < 10; i++){\r\n  if (i%2 === 0){\r\n    foo();\r\n  } else {\r\n    bar();\r\n  }\r\n}\r\nsample();\r\nconsole.log(\"done\");\r\n"};
jalangiLabel5:
    while (true) {
        try {
            J$.Se(553, '/home/nimmo/jalangi2/experiments/example_anon_jalangi_.js', '/home/nimmo/jalangi2/experiments/example_anon.js');
            function bar() {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(137, arguments.callee, this, arguments);
                            arguments = J$.N(145, 'arguments', arguments, 4);
                            J$.X1(129, J$.M(121, J$.R(105, 'console', console, 2), 'log', 0)(J$.T(113, "bar called", 21, false)));
                        } catch (J$e) {
                            J$.Ex(625, J$e);
                        } finally {
                            if (J$.Fr(633))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(561, 'foo', foo, 0);
            bar = J$.N(577, 'bar', J$.T(569, bar, 12, false, 137), 0);
            J$.N(585, 'pup', pup, 0);
            J$.N(593, 'sample', sample, 0);
            J$.N(601, 'i', i, 0);
            var foo = J$.X1(97, J$.W(89, 'foo', J$.T(81, function () {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(65, arguments.callee, this, arguments);
                            arguments = J$.N(73, 'arguments', arguments, 4);
                            J$.X1(33, J$.M(25, J$.R(9, 'console', console, 2), 'log', 0)(J$.T(17, "foo called", 21, false)));
                            J$.X1(57, J$.F(49, J$.R(41, 'pup', pup, 1), 0)());
                        } catch (J$e) {
                            J$.Ex(609, J$e);
                        } finally {
                            if (J$.Fr(617))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 65), foo, 3));
            var pup = J$.X1(225, J$.W(217, 'pup', J$.T(209, function pup2() {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(185, arguments.callee, this, arguments);
                            arguments = J$.N(193, 'arguments', arguments, 4);
                            pup2 = J$.N(201, 'pup2', pup2, 0);
                            J$.X1(177, J$.M(169, J$.R(153, 'console', console, 2), 'log', 0)(J$.T(161, 'Hello World', 21, false)));
                        } catch (J$e) {
                            J$.Ex(641, J$e);
                        } finally {
                            if (J$.Fr(649))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 185), pup, 3));
            var sample = J$.X1(345, J$.W(337, 'sample', J$.T(329, function () {
                jalangiLabel4:
                    while (true) {
                        try {
                            J$.Fe(313, arguments.callee, this, arguments);
                            arguments = J$.N(321, 'arguments', arguments, 4);
                            return J$.X1(305, J$.Rt(297, J$.F(289, J$.T(281, function () {
                                jalangiLabel3:
                                    while (true) {
                                        try {
                                            J$.Fe(265, arguments.callee, this, arguments);
                                            arguments = J$.N(273, 'arguments', arguments, 4);
                                            J$.X1(257, J$.M(249, J$.R(233, 'console', console, 2), 'log', 0)(J$.T(241, "something", 21, false)));
                                        } catch (J$e) {
                                            J$.Ex(657, J$e);
                                        } finally {
                                            if (J$.Fr(665))
                                                continue jalangiLabel3;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 265), 0)()));
                        } catch (J$e) {
                            J$.Ex(673, J$e);
                        } finally {
                            if (J$.Fr(681))
                                continue jalangiLabel4;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 313), sample, 3));
            for (var i = J$.X1(369, J$.W(361, 'i', J$.T(353, 0, 22, false), i, 3)); J$.X1(697, J$.C(16, J$.B(10, '<', J$.R(377, 'i', i, 1), J$.T(385, 10, 22, false), 0))); J$.X1(705, J$.B(34, '-', i = J$.W(409, 'i', J$.B(26, '+', J$.U(18, '+', J$.R(401, 'i', i, 1)), J$.T(393, 1, 22, false), 0), i, 2), J$.T(417, 1, 22, false), 0))) {
                if (J$.X1(689, J$.C(8, J$.B(50, '===', J$.B(42, '%', J$.R(425, 'i', i, 1), J$.T(433, 2, 22, false), 0), J$.T(441, 0, 22, false), 0)))) {
                    J$.X1(465, J$.F(457, J$.R(449, 'foo', foo, 1), 0)());
                } else {
                    J$.X1(489, J$.F(481, J$.R(473, 'bar', bar, 1), 0)());
                }
            }
            J$.X1(513, J$.F(505, J$.R(497, 'sample', sample, 1), 0)());
            J$.X1(545, J$.M(537, J$.R(521, 'console', console, 2), 'log', 0)(J$.T(529, "done", 21, false)));
        } catch (J$e) {
            J$.Ex(713, J$e);
        } finally {
            if (J$.Sr(721)) {
                J$.L();
                continue jalangiLabel5;
            } else {
                J$.L();
                break jalangiLabel5;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

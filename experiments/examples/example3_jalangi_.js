J$.iids = {"9":[3,13,3,20],"17":[3,25,3,36],"25":[3,13,3,37],"27":[3,13,3,24],"33":[3,13,3,37],"41":[2,17,4,10],"49":[2,17,4,10],"57":[2,17,4,10],"65":[2,16,4,13],"73":[2,16,4,13],"81":[2,9,4,14],"89":[1,14,5,2],"97":[1,14,5,2],"105":[1,14,5,2],"113":[1,14,5,2],"121":[1,14,5,2],"129":[7,1,7,7],"137":[7,1,7,9],"145":[7,1,7,10],"153":[1,1,7,10],"161":[1,1,7,10],"169":[2,17,4,10],"177":[2,17,4,10],"185":[1,14,5,2],"193":[1,14,5,2],"201":[1,1,7,10],"209":[1,1,7,10],"nBranches":0,"originalCodeFileName":"../experiments/examples/example3.js","instrumentedCodeFileName":"../experiments/examples/example3_jalangi_.js","code":"var sample = function() {\r\n        return (function() { \r\n            console.log(\"something\")\r\n        })();\r\n}\r\n\r\nsample();"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(153, '../experiments/examples/example3_jalangi_.js', '../experiments/examples/example3.js');
            J$.N(161, 'sample', sample, 0);
            var sample = J$.X1(121, J$.W(113, 'sample', J$.T(105, function () {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(89, arguments.callee, this, arguments);
                            arguments = J$.N(97, 'arguments', arguments, 4);
                            return J$.X1(81, J$.Rt(73, J$.F(65, J$.T(57, function () {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(41, arguments.callee, this, arguments);
                                            arguments = J$.N(49, 'arguments', arguments, 4);
                                            J$.X1(33, J$.M(25, J$.R(9, 'console', console, 2), 'log', 0)(J$.T(17, "something", 21, false)));
                                        } catch (J$e) {
                                            J$.Ex(169, J$e);
                                        } finally {
                                            if (J$.Fr(177))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 41), 0)()));
                        } catch (J$e) {
                            J$.Ex(185, J$e);
                        } finally {
                            if (J$.Fr(193))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 89), sample, 3));
            J$.X1(145, J$.F(137, J$.R(129, 'sample', sample, 1), 0)());
        } catch (J$e) {
            J$.Ex(201, J$e);
        } finally {
            if (J$.Sr(209)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

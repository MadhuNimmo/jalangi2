J$.iids = {"9":[3,27,3,34],"17":[3,27,3,34],"25":[3,12,3,35],"33":[3,12,3,35],"41":[3,12,3,35],"49":[3,12,3,35],"57":[3,12,3,35],"65":[3,5,3,35],"73":[2,11,4,4],"81":[2,11,4,4],"89":[2,11,4,4],"97":[2,10,4,7],"105":[2,10,4,7],"113":[2,3,4,8],"121":[1,14,5,2],"129":[1,14,5,2],"137":[1,14,5,2],"145":[1,14,5,2],"153":[1,14,5,2],"161":[7,5,7,11],"169":[7,5,7,13],"177":[7,5,7,13],"185":[7,1,7,14],"193":[11,12,11,23],"201":[11,12,11,23],"209":[11,5,11,24],"217":[10,11,12,4],"225":[10,11,12,4],"233":[10,11,12,4],"241":[10,11,12,4],"249":[10,11,12,4],"257":[10,3,12,6],"265":[9,15,13,2],"273":[9,15,13,2],"281":[9,15,13,2],"289":[9,15,13,2],"297":[9,15,13,2],"305":[15,5,15,12],"313":[15,5,15,14],"321":[15,5,15,14],"329":[15,1,15,15],"337":[1,1,15,15],"345":[1,1,15,15],"353":[1,1,15,15],"361":[3,12,3,35],"369":[3,12,3,35],"377":[2,11,4,4],"385":[2,11,4,4],"393":[1,14,5,2],"401":[1,14,5,2],"409":[10,11,12,4],"417":[10,11,12,4],"425":[9,15,13,2],"433":[9,15,13,2],"441":[1,1,15,15],"449":[1,1,15,15],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/example3.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/example3_jalangi_.js","code":"var sample = function () {\r\n  return (function() {\r\n    return function xyz(){return;}\r\n  })();\r\n}\r\n\r\nx = sample();\r\n\r\nvar sample2 = function () {\r\n  return (function xyz() {\r\n    return(\"something\")\r\n  });\r\n}\r\n\r\ny = sample2();"};
jalangiLabel5:
    while (true) {
        try {
            J$.Se(337, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/example3_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/example3.js');
            J$.N(345, 'sample', sample, 0);
            J$.N(353, 'sample2', sample2, 0);
            var sample = J$.X1(153, J$.W(145, 'sample', J$.T(137, function () {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(121, arguments.callee, this, arguments);
                            arguments = J$.N(129, 'arguments', arguments, 4);
                            return J$.X1(113, J$.Rt(105, J$.F(97, J$.T(89, function () {
                                jalangiLabel1:
                                    while (true) {
                                        try {
                                            J$.Fe(73, arguments.callee, this, arguments);
                                            arguments = J$.N(81, 'arguments', arguments, 4);
                                            return J$.X1(65, J$.Rt(57, J$.T(49, function xyz() {
                                                jalangiLabel0:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(25, arguments.callee, this, arguments);
                                                            arguments = J$.N(33, 'arguments', arguments, 4);
                                                            xyz = J$.N(41, 'xyz', xyz, 0);
                                                            return J$.X1(17, J$.Rt(9, undefined));
                                                        } catch (J$e) {
                                                            J$.Ex(361, J$e);
                                                        } finally {
                                                            if (J$.Fr(369))
                                                                continue jalangiLabel0;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }, 12, false, 25)));
                                        } catch (J$e) {
                                            J$.Ex(377, J$e);
                                        } finally {
                                            if (J$.Fr(385))
                                                continue jalangiLabel1;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 73), 0)()));
                        } catch (J$e) {
                            J$.Ex(393, J$e);
                        } finally {
                            if (J$.Fr(401))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 121), sample, 3));
            J$.X1(185, x = J$.W(177, 'x', J$.F(169, J$.R(161, 'sample', sample, 1), 0)(), J$.I(typeof x === 'undefined' ? undefined : x), 4));
            var sample2 = J$.X1(297, J$.W(289, 'sample2', J$.T(281, function () {
                jalangiLabel4:
                    while (true) {
                        try {
                            J$.Fe(265, arguments.callee, this, arguments);
                            arguments = J$.N(273, 'arguments', arguments, 4);
                            return J$.X1(257, J$.Rt(249, J$.T(241, function xyz() {
                                jalangiLabel3:
                                    while (true) {
                                        try {
                                            J$.Fe(217, arguments.callee, this, arguments);
                                            arguments = J$.N(225, 'arguments', arguments, 4);
                                            xyz = J$.N(233, 'xyz', xyz, 0);
                                            return J$.X1(209, J$.Rt(201, J$.T(193, "something", 21, false)));
                                        } catch (J$e) {
                                            J$.Ex(409, J$e);
                                        } finally {
                                            if (J$.Fr(417))
                                                continue jalangiLabel3;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 217)));
                        } catch (J$e) {
                            J$.Ex(425, J$e);
                        } finally {
                            if (J$.Fr(433))
                                continue jalangiLabel4;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 265), sample2, 3));
            J$.X1(329, y = J$.W(321, 'y', J$.F(313, J$.R(305, 'sample2', sample2, 1), 0)(), J$.I(typeof y === 'undefined' ? undefined : y), 4));
        } catch (J$e) {
            J$.Ex(441, J$e);
        } finally {
            if (J$.Sr(449)) {
                J$.L();
                continue jalangiLabel5;
            } else {
                J$.L();
                break jalangiLabel5;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

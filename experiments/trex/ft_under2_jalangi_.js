J$.iids = {"9":[1,21,1,48],"17":[1,21,1,48],"25":[1,21,1,48],"33":[1,21,1,48],"41":[1,21,1,48],"49":[1,21,1,48],"57":[3,1,3,14],"65":[3,29,3,46],"73":[3,1,3,46],"81":[3,1,3,47],"89":[4,1,4,14],"97":[4,34,4,51],"105":[4,52,4,57],"113":[4,34,4,58],"121":[4,1,4,58],"129":[4,1,4,59],"137":[5,1,5,14],"145":[5,33,5,50],"153":[5,51,5,55],"161":[5,33,5,56],"169":[5,1,5,56],"177":[5,1,5,57],"185":[6,1,6,14],"193":[6,33,6,50],"201":[6,51,6,55],"209":[6,33,6,56],"217":[6,1,6,56],"225":[6,1,6,57],"233":[7,1,7,14],"241":[8,10,8,14],"249":[8,10,8,14],"257":[8,3,8,15],"265":[7,33,9,2],"273":[7,33,9,2],"281":[7,33,9,2],"289":[7,1,9,2],"297":[7,1,9,3],"305":[12,18,12,21],"313":[12,18,12,21],"321":[12,11,12,22],"329":[11,16,13,10],"337":[11,16,13,10],"345":[11,16,13,10],"353":[11,16,13,10],"361":[11,9,13,11],"369":[10,1,14,8],"377":[10,1,14,8],"385":[10,1,14,8],"393":[15,7,15,20],"401":[15,7,15,39],"403":[15,7,15,37],"409":[15,7,15,40],"417":[1,1,15,40],"425":[1,1,15,40],"433":[10,1,14,8],"441":[1,1,15,40],"449":[1,21,1,48],"457":[1,21,1,48],"465":[7,33,9,2],"473":[7,33,9,2],"481":[11,16,13,10],"489":[11,16,13,10],"497":[10,1,14,8],"505":[10,1,14,8],"513":[1,1,15,40],"521":[1,1,15,40],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_under2.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_under2_jalangi_.js","code":"var emptyFunction = function emptyFunction() {};\n\nemptyFunction.thatReturns = makeEmptyFunction;\nemptyFunction.thatReturnsFalse = makeEmptyFunction(false);\nemptyFunction.thatReturnsTrue = makeEmptyFunction(true);\nemptyFunction.thatReturnsNull = makeEmptyFunction(null);\nemptyFunction.thatReturnsThis = function () {\n  return this;\n};\nfunction makeEmptyFunction(arg) {\n        return function () {\n          return arg;\n        };\n      }\n      emptyFunction.thatReturnsFalse();"};
jalangiLabel4:
    while (true) {
        try {
            J$.Se(417, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_under2_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_under2.js');
            function makeEmptyFunction(arg) {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(369, arguments.callee, this, arguments);
                            arguments = J$.N(377, 'arguments', arguments, 4);
                            arg = J$.N(385, 'arg', arg, 4);
                            return J$.X1(361, J$.Rt(353, J$.T(345, function () {
                                jalangiLabel2:
                                    while (true) {
                                        try {
                                            J$.Fe(329, arguments.callee, this, arguments);
                                            arguments = J$.N(337, 'arguments', arguments, 4);
                                            return J$.X1(321, J$.Rt(313, J$.R(305, 'arg', arg, 0)));
                                        } catch (J$e) {
                                            J$.Ex(481, J$e);
                                        } finally {
                                            if (J$.Fr(489))
                                                continue jalangiLabel2;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 329)));
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
            J$.N(425, 'emptyFunction', emptyFunction, 0);
            makeEmptyFunction = J$.N(441, 'makeEmptyFunction', J$.T(433, makeEmptyFunction, 12, false, 369), 0);
            var emptyFunction = J$.X1(49, J$.W(41, 'emptyFunction', J$.T(33, function emptyFunction() {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(9, arguments.callee, this, arguments);
                            arguments = J$.N(17, 'arguments', arguments, 4);
                            emptyFunction = J$.N(25, 'emptyFunction', emptyFunction, 0);
                        } catch (J$e) {
                            J$.Ex(449, J$e);
                        } finally {
                            if (J$.Fr(457))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 9), emptyFunction, 3));
            J$.X1(81, J$.P(73, J$.R(57, 'emptyFunction', emptyFunction, 1), 'thatReturns', J$.R(65, 'makeEmptyFunction', makeEmptyFunction, 1), 0));
            J$.X1(129, J$.P(121, J$.R(89, 'emptyFunction', emptyFunction, 1), 'thatReturnsFalse', J$.F(113, J$.R(97, 'makeEmptyFunction', makeEmptyFunction, 1), 0)(J$.T(105, false, 23, false)), 0));
            J$.X1(177, J$.P(169, J$.R(137, 'emptyFunction', emptyFunction, 1), 'thatReturnsTrue', J$.F(161, J$.R(145, 'makeEmptyFunction', makeEmptyFunction, 1), 0)(J$.T(153, true, 23, false)), 0));
            J$.X1(225, J$.P(217, J$.R(185, 'emptyFunction', emptyFunction, 1), 'thatReturnsNull', J$.F(209, J$.R(193, 'makeEmptyFunction', makeEmptyFunction, 1), 0)(J$.T(201, null, 25, false)), 0));
            J$.X1(297, J$.P(289, J$.R(233, 'emptyFunction', emptyFunction, 1), 'thatReturnsThis', J$.T(281, function () {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(265, arguments.callee, this, arguments);
                            arguments = J$.N(273, 'arguments', arguments, 4);
                            return J$.X1(257, J$.Rt(249, J$.R(241, 'this', this, 0)));
                        } catch (J$e) {
                            J$.Ex(465, J$e);
                        } finally {
                            if (J$.Fr(473))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 265), 0));
            J$.X1(409, J$.M(401, J$.R(393, 'emptyFunction', emptyFunction, 1), 'thatReturnsFalse', 0)());
        } catch (J$e) {
            J$.Ex(513, J$e);
        } finally {
            if (J$.Sr(521)) {
                J$.L();
                continue jalangiLabel4;
            } else {
                J$.L();
                break jalangiLabel4;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

J$.iids = {"8":[8,18,8,32],"9":[2,15,2,20],"10":[6,11,6,23],"16":[6,11,6,23],"17":[2,15,2,30],"18":[8,18,8,32],"25":[2,15,2,36],"26":[15,50,15,62],"33":[4,22,4,24],"34":[16,49,16,72],"41":[4,22,4,31],"42":[16,49,16,76],"49":[4,22,4,31],"50":[18,50,18,63],"57":[4,22,4,31],"65":[6,11,6,19],"73":[6,22,6,23],"81":[7,16,7,18],"89":[7,16,7,18],"97":[7,9,7,19],"105":[8,18,8,26],"113":[8,31,8,32],"121":[10,18,10,20],"129":[10,26,10,30],"137":[10,32,10,37],"145":[10,43,10,52],"153":[10,54,10,55],"161":[10,32,10,56],"163":[10,32,10,42],"169":[10,18,10,57],"171":[10,18,10,25],"177":[10,18,10,57],"185":[10,11,10,58],"193":[9,16,11,10],"201":[9,16,11,10],"209":[9,16,11,10],"217":[9,16,11,10],"225":[9,9,11,11],"233":[14,30,14,39],"241":[14,30,14,46],"249":[15,25,15,30],"257":[15,36,15,45],"265":[15,47,15,48],"273":[15,50,15,58],"281":[15,61,15,62],"289":[15,25,15,63],"291":[15,25,15,35],"297":[16,40,16,44],"305":[16,49,16,57],"313":[16,60,16,72],"321":[16,75,16,76],"329":[16,78,16,79],"337":[16,40,16,80],"339":[16,40,16,48],"345":[17,30,17,35],"353":[17,36,17,60],"361":[17,26,17,61],"369":[18,28,18,33],"377":[18,39,18,48],"385":[18,50,18,52],"393":[18,50,18,59],"401":[18,62,18,63],"409":[18,28,18,64],"411":[18,28,18,38],"417":[14,30,14,46],"425":[14,30,14,46],"433":[15,25,15,63],"441":[15,25,15,63],"449":[16,40,16,80],"457":[16,40,16,80],"465":[17,26,17,61],"473":[17,26,17,61],"481":[18,28,18,64],"489":[18,28,18,64],"497":[20,18,20,20],"505":[21,13,21,17],"513":[22,13,22,22],"521":[22,30,22,40],"529":[22,13,22,41],"531":[22,13,22,29],"537":[22,50,22,62],"545":[22,49,22,63],"553":[22,13,22,64],"555":[22,13,22,48],"561":[20,18,23,12],"563":[20,18,20,26],"569":[20,18,23,12],"577":[20,11,23,13],"585":[13,16,24,10],"593":[13,16,24,10],"601":[13,16,24,10],"609":[13,16,24,10],"617":[13,16,24,10],"625":[13,16,24,10],"633":[13,16,24,10],"641":[13,16,24,10],"649":[13,16,24,10],"657":[13,9,24,11],"665":[3,16,26,6],"673":[3,16,26,6],"681":[3,16,26,6],"689":[3,16,26,6],"697":[3,16,26,6],"705":[28,15,28,23],"713":[28,25,28,33],"721":[28,14,28,34],"729":[28,14,28,34],"737":[28,7,28,35],"745":[27,19,29,6],"753":[27,19,29,6],"761":[27,19,29,6],"769":[27,19,29,6],"777":[27,19,29,6],"785":[2,15,2,36],"793":[2,15,2,36],"801":[3,16,26,6],"809":[3,16,26,6],"817":[27,19,29,6],"825":[27,19,29,6],"833":[30,3,30,11],"841":[30,12,30,23],"849":[30,3,30,24],"857":[30,25,30,30],"865":[30,32,30,37],"873":[30,39,30,46],"881":[30,3,30,47],"889":[30,3,30,48],"897":[1,2,31,2],"905":[1,2,31,2],"913":[1,2,31,2],"921":[1,2,31,2],"929":[1,2,31,2],"937":[1,2,31,2],"945":[1,1,31,5],"953":[1,1,31,6],"961":[1,1,32,1],"969":[9,16,11,10],"977":[9,16,11,10],"985":[13,16,24,10],"993":[13,16,24,10],"1001":[8,14,25,8],"1009":[6,7,25,8],"1017":[3,16,26,6],"1025":[3,16,26,6],"1033":[27,19,29,6],"1041":[27,19,29,6],"1049":[1,2,31,2],"1057":[1,2,31,2],"1065":[1,1,32,1],"1073":[1,1,32,1],"nBranches":4,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexVariadic.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexVariadic_jalangi_.js","code":"(function () {\n  var slice = Array.prototype.slice,\n    variadic = function (fn) {\n      var fnLength = fn.length;\n\n      if (fnLength < 1) {\n        return fn;\n      } else if (fnLength === 1) {\n        return function () {\n          return fn.call(this, slice.call(arguments, 0));\n        };\n      } else {\n        return function () {\n          var numberOfArgs = arguments.length,\n            namedArgs = slice.call(arguments, 0, fnLength - 1),\n            numberOfMissingNamedArgs = Math.max(fnLength - numberOfArgs - 1, 0),\n            argPadding = new Array(numberOfMissingNamedArgs),\n            variadicArgs = slice.call(arguments, fn.length - 1);\n\n          return fn.apply(\n            this,\n            namedArgs.concat(argPadding).concat([variadicArgs])\n          );\n        };\n      }\n    },\n    ellipsisFun = function (firstArg, ellipsis) {\n      return [firstArg, ellipsis];\n    };\n  variadic(ellipsisFun)(\"one\", \"two\", \"three\"); // Returns [\"one\", [\"two\", \"three\"]]\n})();\n"};
jalangiLabel5:
    while (true) {
        try {
            J$.Se(961, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexVariadic_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexVariadic.js');
            J$.X1(953, J$.F(945, J$.T(937, function () {
                jalangiLabel4:
                    while (true) {
                        try {
                            J$.Fe(897, arguments.callee, this, arguments);
                            arguments = J$.N(905, 'arguments', arguments, 4);
                            J$.N(913, 'slice', slice, 0);
                            J$.N(921, 'variadic', variadic, 0);
                            J$.N(929, 'ellipsisFun', ellipsisFun, 0);
                            var slice = J$.X1(793, J$.W(785, 'slice', J$.G(25, J$.G(17, J$.R(9, 'Array', Array, 2), 'prototype', 0), 'slice', 0), slice, 1)), variadic = J$.X1(809, J$.W(801, 'variadic', J$.T(697, function (fn) {
                                    jalangiLabel2:
                                        while (true) {
                                            try {
                                                J$.Fe(665, arguments.callee, this, arguments);
                                                arguments = J$.N(673, 'arguments', arguments, 4);
                                                fn = J$.N(681, 'fn', fn, 4);
                                                J$.N(689, 'fnLength', fnLength, 0);
                                                var fnLength = J$.X1(57, J$.W(49, 'fnLength', J$.G(41, J$.R(33, 'fn', fn, 0), 'length', 0), fnLength, 1));
                                                if (J$.X1(1009, J$.C(16, J$.B(10, '<', J$.R(65, 'fnLength', fnLength, 0), J$.T(73, 1, 22, false), 0)))) {
                                                    return J$.X1(97, J$.Rt(89, J$.R(81, 'fn', fn, 0)));
                                                } else if (J$.X1(1001, J$.C(8, J$.B(18, '===', J$.R(105, 'fnLength', fnLength, 0), J$.T(113, 1, 22, false), 0)))) {
                                                    return J$.X1(225, J$.Rt(217, J$.T(209, function () {
                                                        jalangiLabel0:
                                                            while (true) {
                                                                try {
                                                                    J$.Fe(193, arguments.callee, this, arguments);
                                                                    arguments = J$.N(201, 'arguments', arguments, 4);
                                                                    return J$.X1(185, J$.Rt(177, J$.M(169, J$.R(121, 'fn', fn, 0), 'call', 0)(J$.R(129, 'this', this, 0), J$.M(161, J$.R(137, 'slice', slice, 0), 'call', 0)(J$.R(145, 'arguments', arguments, 2), J$.T(153, 0, 22, false)))));
                                                                } catch (J$e) {
                                                                    J$.Ex(969, J$e);
                                                                } finally {
                                                                    if (J$.Fr(977))
                                                                        continue jalangiLabel0;
                                                                    else
                                                                        return J$.Ra();
                                                                }
                                                            }
                                                    }, 12, false, 193)));
                                                } else {
                                                    return J$.X1(657, J$.Rt(649, J$.T(641, function () {
                                                        jalangiLabel1:
                                                            while (true) {
                                                                try {
                                                                    J$.Fe(585, arguments.callee, this, arguments);
                                                                    arguments = J$.N(593, 'arguments', arguments, 4);
                                                                    J$.N(601, 'numberOfArgs', numberOfArgs, 0);
                                                                    J$.N(609, 'namedArgs', namedArgs, 0);
                                                                    J$.N(617, 'numberOfMissingNamedArgs', numberOfMissingNamedArgs, 0);
                                                                    J$.N(625, 'argPadding', argPadding, 0);
                                                                    J$.N(633, 'variadicArgs', variadicArgs, 0);
                                                                    var numberOfArgs = J$.X1(425, J$.W(417, 'numberOfArgs', J$.G(241, J$.R(233, 'arguments', arguments, 2), 'length', 0), numberOfArgs, 1)), namedArgs = J$.X1(441, J$.W(433, 'namedArgs', J$.M(289, J$.R(249, 'slice', slice, 0), 'call', 0)(J$.R(257, 'arguments', arguments, 2), J$.T(265, 0, 22, false), J$.B(26, '-', J$.R(273, 'fnLength', fnLength, 0), J$.T(281, 1, 22, false), 0)), namedArgs, 1)), numberOfMissingNamedArgs = J$.X1(457, J$.W(449, 'numberOfMissingNamedArgs', J$.M(337, J$.R(297, 'Math', Math, 2), 'max', 0)(J$.B(42, '-', J$.B(34, '-', J$.R(305, 'fnLength', fnLength, 0), J$.R(313, 'numberOfArgs', numberOfArgs, 0), 0), J$.T(321, 1, 22, false), 0), J$.T(329, 0, 22, false)), numberOfMissingNamedArgs, 1)), argPadding = J$.X1(473, J$.W(465, 'argPadding', J$.F(361, J$.R(345, 'Array', Array, 2), 1)(J$.R(353, 'numberOfMissingNamedArgs', numberOfMissingNamedArgs, 0)), argPadding, 1)), variadicArgs = J$.X1(489, J$.W(481, 'variadicArgs', J$.M(409, J$.R(369, 'slice', slice, 0), 'call', 0)(J$.R(377, 'arguments', arguments, 2), J$.B(50, '-', J$.G(393, J$.R(385, 'fn', fn, 0), 'length', 0), J$.T(401, 1, 22, false), 0)), variadicArgs, 1));
                                                                    return J$.X1(577, J$.Rt(569, J$.M(561, J$.R(497, 'fn', fn, 0), 'apply', 0)(J$.R(505, 'this', this, 0), J$.M(553, J$.M(529, J$.R(513, 'namedArgs', namedArgs, 0), 'concat', 0)(J$.R(521, 'argPadding', argPadding, 0)), 'concat', 0)(J$.T(545, [J$.R(537, 'variadicArgs', variadicArgs, 0)], 10, false)))));
                                                                } catch (J$e) {
                                                                    J$.Ex(985, J$e);
                                                                } finally {
                                                                    if (J$.Fr(993))
                                                                        continue jalangiLabel1;
                                                                    else
                                                                        return J$.Ra();
                                                                }
                                                            }
                                                    }, 12, false, 585)));
                                                }
                                            } catch (J$e) {
                                                J$.Ex(1017, J$e);
                                            } finally {
                                                if (J$.Fr(1025))
                                                    continue jalangiLabel2;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 665), variadic, 1)), ellipsisFun = J$.X1(825, J$.W(817, 'ellipsisFun', J$.T(777, function (firstArg, ellipsis) {
                                    jalangiLabel3:
                                        while (true) {
                                            try {
                                                J$.Fe(745, arguments.callee, this, arguments);
                                                arguments = J$.N(753, 'arguments', arguments, 4);
                                                firstArg = J$.N(761, 'firstArg', firstArg, 4);
                                                ellipsis = J$.N(769, 'ellipsis', ellipsis, 4);
                                                return J$.X1(737, J$.Rt(729, J$.T(721, [
                                                    J$.R(705, 'firstArg', firstArg, 0),
                                                    J$.R(713, 'ellipsis', ellipsis, 0)
                                                ], 10, false)));
                                            } catch (J$e) {
                                                J$.Ex(1033, J$e);
                                            } finally {
                                                if (J$.Fr(1041))
                                                    continue jalangiLabel3;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 745), ellipsisFun, 1));
                            J$.X1(889, J$.F(881, J$.F(849, J$.R(833, 'variadic', variadic, 0), 0)(J$.R(841, 'ellipsisFun', ellipsisFun, 0)), 0)(J$.T(857, "one", 21, false), J$.T(865, "two", 21, false), J$.T(873, "three", 21, false)));
                        } catch (J$e) {
                            J$.Ex(1049, J$e);
                        } finally {
                            if (J$.Fr(1057))
                                continue jalangiLabel4;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 897), 0)());
        } catch (J$e) {
            J$.Ex(1065, J$e);
        } finally {
            if (J$.Sr(1073)) {
                J$.L();
                continue jalangiLabel5;
            } else {
                J$.L();
                break jalangiLabel5;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

J$.iids = {"9":[1,12,1,14],"10":[25,12,25,17],"17":[1,12,1,14],"25":[1,12,1,14],"33":[2,12,2,14],"41":[2,12,2,14],"49":[2,12,2,14],"57":[3,12,3,14],"65":[3,12,3,14],"73":[3,12,3,14],"81":[25,12,25,13],"89":[25,16,25,17],"97":[25,12,25,17],"105":[25,5,25,18],"113":[24,3,26,4],"121":[24,3,26,4],"129":[24,3,26,4],"137":[27,10,27,11],"145":[27,10,27,11],"153":[27,3,27,12],"161":[23,1,28,2],"169":[23,1,28,2],"177":[23,1,28,2],"185":[24,3,26,4],"193":[23,1,28,2],"201":[29,1,29,2],"209":[29,3,29,4],"217":[29,1,29,5],"225":[29,6,29,7],"233":[29,1,29,8],"241":[29,1,29,9],"249":[1,1,30,1],"257":[1,1,30,1],"265":[1,1,30,1],"273":[1,1,30,1],"281":[23,1,28,2],"289":[1,1,30,1],"297":[24,3,26,4],"305":[24,3,26,4],"313":[23,1,28,2],"321":[23,1,28,2],"329":[1,1,30,1],"337":[1,1,30,1],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexwala2.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexwala2_jalangi_.js","code":"var obj1 = {};\nvar obj2 = {};\nvar obj3 = {};\n/*obj1['x'] = function f1(f) { return \"obj1\" }  \nobj2['x'] = function f2(f) { return \"obj2\" }\nobj3['x'] = function f3(f) { return \"obj3\" }\nobj4['x'] = function f4(f) { return \"obj4\" }\nobj5['x'] = function f5(f) { return \"obj5\" }*/\n\n/*obj1={\n        x: function (f) { return \"obj1\" }  \n}\nobj2={\n        x: function (f) { return \"obj1\" }  \n}\nobj3={\n        x: function (f) { return \"obj1\" }  \n}*/\n\n//this.x=obj3[\"x\"]\n//this.x()\n\nfunction a(x) {\n  function b(y) {\n    return x + y;\n  }\n  return b;\n}\na(3)(4);\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(249, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexwala2_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexwala2.js');
            function a(x) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(161, arguments.callee, this, arguments);
                            function b(y) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(113, arguments.callee, this, arguments);
                                            arguments = J$.N(121, 'arguments', arguments, 4);
                                            y = J$.N(129, 'y', y, 4);
                                            return J$.X1(105, J$.Rt(97, J$.B(10, '+', J$.R(81, 'x', x, 0), J$.R(89, 'y', y, 0), 0)));
                                        } catch (J$e) {
                                            J$.Ex(297, J$e);
                                        } finally {
                                            if (J$.Fr(305))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(169, 'arguments', arguments, 4);
                            x = J$.N(177, 'x', x, 4);
                            b = J$.N(193, 'b', J$.T(185, b, 12, false, 113), 0);
                            return J$.X1(153, J$.Rt(145, J$.R(137, 'b', b, 0)));
                        } catch (J$e) {
                            J$.Ex(313, J$e);
                        } finally {
                            if (J$.Fr(321))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(257, 'obj1', obj1, 0);
            J$.N(265, 'obj2', obj2, 0);
            J$.N(273, 'obj3', obj3, 0);
            a = J$.N(289, 'a', J$.T(281, a, 12, false, 161), 0);
            var obj1 = J$.X1(25, J$.W(17, 'obj1', J$.T(9, {}, 11, false), obj1, 3));
            var obj2 = J$.X1(49, J$.W(41, 'obj2', J$.T(33, {}, 11, false), obj2, 3));
            var obj3 = J$.X1(73, J$.W(65, 'obj3', J$.T(57, {}, 11, false), obj3, 3));
            J$.X1(241, J$.F(233, J$.F(217, J$.R(201, 'a', a, 1), 0)(J$.T(209, 3, 22, false)), 0)(J$.T(225, 4, 22, false)));
        } catch (J$e) {
            J$.Ex(329, J$e);
        } finally {
            if (J$.Sr(337)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

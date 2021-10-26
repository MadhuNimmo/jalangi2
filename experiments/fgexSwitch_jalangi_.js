J$.iids = {"8":[8,9,8,19],"9":[1,18,1,20],"16":[9,8,9,11],"17":[1,18,1,20],"24":[12,8,12,11],"25":[1,18,1,20],"33":[3,10,3,13],"41":[3,10,3,13],"49":[3,3,3,14],"57":[2,1,4,2],"65":[2,1,4,2],"73":[6,10,6,13],"81":[6,10,6,13],"89":[6,3,6,14],"97":[5,1,7,2],"105":[5,1,7,2],"113":[8,9,8,19],"121":[10,5,10,6],"129":[10,5,10,8],"137":[10,5,10,9],"145":[9,8,9,11],"153":[13,5,13,6],"161":[13,5,13,8],"169":[13,5,13,9],"177":[12,8,12,11],"185":[16,5,16,6],"193":[16,5,16,8],"201":[16,5,16,9],"209":[1,1,18,1],"217":[1,1,18,1],"225":[2,1,4,2],"233":[1,1,18,1],"241":[5,1,7,2],"249":[1,1,18,1],"257":[2,1,4,2],"265":[2,1,4,2],"273":[5,1,7,2],"281":[5,1,7,2],"289":[8,9,8,19],"297":[9,8,9,11],"305":[12,8,12,11],"313":[1,1,18,1],"321":[1,1,18,1],"nBranches":6,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexSwitch.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexSwitch_jalangi_.js","code":"var expression = \"\";\nfunction f() {\n  return \"f\";\n}\nfunction g() {\n  return \"g\";\n}\nswitch (expression) {\n  case \"f\":\n    f();\n    break;\n  case \"g\":\n    g();\n    break;\n  default:\n    g();\n}\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(209, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexSwitch_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexSwitch.js');
            function f() {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(57, arguments.callee, this, arguments);
                            arguments = J$.N(65, 'arguments', arguments, 4);
                            return J$.X1(49, J$.Rt(41, J$.T(33, "f", 21, false)));
                        } catch (J$e) {
                            J$.Ex(257, J$e);
                        } finally {
                            if (J$.Fr(265))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function g() {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(97, arguments.callee, this, arguments);
                            arguments = J$.N(105, 'arguments', arguments, 4);
                            return J$.X1(89, J$.Rt(81, J$.T(73, "g", 21, false)));
                        } catch (J$e) {
                            J$.Ex(273, J$e);
                        } finally {
                            if (J$.Fr(281))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(217, 'expression', expression, 0);
            f = J$.N(233, 'f', J$.T(225, f, 12, false, 57), 0);
            g = J$.N(249, 'g', J$.T(241, g, 12, false, 97), 0);
            var expression = J$.X1(25, J$.W(17, 'expression', J$.T(9, "", 21, false), expression, 3));
            switch (J$.X1(289, J$.C1(8, J$.R(113, 'expression', expression, 1)))) {
            case J$.X1(297, J$.C2(16, J$.T(145, "f", 21, false))):
                J$.X1(137, J$.F(129, J$.R(121, 'f', f, 1), 0)());
                break;
            case J$.X1(305, J$.C2(24, J$.T(177, "g", 21, false))):
                J$.X1(169, J$.F(161, J$.R(153, 'g', g, 1), 0)());
                break;
            default:
                J$.X1(201, J$.F(193, J$.R(185, 'g', g, 1), 0)());
            }
        } catch (J$e) {
            J$.Ex(313, J$e);
        } finally {
            if (J$.Sr(321)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

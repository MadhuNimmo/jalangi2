J$.iids = {"9":[1,21,1,23],"10":[3,10,3,34],"17":[1,33,1,35],"25":[1,12,1,37],"33":[1,12,1,37],"41":[1,12,1,37],"49":[2,1,2,5],"57":[3,10,3,14],"65":[3,10,3,20],"73":[3,23,3,27],"81":[3,23,3,34],"89":[3,10,3,34],"97":[3,3,3,35],"105":[2,16,4,2],"113":[2,16,4,2],"121":[2,16,4,2],"129":[2,1,4,2],"137":[2,1,4,3],"145":[5,12,5,16],"153":[5,12,5,24],"161":[5,12,5,24],"169":[5,12,5,24],"177":[6,9,6,13],"185":[6,24,6,28],"193":[6,24,6,30],"201":[6,9,6,31],"203":[6,9,6,23],"209":[6,9,6,31],"217":[6,9,6,31],"225":[7,13,7,18],"233":[7,9,7,20],"241":[7,9,7,20],"249":[7,9,7,20],"257":[1,1,8,1],"265":[1,1,8,1],"273":[1,1,8,1],"281":[1,1,8,1],"289":[1,1,8,1],"297":[2,16,4,2],"305":[2,16,4,2],"313":[1,1,8,1],"321":[1,1,8,1],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexObj.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexObj_jalangi_.js","code":"var rect = { width: 20, height: 10 };\nrect.getArea = function () {\n  return this.width * this.height;\n};\nvar func = rect.getArea;\nvar x = JSON.stringify(func())\nvar y = new Array();\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(257, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexObj_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexObj.js');
            J$.N(265, 'rect', rect, 0);
            J$.N(273, 'func', func, 0);
            J$.N(281, 'x', x, 0);
            J$.N(289, 'y', y, 0);
            var rect = J$.X1(41, J$.W(33, 'rect', J$.T(25, {
                width: J$.T(9, 20, 22, false),
                height: J$.T(17, 10, 22, false)
            }, 11, false), rect, 3));
            J$.X1(137, J$.P(129, J$.R(49, 'rect', rect, 1), 'getArea', J$.T(121, function () {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(105, arguments.callee, this, arguments);
                            arguments = J$.N(113, 'arguments', arguments, 4);
                            return J$.X1(97, J$.Rt(89, J$.B(10, '*', J$.G(65, J$.R(57, 'this', this, 0), 'width', 0), J$.G(81, J$.R(73, 'this', this, 0), 'height', 0), 0)));
                        } catch (J$e) {
                            J$.Ex(297, J$e);
                        } finally {
                            if (J$.Fr(305))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 105), 0));
            var func = J$.X1(169, J$.W(161, 'func', J$.G(153, J$.R(145, 'rect', rect, 1), 'getArea', 0), func, 3));
            var x = J$.X1(217, J$.W(209, 'x', J$.M(201, J$.R(177, 'JSON', JSON, 2), 'stringify', 0)(J$.F(193, J$.R(185, 'func', func, 1), 0)()), x, 3));
            var y = J$.X1(249, J$.W(241, 'y', J$.F(233, J$.R(225, 'Array', Array, 2), 1)(), y, 3));
        } catch (J$e) {
            J$.Ex(313, J$e);
        } finally {
            if (J$.Sr(321)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

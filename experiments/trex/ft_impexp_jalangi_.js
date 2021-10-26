J$.iids = {"9":[1,10,1,23],"10":[3,11,3,21],"17":[1,10,1,23],"18":[3,10,3,27],"25":[1,10,1,23],"26":[6,10,6,20],"33":[3,11,3,17],"34":[6,10,6,25],"41":[3,20,3,21],"49":[3,25,3,27],"57":[3,10,3,27],"65":[3,3,3,28],"73":[2,1,4,2],"81":[2,1,4,2],"89":[2,1,4,2],"97":[6,10,6,11],"105":[6,14,6,20],"113":[6,23,6,25],"121":[6,10,6,25],"129":[6,3,6,26],"137":[5,1,7,2],"145":[5,1,7,2],"153":[5,1,7,2],"161":[8,1,8,5],"169":[8,6,8,7],"177":[8,1,8,8],"185":[8,1,8,8],"193":[1,1,8,8],"201":[1,1,8,8],"209":[2,1,4,2],"217":[1,1,8,8],"225":[5,1,7,2],"233":[1,1,8,8],"241":[2,1,4,2],"249":[2,1,4,2],"257":[5,1,7,2],"265":[5,1,7,2],"273":[1,1,8,8],"281":[1,1,8,8],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_impexp.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_impexp_jalangi_.js","code":"var PI = 3.14159265359;\nfunction area(radius) {\n  return (radius * 2) * PI;\n}\nfunction circumference(radius) {\n  return 2 * radius * PI;\n}\narea(2)"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(193, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_impexp_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_impexp.js');
            function area(radius) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(73, arguments.callee, this, arguments);
                            arguments = J$.N(81, 'arguments', arguments, 4);
                            radius = J$.N(89, 'radius', radius, 4);
                            return J$.X1(65, J$.Rt(57, J$.B(18, '*', J$.B(10, '*', J$.R(33, 'radius', radius, 0), J$.T(41, 2, 22, false), 0), J$.R(49, 'PI', PI, 1), 0)));
                        } catch (J$e) {
                            J$.Ex(241, J$e);
                        } finally {
                            if (J$.Fr(249))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function circumference(radius) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(137, arguments.callee, this, arguments);
                            arguments = J$.N(145, 'arguments', arguments, 4);
                            radius = J$.N(153, 'radius', radius, 4);
                            return J$.X1(129, J$.Rt(121, J$.B(34, '*', J$.B(26, '*', J$.T(97, 2, 22, false), J$.R(105, 'radius', radius, 0), 0), J$.R(113, 'PI', PI, 1), 0)));
                        } catch (J$e) {
                            J$.Ex(257, J$e);
                        } finally {
                            if (J$.Fr(265))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(201, 'PI', PI, 0);
            area = J$.N(217, 'area', J$.T(209, area, 12, false, 73), 0);
            circumference = J$.N(233, 'circumference', J$.T(225, circumference, 12, false, 137), 0);
            var PI = J$.X1(25, J$.W(17, 'PI', J$.T(9, 3.14159265359, 22, false), PI, 3));
            J$.X1(185, J$.F(177, J$.R(161, 'area', area, 1), 0)(J$.T(169, 2, 22, false)));
        } catch (J$e) {
            J$.Ex(273, J$e);
        } finally {
            if (J$.Sr(281)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

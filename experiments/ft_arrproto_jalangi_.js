J$.iids = {"9":[1,12,1,13],"17":[1,14,1,15],"25":[1,16,1,17],"33":[1,11,1,18],"41":[1,11,1,18],"49":[1,11,1,18],"57":[2,1,2,6],"65":[2,1,2,16],"73":[2,1,2,24],"81":[2,30,2,33],"89":[3,35,3,38],"97":[3,35,3,38],"105":[3,28,3,38],"113":[3,16,3,39],"121":[3,16,3,39],"129":[3,16,3,39],"137":[3,16,3,41],"145":[3,16,3,41],"153":[3,9,3,42],"161":[2,35,4,2],"169":[2,35,4,2],"177":[2,35,4,2],"185":[2,35,4,2],"193":[2,1,4,3],"195":[2,1,2,29],"201":[2,1,4,3],"209":[1,1,4,3],"217":[1,1,4,3],"225":[3,16,3,39],"233":[3,16,3,39],"241":[2,35,4,2],"249":[2,35,4,2],"257":[1,1,4,3],"265":[1,1,4,3],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/ft_arrproto.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/ft_arrproto_jalangi_.js","code":"var arr = [1,2,3] \nArray.prototype.forEach.call(arr, function(val){\n        return function(){ return val}();\n})"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(209, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/ft_arrproto_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/ft_arrproto.js');
            J$.N(217, 'arr', arr, 0);
            var arr = J$.X1(49, J$.W(41, 'arr', J$.T(33, [
                J$.T(9, 1, 22, false),
                J$.T(17, 2, 22, false),
                J$.T(25, 3, 22, false)
            ], 10, false), arr, 3));
            J$.X1(201, J$.M(193, J$.G(73, J$.G(65, J$.R(57, 'Array', Array, 2), 'prototype', 0), 'forEach', 0), 'call', 0)(J$.R(81, 'arr', arr, 1), J$.T(185, function (val) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(161, arguments.callee, this, arguments);
                            arguments = J$.N(169, 'arguments', arguments, 4);
                            val = J$.N(177, 'val', val, 4);
                            return J$.X1(153, J$.Rt(145, J$.F(137, J$.T(129, function () {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(113, arguments.callee, this, arguments);
                                            arguments = J$.N(121, 'arguments', arguments, 4);
                                            return J$.X1(105, J$.Rt(97, J$.R(89, 'val', val, 0)));
                                        } catch (J$e) {
                                            J$.Ex(225, J$e);
                                        } finally {
                                            if (J$.Fr(233))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 113), 0)()));
                        } catch (J$e) {
                            J$.Ex(241, J$e);
                        } finally {
                            if (J$.Fr(249))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 161)));
        } catch (J$e) {
            J$.Ex(257, J$e);
        } finally {
            if (J$.Sr(265)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

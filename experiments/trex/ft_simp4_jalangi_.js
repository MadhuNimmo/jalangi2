J$.iids = {"9":[3,9,3,16],"10":[7,13,7,21],"17":[3,9,3,16],"25":[2,14,4,10],"33":[2,14,4,10],"41":[2,14,4,10],"49":[1,5,5,2],"57":[1,5,5,2],"65":[1,1,5,2],"73":[6,9,6,12],"81":[6,13,6,18],"89":[6,9,6,19],"97":[6,9,6,19],"105":[6,9,6,19],"113":[7,9,7,12],"121":[7,13,7,17],"129":[7,18,7,21],"137":[7,9,7,22],"145":[7,9,7,22],"153":[7,9,7,22],"161":[8,1,8,2],"169":[8,1,8,4],"177":[8,1,8,5],"185":[9,1,9,2],"193":[9,1,9,4],"201":[9,1,9,5],"209":[1,1,9,5],"217":[1,1,9,5],"225":[1,1,9,5],"233":[2,14,4,10],"241":[2,14,4,10],"249":[1,1,9,5],"257":[1,1,9,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_simp4.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_simp4_jalangi_.js","code":"obj={\n        foo: function() { \n        return; \n        }\n}\nvar x = obj[\"foo\"];\nvar y = obj[\"fo\"+\"o\"];\nx();\ny();"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(209, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_simp4_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_simp4.js');
            J$.N(217, 'x', x, 0);
            J$.N(225, 'y', y, 0);
            J$.X1(65, obj = J$.W(57, 'obj', J$.T(49, {
                foo: J$.T(41, function () {
                    jalangiLabel0:
                        while (true) {
                            try {
                                J$.Fe(25, arguments.callee, this, arguments);
                                arguments = J$.N(33, 'arguments', arguments, 4);
                                return J$.X1(17, J$.Rt(9, undefined));
                            } catch (J$e) {
                                J$.Ex(233, J$e);
                            } finally {
                                if (J$.Fr(241))
                                    continue jalangiLabel0;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 25)
            }, 11, false), J$.I(typeof obj === 'undefined' ? undefined : obj), 4));
            var x = J$.X1(105, J$.W(97, 'x', J$.G(89, J$.R(73, 'obj', obj, 2), J$.T(81, "foo", 21, false), 4), x, 3));
            var y = J$.X1(153, J$.W(145, 'y', J$.G(137, J$.R(113, 'obj', obj, 2), J$.B(10, '+', J$.T(121, "fo", 21, false), J$.T(129, "o", 21, false), 0), 4), y, 3));
            J$.X1(177, J$.F(169, J$.R(161, 'x', x, 1), 0)());
            J$.X1(201, J$.F(193, J$.R(185, 'y', y, 1), 0)());
        } catch (J$e) {
            J$.Ex(249, J$e);
        } finally {
            if (J$.Sr(257)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

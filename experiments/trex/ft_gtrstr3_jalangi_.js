J$.iids = {"9":[2,19,2,27],"17":[5,18,5,22],"25":[5,18,5,31],"33":[5,18,5,31],"41":[5,11,5,32],"49":[4,20,6,10],"57":[4,20,6,10],"65":[9,11,9,15],"73":[9,27,9,32],"81":[9,11,9,32],"89":[9,11,9,33],"97":[8,20,10,10],"105":[8,20,10,10],"113":[8,20,10,10],"121":[1,13,11,8],"129":[1,13,11,8],"137":[1,13,11,8],"145":[13,1,13,6],"153":[13,17,13,34],"161":[13,1,13,34],"169":[13,1,13,35],"177":[14,1,14,6],"185":[14,1,14,14],"193":[14,1,14,15],"201":[1,1,14,15],"209":[1,1,14,15],"217":[4,20,6,10],"225":[4,20,6,10],"233":[8,20,10,10],"241":[8,20,10,10],"249":[1,1,14,15],"257":[1,1,14,15],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_gtrstr3.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_gtrstr3_jalangi_.js","code":"var shout = {\n        _message: \"HELLO!\",\n      \n        get message() {\n          return this._message;\n        },\n      \n        set message(value) {\n          this._message = value;\n        }\n      };\n      \nshout.message = \"This is sparta!\";\nshout.message;"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(201, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_gtrstr3_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_gtrstr3.js');
            J$.N(209, 'shout', shout, 0);
            var shout = J$.X1(137, J$.W(129, 'shout', J$.T(121, {
                _message: J$.T(9, "HELLO!", 21, false),
                get message() {
                    jalangiLabel0:
                        while (true) {
                            try {
                                J$.Fe(49, arguments.callee, this, arguments);
                                arguments = J$.N(57, 'arguments', arguments, 4);
                                return J$.X1(41, J$.Rt(33, J$.G(25, J$.R(17, 'this', this, 0), '_message', 0)));
                            } catch (J$e) {
                                J$.Ex(217, J$e);
                            } finally {
                                if (J$.Fr(225))
                                    continue jalangiLabel0;
                                else
                                    return J$.Ra();
                            }
                        }
                },
                set message(value) {
                    jalangiLabel1:
                        while (true) {
                            try {
                                J$.Fe(97, arguments.callee, this, arguments);
                                arguments = J$.N(105, 'arguments', arguments, 4);
                                value = J$.N(113, 'value', value, 4);
                                J$.X1(89, J$.P(81, J$.R(65, 'this', this, 0), '_message', J$.R(73, 'value', value, 0), 0));
                            } catch (J$e) {
                                J$.Ex(233, J$e);
                            } finally {
                                if (J$.Fr(241))
                                    continue jalangiLabel1;
                                else
                                    return J$.Ra();
                            }
                        }
                }
            }, 11, true), shout, 3));
            J$.X1(169, J$.P(161, J$.R(145, 'shout', shout, 1), 'message', J$.T(153, "This is sparta!", 21, false), 0));
            J$.X1(193, J$.G(185, J$.R(177, 'shout', shout, 1), 'message', 0));
        } catch (J$e) {
            J$.Ex(249, J$e);
        } finally {
            if (J$.Sr(257)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

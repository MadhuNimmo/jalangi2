J$.iids = {"9":[2,8,2,10],"17":[4,5,4,9],"25":[4,5,4,13],"33":[4,19,4,23],"41":[4,5,4,24],"43":[4,5,4,18],"49":[4,5,4,25],"57":[3,14,5,4],"65":[3,14,5,4],"73":[3,14,5,4],"81":[7,12,7,16],"89":[7,12,7,20],"97":[7,12,7,20],"105":[7,5,7,21],"113":[6,14,8,4],"121":[6,14,8,4],"129":[1,16,9,2],"137":[1,16,9,2],"145":[1,16,9,2],"153":[10,1,10,9],"161":[10,20,10,24],"169":[10,1,10,24],"177":[10,1,10,25],"185":[11,1,11,9],"193":[11,1,11,17],"201":[11,1,11,18],"209":[1,1,12,1],"217":[1,1,12,1],"225":[3,14,5,4],"233":[3,14,5,4],"241":[6,14,8,4],"249":[6,14,8,4],"257":[1,1,12,1],"265":[1,1,12,1],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex6.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex6_jalangi_.js","code":"var language = {\n  log: [],\n  set current(name) {\n    this.log.push(name);\n  },\n  get current() {\n    return this.log;\n  },\n};\nlanguage.current = \"EN\";\nlanguage.current;\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(209, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex6_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgex6.js');
            J$.N(217, 'language', language, 0);
            var language = J$.X1(145, J$.W(137, 'language', J$.T(129, {
                log: J$.T(9, [], 10, false),
                set current(name) {
                    jalangiLabel0:
                        while (true) {
                            try {
                                J$.Fe(57, arguments.callee, this, arguments);
                                arguments = J$.N(65, 'arguments', arguments, 4);
                                name = J$.N(73, 'name', name, 4);
                                J$.X1(49, J$.M(41, J$.G(25, J$.R(17, 'this', this, 0), 'log', 0), 'push', 0)(J$.R(33, 'name', name, 0)));
                            } catch (J$e) {
                                J$.Ex(225, J$e);
                            } finally {
                                if (J$.Fr(233))
                                    continue jalangiLabel0;
                                else
                                    return J$.Ra();
                            }
                        }
                },
                get current() {
                    jalangiLabel1:
                        while (true) {
                            try {
                                J$.Fe(113, arguments.callee, this, arguments);
                                arguments = J$.N(121, 'arguments', arguments, 4);
                                return J$.X1(105, J$.Rt(97, J$.G(89, J$.R(81, 'this', this, 0), 'log', 0)));
                            } catch (J$e) {
                                J$.Ex(241, J$e);
                            } finally {
                                if (J$.Fr(249))
                                    continue jalangiLabel1;
                                else
                                    return J$.Ra();
                            }
                        }
                }
            }, 11, true), language, 3));
            J$.X1(177, J$.P(169, J$.R(153, 'language', language, 1), 'current', J$.T(161, "EN", 21, false), 0));
            J$.X1(201, J$.G(193, J$.R(185, 'language', language, 1), 'current', 0));
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

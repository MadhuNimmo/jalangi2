J$.iids = {"9":[2,13,2,22],"17":[4,12,4,16],"25":[4,12,4,25],"33":[4,12,4,25],"41":[4,5,4,26],"49":[3,16,5,4],"57":[3,16,5,4],"65":[3,16,5,4],"73":[3,16,5,4],"81":[1,11,6,2],"89":[1,11,6,2],"97":[1,11,6,2],"105":[8,15,8,21],"113":[8,29,8,32],"121":[8,15,8,33],"123":[8,15,8,28],"129":[8,15,8,33],"137":[8,15,8,33],"145":[9,1,9,8],"153":[9,1,9,22],"155":[9,1,9,20],"161":[9,1,9,23],"169":[1,1,10,1],"177":[1,1,10,1],"185":[1,1,10,1],"193":[3,16,5,4],"201":[3,16,5,4],"209":[1,1,10,1],"217":[1,1,10,1],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/exampleObj.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/exampleObj_jalangi_.js","code":"var job = {\n  position: \"cashier\",\n  showDetails: function showDetails() {\n    return this.position;\n  },\n};\n\nvar barista = Object.create(job);\nbarista.showDetails();\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(169, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/exampleObj_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/exampleObj.js');
            J$.N(177, 'job', job, 0);
            J$.N(185, 'barista', barista, 0);
            var job = J$.X1(97, J$.W(89, 'job', J$.T(81, {
                position: J$.T(9, "cashier", 21, false),
                showDetails: J$.T(73, function showDetails() {
                    jalangiLabel0:
                        while (true) {
                            try {
                                J$.Fe(49, arguments.callee, this, arguments);
                                arguments = J$.N(57, 'arguments', arguments, 4);
                                showDetails = J$.N(65, 'showDetails', showDetails, 0);
                                return J$.X1(41, J$.Rt(33, J$.G(25, J$.R(17, 'this', this, 0), 'position', 0)));
                            } catch (J$e) {
                                J$.Ex(193, J$e);
                            } finally {
                                if (J$.Fr(201))
                                    continue jalangiLabel0;
                                else
                                    return J$.Ra();
                            }
                        }
                }, 12, false, 49)
            }, 11, false), job, 3));
            var barista = J$.X1(137, J$.W(129, 'barista', J$.M(121, J$.R(105, 'Object', Object, 2), 'create', 0)(J$.R(113, 'job', job, 1)), barista, 3));
            J$.X1(161, J$.M(153, J$.R(145, 'barista', barista, 1), 'showDetails', 0)());
        } catch (J$e) {
            J$.Ex(209, J$e);
        } finally {
            if (J$.Sr(217)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

J$.iids = {"9":[2,9,2,13],"17":[2,20,2,23],"25":[2,9,2,23],"33":[2,9,2,24],"41":[3,9,3,13],"49":[3,22,3,27],"57":[3,9,3,27],"65":[3,9,3,28],"73":[4,9,4,13],"81":[4,21,4,25],"89":[4,9,4,25],"97":[4,9,4,26],"105":[1,1,5,2],"113":[1,1,5,2],"121":[1,1,5,2],"129":[1,1,5,2],"137":[1,1,5,2],"145":[7,9,7,13],"153":[7,20,7,23],"161":[7,9,7,23],"169":[7,9,7,24],"177":[8,9,8,13],"185":[8,22,8,27],"193":[8,9,8,27],"201":[8,9,8,28],"209":[6,1,9,2],"217":[6,1,9,2],"225":[6,1,9,2],"233":[6,1,9,2],"241":[11,16,11,19],"249":[11,39,11,46],"257":[11,39,11,46],"265":[11,32,11,46],"273":[11,20,11,47],"281":[11,20,11,47],"289":[11,20,11,47],"297":[11,49,11,60],"305":[11,62,11,66],"313":[11,12,11,67],"321":[11,12,11,67],"329":[11,12,11,67],"337":[12,16,12,19],"345":[12,39,12,46],"353":[12,39,12,46],"361":[12,32,12,46],"369":[12,20,12,47],"377":[12,20,12,47],"385":[12,20,12,47],"393":[12,49,12,60],"401":[12,62,12,66],"409":[12,12,12,67],"417":[12,12,12,67],"425":[12,12,12,67],"433":[13,17,13,21],"441":[13,41,13,49],"449":[13,41,13,49],"457":[13,34,13,49],"465":[13,22,13,50],"473":[13,22,13,50],"481":[13,22,13,50],"489":[13,52,13,63],"497":[13,13,13,64],"505":[13,13,13,64],"513":[13,13,13,64],"521":[14,1,14,5],"529":[14,1,14,11],"531":[14,1,14,9],"537":[14,1,14,12],"545":[15,1,15,6],"553":[15,1,15,12],"555":[15,1,15,10],"561":[15,1,15,13],"569":[1,1,15,13],"577":[1,1,5,2],"585":[1,1,15,13],"593":[6,1,9,2],"601":[1,1,15,13],"609":[1,1,15,13],"617":[1,1,15,13],"625":[1,1,15,13],"633":[1,1,5,2],"641":[1,1,5,2],"649":[6,1,9,2],"657":[6,1,9,2],"665":[11,20,11,47],"673":[11,20,11,47],"681":[12,20,12,47],"689":[12,20,12,47],"697":[13,22,13,50],"705":[13,22,13,50],"713":[1,1,15,13],"721":[1,1,15,13],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_newop.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_newop_jalangi_.js","code":"function Car(get, model, year) {\n        this.get = get;\n        this.model = model;\n        this.year = year;\n}\nfunction Bike(get, model) {\n        this.get = get;\n        this.model = model;\n}\n        \nvar car1 = new Car(function(){ return 'Eagle'}, 'Talon TSi', 1993);\nvar car2 = new Car(function(){ return 'Eagle'}, 'Talon TSi', 1994);\nvar bike1 = new Bike(function(){ return 'Harley'}, 'Talon TSi');\ncar1.get();\nbike1.get();"};
jalangiLabel5:
    while (true) {
        try {
            J$.Se(569, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_newop_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_newop.js');
            function Car(get, model, year) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(105, arguments.callee, this, arguments);
                            arguments = J$.N(113, 'arguments', arguments, 4);
                            get = J$.N(121, 'get', get, 4);
                            model = J$.N(129, 'model', model, 4);
                            year = J$.N(137, 'year', year, 4);
                            J$.X1(33, J$.P(25, J$.R(9, 'this', this, 0), 'get', J$.R(17, 'get', get, 0), 0));
                            J$.X1(65, J$.P(57, J$.R(41, 'this', this, 0), 'model', J$.R(49, 'model', model, 0), 0));
                            J$.X1(97, J$.P(89, J$.R(73, 'this', this, 0), 'year', J$.R(81, 'year', year, 0), 0));
                        } catch (J$e) {
                            J$.Ex(633, J$e);
                        } finally {
                            if (J$.Fr(641))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function Bike(get, model) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(209, arguments.callee, this, arguments);
                            arguments = J$.N(217, 'arguments', arguments, 4);
                            get = J$.N(225, 'get', get, 4);
                            model = J$.N(233, 'model', model, 4);
                            J$.X1(169, J$.P(161, J$.R(145, 'this', this, 0), 'get', J$.R(153, 'get', get, 0), 0));
                            J$.X1(201, J$.P(193, J$.R(177, 'this', this, 0), 'model', J$.R(185, 'model', model, 0), 0));
                        } catch (J$e) {
                            J$.Ex(649, J$e);
                        } finally {
                            if (J$.Fr(657))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            Car = J$.N(585, 'Car', J$.T(577, Car, 12, false, 105), 0);
            Bike = J$.N(601, 'Bike', J$.T(593, Bike, 12, false, 209), 0);
            J$.N(609, 'car1', car1, 0);
            J$.N(617, 'car2', car2, 0);
            J$.N(625, 'bike1', bike1, 0);
            var car1 = J$.X1(329, J$.W(321, 'car1', J$.F(313, J$.R(241, 'Car', Car, 1), 1)(J$.T(289, function () {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(273, arguments.callee, this, arguments);
                            arguments = J$.N(281, 'arguments', arguments, 4);
                            return J$.X1(265, J$.Rt(257, J$.T(249, 'Eagle', 21, false)));
                        } catch (J$e) {
                            J$.Ex(665, J$e);
                        } finally {
                            if (J$.Fr(673))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 273), J$.T(297, 'Talon TSi', 21, false), J$.T(305, 1993, 22, false)), car1, 3));
            var car2 = J$.X1(425, J$.W(417, 'car2', J$.F(409, J$.R(337, 'Car', Car, 1), 1)(J$.T(385, function () {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(369, arguments.callee, this, arguments);
                            arguments = J$.N(377, 'arguments', arguments, 4);
                            return J$.X1(361, J$.Rt(353, J$.T(345, 'Eagle', 21, false)));
                        } catch (J$e) {
                            J$.Ex(681, J$e);
                        } finally {
                            if (J$.Fr(689))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 369), J$.T(393, 'Talon TSi', 21, false), J$.T(401, 1994, 22, false)), car2, 3));
            var bike1 = J$.X1(513, J$.W(505, 'bike1', J$.F(497, J$.R(433, 'Bike', Bike, 1), 1)(J$.T(481, function () {
                jalangiLabel4:
                    while (true) {
                        try {
                            J$.Fe(465, arguments.callee, this, arguments);
                            arguments = J$.N(473, 'arguments', arguments, 4);
                            return J$.X1(457, J$.Rt(449, J$.T(441, 'Harley', 21, false)));
                        } catch (J$e) {
                            J$.Ex(697, J$e);
                        } finally {
                            if (J$.Fr(705))
                                continue jalangiLabel4;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 465), J$.T(489, 'Talon TSi', 21, false)), bike1, 3));
            J$.X1(537, J$.M(529, J$.R(521, 'car1', car1, 1), 'get', 0)());
            J$.X1(561, J$.M(553, J$.R(545, 'bike1', bike1, 1), 'get', 0)());
        } catch (J$e) {
            J$.Ex(713, J$e);
        } finally {
            if (J$.Sr(721)) {
                J$.L();
                continue jalangiLabel5;
            } else {
                J$.L();
                break jalangiLabel5;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

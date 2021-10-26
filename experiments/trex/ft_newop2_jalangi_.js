J$.iids = {"9":[2,16,2,20],"10":[2,16,2,26],"17":[2,16,2,22],"18":[2,16,2,32],"25":[2,23,2,26],"26":[2,16,2,36],"33":[2,27,2,32],"34":[2,16,2,41],"41":[2,33,2,36],"42":[5,16,5,26],"49":[2,37,2,41],"50":[5,16,5,32],"57":[2,16,2,41],"58":[5,16,5,36],"65":[2,9,2,41],"66":[5,16,5,41],"73":[1,1,3,10],"81":[1,1,3,10],"89":[1,1,3,10],"97":[1,1,3,10],"105":[1,1,3,10],"113":[5,16,5,20],"121":[5,16,5,22],"129":[5,23,5,26],"137":[5,27,5,32],"145":[5,33,5,36],"153":[5,37,5,41],"161":[5,16,5,41],"169":[5,9,5,41],"177":[4,1,6,10],"185":[4,1,6,10],"193":[4,1,6,10],"201":[4,1,6,10],"209":[4,1,6,10],"217":[8,12,8,15],"225":[8,35,8,42],"233":[8,35,8,42],"241":[8,28,8,42],"249":[8,16,8,43],"257":[8,16,8,43],"265":[8,16,8,43],"273":[8,45,8,56],"281":[8,58,8,62],"289":[8,12,8,63],"297":[8,12,8,63],"305":[8,12,8,63],"313":[9,12,9,15],"321":[9,35,9,42],"329":[9,35,9,42],"337":[9,28,9,42],"345":[9,16,9,43],"353":[9,16,9,43],"361":[9,16,9,43],"369":[9,45,9,56],"377":[9,58,9,62],"385":[9,12,9,63],"393":[9,12,9,63],"401":[9,12,9,63],"409":[10,13,10,17],"417":[10,37,10,45],"425":[10,37,10,45],"433":[10,30,10,45],"441":[10,18,10,46],"449":[10,18,10,46],"457":[10,18,10,46],"465":[10,48,10,59],"473":[10,61,10,65],"481":[10,13,10,66],"489":[10,13,10,66],"497":[10,13,10,66],"505":[1,1,10,67],"513":[1,1,3,10],"521":[1,1,10,67],"529":[4,1,6,10],"537":[1,1,10,67],"545":[1,1,10,67],"553":[1,1,10,67],"561":[1,1,10,67],"569":[1,1,3,10],"577":[1,1,3,10],"585":[4,1,6,10],"593":[4,1,6,10],"601":[8,16,8,43],"609":[8,16,8,43],"617":[9,16,9,43],"625":[9,16,9,43],"633":[10,18,10,46],"641":[10,18,10,46],"649":[1,1,10,67],"657":[1,1,10,67],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_newop2.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_newop2_jalangi_.js","code":"function Car(make, model, year) {\n        return make()+\" \"+model+\" \"+year\n        }\nfunction Bike(make, model, year) {\n        return make()+\" \"+model+\" \"+year\n        }\n                \nvar car1 = Car(function(){ return 'Eagle'}, 'Talon TSi', 1993);\nvar car2 = Car(function(){ return 'Eagle'}, 'Talon TSi', 1994);\nvar bike1 = Bike(function(){ return 'Harley'}, 'Talon TSi', 1993);"};
jalangiLabel5:
    while (true) {
        try {
            J$.Se(505, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_newop2_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_newop2.js');
            function Car(make, model, year) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(73, arguments.callee, this, arguments);
                            arguments = J$.N(81, 'arguments', arguments, 4);
                            make = J$.N(89, 'make', make, 4);
                            model = J$.N(97, 'model', model, 4);
                            year = J$.N(105, 'year', year, 4);
                            return J$.X1(65, J$.Rt(57, J$.B(34, '+', J$.B(26, '+', J$.B(18, '+', J$.B(10, '+', J$.F(17, J$.R(9, 'make', make, 0), 0)(), J$.T(25, " ", 21, false), 0), J$.R(33, 'model', model, 0), 0), J$.T(41, " ", 21, false), 0), J$.R(49, 'year', year, 0), 0)));
                        } catch (J$e) {
                            J$.Ex(569, J$e);
                        } finally {
                            if (J$.Fr(577))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function Bike(make, model, year) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(177, arguments.callee, this, arguments);
                            arguments = J$.N(185, 'arguments', arguments, 4);
                            make = J$.N(193, 'make', make, 4);
                            model = J$.N(201, 'model', model, 4);
                            year = J$.N(209, 'year', year, 4);
                            return J$.X1(169, J$.Rt(161, J$.B(66, '+', J$.B(58, '+', J$.B(50, '+', J$.B(42, '+', J$.F(121, J$.R(113, 'make', make, 0), 0)(), J$.T(129, " ", 21, false), 0), J$.R(137, 'model', model, 0), 0), J$.T(145, " ", 21, false), 0), J$.R(153, 'year', year, 0), 0)));
                        } catch (J$e) {
                            J$.Ex(585, J$e);
                        } finally {
                            if (J$.Fr(593))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            Car = J$.N(521, 'Car', J$.T(513, Car, 12, false, 73), 0);
            Bike = J$.N(537, 'Bike', J$.T(529, Bike, 12, false, 177), 0);
            J$.N(545, 'car1', car1, 0);
            J$.N(553, 'car2', car2, 0);
            J$.N(561, 'bike1', bike1, 0);
            var car1 = J$.X1(305, J$.W(297, 'car1', J$.F(289, J$.R(217, 'Car', Car, 1), 0)(J$.T(265, function () {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(249, arguments.callee, this, arguments);
                            arguments = J$.N(257, 'arguments', arguments, 4);
                            return J$.X1(241, J$.Rt(233, J$.T(225, 'Eagle', 21, false)));
                        } catch (J$e) {
                            J$.Ex(601, J$e);
                        } finally {
                            if (J$.Fr(609))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 249), J$.T(273, 'Talon TSi', 21, false), J$.T(281, 1993, 22, false)), car1, 3));
            var car2 = J$.X1(401, J$.W(393, 'car2', J$.F(385, J$.R(313, 'Car', Car, 1), 0)(J$.T(361, function () {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(345, arguments.callee, this, arguments);
                            arguments = J$.N(353, 'arguments', arguments, 4);
                            return J$.X1(337, J$.Rt(329, J$.T(321, 'Eagle', 21, false)));
                        } catch (J$e) {
                            J$.Ex(617, J$e);
                        } finally {
                            if (J$.Fr(625))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 345), J$.T(369, 'Talon TSi', 21, false), J$.T(377, 1994, 22, false)), car2, 3));
            var bike1 = J$.X1(497, J$.W(489, 'bike1', J$.F(481, J$.R(409, 'Bike', Bike, 1), 0)(J$.T(457, function () {
                jalangiLabel4:
                    while (true) {
                        try {
                            J$.Fe(441, arguments.callee, this, arguments);
                            arguments = J$.N(449, 'arguments', arguments, 4);
                            return J$.X1(433, J$.Rt(425, J$.T(417, 'Harley', 21, false)));
                        } catch (J$e) {
                            J$.Ex(633, J$e);
                        } finally {
                            if (J$.Fr(641))
                                continue jalangiLabel4;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 441), J$.T(465, 'Talon TSi', 21, false), J$.T(473, 1993, 22, false)), bike1, 3));
        } catch (J$e) {
            J$.Ex(649, J$e);
        } finally {
            if (J$.Sr(657)) {
                J$.L();
                continue jalangiLabel5;
            } else {
                J$.L();
                break jalangiLabel5;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

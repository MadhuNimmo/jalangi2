J$.iids = {"9":[2,3,2,7],"10":[5,12,5,38],"17":[2,15,2,19],"18":[5,12,5,52],"25":[2,3,2,19],"33":[2,3,2,20],"41":[3,3,3,7],"49":[3,17,3,23],"57":[3,3,3,23],"65":[3,3,3,24],"73":[4,3,4,7],"81":[5,12,5,16],"89":[5,12,5,21],"97":[5,24,5,38],"105":[5,41,5,45],"113":[5,41,5,52],"121":[5,12,5,52],"129":[5,5,5,53],"137":[4,21,6,4],"145":[4,21,6,4],"153":[4,21,6,4],"161":[4,3,6,4],"169":[4,3,6,5],"177":[1,1,7,2],"185":[1,1,7,2],"193":[1,1,7,2],"201":[1,1,7,2],"209":[8,16,8,20],"217":[8,21,8,30],"225":[8,32,8,44],"233":[8,12,8,45],"241":[8,12,8,45],"249":[8,12,8,45],"257":[9,1,9,5],"265":[9,1,9,18],"267":[9,1,9,16],"273":[9,1,9,19],"281":[1,1,10,1],"289":[1,1,7,2],"297":[1,1,10,1],"305":[1,1,10,1],"313":[4,21,6,4],"321":[4,21,6,4],"329":[1,1,7,2],"337":[1,1,7,2],"345":[1,1,10,1],"353":[1,1,10,1],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexFunAsObj.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexFunAsObj_jalangi_.js","code":"function Book(type, author) {\n  this.type = type;\n  this.author = author;\n  this.getDetails = function () {\n    return this.type + \" written by \" + this.author;\n  };\n}\nvar book = new Book(\"Fiction\", \"Peter King\");\nbook.getDetails(); // => Fiction written by Peter King\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(281, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexFunAsObj_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/fgexFunAsObj.js');
            function Book(type, author) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(177, arguments.callee, this, arguments);
                            arguments = J$.N(185, 'arguments', arguments, 4);
                            type = J$.N(193, 'type', type, 4);
                            author = J$.N(201, 'author', author, 4);
                            J$.X1(33, J$.P(25, J$.R(9, 'this', this, 0), 'type', J$.R(17, 'type', type, 0), 0));
                            J$.X1(65, J$.P(57, J$.R(41, 'this', this, 0), 'author', J$.R(49, 'author', author, 0), 0));
                            J$.X1(169, J$.P(161, J$.R(73, 'this', this, 0), 'getDetails', J$.T(153, function () {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(137, arguments.callee, this, arguments);
                                            arguments = J$.N(145, 'arguments', arguments, 4);
                                            return J$.X1(129, J$.Rt(121, J$.B(18, '+', J$.B(10, '+', J$.G(89, J$.R(81, 'this', this, 0), 'type', 0), J$.T(97, " written by ", 21, false), 0), J$.G(113, J$.R(105, 'this', this, 0), 'author', 0), 0)));
                                        } catch (J$e) {
                                            J$.Ex(313, J$e);
                                        } finally {
                                            if (J$.Fr(321))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 137), 0));
                        } catch (J$e) {
                            J$.Ex(329, J$e);
                        } finally {
                            if (J$.Fr(337))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            Book = J$.N(297, 'Book', J$.T(289, Book, 12, false, 177), 0);
            J$.N(305, 'book', book, 0);
            var book = J$.X1(249, J$.W(241, 'book', J$.F(233, J$.R(209, 'Book', Book, 1), 1)(J$.T(217, "Fiction", 21, false), J$.T(225, "Peter King", 21, false)), book, 3));
            J$.X1(273, J$.M(265, J$.R(257, 'book', book, 1), 'getDetails', 0)());
        } catch (J$e) {
            J$.Ex(345, J$e);
        } finally {
            if (J$.Sr(353)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

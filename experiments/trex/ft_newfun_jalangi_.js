J$.ast_info = ["evalIndirect:/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_newfun_orig_.js@16:17:16:41"];
J$.iids = {"9":[15,19,15,25],"17":[15,26,15,27],"25":[15,19,15,28],"33":[15,19,15,28],"41":[15,19,15,28],"49":[16,21,16,29],"57":[16,30,16,40],"65":[16,17,16,41],"73":[16,17,16,41],"81":[16,17,16,41],"89":[17,9,17,10],"97":[17,9,17,12],"105":[17,9,17,13],"113":[14,1,18,2],"121":[14,1,18,2],"129":[14,1,18,2],"137":[14,1,18,2],"145":[19,1,19,2],"153":[19,1,19,4],"161":[19,1,19,5],"169":[1,1,19,5],"177":[14,1,18,2],"185":[1,1,19,5],"193":[14,1,18,2],"201":[14,1,18,2],"209":[1,1,19,5],"217":[1,1,19,5],"nBranches":0,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_newfun.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_newfun_jalangi_.js","code":"//var reg = require('./ft_newreg.js');\n/*(function(){\nvar str = Number(1);\nvar ob = {\"a\":\"x\"}\nvar obj = Object.keys(ob)\nvar x = new Function('return 2');\nvar z = \"length\" in Object(obj) && obj.length;\nx();\nvar getPrototypeOf = Object.getPrototypeOf\nvar a = getPrototypeOf(obj);\n//console.log(\"hey ya\")\n})()\n*/\nfunction y(){\n        var str = Number(1);\n        var x = new Function('return 2');\n        x();\n}\ny();"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(169, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_newfun_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_newfun.js');
            function y() {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(113, arguments.callee, this, arguments);
                            arguments = J$.N(121, 'arguments', arguments, 4);
                            J$.N(129, 'str', str, 0);
                            J$.N(137, 'x', x, 0);
                            var str = J$.X1(41, J$.W(33, 'str', J$.F(25, J$.R(9, 'Number', Number, 2), 0)(J$.T(17, 1, 22, false)), str, 1));
                            var x = J$.X1(81, J$.W(73, 'x', J$.F(65, J$.R(49, 'Function', Function, 2), 1)(J$.T(57, 'return 2', 21, false)), x, 1));
                            J$.X1(105, J$.F(97, J$.R(89, 'x', x, 0), 0)());
                        } catch (J$e) {
                            J$.Ex(193, J$e);
                        } finally {
                            if (J$.Fr(201))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            y = J$.N(185, 'y', J$.T(177, y, 12, false, 113), 0);
            J$.X1(161, J$.F(153, J$.R(145, 'y', y, 1), 0)());
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

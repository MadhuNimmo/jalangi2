J$.iids = {"8":[4,9,4,18],"9":[1,14,1,21],"16":[5,6,5,14],"17":[1,14,1,26],"24":[8,6,8,18],"25":[1,33,1,34],"33":[1,14,1,35],"35":[1,14,1,32],"41":[1,14,1,35],"49":[1,14,1,35],"57":[2,1,2,8],"65":[2,13,2,23],"73":[2,25,2,31],"81":[2,1,2,32],"83":[2,1,2,12],"89":[2,1,2,33],"97":[4,9,4,15],"105":[4,16,4,17],"113":[4,9,4,18],"121":[6,5,6,12],"129":[6,17,6,23],"137":[6,24,6,25],"145":[6,17,6,26],"153":[6,28,6,49],"161":[6,5,6,50],"163":[6,5,6,16],"169":[6,5,6,51],"177":[5,6,5,14],"185":[9,5,9,12],"193":[9,17,9,23],"201":[9,24,9,25],"209":[9,17,9,26],"217":[9,28,9,45],"225":[9,5,9,46],"227":[9,5,9,16],"233":[9,5,9,47],"241":[8,6,8,18],"249":[12,5,12,12],"257":[12,17,12,65],"265":[12,5,12,66],"267":[12,5,12,16],"273":[12,5,12,67],"281":[1,1,13,2],"289":[1,1,13,2],"297":[4,9,4,18],"305":[5,6,5,14],"313":[8,6,8,18],"321":[1,1,13,2],"329":[1,1,13,2],"nBranches":6,"originalCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_args.js","instrumentedCodeFileName":"/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_args_jalangi_.js","code":"var myArgs = process.argv.slice(2);\nconsole.log('myArgs: ', myArgs);\n\nswitch (myArgs[0]) {\ncase 'insult':\n    console.log(myArgs[1], 'smells quite badly.');\n    break;\ncase 'compliment':\n    console.log(myArgs[1], 'is really cool.');\n    break;\ndefault:\n    console.log('Sorry, that is not something I know how to do.');\n}"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(281, '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_args_jalangi_.js', '/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_args.js');
            J$.N(289, 'myArgs', myArgs, 0);
            var myArgs = J$.X1(49, J$.W(41, 'myArgs', J$.M(33, J$.G(17, J$.R(9, 'process', process, 2), 'argv', 0), 'slice', 0)(J$.T(25, 2, 22, false)), myArgs, 3));
            J$.X1(89, J$.M(81, J$.R(57, 'console', console, 2), 'log', 0)(J$.T(65, 'myArgs: ', 21, false), J$.R(73, 'myArgs', myArgs, 1)));
            switch (J$.X1(297, J$.C1(8, J$.G(113, J$.R(97, 'myArgs', myArgs, 1), J$.T(105, 0, 22, false), 4)))) {
            case J$.X1(305, J$.C2(16, J$.T(177, 'insult', 21, false))):
                J$.X1(169, J$.M(161, J$.R(121, 'console', console, 2), 'log', 0)(J$.G(145, J$.R(129, 'myArgs', myArgs, 1), J$.T(137, 1, 22, false), 4), J$.T(153, 'smells quite badly.', 21, false)));
                break;
            case J$.X1(313, J$.C2(24, J$.T(241, 'compliment', 21, false))):
                J$.X1(233, J$.M(225, J$.R(185, 'console', console, 2), 'log', 0)(J$.G(209, J$.R(193, 'myArgs', myArgs, 1), J$.T(201, 1, 22, false), 4), J$.T(217, 'is really cool.', 21, false)));
                break;
            default:
                J$.X1(273, J$.M(265, J$.R(249, 'console', console, 2), 'log', 0)(J$.T(257, 'Sorry, that is not something I know how to do.', 21, false)));
            }
        } catch (J$e) {
            J$.Ex(321, J$e);
        } finally {
            if (J$.Sr(329)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT

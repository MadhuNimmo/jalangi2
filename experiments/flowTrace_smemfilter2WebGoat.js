(function () {
        //Datastructure Listing
        var output= [];
        var callStack=[];
        //var frmToFunName = {};
        var funIDToDecl = {};
        var scriptSet = []
        var lst = []
        var lstKeys= []
        var lstMap = {}

        //Variable Listing
        var objGetOwnPropDesc = Object.getOwnPropertyDescriptor;
        var objGetPrototypeOf = Object.getPrototypeOf;
        
        var funName;
        var SPECIAL_PROP_SID = J$.Constants.SPECIAL_PROP_SID;
        var SPECIAL_PROP_IID = J$.Constants.SPECIAL_PROP_IID;
        var isBrowser = J$.Constants.isBrowser;
        var ifNative="";
        var scriptName="";
        var avail = false;
        var format = /(?!\()(\S+\.js)\:([0-9]+\:[0-9]+\:[0-9]+\:[0-9]+)\)/gi;
        var jSetTimeout = setTimeout
        var jSetInterval = setInterval
        var jClearTimeout = clearTimeout
        var jClearInterval = clearInterval
        var spclList=[jSetTimeout, jSetInterval, jClearTimeout, jClearInterval]
        var jFunToString = Function.prototype.toString
        J$.ast_info = {
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:3444:4:3476": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:3486:4:3572": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:3586:4:3683": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:3692:4:3735": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:3744:4:3969": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:3984:4:4027": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:4042:4:4075": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:4093:4:4127": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:4140:4:4176": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:4190:4:4266": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:4277:4:4327": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:4342:4:4437": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:4451:4:4504": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:4512:4:4601": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:4609:4:4728": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:4743:4:4861": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:4879:4:4917": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:4932:4:4967": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:4983:4:5019": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:5032:4:5065": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:5079:4:5142": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:5153:4:5213": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:5230:4:5267": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:5281:4:5316": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:5332:4:5587": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:5605:4:5639": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:5656:4:5690": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:5709:4:5944": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:5962:4:5996": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:6008:4:6285": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:6305:4:6459": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:6468:4:6796": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:6805:4:7186": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:7202:4:7299": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:7317:4:7418": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:7432:4:7460": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:7480:4:7518": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:7525:4:7610": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:7623:4:7740": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:7748:4:7848": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:7864:4:7966": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:8014:4:8020"
          ],
          "getContext (Native)": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:3619:4:3661"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:3935:4:3965": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:2178:4:2184"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:5887:4:5940": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:2178:4:2184"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:6088:4:6281": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:2178:4:2184"
          ],
          "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:6423:4:6455": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:2178:4:2184"
          ],
          "Boolean (Native)": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:6879:4:6893"
          ],
          "canPlayType (Native)": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:7119:4:7146"
          ],
          "createElementNS (Native)": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:7928:4:7963"
          ],
          "checkValidity (Native)": [
            "cache/192.168.1.223/42306a279a9e831515347ae319181cd1/modernizr-2.6.2.min.js@4:1297:4:1314"
          ],
          "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@7:432:8:48": [
            "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@7:389:7:398"
          ],
          "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@24:253:24:313": [
            "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@7:389:7:398"
          ],
          "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@13:232:13:428": [
            "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@7:389:7:398"
          ],
          "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@24:407:25:8": [
            "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@7:389:7:398"
          ],
          "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@25:214:25:273": [
            "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@7:389:7:398"
          ],
          "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@25:485:26:465": [
            "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@17:311:17:445"
          ],
          "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@32:333:32:411": [
            "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@7:173:7:184"
          ],
          "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@8:82:8:121": [
            "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@12:79:12:86"
          ],
          "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@23:430:23:447": [
            "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@7:173:7:184"
          ],
          "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@14:44:14:67": [
            "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@7:173:7:184"
          ],
          "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@12:497:13:104": [
            "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@7:173:7:184"
          ],
          "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@34:409:35:141": [
            "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@7:254:7:265"
          ],
          "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@26:373:26:454": [
            "system (Native)"
          ],
          "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@14:111:14:130": [
            "anon (Native)"
          ],
          "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:390:29:509": [
            "anon (Native)"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@6:18274:6:18657": [
            "k (Native)"
          ],
          "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@22:263:23:198": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@8:100:8:120]"
          ],
          "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@22:485:23:17": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@8:100:8:120]"
          ],
          "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@17:386:17:443": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@8:100:8:120]"
          ],
          "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@31:363:32:43": [
            "cache/192.168.1.223/f13d789f99eab66fdae3190687a30c20/main.js@33:1:35:3"
          ],
          "cache/192.168.1.223/137af05d496f59d468d1ffbce32f375d/underscore-min.js@5:15337:5:15357": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@6:28866:6:28886": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/08a24670beb2eae7ef79a6d5ac23874b/jquery.form.js@25:2:1277:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/c1a39c11a8351d3e28f0b7085624b35e/backbone.js@12:49:16:6": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:100:1:138": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/44a1e6ac29aa421270db011d8e859fdd/LessonContentView.js@6:5:65:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/741e740895c996d89ba886fb0092ac77/GoatUtils.js@6:5:90:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/12ee9772866966a315a5e3b4cf86381a/HelpControlsView.js@4:1:62:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/d12f94424272cad765c0b66bbea544de/ParamModel.js@3:2:12:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/630090b6ed73558c0d6bbf0e7c20076c/ParamView.js@5:1:36:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/ce26617ee3e0474e792c16190b21027c/UserAndInfoView.js@5:1:45:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/b6e3dd74db19d6dd91cacc53c0099ed7/MenuButtonView.js@6:1:27:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/47d9810066eaa054f24ad36c51c9aeee/LessonInfoModel.js@4:3:20:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/71ae64f02dd82310254740add739c59a/TitleView.js@4:1:13:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/9deae64fbe54614723168c6cfe8c39bf/LessonProgressModel.js@4:5:13:6": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/d809519412cdceb33305409eaeb2cdef/LessonProgressView.js@5:5:26:6": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/bf219527a1dc2b8daa97458949194345/PluginReloadModel.js@3:2:19:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/fbaef17808c154803e13bb33bd4b8022/LabelDebugModel.js@3:2:39:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/f2215a94e1c8a17357c1a349f1bf4c01/DeveloperControlsView.js@6:1:77:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/9536c9c38434bc010b0c9f8691c754ed/MenuModel.js@4:2:10:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/69e795aaa6655a96cb5f4ccfe5a4105a/MenuCollection.js@5:2:29:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/fd07cbb7eaeb6f6367dacf67835648be/HTMLContentModel.js@4:2:25:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/c12890aaafa879f76401aeb2a093e1ee/LessonContentModel.js@5:6:54:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/055e5f808000071c8a70156a247cc97c/LessonPlanModel.js@5:2:17:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/ff598a938e9dcf4d1495c851dd71dc09/PlanView.js@5:1:25:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/3d7dca3a6a1a88fde04f11dbb4cd1e35/SolutionModel.js@5:2:18:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/ff28ee59f89ff77dda772e92ea6ffad2/SolutionView.js@6:1:22:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/468c8055529ab90208047337a508d5e4/SourceModel.js@5:2:19:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/5a4161ae08d9b3e55a8b526e72578fe0/HelpView.js@5:1:23:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/e11372b90083dda9f0054cfed2972a7d/SourceView.js@6:1:21:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/374b6412952f2341862d1e68846bfa33/HintModel.js@4:2:10:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/00f3721db9e846db32bd42889cbbfff7/HintCollection.js@6:2:32:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/1c792cb25ec244573f6d707584cf37f1/HintView.js@5:1:77:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/d1fff49b4c9953d644ee36c266ae73a7/CookieModel.js@4:2:9:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/068ef0b6dd7504b9b6c1e8d5ca6bb053/CookieCollection.js@5:2:13:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/cdee182852aababe09d504e0272055b9/CookieView.js@5:1:34:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/d51c0fb785fcb063c3a4f155b247b48c/LessonController.js@22:5:202:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/12a4a1266a6912a535632913c4c280e2/MenuItemView.js@6:2:30:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/804ef5c06e9477d95a1ccc2c87cd752e/MenuView.js@7:2:135:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/eccf2fc47e18a7bda8c252419e425a9e/MenuController.js@6:2:33:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/b6068b20cd1a81c0019a3d0996e512db/GoatRouter.js@9:8:67:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/739c42bd6b5ad7388ae19a296bfe7354/goatApp.js@2:2:12:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/f13d789f99eab66fdae3190687a30c20/main.js@33:63:35:2": [
            "apply (Native) [cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@29:363:29:375]"
          ],
          "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@35:150:36:154": [
            "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:59:1:139"
          ],
          "cache/192.168.1.223/137af05d496f59d468d1ffbce32f375d/underscore-min.js@5:11890:5:11961": [
            "cache/192.168.1.223/137af05d496f59d468d1ffbce32f375d/underscore-min.js@5:960:5:971"
          ],
          "cache/192.168.1.223/137af05d496f59d468d1ffbce32f375d/underscore-min.js@5:14707:5:14838": [
            "cache/192.168.1.223/137af05d496f59d468d1ffbce32f375d/underscore-min.js@5:960:5:971"
          ],
          "cache/192.168.1.223/137af05d496f59d468d1ffbce32f375d/underscore-min.js@5:14918:5:15084": [
            "cache/192.168.1.223/137af05d496f59d468d1ffbce32f375d/underscore-min.js@5:960:5:971"
          ],
          "cache/192.168.1.223/137af05d496f59d468d1ffbce32f375d/underscore-min.js@5:15119:5:15222": [
            "cache/192.168.1.223/137af05d496f59d468d1ffbce32f375d/underscore-min.js@5:960:5:971"
          ],
          "cache/192.168.1.223/c1a39c11a8351d3e28f0b7085624b35e/backbone.js@580:24:586:4": [
            "cache/192.168.1.223/137af05d496f59d468d1ffbce32f375d/underscore-min.js@5:960:5:971"
          ],
          "cache/192.168.1.223/c1a39c11a8351d3e28f0b7085624b35e/backbone.js@962:19:968:4": [
            "cache/192.168.1.223/137af05d496f59d468d1ffbce32f375d/underscore-min.js@5:960:5:971"
          ],
          "cache/192.168.1.223/c1a39c11a8351d3e28f0b7085624b35e/backbone.js@974:28:981:4": [
            "cache/192.168.1.223/137af05d496f59d468d1ffbce32f375d/underscore-min.js@5:960:5:971"
          ],
          "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:6751:1:6864": [
            "cache/192.168.1.223/137af05d496f59d468d1ffbce32f375d/underscore-min.js@5:960:5:971"
          ],
          "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:11994:1:12103": [
            "cache/192.168.1.223/137af05d496f59d468d1ffbce32f375d/underscore-min.js@5:960:5:971"
          ],
          "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:12161:1:12285": [
            "cache/192.168.1.223/137af05d496f59d468d1ffbce32f375d/underscore-min.js@5:960:5:971"
          ],
          "cache/192.168.1.223/f2215a94e1c8a17357c1a349f1bf4c01/DeveloperControlsView.js@58:24:72:5": [
            "cache/192.168.1.223/137af05d496f59d468d1ffbce32f375d/underscore-min.js@5:960:5:971"
          ],
          "cache/192.168.1.223/137af05d496f59d468d1ffbce32f375d/underscore-min.js@5:11912:5:11960": [
            "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:7965:1:7992"
          ],
          "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@15:357:15:469": [
            "cache/192.168.1.223/bb031ba9b79fafb17341a2b7977290e1/require.min.js@22:432:22:439"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:7584:4:7634": [
            "call (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:5345:4:5364]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:25821:4:25843": [
            "call (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:5345:4:5364]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:27681:4:27884": [
            "call (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:5345:4:5364]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:26203:4:26310": [
            "call (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:5345:4:5364]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@5:8380:5:8688": [
            "call (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:5345:4:5364]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@5:9988:5:10034": [
            "call (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:5345:4:5364]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@5:10114:5:10328": [
            "call (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:5345:4:5364]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@6:5625:6:5915": [
            "call (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:5345:4:5364]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@6:8666:6:8765": [
            "call (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:5345:4:5364]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@6:10605:6:10660": [
            "call (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:5345:4:5364]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@6:14617:6:14747": [
            "call (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:5345:4:5364]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@6:23509:6:23651": [
            "call (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:5345:4:5364]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@5:20757:5:20794": [
            "call (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:5345:4:5364]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@5:20677:5:20715": [
            "call (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:5345:4:5364]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@6:9790:6:9897": [
            "call (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:5345:4:5364]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:27321:4:27571": [
            "call (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:5345:4:5364]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@5:20264:5:20301": [
            "call (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:5345:4:5364]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:7923:4:7961": [
            "sort (Native)"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:11980:4:12044": [
            "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:10922:4:10926"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:12072:4:12162": [
            "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:10922:4:10926"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:12192:4:12338": [
            "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:10922:4:10926"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:12353:4:12447": [
            "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:10922:4:10926"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:13276:4:13483": [
            "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:10922:4:10926"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:13488:4:13785": [
            "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:10922:4:10926"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:13909:4:13994": [
            "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:10922:4:10926"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:24930:4:25001": [
            "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:10922:4:10926"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:25006:4:25096": [
            "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:10922:4:10926"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:25220:4:25340": [
            "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:10922:4:10926"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:25437:4:25489": [
            "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:10922:4:10926"
          ],
          "removeChild (Native)": [
            "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:10967:4:10994"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:26147:4:26364": [
            "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:27210:4:27243"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@5:17790:5:18018": [
            "call (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:5399:4:5418]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@5:19657:5:19876": [
            "call (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:5399:4:5418]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@5:23175:5:23396": [
            "call (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:5399:4:5418]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@5:29681:5:29851": [
            "call (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:5399:4:5418]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@6:7032:6:7226": [
            "call (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:5399:4:5418]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@6:25110:6:25178": [
            "call (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:5399:4:5418]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@6:27779:6:28039": [
            "call (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:5399:4:5418]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@6:28166:6:28641": [
            "call (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:5399:4:5418]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@6:28230:6:28639": [
            "call (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:5399:4:5418]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:3177:4:3375": [
            "anon (Native)"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:204:4:246": [
            "cache/192.168.1.223/804ef5c06e9477d95a1ccc2c87cd752e/MenuView.js@84:24:84:80"
          ],
          "cache/192.168.1.223/c1a39c11a8351d3e28f0b7085624b35e/backbone.js@219:25:228:4": [
            "cache/192.168.1.223/137af05d496f59d468d1ffbce32f375d/underscore-min.js@5:1020:5:1037"
          ],
          "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:2435:1:2636": [
            "cache/192.168.1.223/137af05d496f59d468d1ffbce32f375d/underscore-min.js@5:1020:5:1037"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:26762:4:26851": [
            "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:27514:4:27568"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:27736:4:27751": [
            "apply (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:26031:4:26052]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:26615:4:26646": [
            "apply (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:26031:4:26052]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:26682:4:26724": [
            "apply (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:26031:4:26052]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:30378:4:31988": [
            "apply (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:26031:4:26052]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@6:6393:6:6722": [
            "apply (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:26031:4:26052]"
          ],
          "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:10380:1:10468": [
            "apply (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:26031:4:26052]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:27381:4:27569": [
            "apply (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:26031:4:26052]"
          ],
          "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:4929:1:5018": [
            "apply (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:26031:4:26052]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:31232:4:31273": [
            "apply (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:6973:4:6989]"
          ],
          "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:19524:1:19566": [
            "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:10981:1:11000"
          ],
          "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:12300:1:12459": [
            "apply (Native) [cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:19542:1:19565]"
          ],
          "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:6885:1:7090": [
            "apply (Native) [cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:19542:1:19565]"
          ],
          "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:2693:1:2964": [
            "apply (Native) [cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:19542:1:19565]"
          ],
          "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:14782:1:14894": [
            "apply (Native) [cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:19542:1:19565]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@6:16733:6:17393": [
            "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@6:9810:6:9818"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@6:17799:6:18807": [
            "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@6:9810:6:9818"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:27300:4:27580": [
            "call (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:27902:4:27913]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@5:6975:5:7351": [
            "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:6772:4:6810"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@5:25600:5:25708": [
            "call (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@5:27979:5:27998]"
          ],
          "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:2454:1:2635": [
            "cache/192.168.1.223/b6068b20cd1a81c0019a3d0996e512db/GoatRouter.js@55:13:55:80"
          ],
          "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:508:1:696": [
            "cache/192.168.1.223/c1a39c11a8351d3e28f0b7085624b35e/backbone.js@225:7:225:48"
          ],
          "cache/192.168.1.223/c1a39c11a8351d3e28f0b7085624b35e/backbone.js@85:9:91:6": [
            "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:2608:1:2622"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@6:8688:6:8764": [
            "cache/192.168.1.223/804ef5c06e9477d95a1ccc2c87cd752e/MenuView.js@85:8:85:64"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@5:26713:5:27137": [
            "call (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:6688:4:6699]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@5:25411:5:25524": [
            "call (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:6688:4:6699]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@5:25378:5:25550": [
            "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:1356:4:1369"
          ],
          "cache/192.168.1.223/d51c0fb785fcb063c3a4f155b247b48c/LessonController.js@47:26:200:10": [
            "cache/192.168.1.223/b6068b20cd1a81c0019a3d0996e512db/GoatRouter.js@30:27:32:11"
          ],
          "cache/192.168.1.223/eccf2fc47e18a7bda8c252419e425a9e/MenuController.js@10:17:30:5": [
            "cache/192.168.1.223/b6068b20cd1a81c0019a3d0996e512db/GoatRouter.js@34:25:36:11"
          ],
          "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:15692:1:15728": [
            "replace (Native)"
          ],
          "cache/192.168.1.223/c1a39c11a8351d3e28f0b7085624b35e/backbone.js@220:22:227:6": [
            "cache/192.168.1.223/d51c0fb785fcb063c3a4f155b247b48c/LessonController.js@56:17:56:88"
          ],
          "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:18602:1:18661": [
            "cache/192.168.1.223/137af05d496f59d468d1ffbce32f375d/underscore-min.js@5:2451:5:2462"
          ],
          "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:15170:1:15327": [
            "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:18634:1:18647"
          ],
          "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:15874:1:15957": [
            "cache/192.168.1.223/137af05d496f59d468d1ffbce32f375d/underscore-min.js@5:1217:5:1228"
          ],
          "cache/192.168.1.223/b6068b20cd1a81c0019a3d0996e512db/GoatRouter.js@43:48:46:14": [
            "call (Native) [cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:2279:1:2314]"
          ],
          "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:6045:1:6213": [
            "cache/192.168.1.223/137af05d496f59d468d1ffbce32f375d/underscore-min.js@5:13474:5:13480"
          ],
          "cache/192.168.1.223/b6068b20cd1a81c0019a3d0996e512db/GoatRouter.js@50:36:52:14": [
            "call (Native) [cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:2219:1:2252]"
          ],
          "cache/192.168.1.223/f2215a94e1c8a17357c1a349f1bf4c01/DeveloperControlsView.js@24:22:28:7": [
            "call (Native) [cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:2219:1:2252]"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@6:13794:6:14477": [
            "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@6:18646:6:18656"
          ],
          "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:4365:4:4579": [
            "cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@6:15599:6:15603"
          ],
          "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:3307:1:4114": [
            "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:10420:1:10429"
          ],
          "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:7758:1:8986": [
            "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:10420:1:10429"
          ],
          "cache/192.168.1.223/fbaef17808c154803e13bb33bd4b8022/LabelDebugModel.js@32:22:36:4": [
            "apply (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:27401:4:27424]"
          ],
          "cache/192.168.1.223/69e795aaa6655a96cb5f4ccfe5a4105a/MenuCollection.js@22:5:25:6": [
            "apply (Native) [cache/192.168.1.223/628072e7212db1e8cdacb22b21752cda/jquery-1.10.2.min.js@4:27401:4:27424]"
          ],
          "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:11374:1:11620": [
            "apply (Native) [cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:2342:1:2374]"
          ],
          "cache/192.168.1.223/804ef5c06e9477d95a1ccc2c87cd752e/MenuView.js@35:11:103:4": [
            "call (Native) [cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:2105:1:2134]"
          ],
          "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:12021:1:12102": [
            "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:7603:1:7618"
          ],
          "cache/192.168.1.223/137af05d496f59d468d1ffbce32f375d/underscore-min.js@5:6393:5:6585": [
            "apply (Native) [cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:12086:1:12101]"
          ],
          "cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:1297:1:1491": [
            "apply (Native) [cache/192.168.1.223/9c3e3189b75efd56066402f80c3e781b/backbone-min.js@1:1949:1:1979]"
          ]
        }
        function getValue(v) {
            var type = typeof v;
            if (v!== null) {
                try{
                    var shadowObj = J$.smemory.getShadowObjectOfObject(v);
                    var shadowId = J$.smemory.getIDFromShadowObjectOrFrame(shadowObj)
                    if (type ==='function'){
                            ifNative = isNative(v)? "Nat" : "Non"
                            return "Fun"+ifNative+":"+shadowId;

                    } else if (type === 'object'){
                            return "Obj"+shadowId;
                    }
                }catch(e){
                    console.log("Shadowing error: " +e)
                    return;
                }
                
            }
        }
        function getPropSafe(base, prop){
            if(base === null || base === undefined){
              return undefined;
            }
            return base[prop];
        }
        function getFrameToFunName(obj){
                if (obj === undefined || obj === null) return "None";
                return obj["FUN_NAME"];
        }
        function getFrameID(name) {
                return "Frm"+J$.smemory.getIDFromShadowObjectOrFrame(J$.smemory.getShadowFrame(name));
        }
        function getCurrentFrameID() {
                return "Frm"+J$.smemory.getIDFromShadowObjectOrFrame(J$.smemory.getCurrentFrame());
        }
        function addToTrace(typ, funName, identity, loc, others,flag=false) {
          console.log(typ, funName, identity, loc, others,flag=false)
          //if (typ=="InvokeReturn" && others!==null ) {console.log(others)}
          //var indx = lst.indexOf(identity)
          //if(flag===true || indx > -1 || (typ=="InvokeReturn" && others!==null && lst.indexOf(others[0]["retId"]) > -1)){
            var newObj={}
            newObj.typ = typ;
            newObj.funName = funName;
            newObj.identity = identity;
            newObj.loc = loc;
            if (typ=="InvokeReturn"){
                newObj.ret = others;
            }
            else if (typ=="Get" || typ=="Getter"){
                newObj.from = others;
            }
            else if (typ=="LocRead" || typ=="LexRead"){
                newObj.from = others[0];
                newObj.curr = others[1];
                newObj.eloc = others[2]
            }
            else if (typ=="Write" || typ=="Declare" || typ=="Put" || typ=="Setter"){
                newObj.to = others;
            }
            output.push(newObj)
          //}
        }
        function isNative(input){
            if(jFunToString.call(input) !== undefined){
                return jFunToString.call(input).indexOf('[native code]') > -1 || jFunToString.call(input).indexOf('[object ') === 0 || spclList.indexOf(input) > -1 
            }
        }
        /**
         * @desc Given an object and property, it returns if the property is a getter
         * @param {object} obj - Base object
         * @param {string} prop - Property
         * @returns {string} desc - The descriptor for the property
         */
        function getPropertyDescriptor(o , prop ) {
                var t = o;
                while (t != null) {
                    var desc = objGetOwnPropDesc(t, prop);
                    if (desc) {
                        return desc;
                    }
                    t = objGetPrototypeOf(t);
                }
                
                return null;
            }
        /**
         * @desc Given an object and property, it identifies if the property is a getter
         * @param {object} obj - Base object
         * @param {string} prop - Property
         * @returns {boolean} - True/False identicating if getter or not
         */
        function isGetter( obj, prop){
                var desc = getPropertyDescriptor(obj,prop);
                return desc && (desc.get !== undefined);
            }
        /**
         * @desc Given an object and property, it identifies if the property is a setter
         * @param {object} obj - Base object
         * @param {string} prop - Property
         * @returns {boolean} - True/False identicating if setter or not
         */
        function isSetter( obj, prop){
                var desc = getPropertyDescriptor(obj,prop);
                return desc && (desc.set !== undefined);
            }
        /**
         * @desc Given a global instruction identifier, it returns a string containing 
         * the script name, begin and end line numbers and column 
         * Example: (ScriptName@beginLineNumber:beginColumnNumber:endLineNumber:endColumnNumber)
         * @param {number} giid - Static unique instruction identifier of this callback
         * @returns {string} final - The customised location of an instruction identifier
         */
        function getLoc(from,giid) {
                //locations for native functions, returning string None
                if(giid =="undefined:undefined"){
                    return "None";
                }
                loc = J$.iidToLocation(giid);
                if(loc.startsWith("href")){
                  console.log(loc)
                }
                var locIid = "";
                try{
                        locIid = format.exec(loc);
                        format.lastIndex = 0;
                        return locIid[1].replace("(",":")+"@"+locIid[2];
                }
                        catch(e){
                                console.log("Unsupported format: " +from + ","+ loc)
                                return loc;
                        }
                //return loc;
        }
    
        J$.analysis = {
                putField : function (iid, base, offset, val, isComputed, isOpAssign) {
                    if(isSetter(base,offset)){
                        var desc = getPropertyDescriptor(base,offset);
                        funName = desc.set.name? desc.set.name: "anon"
                        funId= getValue(desc.set)
                        if(lst.indexOf(funId) > -1){
                            addToTrace("Put",funName,funId,getLoc("put",J$.getGlobalIID(iid)),"set")
                            addToTrace("InvokeSetter",funName,funId,getLoc("put",J$.getGlobalIID(iid)))
                        }
                    }else if (typeof val== 'function'){
                            funName = val.name? val.name: "anon"
                            funId= getValue(val)
                            if(lst.indexOf(funId) > -1){
                                addToTrace("Put",funName,funId,getLoc("put",J$.getGlobalIID(iid)),String(offset))
                            }
                        }
                },
                getField : function (iid, base, offset, val, isComputed, isOpAssign) {
                    if(isGetter(base,offset)){
                        var desc = getPropertyDescriptor(base,offset);
                        funName = desc.get.name? desc.get.name: "anon"
                        funId=getValue(desc.get)
                        if(lst.indexOf(funId) > -1){
                            addToTrace("Get",funName,funId,getLoc("get",J$.getGlobalIID(iid)),"get")
                            addToTrace("InvokeGetter",funName,funId,getLoc("get",J$.getGlobalIID(iid)))
                        }
                    }else if (typeof val== 'function'){
                            funName = val.name? val.name: "anon"
                            funId= getValue(val)
                            if(lst.indexOf(funId)> -1){
                                addToTrace("Get",funName,funId,getLoc("get",J$.getGlobalIID(iid)),String(offset))   
                            }

                    }
                },
                declare: function (iid, name, val, isArgument, argumentIndex, isCatchParam) {
                    if(name==="arguments" && isArgument && typeof val== 'object' && val!=null){
                        for (var key of Object.keys(val)){
                            var value = val[key]
                            if(typeof value == "function"){
                                funName= value.name ? value.name : "anon";
                                funId= getValue(value)
                                if(lst.indexOf(funId) > -1){
                                    addToTrace("Put",funName, funId,getLoc("declare",J$.getGlobalIID(iid)),String(key))
                                }
                            }
                        }
                    }
                    else if((typeof val)=== 'function'){
                        funName = val.name? val.name : "anon"
                        var funId = getValue(val)
                        if(lst.indexOf(funId) > -1){
                            addToTrace("Declare",funName,funId,getLoc("declare",J$.getGlobalIID(iid)),getFrameID(name)+":"+name)
                        }

                    }
                },
                literal: function (iid, val, hasGetterSetter) {
                    if(typeof val== 'function'){
                        funName = val.name? val.name : "anon"
                        funId = getValue(val)
                        
                        //if(J$.ast_info.indexOf(getLoc("literal",J$.getGlobalIID(iid))) > -1){
                        //console.log(lstKeys,getLoc("literal",J$.getGlobalIID(iid)))
                        if(lstKeys.indexOf(getLoc("literal",J$.getGlobalIID(iid))) > -1){
                                addToTrace("Create",funName,funId,getLoc("literal",J$.getGlobalIID(iid)),[],true)
                                lst.push(funId)
                                lstMap[funId] = getLoc("literal",J$.getGlobalIID(iid))
                                //lst2[fundId]=true
                        }
                        funIDToDecl[funId]= getLoc("create",callStack[callStack.length-1])

                    }
                    else if(typeof val== 'object' && val!=null){
                        if(Array.isArray(val)){
                            for (var key in val){
                                if(typeof val[key] =="function"){
                                    funName= val[key].name ? val[key].name : "anon";
                                    funId= getValue(val[key])
                                    if(lst.indexOf(funId) > -1){
                                        addToTrace("Put",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),String(key))
                                    }
                                }
                            }
                        }
                        else{
                            for (var key of Object.keys(val)){
                                    //new to handle puts of getters/setters
                                    // || isGetter(val,key) || isSetter(val,key) 
                                    var value = val[key]
                                    if(typeof value == "function"){
                                        funName= value.name ? value.name : "anon";
                                        funId= getValue(value)
                                        if(lst.indexOf(funId) > -1){
                                            addToTrace("Put",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),String(key))
                                        }
                                    }
                                }
                        }
                    }
                },
                functionEnter: function(iid, f, dis, args){
                        var giid = J$.getGlobalIID(iid);
                        var frm= getCurrentFrameID();
                        var funName = f.name 
                        var funId = getValue(f)
                        if(funName === ""){
                            //frmToFunName[frm] = getLoc("fenter1",J$.getGlobalIID(iid))
                            J$.smemory.getCurrentFrame()["FUN_NAME"] = getLoc("fenter1",J$.getGlobalIID(iid))
                            
                        }else{
                            if (callStack.length === 0) {
                                //frmToFunName[frm] = "system"+"/"+funName;
                                J$.smemory.getCurrentFrame()["FUN_NAME"] = "system"+"/"+funName;
                            }else{
                                //frmToFunName[frm] =  funIDToDecl[funId]+"/"+funName
                                J$.smemory.getCurrentFrame()["FUN_NAME"] = funIDToDecl[funId]+"/"+funName
                            }
                        }
                        callStack.push(giid);
                },
                functionExit: function (iid, returnVal, wrappedExceptionVal){
                        callStack.pop();
                },
                scriptEnter: function (iid, instrumentedFileName, originalFileName) {
                        var frm= getCurrentFrameID();
                        var giid = J$.getGlobalIID(iid);
                        var funName = originalFileName
                        //frmToFunName[frm] = funName
                        J$.smemory.getCurrentFrame()["FUN_NAME"] = funName
                        callStack.push(giid);
                        //new to resolve eval/evalIndirect issues
                        scriptName=funName;
                        //scriptSet.push(scriptName)
                        scriptSet.push(frm)
                        lstKeys = Object.keys(J$.ast_info)
                },
                scriptExit: function (iid, wrappedExceptionVal) {
                        callStack.pop();
                },
                invokeFunPre: function (iid, f, base, args, isConstructor, isMethod, functionIid, functionSid) {
                    if(isNative(f) && f===Array.prototype.push){
                        for (var key of Object.keys(args)){
                            var value = args[key]
                            if(typeof value == "function"){
                                funName= value.name ? value.name : "anon";
                                funId= getValue(value)
                                if(lst.indexOf(funId) > -1){
                                    var index = String(base.length+Number(key))
                                    addToTrace("Put",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),index)
                                }

                            }
                        }
                    }
                    if(isNative(f) && f===Array.prototype.shift){
                        for (var key in base){
                            if(typeof base[key] =="function"){
                                funName= base[key].name ? base[key].name : "anon";
                                funId= getValue(base[key])
                                if(lst.indexOf(funId) > -1){
                                    var indx = String(Number(key) - 1)
                                    addToTrace("Put",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),indx)
                                }

                            }
                        }
                    }
                    if(isNative(f) && f===Array.prototype.unshift){
                        for (var key of Object.keys(args)){
                            var value = args[key]
                            if(typeof value =="function"){
                                funName= value.name ? value.name : "anon";
                                funId= getValue(value)
                                if(lst.indexOf(funId) > -1){
                                    addToTrace("Put",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),String(key))
                                }

                            }
                        }
                        for (var key in base){
                            if(typeof base[key] =="function"){
                                funName= base[key].name ? base[key].name : "anon";
                                funId= getValue(base[key])
                                var indx = String(Number(key) + args.length)
                                if(lst.indexOf(funId) > -1){
                                    addToTrace("Put",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),indx)
                                }

                            }
                        }
                    }
                    var funName = f.name 
                    if (isNative(f) && (f===Function.prototype.apply || f===Function.prototype.call)){
                        funName = base.name? base.name : "anon"
                        funId= getValue(base,SPECIAL_PROP_IID,SPECIAL_PROP_SID)
                    }
                    else{
                        funName = f.name? f.name : "anon"
                        funId= getValue(f,SPECIAL_PROP_IID,SPECIAL_PROP_SID)
                    }
                    if(lst.indexOf(funId) > -1){
                        addToTrace("InvokeCall",funName,funId,getLoc("invkcll",J$.getGlobalIID(iid)))
                    }
                },
                invokeFun: function (iid, f, base, args, result, isConstructor, isMethod, functionIid, functionSid) {
                    
                    if (isNative(f)  && (f===Function.prototype.apply || f===Function.prototype.call)){
                        funName = base.name? base.name : "anon"
                        funId= getValue(base)
                        
                    }
                    else{
                        funName = f.name? f.name : "anon"
                        funId= getValue(f)
                    }
                    var list=null;
                    if (typeof result=="function"){
                            retName = result.name ? result.name : "anon";
                            retId = getValue(result)
                            retLoc = getLoc("invkfun",functionSid+":"+functionIid);
                            retLoc= retLoc==="None"?getLoc("",getPropSafe(base, SPECIAL_PROP_SID)+":"+getPropSafe(base, SPECIAL_PROP_IID)):retLoc;
                        var obj = {
                            "retId" : retId,
                            "retName" : retName,
                            "retLoc" : retLoc              
                        };
                        if(list==null){
                            list=[];
                            list.push(obj);}
                    }
                    //if(lst.indexOf(funId) > -1 || (list!==null && lst.indexOf(list[0]["retId"]) > -1)){
                    if(lst.indexOf(funId) > -1){
                        addToTrace("InvokeReturn",funName,funId,getLoc("invkretrn",J$.getGlobalIID(iid)),list)
                        //lst.splice(lst.indexOf(funId), 1);
                        var lstCaller = lstMap[funId];
                        if(lstCaller){
                            var lstCallees = J$.ast_info[lstCaller]
                            var lstCalleeInd = lstCallees.indexOf(getLoc("invkretrn",J$.getGlobalIID(iid)))
                            if(lstCalleeInd > -1 ){
                                lstCallees.splice(lstCalleeInd,1);
                                if(lstCallees.length==0){
                                    delete J$.ast_info[lstCaller]
                                    lstKeys=Object.keys(J$.ast_info)
                                    lst.splice(lst.indexOf(funId), 1);
                                }else{
                                    J$.ast_info[lstCaller] = lstCallees
                                }
                            }
                        }
                    }
                    else if(list!==null && lst.indexOf(list[0]["retId"]) > -1){
                        addToTrace("InvokeReturn",funName,funId,getLoc("invkretrn",J$.getGlobalIID(iid)),list)
                        //lst.splice(lst.indexOf(list[0]["retId"]), 1);
                    }
                    if(isNative(f) && f===Array.prototype.pop){
                        var indx = String(base.length)
                        if(typeof result =="function"){
                            funName = result.name ? result.name : "anon";
                            funId = getValue(result)
                            if(lst.indexOf(funId) > -1) {
                                addToTrace("Get",funName, funId, getLoc("invkretrn",J$.getGlobalIID(iid)),indx)
                            }

                        }
                    }
                
                },
                read: function (iid, name, val, isGlobal, isScriptLocal) {
                    if(typeof val== 'function'){
                        
                        funName = val.name? val.name : "anon"
                        funId = getValue(val)
                        if(lst.indexOf(funId) > -1) {
                            //new to model variable uses inside eval/evalIndirect
                            //if (frmToFunName[getFrameID(name)] && !frmToFunName[getFrameID(name)].indexOf("eval") === 0 && scriptSet.indexOf(getFrameID(name)) > -1 ){
                            if (getFrameToFunName(J$.smemory.getShadowFrame(name)) && !getFrameToFunName(J$.smemory.getShadowFrame(name)).indexOf("eval") === 0 && scriptSet.indexOf(getFrameID(name)) > -1 ){
                                addToTrace("LocRead",funName,funId,getLoc("read",callStack[callStack.length-1]),[getFrameID(name)+":"+name,"Global",getLoc("read",callStack[callStack.length-1])])
                            }
                            else if(getFrameID(name)!==getCurrentFrameID()){
                                    //addToTrace("LexRead",funName,funId,frmToFunName[getFrameID(name)]==undefined?"None":frmToFunName[getFrameID(name)],[getFrameID(name)+":"+name,getCurrentFrameID(),getLoc("read",callStack[callStack.length-1])])
                                    addToTrace("LexRead",funName,funId,getFrameToFunName(J$.smemory.getShadowFrame(name)),[getFrameID(name)+":"+name,getCurrentFrameID(),getLoc("read",callStack[callStack.length-1])])
                            }else{
                                    addToTrace("LocRead",funName,funId,getLoc("read",callStack[callStack.length-1]),[getFrameID(name)+":"+name,getCurrentFrameID(),getLoc("read",callStack[callStack.length-1])])
                            }
                        }

                    }
                },
                write: function (iid, name, val, lhs, isGlobal, isScriptLocal) {
                    if (typeof val == 'function' ){
                        funName = val.name? val.name : "anon"
                        funId = getValue(val)
                        if(lst.indexOf(funId) > -1) {
                            addToTrace("Write",funName,funId,getLoc("write",J$.getGlobalIID(iid)),getFrameID(name)+":"+name) //temp frmToFunName[getFrameID(name)]
                        }
                    }
                },
                _return: function (iid, val) {
                    if (typeof val == 'function' ){
                        funName = val.name? val.name : "anon"
                        funId = getValue(val)
                        if(lst.indexOf(funId) > -1) {
                            addToTrace("Return",funName, funId,getLoc("return",J$.getGlobalIID(iid)))
                        }
                    }
                },
                _with: function (iid, val) {
                    if(typeof val== 'object' && val!=null){
                        for (var key of Object.keys(val)){
                            var value = val[key]
                            if(typeof value == "function"){
                                funName= value.name ? value.name : "anon";
                                funId= getValue(value)
                                if(lst.indexOf(funId) > -1) {
                                    addToTrace("With",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),String(key))
                                }
                            }
                        }
                    }
                },
            endExecution: function () {
                if (!isBrowser) {
                    const fs = require('fs');
                    const json = JSON.stringify(output, null, 2);
                    //console.log(json)
                    filename=(process.argv[1]).replace(/.js$/,"_trace.json");
                    fs.writeFileSync(filename, json, 'utf8',function(err) {
                        if(err) console.log('error', err);
                    });
                }else{
                    console.log("output: ",output)
                    J$.CallTrace= output;
                    return J$.CallTrace;
                }
        }
    };
    
    }());
    
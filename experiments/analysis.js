
//analysis.js
///<reference path='./anaUtils.ts' />
///<reference path='./jalangi.d.ts' />
//import xxx2 as filewrite from './anaUtils.ts';
//import {isBrowser, xxx2} from "./anaUtils";
(function(){
  var branches = {};
  J$.analysis = {
    
    /**
     * This callback is called after a condition check before branching.
     * Branching can happen in various statements
     * including if-then-else, switch-case, while, for, ||, &&, ?:.
     *
     * @param {number} iid - Static unique instruction identifier of this callback
     * @param {*} result - The value of the conditional expression
     * @returns {{result: *}|undefined} - If an object is returned, the result of
     * the conditional expression is replaced with the value stored in the
     * <tt>result</tt> property of the object.
     */
    conditional : function (iid, result) {
            var id = J$.getGlobalIID(iid);
            var isBrowser = J$.Constants.isBrowser;
            if (!isBrowser){
                var fs = require('fs');
                fs.writeFileSync("lets.txt","we did it");
            }
            var branchInfo = branches[id];
		//console.log("branchInfo " + branches[id]);
		//console.log("broswer  "+ isBrowser);
            if (!branchInfo) {
                branchInfo = branches[id] = {trueCount: 0, falseCount: 0};
            }
            if (result) {
                branchInfo.trueCount++;
            } else {
                branchInfo.falseCount++;
            }
        },

     /**
      * This callback is called when an execution terminates in node.js.  In a browser
      * environment, the callback is called if ChainedAnalyses.js or ChainedAnalysesNoCheck.js
      * is used and Alt-Shift-T is pressed.
      *
      * @returns {undefined} - Any return value is ignored
      */
     endExecution : function () {
       /*if (!isBrowser) {
            //var fs = require('fs');
            require('jalangi2/src/js/instrument/astUtil');
      }*/
            for (var id in branches) {
                if (branches.hasOwnProperty(id)) {
                    var branchInfo = branches[id];
                    var location = J$.iidToLocation(id);
                    console.log("At location " + location +
                    //sandbox.log("At location " + location +
                    " 'true' branch was taken " + branchInfo.trueCount +
                    " time(s) and 'false' branch was taken " + branchInfo.falseCount + " time(s).");
                    //var instname=("letsee.txt");
                    //console.log(xxx);
                }
            }
        }
};

}());

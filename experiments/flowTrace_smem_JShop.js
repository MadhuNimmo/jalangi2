(function () {
        //Datastructure Listing
        var _global = typeof window === 'object' && window.window === window ? window : typeof self === 'object' && self.self === self ? self : typeof global === 'object' && global.global === global ? global : this;

function bom(blob, opts) {
  if (typeof opts === 'undefined') opts = {
    autoBom: false
  };else if (typeof opts !== 'object') {
    console.warn('Deprecated: Expected third argument to be a object');
    opts = {
      autoBom: !opts
    };
  } // prepend BOM for UTF-8 XML and text/* types (including HTML)
  // note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF

  if (opts.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
    return new Blob([String.fromCharCode(0xFEFF), blob], {
      type: blob.type
    });
  }

  return blob;
}

function download(url, name, opts) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.responseType = 'blob';

  xhr.onload = function () {
    saveAs(xhr.response, name, opts);
  };

  xhr.onerror = function () {
    console.error('could not download file');
  };

  xhr.send();
}

function corsEnabled(url) {
  var xhr = new XMLHttpRequest(); // use sync to avoid popup blocker

  xhr.open('HEAD', url, false);

  try {
    xhr.send();
  } catch (e) {}

  return xhr.status >= 200 && xhr.status <= 299;
} // `a.click()` doesn't work for all browsers (#465)


function click(node) {
  try {
    node.dispatchEvent(new MouseEvent('click'));
  } catch (e) {
    var evt = document.createEvent('MouseEvents');
    evt.initMouseEvent('click', true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
    node.dispatchEvent(evt);
  }
} // Detect WebView inside a native macOS app by ruling out all browsers
// We just need to check for 'Safari' because all other browsers (besides Firefox) include that too
// https://www.whatismybrowser.com/guides/the-latest-user-agent/macos


var isMacOSWebView = _global.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent);
var saveAs = _global.saveAs || ( // probably in some web worker
typeof window !== 'object' || window !== _global ? function saveAs() {
  /* noop */
} // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView
: 'download' in HTMLAnchorElement.prototype && !isMacOSWebView ? function saveAs(blob, name, opts) {
  var URL = _global.URL || _global.webkitURL;
  var a = document.createElement('a');
  name = name || blob.name || 'download';
  a.download = name;
  a.rel = 'noopener'; // tabnabbing
  // TODO: detect chrome extensions & packaged apps
  // a.target = '_blank'

  if (typeof blob === 'string') {
    // Support regular links
    a.href = blob;

    if (a.origin !== location.origin) {
      corsEnabled(a.href) ? download(blob, name, opts) : click(a, a.target = '_blank');
    } else {
      click(a);
    }
  } else {
    // Support blobs
    a.href = URL.createObjectURL(blob);
    setTimeout(function () {
      URL.revokeObjectURL(a.href);
    }, 4E4); // 40s

    setTimeout(function () {
      click(a);
    }, 0);
  }
} // Use msSaveOrOpenBlob as a second approach
: 'msSaveOrOpenBlob' in navigator ? function saveAs(blob, name, opts) {
  name = name || blob.name || 'download';

  if (typeof blob === 'string') {
    if (corsEnabled(blob)) {
      download(blob, name, opts);
    } else {
      var a = document.createElement('a');
      a.href = blob;
      a.target = '_blank';
      setTimeout(function () {
        click(a);
      });
    }
  } else {
    navigator.msSaveOrOpenBlob(bom(blob, opts), name);
  }
} // Fallback to using FileReader and a popup
: function saveAs(blob, name, opts, popup) {
  // Open a popup immediately do go around popup blocker
  // Mostly only available on user interaction and the fileReader is async so...
  popup = popup || open('', '_blank');

  if (popup) {
    popup.document.title = popup.document.body.innerText = 'downloading...';
  }

  if (typeof blob === 'string') return download(blob, name, opts);
  var force = blob.type === 'application/octet-stream';

  var isSafari = /constructor/i.test(_global.HTMLElement) || _global.safari;

  var isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);

  if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== 'undefined') {
    // Safari doesn't allow downloading of blob URLs
    var reader = new FileReader();

    reader.onloadend = function () {
      var url = reader.result;
      url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, 'data:attachment/file;');
      if (popup) popup.location.href = url;else location = url;
      popup = null; // reverse-tabnabbing #460
    };

    reader.readAsDataURL(blob);
  } else {
    var URL = _global.URL || _global.webkitURL;
    var url = URL.createObjectURL(blob);
    if (popup) popup.location = url;else location.href = url;
    popup = null; // reverse-tabnabbing #460

    setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 4E4); // 40s
  }
});
_global.saveAs = saveAs.saveAs = saveAs;

if (typeof module !== 'undefined') {
  module.exports = saveAs;
}
        var output= [];
        var locMap={};
        var callStack=[];
        var frmToFunName = {};
        var funIDToDecl = {};
        var scriptSet = []
        //var endflag = false;

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
        var chunkSize = 500000;
        var finalLen = 0;
         /*Array.from({length: Math.ceil(value.length / chunkSize)}, function(val, i){
                    chunked.push(arr.slice(i * chunkSize, i * chunkSize + chunkSize))
                  })*/
        J$.fileCount=0;
        function writing(value){
            if(value.length>0){
                finalLen+=value.length
                var groups = []
                var groups = value.map(function(e, i){ 
                    return i % chunkSize === 0 ? value.slice(i, i + chunkSize) : null; 
                }).filter(e => { return e; });
                //console.log("here"+value.length,groups.length)
                for (var i=0 ;i<groups.length;i++){
                    console.log("now here")
                    const str = JSON.stringify(groups[i]);
                    const bytes = new TextEncoder().encode(str); 
                    J$.fileCount= J$.fileCount +1   
                    var blob = new Blob([bytes], {type: "text/plain;charset=utf-8"});
                    try {
                    saveAs(blob, "Results"+J$.fileCount+".txt");
                    }catch(e){
                        console.log("Exception :"+ e)
                    }
                }
            }
        }
        var fileWrInt = setInterval( function() { 
            console.log("Before :" + output.length)
            writing(output)
            output=[]
            console.log("After :" + output.length)
        }, 500);
        function getValue(v) {
            var type = typeof v;
            if (v!== null) {
                try{
                    var shadowObj = J$.smemory.getShadowObjectOfObject(v);
                    var shadowId = J$.smemory.getIDFromShadowObjectOrFrame(shadowObj)
                    if (type ==='function'){
                            ifNative = isNative(v)? "Nat" : "Non"
                            ifNative = isNative(v)? "Y" : "N"
                            return "Fun"+ifNative+":"+shadowId;
                            //return ifNative+shadowId;

                    } else if (type === 'object'){
                            return "Obj"+shadowId;
                            //return "O"+shadowId;
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
        function getFrameID(name) {
                return "Frm"+J$.smemory.getIDFromShadowObjectOrFrame(J$.smemory.getShadowFrame(name));
        }
        function getCurrentFrameID() {
                return "Frm"+J$.smemory.getIDFromShadowObjectOrFrame(J$.smemory.getCurrentFrame());
        }
        function addToTrace(typ, funName, identity, loc, others) {
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
            //output.push([typ,funName])
            //output.push(typ)
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
                /*var locIid = "";
                try{
                        locIid = format.exec(loc);
                        format.lastIndex = 0;
                        return locIid[1].replace("(",":")+"@"+locIid[2];
                }
                        catch(e){
                                console.log("Unsupported format: " +from + ","+ loc)
                                return;
                        }
                */
               locMap[giid] = loc;
               return loc;
        }
    
        J$.analysis = {
                putField : function (iid, base, offset, val, isComputed, isOpAssign) {
                    if(isSetter(base,offset)){
                        var desc = getPropertyDescriptor(base,offset);
                        funName = desc.set.name? desc.set.name: "anon"
                        funId= getValue(desc.set)
                        addToTrace("Put",funName,funId,getLoc("put",J$.getGlobalIID(iid)),"set")
                        addToTrace("InvokeSetter",funName,funId,getLoc("put",J$.getGlobalIID(iid)))
                    }else if (typeof val== 'function'){
                            funName = val.name? val.name: "anon"
                            funId= getValue(val)
                            addToTrace("Put",funName,funId,getLoc("put",J$.getGlobalIID(iid)),String(offset))
                        }
                },
                getField : function (iid, base, offset, val, isComputed, isOpAssign) {
                    if(isGetter(base,offset)){
                        var desc = getPropertyDescriptor(base,offset);
                        funName = desc.get.name? desc.get.name: "anon"
                        funId=getValue(desc.get)
                        addToTrace("Get",funName,funId,getLoc("get",J$.getGlobalIID(iid)),"get")
                        addToTrace("InvokeGetter",funName,funId,getLoc("get",J$.getGlobalIID(iid)))
                    }else if (typeof val== 'function'){
                            funName = val.name? val.name: "anon"
                            funId= getValue(val)
                            addToTrace("Get",funName,funId,getLoc("get",J$.getGlobalIID(iid)),String(offset))   

                    }
                },
                declare: function (iid, name, val, isArgument, argumentIndex, isCatchParam) {
                    if(name==="arguments" && isArgument && typeof val== 'object' && val!=null){
                        for (var key of Object.keys(val)){
                            var value = val[key]
                            if(typeof value == "function"){
                                funName= value.name ? value.name : "anon";
                                funId= getValue(value)
                                addToTrace("Put",funName, funId,getLoc("declare",J$.getGlobalIID(iid)),String(key))
                            }
                        }
                    }
                    else if((typeof val)=== 'function'){
                        funName = val.name? val.name : "anon"
                        var funId = getValue(val)
                        addToTrace("Declare",funName,funId,getLoc("declare",J$.getGlobalIID(iid)),getFrameID(name)+":"+name)

                    }
                },
                literal: function (iid, val, hasGetterSetter) {
                    if(typeof val== 'function'){
                        funName = val.name? val.name : "anon"
                        funId = getValue(val)
                        addToTrace("Create",funName,funId,getLoc("literal",J$.getGlobalIID(iid)))
                        funIDToDecl[funId]= getLoc("create",callStack[callStack.length-1])

                    }
                    else if(typeof val== 'object' && val!=null){
                        if(Array.isArray(val)){
                            for (var key in val){
                                if(typeof val[key] =="function"){
                                    funName= val[key].name ? val[key].name : "anon";
                                    funId= getValue(val[key])
                                    addToTrace("Put",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),String(key))
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
                                        addToTrace("Put",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),String(key))
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
                            frmToFunName[frm] = getLoc("fenter1",J$.getGlobalIID(iid))
                            
                        }else{
                            if (callStack.length === 0) {
                                frmToFunName[frm] = "system"+"/"+funName;
                            }else{
                                frmToFunName[frm] =  funIDToDecl[funId]+"/"+funName
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
                        frmToFunName[frm] = funName
                        callStack.push(giid);
                        //new to resolve eval/evalIndirect issues
                        scriptName=funName;
                        //scriptSet.push(scriptName)
                        scriptSet.push(frm)
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
                                var index = String(base.length+Number(key))
                                addToTrace("Put",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),index)

                            }
                        }
                    }
                    if(isNative(f) && f===Array.prototype.shift){
                        for (var key in base){
                            if(typeof base[key] =="function"){
                                funName= base[key].name ? base[key].name : "anon";
                                funId= getValue(base[key])
                                var indx = String(Number(key) - 1)
                                addToTrace("Put",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),indx)

                            }
                        }
                    }
                    if(isNative(f) && f===Array.prototype.unshift){
                        for (var key of Object.keys(args)){
                            var value = args[key]
                            if(typeof value =="function"){
                                funName= value.name ? value.name : "anon";
                                funId= getValue(value)
                                addToTrace("Put",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),String(key))

                            }
                        }
                        for (var key in base){
                            if(typeof base[key] =="function"){
                                funName= base[key].name ? base[key].name : "anon";
                                funId= getValue(base[key])
                                var indx = String(Number(key) + args.length)
                                addToTrace("Put",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),indx)

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
                    addToTrace("InvokeCall",funName,funId,getLoc("invkcll",J$.getGlobalIID(iid)))
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
                    addToTrace("InvokeReturn",funName,funId,getLoc("invkretrn",J$.getGlobalIID(iid)),list)
                    if(isNative(f) && f===Array.prototype.pop){
                        var indx = String(base.length)
                        if(typeof result =="function"){
                            funName = result.name ? result.name : "anon";
                            funId = getValue(result)
                            addToTrace("Get",funName, funId, getLoc("invkretrn",J$.getGlobalIID(iid)),indx)

                        }
                    }
                
                },
                read: function (iid, name, val, isGlobal, isScriptLocal) {
                    if(typeof val== 'function'){
                        
                        funName = val.name? val.name : "anon"
                        funId = getValue(val)
                        //new to model variable uses inside eval/evalIndirect
                        if (frmToFunName[getFrameID(name)] && !frmToFunName[getFrameID(name)].indexOf("eval") === 0 && scriptSet.indexOf(getFrameID(name)) > -1 ){
                            addToTrace("LocRead",funName,funId,getLoc("read",callStack[callStack.length-1]),[getFrameID(name)+":"+name,"Global",getLoc("read",callStack[callStack.length-1])])
                        }
                        else if(getFrameID(name)!==getCurrentFrameID()){
                                addToTrace("LexRead",funName,funId,frmToFunName[getFrameID(name)]==undefined?"None":frmToFunName[getFrameID(name)],[getFrameID(name)+":"+name,getCurrentFrameID(),getLoc("read",callStack[callStack.length-1])])
                        }else{
                                addToTrace("LocRead",funName,funId,getLoc("read",callStack[callStack.length-1]),[getFrameID(name)+":"+name,getCurrentFrameID(),getLoc("read",callStack[callStack.length-1])])
                        }

                    }
                },
                write: function (iid, name, val, lhs, isGlobal, isScriptLocal) {
                    if (typeof val == 'function' ){
                        funName = val.name? val.name : "anon"
                        funId = getValue(val)
                        addToTrace("Write",funName,funId,getLoc("write",J$.getGlobalIID(iid)),getFrameID(name)+":"+name) //temp frmToFunName[getFrameID(name)]
                    }
                },
                _return: function (iid, val) {
                    if (typeof val == 'function' ){
                        funName = val.name? val.name : "anon"
                        funId = getValue(val)
                        addToTrace("Return",funName, funId,getLoc("return",J$.getGlobalIID(iid)))
                    }
                },
                _with: function (iid, val) {
                    if(typeof val== 'object' && val!=null){
                        for (var key of Object.keys(val)){
                            var value = val[key]
                            if(typeof value == "function"){
                                funName= value.name ? value.name : "anon";
                                funId= getValue(value)
                                addToTrace("With",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),String(key))
                            }
                        }
                    }
                },
            endExecution: function () {
                console.log("here")
                jClearInterval(fileWrInt)
                J$.fileCount=0;
                writing(output)
                if (!isBrowser) {
                    const fs = require('fs');
                    const json = JSON.stringify(output, null, 2);
                    console.log(output)
                    filename=(process.argv[1]).replace(/.js$/,"_trace.json");
                    fs.writeFileSync(filename, json, 'utf8',function(err) {
                        if(err) console.log('error', err);
                    });
                }else{
                    console.log(finalLen)
                    /*J$.CallTrace= output;
                    J$.LocMap= locMap; 
                    return [J$.CallTrace,J$.LocMap];*/
                    J$.finalLen=finalLen
                    return J$.finalLen;
                }
        }
    };
    
    }());
    
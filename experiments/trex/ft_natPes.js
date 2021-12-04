(function(){
        var obj = {
                okay1: function(){
                        this["words"] = {"xyz": [{"abc": true}]}
                        return;
                },
                okay2:function(){//['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
                        var todos = this.words.xyz
                        todos.filter(function(word){
                                return word['abc']==true},
                        this);
                }
        }
        obj.okay1();
        console.log(obj.okay2());
})()
/**
 * Graph Implemention based on {@link https://www.geeksforgeeks.org/implementation-graph-javascript/}
 */
var Queue = require('./Queue.js');
class Graph {
        // defining an adjacent list 
        constructor() {
                this.AdjList = new Map();
                //this.reachableNodes={};
        }

        // add vertex to the graph 
        addVertex(v) 
        { 
                // initialize the adjacent list with a  null array 
                this.AdjList.set(v, []);
        } 

        // add edge to the graph 
        addEdge(caller, callee) {
                // get the list for vertex caller and put the 
                // vertex callee denoting edge between caller and callee 
                if (!this.AdjList.has(caller)){
                this.addVertex(caller)
                }
                if (!(this.AdjList.get(caller).includes(callee))){
                this.AdjList.get(caller).push(callee);}

        }
        removeEdge(caller,callee){
                // removing edge

                if (this.hasEdge(caller,callee) && this.AdjList.get(caller).includes(callee)){
                            if(this.getValues(caller).length==1){
                                this.AdjList.delete(caller)
                                }
                            else{
                                var index = this.AdjList.get(caller).indexOf(callee);
                                if (index >= 0) {
                                        this.AdjList.get(caller).splice( index, 1 );
                                      }
                            }

                }
                return this.AdjList
        }

        hasEdge(caller,callee) {
                // identifying if an edge is present
                return this.AdjList.has(caller) && this.AdjList.get(caller).includes(callee);
        }

        getKeys(){
                // returns all possible keys of the graph
                return this.AdjList.keys();
        }
        getValues(key){
                // returns all possible values pertaining 
                //to a key in the graph
                return this.AdjList.get(key);
        }
        getSize(){
                // returns the number of edges
                var cnt=0
                var get_keys = this.getKeys();

                // iterate over all the keys 
                for (var i of get_keys) {
                        var get_values = this.AdjList.get(i);
                        // iterate over all the values
                        for (var j of get_values){
                                // format the egde in the form 
                                // caller -> callee
                                cnt+=1;
                        }
                }
                return cnt
        }
        getContains(input){
                // returns the number of edges
                var cntFunc=[];
                var regex=/\(((\S+)\@[0-9]+\:([0-9]+)\-([0-9]+))\)/;
                var get_keys = this.getKeys();
  
                // iterate over all the keys
                var inputChars= regex.exec(input)
                regex.lastIndex = 0;
                if (!(input.includes("(Native)")))
                for (var key of get_keys) {
                        var keyChars = regex.exec(key);
                        regex.lastIndex = 0;
                        if (inputChars!= null && keyChars!=null){
                                if(parseInt(keyChars[3])>=parseInt(inputChars[3]) && parseInt(keyChars[4])<=parseInt(inputChars[4])) {
                                        if(!(key in cntFunc)){
                                                cntFunc.push(key)}
                                }
                        }
                        }
                else{   //console.log(input)
                        for (var key of get_keys) {
                        if(key==input){
                                //console.log([...this.getValues(key)])
                                var natcalls = [...this.getValues(key)]
                                for (var nat of natcalls){
                                        cntFunc.push(nat)}
                                }
                        }
                }
                return cntFunc;
        } 
        getGraph() {
                var txt=""
                var get_keys = this.getKeys();

                // iterate over all the keys 
                for (var i of get_keys) {
                        var get_values = this.AdjList.get(i);
                        // iterate over all the values
                        for (var j of get_values){
                                // format the egde in the form 
                                // caller -> callee
                                txt+=(i + " -> " + j +"\n");
                        }
                }
                return txt.trim()
        }      
        // function to performs BFS 
        getbfs(startingNode) 
        {        
        var output=[];
	// create a visited array 
	var visited = []; 
	for (var i = 0; i < this.getSize(); i++) 
		visited[i] = false; 

	// Create an object for queue 
	var q = new Queue(); 

	// add the starting node to the queue 
	visited[startingNode] = true; 
	q.enqueue(startingNode); 

	// loop until queue is element 
	while (!q.isEmpty()) { 
		// get the element from the queue 
		var getQueueElement = q.dequeue(); 

		// passing the current vertex to callback funtion 
                output.push(getQueueElement);
                

		// get the adjacent list for current vertex 
		var get_List = this.AdjList.get(getQueueElement); 

		// loop through the list and add the element to the 
		// queue if it is not processed yet 
		for (var i in get_List) { 
			var neigh = get_List[i]; 

			if (!visited[neigh]) { 
				visited[neigh] = true; 
				q.enqueue(neigh); 
			} 
		} 
        } 

        return output
        } 

} 

module.exports = Graph;
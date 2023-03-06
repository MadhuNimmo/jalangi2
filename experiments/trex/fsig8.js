function greet() {
        var argsArray = Array.from(arguments)
        var name = ""
        for(item in argsArray){
                name+=argsArray[item]+" "
        }
        console.log(name)
}
greet("John", "Doe"); // Hello, John Doe!
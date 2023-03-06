function greet() {
        if(arguments.length>0){
                console.log("Hello!");
        }
        else{
                console.log("Bye!");
        }
}
greet("John", "Doe"); // Hello, John Doe!
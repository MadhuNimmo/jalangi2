function greet(firstName) {
    if(arguments.length>1){
        console.log("Hello, "+firstName +" "+arguments[1]);
    }else{
        console.log("Hello, "+firstName);
    }
}
greet("John"); // Hello, John!
//greet("John", "Doe"); // Hello, John Doe!
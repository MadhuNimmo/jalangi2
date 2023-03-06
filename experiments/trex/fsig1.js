function greet(firstName,secondName) {
        if(secondName){
            console.log("Hello, "+firstName +" "+secondName);
        }else{
            console.log("Hello, "+firstName);
        }
    }
    //greet("John"); // Hello, John!
    greet("John", "Doe"); // Hello, John Doe!
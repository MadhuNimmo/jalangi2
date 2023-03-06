function xyz(something){
        while (1) switch (something) {
                case 4:
                        if(something==4){
                                console.log("true")
                                break;
                        }
                        throw new Error();
                }
}
xyz(5)
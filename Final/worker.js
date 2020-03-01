onmessage = function(event){
    console.log("Worker: Message received from the main script");
    if (event.data.message === "numbers"){
        result = parseInt(event.data.args[0]) * parseInt(event.data.args[1]);
        if(isNaN(result)){
            console.log("Worker: Please write two numbers")
        }
        else{
            postMessage("Result: " + result);
            console.log('Worker: Posting message back to main script');
        }
    }
    else if( event.data.message === "terminate" ) {
        console.log("Worker: Closing the worker");
        close();
    }

}
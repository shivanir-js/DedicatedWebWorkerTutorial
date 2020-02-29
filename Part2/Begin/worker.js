onmessage = function(event){
    console.log("Worker: Message received from the main script");
    result = parseInt(event.data[0]) + parseInt(event.data[1]);
    if(isNaN(result)){
        console.log("Worker: Please write two numbers")
    }
    else{
        postMessage("Result: " + result);
        console.log('Worker: Posting message back to main script');
    }
}
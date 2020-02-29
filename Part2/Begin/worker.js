onmessage = function(event){
    console.log("Worker: Message received from the main script");
    result = event.data[0] * event.data[1];
    if(isNaN(result)){
        console.log("Worker: Please write two numbers")
    }
    else{
        postMessage("Result: " + result);
        console.log("")
    }
}
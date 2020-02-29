const first = document.querySelector("#number1");
const second = document.querySelector("#number2");
const result = document.querySelector(".result");

if(window.Worker){
    const worker = new Worker("worker.js");
    first.onchange = function(){
        worker.postMessage([first.value, second.value]);
        console.log("Main: Message posted to web worker");
    }

    second.onchange = function(){
        worker.postMessage([first.value, second.value]);
        console.log("Main: Message posted to web worker");
    }

    worker.onmessage = function(event){
        result.textContent = event.data;
        console.log("Main: Message received from web worker");
    }
}
else {
	console.log('Your browser doesn\'t support web workers.')
}

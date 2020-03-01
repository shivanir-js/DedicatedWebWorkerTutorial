const first = document.querySelector("#number1");
const second = document.querySelector("#number2");
const result = document.querySelector(".result");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");

if (window.Worker) {
    let worker = null;

    stop.onclick = function () {
        if (worker !== null) {
            /* Alternatively you could call worker.terminate() here,
            * but posting a close message allows worker to cleanup
            */
            worker.postMessage({
                message: "terminate"
            });
            worker = null;
        }
    }
    start.onclick = function () {
        worker = new Worker("worker.js");
        first.onchange = function () {
            worker.postMessage({
                message: "numbers",
                args: [first.value, second.value]
            });
            console.log("Main: Message posted to web worker");
        }

        second.onchange = function () {
            worker.postMessage({
                message: "numbers",
                args: [first.value, second.value]
            });
            console.log("Main: Message posted to web worker");
        }

        worker.onmessage = function (event) {
            result.textContent = event.data;
            console.log("Main: Message received from web worker");
        }
    }

}
else {
    console.log('Your browser doesn\'t support web workers.')
}

let threadId;
let i = 0;

//main function execute heavy code and after calculate, update text on page
function main() {
    //simulate heavy code
    for (let j = 1; j < 100000; j++) {
    }

    //update content on page
    document.getElementById('counter').innerHTML = i++;
}

/* stop execute script */
function stop() {
    clearInterval(threadId);
}

/* start execute script */
function start() {
    //repeat the main () function until the stop () function is called
    threadId = setInterval("main()", 0);
}
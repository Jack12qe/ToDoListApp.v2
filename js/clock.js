const h2 = clock.querySelector("#clock h2");

/*
    function section
*/
function printTime() {
    const date = new Date();
    let hours = date.getHours();
    const amOrPm = hours > 12 ? "PM" : "AM";
    hours = hours > 12 ? hours - 12 : hours;
    hours = String(hours).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const time = `${amOrPm} ${hours}:${minutes}:${seconds}`;
    h2.innerText = time;
}

/*
    execute section
*/

printTime();
setInterval(printTime, 1000);

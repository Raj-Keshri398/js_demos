const clock = document.getElementById('clock');



// setInterval method control the js events how much time take here is code take 1 second.
setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    show('page', true);
    show('loading', false);
});




let burger = document.querySelector(".burger");
let button = document.querySelector(".contact");

burger.addEventListener("click",() => {
    let navLink = document.querySelector(".nav-links");
    let button = document.querySelector(".btn-container")

    navLink.classList.toggle("nav-active");
    button.classList.toggle("nav-active");

})

button.addEventListener("click", () => {
    location.href = "https://m.me/LizPalmana"
});
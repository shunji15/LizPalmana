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


var mymap = L.map('mapid').setView([14.70046,121.13076], 16);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2h1bmppMDUiLCJhIjoiY2ttd2kxZTF1MGY1OTJ2cDU4NHZ5eWx4bSJ9.a1rkI7bSat8oNn6EG11hEw'
}).addTo(mymap);

var marker = L.marker([14.70037, 121.13252]).addTo(mymap);

marker.bindPopup("<h6>Liz Palmana Resort</h6>").openPopup();


let burger = document.querySelector(".burger");
let button = document.querySelector(".contact");
let bookBtn = document.querySelector(".book-btn");

burger.addEventListener("click",() => {
    let navLink = document.querySelector(".nav-links");
    let button = document.querySelector(".btn-container")

    navLink.classList.toggle("nav-active");
    button.classList.toggle("nav-active");

})


button.addEventListener("click", () => {
    location.href = "https://m.me/LizPalmana"
});


bookBtn.addEventListener("click", () => {
    location.href = "https://m.me/LizPalmana"
});
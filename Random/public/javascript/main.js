

async function isValidCreditCard(location) {
    let lat = 47.15;
    let long = 27.58;
    if (location) {


        let response = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=3a22032b2bc74596ae96bb96597494d8&q=${location}`);
        let myJson = await response.json();
        let x = JSON.stringify(myJson);
        //let y = JSON.parse(myJson);
        //console.log(x);
        //console.log(myJson.results.annotations);
        lat = myJson.results[0].annotations.DMS.lat.replace('N', '').replace('°', '').replace(' ', '.').slice(0, 4);
        long = myJson.results[0].annotations.DMS.lng.replace('N', '').replace('°', '').replace(' ', '.').slice(0, 4);
        console.log(lat);

    }

    var mymap = L.map('mapid').setView([lat, long], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoidmxhZC1jaXJzdGVhbiIsImEiOiJjanVtZnIzeHIwNXBxNGVwcGhvcTM4ZTVwIn0.pDJ6w4h1jdflh4Nbh7iQIg'
    }).addTo(mymap);

    var marker = L.marker([47.15, 27.58]).addTo(mymap);
    marker.bindPopup("Gara Iași").openPopup();
    var marker2 = L.marker([47.16, 27.59]).addTo(mymap);
    marker2.bindPopup("Gara Nicolina").openPopup();
}

function trainstations() {
    let x = document.getElementsByClassName("fa-ban");

    for (let i = 0; i < x.length; i++) {
        x[i].parentNode.parentNode.style.backgroundColor = "white";
        x[i].parentNode.parentNode.style.fontSize = "0.9em";
        x[i].parentNode.parentNode.style.opacity = "0.6";
    }
}
trainstations();

window.onscroll = () => scrollFunction();

function scrollFunction() {
    if (document.documentElement.scrollTop > 20)
        document.getElementById("goUp").style.display = "block";
    else
        document.getElementById("goUp").style.display = "none";

}


function topFunction() {
    document.documentElement.scrollTop = 0;
}

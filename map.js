
var mymap = L.map('mapid').setView([-0.256768, -78.550729], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

var marker = L.marker([-0.256768, -78.550729]).addTo(mymap);

var circle = L.circle([-0.255871, -78.557617], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 300
}).addTo(mymap);

var polygon = L.polygon([
  [-0.257751, -78.551697],
  [-0.257149, -78.550161],
  [-0.257837, -78.548350]
]).addTo(mymap);

marker.bindPopup("<b>Hello world!</b><br>My house").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup()
    .setLatLng([-0.256768, -78.550729])
    .setContent("I am a standalone popup.")
    .openOn(mymap);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);

















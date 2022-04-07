// create map
var map = L.map('map').setView([51.505, -0.09], 13);

// Add OpenStreetMap tiles:
L.tileLayer('https://.tile.openstreetmap.org///.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: '15',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map)

// draw the 2nd arrondissement
var marker = L.marker([51.5, -0.09]).addTo(map);

// create red pin marker
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

// metro station markers




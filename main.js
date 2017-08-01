// Google Maps API Key = AIzaSyBSR2_qTPso9gFSXcLf8SaW75KlVRN5BKg 

var nuclearReactorsCA = [{
    name: 'Diablo Canyon Power Plant',
    lat: 35.210833,
    lng: -120.856111,
    status: 'active'
}, {
    name: 'Humboldt Bay Nuclear Power Plant',
    lat: 40.741322,
    lng: -124.209044,
    status: 'active'
}, {
    name: 'Rancho Seco Nuclear Generating Station',
    lat: 38.345278,
    lng: -121.121667,
    status: 'decomissioned',
    dateClosed: '23 October 2009'
}, {
    name: 'San Onofre Nuclear Generating Station',
    lat: 33.368889,
    lng: -117.555000,
    status: 'decomissioned',
    dateClosed: '7 June 2013'
}, {
    name: 'Vallecitos Nuclear Center',
    lat: 37.613267,
    lng: -121.840164,
    status: 'decomissioned',
    dateClosed: 'December 1963'
}, {
    name: 'Sodium Reactor Experiment',
    lat: 34.235278,
    lng: -118.708333,
    status: 'decomissioned',
    dateClosed: '15 February 1964'
}];


var markers = [];
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: { lat: 36.7783, lng: -119.4179 }
    });
}

function drop() {
    clearMarkers();
    for (var i = 0; i < nuclearReactorsCA.length; i++) {
        addMarkerWithTimeout(nuclearReactorsCA[i], i * 200);
    }
}

function addMarkerWithTimeout(position, timeout) {
    window.setTimeout(function () {
        markers.push(new google.maps.Marker({
            position: position,
            map: map,
            animation: google.maps.Animation.DROP
        }));
    }, timeout);
}

function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}

var script = document.createElement('script');

//     // This example uses a local copy of the GeoJSON stored at
//     // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
// script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&latitude=36&longitude=-119&maxradius=5&minmagnitude=5&starttime=1900-01-01",
  "method": "GET",
  "headers": {
  "content-type": "application/json"
  }
}

// var $earthquakes = 

$.ajax(settings).done(function (response) {
  console.log(response);
});

console.log("$earthquakes");

document.getElementsByTagName('head')[0].appendChild(script);

map.data.setStyle(function (feature) {
        var magnitude = feature.getProperty('mag');
        return {
            icon: getCircle(magnitude)
        };
    });


function getCircle(magnitude) {
    return {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: 'red',
        fillOpacity: .2,
        scale: Math.pow(2, magnitude) / 2,
        strokeColor: 'white',
        strokeWeight: .5
    };
}

function eqfeed_callback(results) {
    map.data.addGeoJson(results);
};

      
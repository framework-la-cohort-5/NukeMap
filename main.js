
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
        // google.maps.event.addListener(markers, 'click', function() {
        //   infowindow.setContent(nuclearReactorsCA.name);
        //   infowindow.open(map, markers);
        // });
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

// var script = document.createElement('script');

//     // This example uses a local copy of the GeoJSON stored at
//     // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
// script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';

// get data fromt the API and save as a variable to use when I click on earthquakes button
// make circles according to the magnitude of the earthquake
// click on earthquakes button to make cirles with dropE function
// clear earthquakes when I run dropE again
// pop up when you click on the earthquake with the magnitude and date 



// var test = { "type": "Feature", "properties": { "mag": 5.6, "place": "26km SW of Hawthorne, Nevada", "time": 1482913332208, "updated": 1490309526040, "tz": -480, "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nn00570710", "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00570710&format=geojson", "felt": 11559, "cdi": 5.7, "mmi": 6.81, "alert": "green", "status": "reviewed", "tsunami": 0, "sig": 1052, "net": "nn", "code": "00570710", "ids": ",nn00570710,nc72744490,us10007n66,", "sources": ",nn,nc,us,", "types": ",dyfi,focal-mechanism,general-link,geoserve,impact-text,losspager,moment-tensor,nearby-cities,origin,phase-data,scitech-link,shakemap,", "nst": 43, "dmin": 0.123, "rms": 0.1913, "gap": 42.44, "magType": "ml", "type": "earthquake", "title": "M 5.6 - 26km SW of Hawthorne, Nevada" }, "geometry": { "type": "Point", "coordinates": [-118.8972, 38.3904, 12.2] }, "id": "nn00570710" }
// console.log(test.geometry.coordinates);
// // // // console.log(JSON.parse(test));


var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&latitude=36&longitude=-119&maxradius=5&minmagnitude=5&starttime=1900-01-01",
    "method": "GET",
    "headers": {
        "content-type": "application/json"
    }
}

var $earthquakes = [];

$.ajax(settings).done(function (response) {
    // console.log(response);
    for (var i = 0; i < response.features.length; i++) {
        $earthquakes.push({
            lat: response.features[i].geometry.coordinates[1],
            lng: response.features[i].geometry.coordinates[0],
            mag: response.features[i].properties.mag,
            time: response.features[i].properties.time,
            url: response.features[i].properties.url
        })
    }
    // console.log($earthquakes);
});


// function getCircle(magnitude) {
//     return {
//         path: google.maps.SymbolPath.CIRCLE,
//         fillColor: 'green',
//         fillOpacity: .2,
//         scale: Math.pow(2, magnitude) / 2,
//         strokeColor: 'white',
//         strokeWeight: .5
//     };
// }


// var center = []
//    console.log(center);

function dropE() {
    // clearEarthquakes();
    for (var i = 0; i < $earthquakes.length; i++) {
        var feature = $earthquakes[i];
        var LatLng = { lat: $earthquakes[i].lat, lng: $earthquakes[i].lng };
        var mag = $earthquakes[i].mag;

        addEarthquakeWithTimeout(LatLng, mag, i * 200);
    }
};
<<<<<<< HEAD



var markersE = [];

function addEarthquakeWithTimeout(position, mag, timeout) {

    window.setTimeout(function () {
        //  console.log(mag);
        markersE.push(new google.maps.Circle({
            center: position,
            fillColor: 'green',
            fillOpacity: .2,
            radius: Math.pow(2, mag) * 1000,
            strokeColor: 'white',
            strokeWeight: .5,
            map: map,
            animation: google.maps.Animation.DROP
        }, timeout))

    })
}


// console.log(markersE);

// function clearEarthquakes() {
//     for (var i = 0; i < $earthquakes.length; i++) {
//         $earthquakes[i].setMap(null);
//     }
//     $earthquakes = [];
// }
=======
>>>>>>> a1ceda1b064f517c5f4c2636a4fa7aeff24f2b82

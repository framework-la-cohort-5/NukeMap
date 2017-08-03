
// Google Maps API Key = AIzaSyBSR2_qTPso9gFSXcLf8SaW75KlVRN5BKg 

var nuclearReactorsCA = [{

        name: 'Nevada Test Site',
        lat: 37.116667,
        lng: -116.050000,
        status: 'inactive'

     }, {
        name: 'Palo Verde Nuclear Generating Station',
        lat: 33.389167,
        lng: -112.865000,
        status: 'active'
    }, {
        name: 'Yucca montains',
        lat: 36.940211,
        lng: -116.485007,
        status: 'main USA disposal project'
    }, {
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
    


      var map;
      var markers = [];

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: {lat: 36.7783, lng: -119.4179},
        mapTypeId: 'terrain'
    });
}
      

      function drop() {
        clearMarkers();
        for (var i = 0; i < nuclearReactorsCA.length; i++) {
          addMarkerWithTimeout(nuclearReactorsCA[i], i * 200)
          }
        }
      


      function addMarkerWithTimeout(position, timeout) {
        window.setTimeout(function() {

            var infowindow = new google.maps.InfoWindow({
          content: name
        });

            var marker = new google.maps.Marker({
            position: position,
            map: map,
            animation: google.maps.Animation.DROP
        }));
    }, timeout);


}
          
        marker.addListener('click', function() {
              infowindow.open(map, marker);
         });

        markers.push(marker)
        }, timeout);
    } 

function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}


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

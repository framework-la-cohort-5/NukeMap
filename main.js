// Google Maps API Key = AIzaSyBSR2_qTPso9gFSXcLf8SaW75KlVRN5BKg 
document.onload(initMap());

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: { lat: 37.0902, lng: -95.7129 }
    });
    for (var nuclearReactor of nuclearReactorsCA) {
        var marker = [];
        marker.push 
        new google.maps.Marker({
            position: [nuclearReactor.latitude, nuclearReactor.longitude],
            map: map,
            title: nuclearReactor.name
        });
    }
    var nuclearReactorsCA = [{
        name: 'Diablo Canyon Power Plant',
        latitude: 35.210833,
        longitude: -120.856111,
        status: 'active'
    }, {
        name: 'Humboldt Bay Nuclear Power Plant',
        latitude: 40.741322,
        longitude: -124.209044,
        status: 'active'
    }, {
        name: 'Rancho Seco Nuclear Generating Station',
        latitude: 38.345278,
        longitude: -121.121667,
        status: 'decomissioned',
        dateClosed: '23 October 2009'
    }, {
        name: 'San Onofre Nuclear Generating Station',
        latitude: 33.368889,
        longitude: -117.555000,
        status: 'decomissioned',
        dateClosed: '7 June 2013'
    }, {
        name: 'Vallecitos Nuclear Center',
        latitude: 37.613267,
        longitude: -121.840164,
        status: 'decomissioned',
        dateClosed: 'December 1963'
    }, {
        name: 'Sodium Reactor Experiment',
        latitude: 34.235278,
        longitude: -118.708333,
        status: 'decomissioned',
        dateClosed: '15 February 1964'
    }];
    
}

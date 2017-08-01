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
          center: {lat: 36.7783, lng: -119.4179}
        });
      }

      function drop() {
        clearMarkers();
        for (var i = 0; i < nuclearReactorsCA.length; i++) {
          addMarkerWithTimeout(nuclearReactorsCA[i], i * 200);
        }
      }


      function addMarkerWithTimeout(position, timeout) {
        window.setTimeout(function() {
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



   
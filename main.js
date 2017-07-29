// Google Maps API Key = AIzaSyBSR2_qTPso9gFSXcLf8SaW75KlVRN5BKg 

function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: {lat: 37.0902, lng: -95.7129}
        });

        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.textSearch({
          location: usa,
            radius: '500',
            query: 'nuclear'
        }, callback);
      }

      function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
          }
        }
      }

      function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }
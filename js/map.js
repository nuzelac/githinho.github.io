      function init_map() {
        var var_location = new google.maps.LatLng(45.596224,17.218797);
 
        var var_mapoptions = {
          center: var_location,
          zoom: 15
        };
 
        var var_map = new google.maps.Map(document.getElementById("map"),
            var_mapoptions);

        var var_marker = new google.maps.Marker({
            position: var_location,
            map: var_map,
            title:"Tehnoservis"});
 
        var_marker.setMap(var_map); 
 
      }
 
      google.maps.event.addDomListener(window, 'load', init_map);
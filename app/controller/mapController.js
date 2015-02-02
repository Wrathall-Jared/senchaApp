Ext.define('MyApp.controller.mapController', {
    extend: 'Ext.app.Controller',
config: {
    control: {
        'map[itemId="mapHomeView"]': {
            maprender: 'mapHomeViewMapRenderer'
        }
    }
},

mapHomeViewMapRenderer: function(comp, map) {
    var map = Ext.ComponentQuery.query('#mapHomeView')[0].getMap();

    var geocoder = new google.maps.Geocoder();

    for (var i = Ext.getStore('MyContacts').getCount() - 1; i >= 0; i--) {
    geocoder.geocode( {'address': Ext.getStore('MyContacts').getAt(i).get('address')}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
};
},
})

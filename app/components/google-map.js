import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  actions: {
    showMap(tree) {
      var container = this.$('.map-display')[0];
      var options = {
        zoom: 15,
        center: {lat: -34.397, lng: 150.644}
      };

      this.get('map').findMap(container, options);
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: {lat: -34.397, lng: 150.644}
      });
      var geocoder = new google.maps.Geocoder();
      debugger;
      geocodeAddress(geocoder, map, tree);
    },

    geocodeAddress(geocoder, resultsMap, tree) {
      var address = tree.get('addres');

      geocoder.geocode({'address': address}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          resultsMap.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
            map: resultsMap,
            position: results[0].geometry.location
          });
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    }
  }
});

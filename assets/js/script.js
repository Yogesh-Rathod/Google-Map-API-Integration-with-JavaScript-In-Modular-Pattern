var GOOGLEMAP = (function() {

	// Initialize An Empty Object
	var obj = {};

	obj.cacheDom = function () {
		$(this).$direction = $('.direction');
	}

	// Get users current Location
	obj.successFunction = function(position) {
		var lat = position.coords.latitude;
		var long = position.coords.longitude;
		obj.GetAddress(lat, long);
	}
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(obj.successFunction);
	}

	// Pass On Users Location To Maps API
	obj.GetAddress = function(lat, long) {
		var lat = lat;
		var lng = long;
		var latlng = new google.maps.LatLng(lat, lng);
		var geocoder = geocoder = new google.maps.Geocoder();
		geocoder.geocode({ 'latLng': latlng }, function (results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				if (results[1]) {
					var newAttrForAnchor = "https://www.google.co.in/maps/dir/"+ lat +","+ long +"/33.115154,-96.807259";
					$('.direction').attr( 'href', newAttrForAnchor );
				}
			}
		});
	}

	obj.init = function() {
		obj.cacheDom();
		obj.successFunction();
	}

	// Return That Object
	return obj;
})();
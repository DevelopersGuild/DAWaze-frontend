$(function(){
	// Provide your access token
	L.mapbox.accessToken = 'pk.eyJ1Ijoic29zMCIsImEiOiJ3aTZKTVlFIn0.I9-1qEB9QZfY_FZPoEzHzQ';
	// Create a map in the div #map
	var southWest = L.latLng(37.315764, -122.049419),
		northEast = L.latLng(37.322795, -122.041566),
	    bounds = L.latLngBounds(southWest, northEast);


	var map = L.mapbox.map('map', 'sos0.lpj92h0n', {
	    // set that bounding box as maxBounds to restrict moving the map
	    // see full maxBounds documentation:
	    // http://leafletjs.com/reference.html#map-maxbounds
	    maxBounds: bounds,
	    maxZoom: 19,
	    minZoom: 15
	});

	// zoom the map to that bounding box
	map.fitBounds(bounds);
})

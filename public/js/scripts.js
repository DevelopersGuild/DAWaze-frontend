$(function(){
	var socket = io();
	socket.emit('onlineUsers', 1)

	/*
		mapbox-related code
	*/
	// Provide your access token
	L.mapbox.accessToken = 'pk.eyJ1Ijoic29zMCIsImEiOiJ3aTZKTVlFIn0.I9-1qEB9QZfY_FZPoEzHzQ';
	// Create a map in the div #map
	var southWest = L.latLng(37.315764, -122.049419),
		northEast = L.latLng(37.322795, -122.041566),
	    bounds = L.latLngBounds(southWest, northEast);


	var map = L.mapbox.map('map', 'sos0.m3557bk6', {
	    // set that bounding box as maxBounds to restrict moving the map
	    // see full maxBounds documentation:
	    // http://leafletjs.com/reference.html#map-maxbounds
	    maxBounds: bounds,
	    maxZoom: 20,
	    minZoom: 16
	});

	// zoom the map to that bounding box
	map.fitBounds(bounds);

	/*
		UI-related code
	*/ 
	$('#feed-menu').sidebar('setting', 'transition', 'overlay');
	$('#add-menu').sidebar('setting', 'transition', 'overlay');
	$('#feed-menu').sidebar('attach events', '#feed-btn', 'toggle');
	$('#add-menu').sidebar('attach events', '#add-btn', 'toggle');
	$('.coupled.modal').modal({
		allowMultiple: true
	});
	// open second modal on button click
	$('.second.modal').modal('attach events', '.first.modal .button');
	// show first immediately
	$('.first.modal').modal('attach events', '#login-btn', 'show');

	var color = '#' + [
        (~~(Math.random() * 16)).toString(16),
        (~~(Math.random() * 16)).toString(16),
        (~~(Math.random() * 16)).toString(16)].join('');
	var marker = L.marker([37.31850, -122.04450], {
	    icon: L.mapbox.marker.icon({
	      'marker-color': '#f86767'
	    }),
	    draggable: true
	});
	$('#live-btn').click(function(){
		marker.addTo(map);
		socket.emit('marker', 'marker');
		console.log("add marker");
	})

	marker.on('dragend', ondragend);

	// Set the initial marker coordinate on load.
	ondragend();

	function ondragend() {
	    var m = marker.getLatLng();
	    console.log('Latitude: ' + m.lat + ', Longitude: ' + m.lng);
	}
});


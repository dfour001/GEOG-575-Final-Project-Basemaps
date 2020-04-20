var map = L.map("map",{
                renderer: L.canvas()
                }).setView([0,0], 1);

var data = "path.geojson";

//map.fitBounds([[-4.76130913539, 137.487525671], [-4.56461180591, 137.3146833]]);

var baselayer = new L.tileLayer('./{z}/{x}/{y}.png', {tms: true, attribution: "", minZoom: 10, maxZoom: 16}).addTo(map);

/*
var baselayer = new L.tileLayer('http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/celestia_mars-shaded-16k_global/{z}/{x}/{y}.png', {
			zoom: 3,
			tms: true,
		}).addTo(map).setZIndex(0);
*/

var data = "path.geojson";

$.ajax(data, {
    dataType: "json",
    success: function(r) {
        let curiosityPath = L.geoJSON(r, {
            style: {
                color: "red"
            }
        }).addTo(map);
        map.fitBounds(curiosityPath.getBounds());
    },
    error: function(r) {
        console.log("error loading curiosity");
    }
})
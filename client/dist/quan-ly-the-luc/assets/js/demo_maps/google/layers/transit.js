var GoogleMapLayerTransit={init:function(){"undefined"!=typeof google?google.maps.event.addDomListener(window,"load",function(){var e=document.getElementById("map_layer_transit"),n=new google.maps.LatLng(51.501904,-.115871),o=new google.maps.Map(e,{zoom:14,center:n});(new google.maps.TransitLayer).setMap(o)}):console.warn("Warning - Google Maps library is not loaded.")}};document.addEventListener("DOMContentLoaded",function(){GoogleMapLayerTransit.init()});
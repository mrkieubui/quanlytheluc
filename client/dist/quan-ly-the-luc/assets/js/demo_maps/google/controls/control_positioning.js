var GoogleMapControlPosition={init:function(){"undefined"!=typeof google?google.maps.event.addDomListener(window,"load",function(){var o=document.getElementById("map_control_positioning"),n={zoom:12,center:new google.maps.LatLng(-28.643387,153.612224),mapTypeControl:!0,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.HORIZONTAL_BAR,position:google.maps.ControlPosition.BOTTOM_CENTER},panControl:!0,panControlOptions:{position:google.maps.ControlPosition.TOP_RIGHT},zoomControl:!0,zoomControlOptions:{style:google.maps.ZoomControlStyle.LARGE,position:google.maps.ControlPosition.LEFT_CENTER},scaleControl:!0,streetViewControl:!0,streetViewControlOptions:{position:google.maps.ControlPosition.LEFT_TOP}};new google.maps.Map(o,n)}):console.warn("Warning - Google Maps library is not loaded.")}};document.addEventListener("DOMContentLoaded",function(){GoogleMapControlPosition.init()});
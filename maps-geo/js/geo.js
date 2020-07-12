// Calcula la distancia entre dos puntos en la tierra
function getDistance(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radio de la tierra en km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distancia en km
    return d;
  }

  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }


  var restaurants = [
    { 
        name: "Personalizado", address: "Parque Rivadavia",
        lat: -34.6173007, lng: -58.4363622
    },
    { 
        name: "Personalizado", address: "Parque Rivadavia",
        lat: -34.6172005, lng: -58.4384000
    },
    { 
        name: "Personalizado", address: "Parque Rivadavia",
        lat: -34.6113007, lng: -58.4334006
    },
    { 
        name: "Personalizado", address: "Parque Rivadavia",
        lat: -34.6153007, lng: -58.4393900
    },
    { 
        name: "Personalizado", address: "Parque Rivadavia",
        lat: -34.6173007, lng: -58.43134105
    },
    { 
        name: "Papetto", address: "Circonvallazione Gianicolense, 91",
        lat: 41.864448, lng: 12.4203726
    },
    { 
        name: "Ristorante Euro Bangla", address: "Via Eratostene, 44",
        lat: 41.8741583, lng: 12.5150818
    },                 
]
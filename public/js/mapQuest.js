function initMap() {
  L.mapquest.key = "KHOgqRsuygAy7qyjh6tgPGEh5Bv8tLy8";

  // 'map' refers to a <div> element with the ID map
  var map = L.mapquest.map("map", {
    center: [32.8784549,-117.2371714],
    layers: L.mapquest.tileLayer("map"),
    zoom: 12,
  });

  L.marker([32.8784549,-117.2371714]).addTo(map);
}

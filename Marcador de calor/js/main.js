// -- javascript purinho  --
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });

  document.addEventListener('DOMContentLoaded', function() {
      let elems = document.querySelectorAll('select');
      let instances = M.FormSelect.init(elems);
  });

document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.fixed-action-btn');
      var instances = M.FloatingActionButton.init(elems, {hoverEnabled: false});
});

document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.tooltipped');
      var instances = M.Tooltip.init(elems, {margin: 10});
});

var heatMapData = [
  new google.maps.LatLng(-16.475144, -54.6233646,17),
  new google.maps.LatLng(-16.476144, -54.6233646,17),
];

var sanFrancisco = new google.maps.LatLng(-16.475144, -54.6233646,17);

map = new google.maps.Map(document.getElementById('map'), {
  center: sanFrancisco,
  zoom: 15,
  mapTypeId: 'satellite'
});

var heatmap = new google.maps.visualization.HeatmapLayer({
  data: heatMapData
});
heatmap.setMap(map);

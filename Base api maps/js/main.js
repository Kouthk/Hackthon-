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

// mapinha da api topzera lá
var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -16.467355, lng: -54.576558},
          zoom: 16
        });

        // endereço da imagem
        var image = 'imgs/';
        var icons = {
         republicaMista: {
           icon: image + 'Maker_roxo.png'
         },
         republicaMasculina: {
           icon: image + 'Maker_roxo.png'
         },
         republicaFeminina: {
           icon: image + 'Maker_roxo.png'
         }
       };

        // posição do marcador
          var features = [
          {
            position: new google.maps.LatLng(-16.469309, -54.574222),
            type: 'republicaMista'
          }, {
            position: new google.maps.LatLng(-16.470935, -54.578693),
            type: 'republicaMista'
          }
        ];

        var contentString ='<div class="container">'+
    '<div class="row">'+
    '<div class="col s6 m7">'+
    '<p> Teste </p>'
    '</div>'+
    '</div>'

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

          // criação do marcador com posição, mapa e imagem passados como parâmetro
          features.forEach(function(feature) {
          var marcador = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map,
            title:'Socorro!'
          });

          marcador.addListener('click', function() {
            infowindow.open(map, marcador);
          });
        });







      }

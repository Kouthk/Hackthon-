scrollTo = (element) => {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop - 50
    });
  }

navLinks = document.querySelectorAll(".nav-link");
navLinksSide = document.querySelectorAll(".nav-link-side");
sec = document.querySelectorAll("section");

navLinks.forEach((element, i) => {
    element.addEventListener('click',() => {
        scrollTo(document.getElementById(sec[i].id));
    });
});

navLinksSide.forEach((element, i) => {
    element.addEventListener('click',() => {
        scrollTo(document.getElementById(sec[i].id));
    });
});

document.querySelector("button").addEventListener('click', () => {
    scrollTo(document.getElementById("pageA"));
});

document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.carousel');
    let instances = M.Carousel.init(elems, {dist: -40, numVisible: 6, padding: 50, shift: 20});
});

document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.collapsible');
    let instances = M.Collapsible.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.modal');
    let instances = M.Modal.init(elems);
  });

document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('select');
    let instances = M.FormSelect.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.tabs');
    let instance = M.Tabs.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems);
});

mapboxgl.accessToken = 'pk.eyJ1Ijoic2VhbG9ybyIsImEiOiJjamptamFnMjkxMWtoM3FxaTZyd2t3aHpoIn0.sK_MRiWMcl0fd3rsA6T0zA';
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [-43.13559, -22.904389],
    zoom: 16
});

map.on('load', function() {
    map.loadImage('../imgs/map_pin.png', function(error, image) {
        if (error) throw error;
        map.addImage('cat', image);
        map.addLayer({
            "id": "points",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-43.1345, -22.904389]
                        }
                    }]
                }
            },
            "layout": {
                "icon-image": "cat",
                "icon-size": 0.07
            }
        });
    });
});


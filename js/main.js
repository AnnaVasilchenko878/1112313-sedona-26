
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map('map', {
    center: [34.869497, -111.760186],
    zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
        }),
          myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: 'Point',
                coordinates: [34.869497, -111.760186]
            },
            properties: {
                iconContent: 'Sedona',
                hintContent: 'Город'
            }
        }, {
            preset: 'islands#blueStretchyIcon',
            draggable: false
        });
    myMap.geoObjects
        .add(myGeoObject)
}
var modalButton = document.querySelector('.button-search-hotel');
var modal = document.querySelector('.hotel-search-modal');
var textOpacity = document.querySelector('.form-inputs');
modalButton.addEventListener('click', function () {
  if (!modal.classList.contains('modal-close') && !textOpacity.classList.contains('content-opacity')) {
    modal.classList.add('modal-close');
    textOpacity.classList.add('content-opacity');
  } else {
    modal.classList.remove('modal-close');
    textOpacity.classList.remove('content-opacity');
  }
});
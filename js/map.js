
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
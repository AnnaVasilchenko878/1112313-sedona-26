ymaps.ready(init);
function init(){
  var mapSedona=new ymaps.Map('interactive-map',{
    center:[34.86, 111.76], zoom: 10
  });
/* создание метки
 sedonaGeoOdject=new.ymaps.GeoOdject({
   geometry: {
    type: 'Point',
    coordinates: [34.86, 111.76]
   },
   properties: {
     iconContent: 'Sedona'
   },
 }, {
   present: 'islands#blackStretchyIcon',
   draggable: false
   }
 }),
 mapSedona.GeoObject
*/
}

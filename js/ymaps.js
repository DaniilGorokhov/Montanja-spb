ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [59.881740, 30.311750],
        zoom: 16
    }, {
        searchControlProvider: 'yandex#search'
    });    
    myMap.geoObjects.add(new ymaps.Placemark(myMap.getCenter(), {
        hintContent: "МЦ “Мебельный континент”",
        balloonContentHeader: "Салон фабрики “Монтанья”",
        balloonContentBody: "Наш салон находится в 1-ом корпусе на 3-ем этаже, секция 345<br><strong>Время работы: </strong> c 11:00 до 20:00, ежедневно",
        iconCaption: 'Монтанья',
        iconColor: '#212529'
    }, {
        preset: 'islands#blackDotIconWithCaption'
    }))
}
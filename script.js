// JavaScript

var map = L.map('map').setView([35.889489, 139.712674], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//アイコン
const whiteIcon = L.icon({
  iconUrl: 'images/img01.png',
  shadowUrl: 'images/img03.png',

iconSize:     [40, 40], // size of the icon
shadowSize:   [40, 40], // size of the shadow
iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
shadowAnchor: [20, 40],  // the same for the shadow
popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
});

L.marker([35.889489, 139.712674], { icon: whiteIcon }).addTo(map).bindPopup('お腹空いた<br><img src="images/img01.png" alt="img">');

const circle = L.circle([35.889489, 139.712674], {
  color: 'red', //円の輪郭線の色
  fillColor: '#f03', //円の塗りつぶしの色
  fillOpacity: 0.3, //塗りつぶしの不透明度
  radius: 1000 //半径、メートルで指定
}).addTo(map);

circle.bindPopup("半径1kmの範囲");

// クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);


// 多角形の表示
const polygon = L.polygon([
  [35.907962, 139.714293],
  [35.893361, 139.672537],
  [35.85657, 139.712362],
  [35.885851, 139.753132]
], {
  color: 'blue',
  fillColor: '#f04',
  fillOpacity: 0.3
}).addTo(map);



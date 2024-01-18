var container01 = document.getElementById('map01');
var options = {
  center: new kakao.maps.LatLng(37.409023405734196, 127.09483509625203),
  level: 2,

};
var map01 = new kakao.maps.Map(container01, options);

var points = [
  new kakao.maps.LatLng(37.409023405734196, 127.09483509625203),
];
var bounds = new kakao.maps.LatLngBounds();

var i, marker;
for (i = 0; i < points.length; i++) {
  marker = new kakao.maps.Marker({ position: points[i] });
  marker.setMap(map01);
  bounds.extend(points[i]);
}

function setBounds() {
  map01.setBounds(bounds);
}


var container02 = document.getElementById('map02');
var options02 = {
  center: new kakao.maps.LatLng(37.47784496609639, 126.95889727910759),
  level: 1
};

var map02 = new kakao.maps.Map(container02, options02);

var points = [
  new kakao.maps.LatLng(37.47784496609639, 126.95889727910759),
];
var bounds = new kakao.maps.LatLngBounds();

var i, marker;
for (i = 0; i < points.length; i++) {
  marker = new kakao.maps.Marker({ position: points[i] });
  marker.setMap(map02);
  bounds.extend(points[i]);
}

function setBounds() {
  map02.setBounds(bounds);
}
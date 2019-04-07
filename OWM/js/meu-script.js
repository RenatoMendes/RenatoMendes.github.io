 function obterGeolocalizacao()
    {
       navigator.geolocation.getCurrentPosition(function (position) {
        var position_latitude  = position.coords.latitude;
        var position_longitude = position.coords.longitude;
      });
    }

/*OWM*/
//Conexão Api JSON 
var apiUrl    = "https://api.openweathermap.org/data/2.5/weather?q=London";
/*var longitude = "lon"+position_longitude;
var latitude  = "lat"+position_latitude;*/
var apiKey    = "&appid=b7b1d6903c8c6e746ca4cc92f48df172";
alert("teste");
//Conexão Api JSON

$.ajax({
 url: ""+apiUrl/*+longitude-latitude*/+apiKey+"" 
  // url: "http://api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=10&appid=b7b1d6903c8c6e746ca4cc92f48df172"

}).done(function(data){
       
       dadosJsonCompleto = JSON.stringify(data);
       //console.log(dadosJsonCompleto);

       longitude = (data.coord.lon);
       latitude  = (data.coord.lat);
       cidade    = (data.name);

       humidade  = (data.main.humidity);
       temp_min  = (data.main.temp_min);
       temp_max  = (data.main.temp_max);

       document.getElementById("consultaLongitude").innerHTML = longitude; 
       document.getElementById("consultaLatitude").innerHTML  = latitude;
       document.getElementById("consultaCidade").innerHTML    = cidade;

       document.getElementById("consultahumidade").innerHTML = humidade; 
       document.getElementById("consultatemp_min").innerHTML = temp_min;
       document.getElementById("consultatemp_max").innerHTML = temp_max;

   })/*GoogleMaps*/
  .done(function initMap() {
  var uluru = {lat: latitude, lng: longitude};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 8, center: uluru});
  
  var marker = new google.maps.Marker({position: uluru, map: map});

});



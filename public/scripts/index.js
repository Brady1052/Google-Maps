const apiKey = 'AIzaSyDSprTRMx_B5u8ihxrZO3HDtopBjvAbOuQ'

function getApi() {
  var queryURL = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`; 
  fetch(queryURL, { mode: 'no-cors'})
      .then(function (res) {
         console.log(res);
      })}

      let map;

      function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        });
      }

document.getElementById('button').addEventListener('click', getApi)
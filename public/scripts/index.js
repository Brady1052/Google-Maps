const apiKey = 'AIzaSyDSprTRMx_B5u8ihxrZO3HDtopBjvAbOuQ'

function getApi() {
  var queryURL = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`; 
  fetch(queryURL)
      .then(function (response) {
         console.log(response);
      })}

document.getElementById('button').addEventListener('click', getApi)
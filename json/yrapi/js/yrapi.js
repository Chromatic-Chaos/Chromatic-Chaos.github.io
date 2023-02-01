fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58', {
    method: 'post'
}).then(res => res.json())
.then(data => console.log(data))
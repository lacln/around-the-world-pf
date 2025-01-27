function getLocation() {
    if (navigator.geolocation) {
        const x = navigator.geolocation.getCurrentPosition(gotLocation, noLocationFound);
        console.log(x)
    } else {
        noLocationFound("Your device does not support location")
    }
}

function gotLocation(pos) {
    console.log("Location found! at " + pos.coords.latitude + " and " + pos.coords.longitude)
}

function noLocationFound(error) {
    console.warn("No Location could be found " + error)
}
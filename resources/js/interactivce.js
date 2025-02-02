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

//add info about this into the website "Learning to use a computer in kingergarten, we were always told to double click to access websites, so that functionality has made it to today"
//implement double click functionality -- when expanded, turn link active, otherwise not (so it expands first)
function expandDomain() {
    console.log("worked")
}
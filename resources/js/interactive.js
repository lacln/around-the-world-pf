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
function expandDomain(domain) {
    // console.log("worked")
    if(document.getElementById(domain+"_desc").hidden == true) {
        //expand the function
        document.getElementById(domain+"_desc").hidden = false
        document.getElementById(domain).getElementsByTagName("i")[0].className = "fa-solid fa-caret-down"
    } else {
        //hide the function
        document.getElementById(domain+"_desc").hidden = true
        document.getElementById(domain).getElementsByTagName("i")[0].className = "fa-solid fa-caret-right"
    }
}

function changeHomePageImage(clicked) {
    document.getElementById('NewSouthWales').hidden = true;
    document.getElementById('Queensland').hidden = true;
    document.getElementById('Victoria').hidden = true;
    document.getElementById('Tasmania').hidden = true;
    document.getElementById('NorthNZ').hidden = true;
    document.getElementById('SouthNZ').hidden = true;
    document.getElementById('Fiji').hidden = true;
    document.getElementById('NewCaledonia').hidden = true;
    document.getElementById('Vanuatu').hidden = true;

    document.getElementById(clicked).hidden = false;
}

window.onload = function() {
    if (window.location.hash) {
        document.getElementById(window.location.hash.substring(1)).hidden = false;
    }
}
// importing the getLocation function.
import getLocation from "./geolocation.js";

const d = document,
n = navigator,
$location = document.getElementById("btn-location");

// This function will be executed at the click event.
$location.addEventListener("click", e => {
    getLocation("location");
})
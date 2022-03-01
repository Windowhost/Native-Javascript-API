// importing the function webcamDetector
import webcamDetection from "./webcamDetector.js";

const d = document,
$statVideo = d.getElementById("videobtn")


// This function will be executed on DOM load
// d.addEventListener("DOMContentLoaded", (e) => {
//     webcamDetection("webCam")
// });

// This function will be executed at the click event
$statVideo.addEventListener("click", e =>{
    webcamDetection("webCam")
})
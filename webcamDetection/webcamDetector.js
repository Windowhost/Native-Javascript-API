const d = document,
    n = navigator;

// Eata function handles the camera detection logic. This receives an id which refers to the id of the HTML video tag. The user has to allow access to the camera so that the browser can make use of it.
export default function webcamDetection(id) {
    const $video = d.getElementById(id);

    //Validate that the function mediaDevices exists in the browser in which it will be executed
    if (n.mediaDevices.getUserMedia) {

        // This function is a promise and receives multiple parameters for its operation.
        n.mediaDevices.getUserMedia({ video: true, Audio: false })
        // stream is the stream of information sent by the webcam. The src attribute expects a url but by accessing the srcObject property and sending it the stream with source it will work.  
        .then((stream) => {
            console.log(stream);
            $video.srcObject = stream;
            $video.play();
        })
        .catch((err) => {
            $video.insertAdjacentHTML('beforebegin', `<p><mark>${err}</mark></p>`)
            console.log(`Sucedio el siguiente error ${err}`)
        })
    }
};
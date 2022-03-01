const d = document,
n = navigator;

// Funtion which manage the geolocation.
export default function getLocation(id){
    const $id = d.getElementById(id), 
    //function that executes the geolocation needs these options to work.
    options = {
        enableHighAcurracy: true,
        setTimeout: 5000,
        maximumAge: 0
    };

    //on success this code will be executed
    const success = position => {
        let coords = position.coords;
        // console.log(position)
        $id.innerHTML = `
        <p>Tu posicion actual es:</p>
        <lu>
        <li>Latitud:<b>${coords.latitude}</b></li>
        <li>Longitud:<b>${coords.longitude}</b></li>
        <li>Presicion:<b>${coords.accuracy}</b>mt</li>
        </ul>
        <a href ="https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" target = " _blanck" rel = "noopener">See on Google Maps<a/>
        `;
    };
      
    //Function which manage the error
    const error = (err) => {
        console.log(err)
        $id.innerHTML = `<p><mark>Error: ${err.code}: ${err.message}</mark></p>`;
        console.log(`Error: ${err.code}: ${err.message}`)

    };

    // accessing the geolocation api and the current position.
    n.geolocation.getCurrentPosition(success, error, options)

};

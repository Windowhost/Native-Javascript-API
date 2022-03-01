const d = document,
    w = window,
    n = navigator;

//Exporting the networkDetection function
export default function networkDetection(id) {
 console.log("Hola")
    //This function handles the online and offline events when the user loses or reestablishes the connection 
    const isOnline = () => {
        const $div = d.createElement('div');

        if (n.onLine) {
            $div.textContent = 'Coneccion Restablecida'
            $div.classList.add('online');
            $div.classList.remove('offline');

        } else {
            $div.textContent = 'Coneccion Interumpida'
            $div.classList.add('offline');
            $div.classList.remove('online');
        }

        d.body.insertAdjacentElement('afterbegin', $div);
        // manages the message duration
        setTimeout(() => d.body.removeChild($div), 2000);
    }

    // Running the events online and offline fron the window
    w.addEventListener('online', e => isOnline());
    w.addEventListener('offline', e => isOnline());
};
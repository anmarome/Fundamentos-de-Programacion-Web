//querySelector permite llamar el selector llamado select del form
let seleccionar = document.querySelector('select');

//addeventlistener es un listado de eventos (biblioteca) que lista al evento CHANGE y carga la funcion llamada elegir
seleccionar.addEventListener('change', elegir);

function elegir() {
    //variable que lleva el valor seleccioando por el usuario
    let eleccion = seleccionar.value;

    if (eleccion == 0) {
        descripcion.innerHTML = '';
    }

    if (eleccion == 1) {
        descripcion.innerHTML = 'Ubicada en el corazón de la playa, nuestra sucursal de Herradura te ofrece un ambiente relajante mientras aprovechas la brisa marina. ' + 
                                '<a href="https://www.google.com/maps?q=Herradura,+Costa+Rica" target="_blank">Ver en Google Maps</a>';
    }

    else if (eleccion == 2) {
        descripcion.innerHTML = 'En el centro de Curridabat, nuestra sucursal está cerca de centros comerciales y restaurantes. ' +
                                '<a href="https://www.google.com/maps?q=Curridabat,+Costa+Rica" target="_blank">Ver en Google Maps</a>';
    }
    
    else if (eleccion == 3) {
        descripcion.innerHTML = 'En Nicoya, ofrecemos un espacio moderno en el Pacífico Norte. ' +
                                '<a href="https://www.google.com/maps?q=Nicoya,+Costa+Rica" target="_blank">Ver en Google Maps</a>';
    }
    
    else if (eleccion == 4) {
        descripcion.innerHTML = 'En Guápiles, nuestra sucursal está en una ubicación estratégica en la región Caribe. ' +
                                '<a href="https://www.google.com/maps?q=Guápiles,+Costa+Rica" target="_blank">Ver en Google Maps</a>';
    }
    
    else if (eleccion == 5) {
        descripcion.innerHTML = 'En Atenas, te ofrecemos un servicio cercano y personalizado en un ambiente tranquilo. ' +
                                '<a href="https://www.google.com/maps?q=Atenas,+Costa+Rica" target="_blank">Ver en Google Maps</a>';
    }
}

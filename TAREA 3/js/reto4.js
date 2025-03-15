
//la funcion se carga al iniciar la pagina
window.onload = function() {
    //son contantes porque no cambiar en el codigo
    //aqui se enlazan con los ids del html
    const select = document.getElementById('heladoSelect');
    const image = document.getElementById('heladoImage');
    const description = document.getElementById('heladoDescription');

    //aqui tenemos los diferentes mensajes por los diferentes helados
    //corresponden a los valores de las opciones en tu menú desplegable
    const heladoTexts = {
        trits: "<p class='lead text-center'>Clásico helado Trits con sus capas de chocolate, vainilla y fresa.</p>",
        cherry: "<p class='lead text-center'>Delicioso helado Triple Cherry con cerezas y salsa de chocolate.</p>",
        minisando: "<p class='lead text-center'>El refrescante Mini Sandwich, perfecto para un antojo rápido.</p>",
        naranja: "<p class='lead text-center'>La tradicional Naranja Holandesa, un sabor que te encantará.</p>",
    };


    //aqui es donde pasa el evento de cambiar la info (imagenes y texto) depensiuendo de la seleccion
    select.addEventListener('change', function() {
        //Esto obtiene el valor de la opción seleccionada en el menú desplegable y lo almacena en la variable selectedHelado.
        const selectedHelado = this.value;

        //esto funciona porque las imagenes tienen el mismo nombre que el de los valores del select
        image.src = `imagenes/${selectedHelado}.png`;
        description.innerHTML = heladoTexts[selectedHelado] || "<p class='lead'>Descripción no disponible.</p>";
    });
};
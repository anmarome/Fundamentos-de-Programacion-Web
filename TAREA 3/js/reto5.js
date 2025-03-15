window.onload = function() {
    //combo llamadao modelo id usando el evento onchange que se usa en combos dinamicos
    document.getElementById("modelo").onchange = function(e) {
        //destino del valor seleccionado combo1
        a = e.target.value;
        if (a == "Kona") {
            var imagen = "imagenes/kona.png";
        } else if (a == "Venue") {
            var imagen = "imagenes/venue.png";
        } else if (a == "Tucson") {
            var imagen = "imagenes/tucson.png";
        } else if (a == "Elantra") {
            var imagen = "imagenes/elantra.png";
        }
        // agrega la imagen del carro modelo
        document.getElementById("imagen"). src = imagen;
    }

    //combo llamadao version id
    document.getElementById("version").onchange = function(es) {
        n = es.target.value;
    }
}

function calcular() {
    //validacion de los 2 combos
    if (document.getElementById("modelo").value == "-- Seleccionar Modelo --") {
        swal.fire({
            icon: "info",
            title: "Atencion",
            text: "Seleccionar el modelo y la version del carro",
        })
    }

    //ciclo switch
    var montoCuota = 0;
    switch (a) {
        case "Kona":
            if (n == "4x2")
                montoCuota = 8000;
            else
                montoCuota = 8957;
            break;
        case "Venue":
            if (n == "4x2")
                montoCuota = 2354;
            else
                montoCuota = 1234;
            break;
        case "Tucson":
            if (n == "4x2")
                montoCuota = 8957;
            else
                montoCuota = 7000;
            break;
        case "Elantra":
            if (n == "4x2")
                montoCuota = 5000;
            else
                montoCuota = 7000;
            break;
        default:
            break;
    }

    //variable que almacena la ruta de las imagenes en formato PNG
    let imagenDireccion = "imagenes/" + a.toLowerCase() + ".png";

    swal.fire({
        //la variable imageURL permite cargar la imagen del carro dentro del desplegable
        //a es el target modelo y n es el target de la version del carro
        imageUrl: imagenDireccion,
        html: "<p> Vesion " +
            n + " del " + a +
            "<br><br> <strong>Cuota mensual aproximada:</strong></p> " +
            "$" +
            //variable que trae el dato de su monto de cuota mensual
            montoCuota,
        //ancho y altura de la imagen del carro
        imageWidth: 600,
        imageHeight: 250,
        //accesibilidad de la imagen
        imageAlt: "Vehiculo " + a,
    });
}
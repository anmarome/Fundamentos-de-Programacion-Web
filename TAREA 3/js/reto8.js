// Declaración del arreglo vacío para añadir empleados conforme se llenan los inputs
const empleados = [];

// Función para agregar un empleado
function agregarEmpleado() {
    const nombre = document.getElementById('nombreEmpleado').value,
        apellidoEmpleado = document.getElementById('apellidoEmpleado').value,
        // Obtener el valor de los campos de productividad, puntualidad y trabajo en equipo y convertirlos a números de puntos flotantes
        productividad = parseFloat(document.getElementById('productividad').value),
        puntualidad = parseFloat(document.getElementById('puntualidad').value),
        trabajoEquipo = parseFloat(document.getElementById('trabajoEquipo').value);

    // Validación para asegurarse de que todos los campos se han llenado correctamente
    if (nombre == '' || apellidoEmpleado == '' || isNaN(productividad) || isNaN(puntualidad) || isNaN(trabajoEquipo)) {
        Swal.fire({
            icon: "error",
            title: "Debe llenar todos los espacios",
            showClass: {
                popup: `animate_animated animate_fadeIn`
            },
            hideClass: {
                popup: `animate_animated animate_fadeOut`
            }
        });
    } else {
        // Cálculo del promedio de desempeño
        const promedio = (productividad + puntualidad + trabajoEquipo) / 3;

        // Agregar empleado al arreglo
        empleados.push({ nombre, apellidoEmpleado, promedio });

        // Actualizar el select de empleados
        const selectEmpleados = document.getElementById('seleccionarEmpleado');

        // Crear un nuevo option para el select
        const option = document.createElement('option');
        option.value = nombre + ' ' + apellidoEmpleado;
        option.text = nombre + ' ' + apellidoEmpleado;

        // Agregar la opción al select
        selectEmpleados.appendChild(option);

        // Limpiar los campos después de agregar el empleado
        limpiarDatos();

        Swal.fire({
            icon: "success",
            title: "Empleado agregado",
            showClass: {
                popup: `animate_animated animate_fadeIn`
            },
            hideClass: {
                popup: `animate_animated animate_fadeOut`
            }
        });
    }
}

// Función para calcular el promedio de desempeño del empleado seleccionado
function calcularPromedioDesempeno() {
    // Obtener el valor seleccionado en el elemento select con id 'seleccionarEmpleado'
    const nombreSeleccionado = document.getElementById('seleccionarEmpleado').value;

    // Obtener el id del elemento 'resultado'
    const resultado = document.getElementById('resultado');

    // Buscar el empleado seleccionado en el arreglo 'empleados'
    let empleadoSeleccionado = null;

    // Iniciar un ciclo for que recorre cada elemento en el arreglo 'empleados'
    for (let i = 0; i < empleados.length; i++) {
        const empleado = empleados[i];
        const nombreCompleto = empleado.nombre + ' ' + empleado.apellidoEmpleado;

        // Comparar si el nombre completo del empleado coincide con el seleccionado
        if (nombreCompleto === nombreSeleccionado) {
            empleadoSeleccionado = empleado;
            break;  // Salir del ciclo cuando se encuentra el empleado
        }
    }

    // Verificar si se ha encontrado el empleado
    if (empleadoSeleccionado) {
        // Obtener el promedio del empleado seleccionado
        const promedioEmpleado = empleadoSeleccionado.promedio;

        // Actualizar el contenido del resultado con el promedio de desempeño
        resultado.textContent = 'El promedio de desempeño de: ' + nombreSeleccionado + ' es de: ' + promedioEmpleado.toFixed(2);
    } else {
        // Si no se ha encontrado el empleado seleccionado, mostrar un mensaje vacío
        resultado.textContent = ' ';
    }
}

// Función para limpiar los campos de entrada
function limpiarDatos() {
    document.getElementById('nombreEmpleado').value = '';
    document.getElementById('apellidoEmpleado').value = '';
    document.getElementById('productividad').value = '';
    document.getElementById('puntualidad').value = '';
    document.getElementById('trabajoEquipo').value = '';
}
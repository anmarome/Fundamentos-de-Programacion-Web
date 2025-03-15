document.addEventListener('DOMContentLoaded', function() {
    const cedulaInput = document.getElementById('cedula');
    const buscarBtn = document.getElementById('buscarBtn');
    const resultadoContainer = document.getElementById('resultado');

    const empleados = {
        '109110338': { nombre: 'Juan', apellidos: 'Pérez González', lugar: 'San José, Costa Rica', regimen: 'Contributivo', anioIngreso: '2015', departamento: 'Finanzas', foto: 'usuario1.jpg' },
        '209110338': { nombre: 'Ana', apellidos: 'García Rodríguez', lugar: 'Alajuela, Costa Rica', regimen: 'No contributivo', anioIngreso: '2018', departamento: 'Recursos Humanos', foto: 'usuario2.jpg' },
        '309110338': { nombre: 'Luis', apellidos: 'Martínez López', lugar: 'Cartago, Costa Rica', regimen: 'Contributivo', anioIngreso: '2019', departamento: 'Ventas', foto: 'usuario3.jpg' },
        '409110338': { nombre: 'María', apellidos: 'Sánchez Ramírez', lugar: 'Heredia, Costa Rica', regimen: 'No contributivo', anioIngreso: '2020', departamento: 'Marketing', foto: 'usuario4.jpg' },
        '509110338': { nombre: 'Carlos', apellidos: 'Ruiz Torres', lugar: 'Limón, Costa Rica', regimen: 'Contributivo', anioIngreso: '2021', departamento: 'Tecnología', foto: 'usuario5.jpg' }
    };

    buscarBtn.addEventListener('click', function() {
        const cedula = cedulaInput.value.trim();

        if (cedula.length !== 9 || isNaN(cedula)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ingrese una cédula válida (9 dígitos numéricos).'
            });
            return;
        }

        if (empleados[cedula]) {
            const empleado = empleados[cedula];
            resultadoContainer.innerHTML = `
                <div class="employee-info">
                    <p><strong>Informacion del empleado</strong></p>
                    <p><strong>Nombre:</strong> ${empleado.nombre}</p>
                    <p><strong>Apellidos:</strong> ${empleado.apellidos}</p>
                    <p><strong>Lugar:</strong> ${empleado.lugar}</p>
                    <p><strong>Régimen:</strong> ${empleado.regimen}</p>
                    <p><strong>Año de Ingreso:</strong> ${empleado.anioIngreso}</p>
                    <p><strong>Departamento:</strong> ${empleado.departamento}</p>
                    <img src="imagenes/${empleado.foto}" alt="Foto de ${empleado.nombre}" class="img-fluid">
                </div>
            `;
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El usuario NO existe.'
            });
            resultadoContainer.innerHTML = '';
        }
    });
});

function borrar() {
    document.getElementById("cedula").value = "";
    document.getElementById("resultado").innerHTML = "";
}
const votos = [];

function realizarVoto() {
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const cedula = document.getElementById('cedula').value;
    const correo = document.getElementById('correo').value;
    const nacimiento = document.getElementById('nacimiento').value;
    const fechaVoto = document.getElementById('fechaVoto').value;
    const horaVoto = document.getElementById('horaVoto').value;
    const minutosVoto = document.getElementById('minutosVoto').value;
    const amPm = document.getElementById('amPm').value;

    if (!nombre || !apellidos || !cedula || !correo || !nacimiento || !fechaVoto || !horaVoto || !minutosVoto) {
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
    }

    const voto = {
        nombre,
        apellidos,
        cedula,
        correo,
        nacimiento,
        fechaVoto,
        horaVoto,
        minutosVoto,
        amPm
    };

    votos.push(voto);

    Swal.fire({
        icon: "success",
        title: "Voto agregado con exito",
        showClass: {
            popup: `animate_animated animate_fadeIn`
        },
        hideClass: {
            popup: `animate_animated animate_fadeOut`
        }
    });
    limpiarFormulario();
}

function mostrarReporte() {
    const reporteVotos = document.getElementById('reporteVotos');
    reporteVotos.innerHTML = '';

    if (votos.length === 0) {
        Swal.fire({
            icon: "error",
            title: "No hay votos registrados",
            showClass: {
                popup: `animate_animated animate_fadeIn`
            },
            hideClass: {
                popup: `animate_animated animate_fadeOut`
            }
        });
        return;
    }

    const tabla = document.createElement('table');
    tabla.classList.add('table', 'table-bordered');

    const encabezado = tabla.createTHead();
    const filaEncabezado = encabezado.insertRow();
    const columnasEncabezado = ['Nombre', 'Cédula', 'Correo', 'Nacimiento', 'Fecha Voto', 'Hora Voto'];

    columnasEncabezado.forEach(texto => {
        const th = document.createElement('th');
        th.textContent = texto;
        filaEncabezado.appendChild(th);
    });

    const cuerpo = tabla.createTBody();

    votos.forEach(voto => {
        const fila = cuerpo.insertRow();
        const columnas = [
            `${voto.nombre} ${voto.apellidos}`,
            voto.cedula,
            voto.correo,
            voto.nacimiento,
            voto.fechaVoto,
            `${voto.horaVoto}:${voto.minutosVoto} ${voto.amPm}`
        ];

        columnas.forEach(texto => {
            const celda = fila.insertCell();
            celda.textContent = texto;
        });
    });

    reporteVotos.appendChild(tabla);
}

function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellidos').value = '';
    document.getElementById('cedula').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('nacimiento').value = '';
    document.getElementById('fechaVoto').value = '';
    document.getElementById('horaVoto').value = '';
    document.getElementById('minutosVoto').value = '';
}
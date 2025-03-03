document.getElementById("btn-sw").addEventListener("click", sw);

function sw() {
    Swal.fire({
        //icon: "success"
        title: "Redirigiendo",
        showConfirmButton: false,
        //milisegundis equivalen a 5 seg
        timer: 2000,
        html: '<video width="200" height="200" autoplay muted>' +
            '<source src="../videos/carga.mp4" type="video/mp4"></video>',
        timerProgressBar: true,
    }).then(() => {
        window.location.href = "./inicio.html";
    });
}


document.getElementById("btn-aw").addEventListener("click", aw);

function aw() {
    Swal.fire({
        //icon: "success"
        title: "Redirigiendo",
        showConfirmButton: false,
        //milisegundis equivalen a 5 seg
        timer: 2000,
        html: '<video width="200" height="200" autoplay muted>' +
            '<source src="../videos/carga.mp4" type="video/mp4"></video>',
        timerProgressBar: true,
    }).then(() => {
        window.location.href = "./appweb.html";
    });
}
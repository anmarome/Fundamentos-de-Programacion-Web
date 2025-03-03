
// coneccion al html
document.getElementById("cargar").addEventListener("click", loading);

function loading() {
    Swal.fire({
        title: "Redirigiendo",
        html:'<video width="200" height="200" autoplay muted>' +
              '<source src="./videos/carga.mp4" type="video/mp4"></video>',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
    }).then(() => {
        window.location.href = "./html/login.html", "blank";
    });
}
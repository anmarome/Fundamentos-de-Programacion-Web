//  JS DE PORTADA ----------------------------------------------------

function visitar() {
    Swal.fire({
        //icon: "success"
        title: "Redirigiendo...",
        showConfirmButton: false,
        //milisegundis equivalen a 5 seg
        timer: 3000,
        html:'<video width="200" height="200" autoplay muted>' +
      '<source src="carga.mp4" type="video/mp4"></video>',
        timerProgressBar: true,
    }).then(() => {
        window.location.href = "tour.html";
    });
}

//  JS DE TOUR --------------------------------------------------------

//variables de uso 
var panorama, viewer, container, infospot;

//obtener una referencia al contenedor donde se mostrara la escena 360
container = document.querySelector('#container_principal');

//carga la foto 360
panorama = new PANOLENS.ImagePanorama('salon.jpg');


//zona1 interactiva (infospot1) revistas
var infospot1 = new PANOLENS.Infospot(50, );
infospot1.position.set(500 ,-315 , -380);
infospot1.addHoverText('', -60);
infospot1.element.innerHTML = '<div style="background-color: rgba(59, 11, 88, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Pensamos en tu comodidad, con nuestra selección de revistas de entretenimiento, no te aburrirás mientras esperas. Relájate y disfruta de una lectura agradable mientras te consentimos.</div>';
panorama.add(infospot1);



//zona2 interactiva (infospot2) pila
var infospot2 = new PANOLENS.Infospot(40, );
infospot2.position.set(293 ,-87 , -500);
infospot2.addHoverText('', -60);
infospot2.element.innerHTML = '<div style="background-color: rgba(59, 11, 88, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Higiene y comodidad van de la mano en nuestro espacio. Este lavamanos es ideal para que te sientas fresca antes y después de tu tratamiento. La limpieza es nuestra prioridad.</div>';
panorama.add(infospot2);



//zona3 interactiva (infospot3) aceites
var infospot3 = new PANOLENS.Infospot(30, );
infospot3.position.set(295 ,78 , 500);
infospot3.addHoverText('', -60);
//insertar reproductor de video de youtube
infospot3.element.innerHTML = '<div class="" style="background-color: rgba(59, 11, 88, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Disfruta de un toque de suavidad y relajación con nuestros aceites especiales para manos y pies. Perfectos para una hidratación profunda y un bienestar total.<br><br><img src="oils.jpg" alt="Imagen del dispositivo" style="max-width: 100%; height"></div>';
panorama.add(infospot3);



//zona4 interactiva (infospot4) esmaltes
var infospot4 = new PANOLENS.Infospot(40, );
infospot4.position.set(500 ,-2 , -151);
infospot4.addHoverText('', -60);
infospot4.element.innerHTML = '<div style="background-color: rgba(59, 11, 88, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">La variedad de esmaltes de uñas que tenemos te permitirá escoger entre colores vibrantes y elegantes. ¡Tu estilo y personalidad, en cada capa de color!<br><br><img src="esmaltes.jpg" alt="Imagen del dispositivo" style="max-width: 100%; height"></div>';
panorama.add(infospot4);


// silla
var infospot5 = new PANOLENS.Infospot(50, );
infospot5.position.set(500 ,-197 , 118);
infospot5.addHoverText('', -60);
infospot5.element.innerHTML = '<div style=""><iframe width="560" height="315" src="https://www.youtube.com/embed/KNHAv60z9lM?si=3barML6C9l17WnkK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>';
panorama.add(infospot5);


//heramientas carrito
var infospot6 = new PANOLENS.Infospot(50, );
infospot6.position.set(318 ,-500 , 421);
infospot6.addHoverText('', -60);
infospot6.element.innerHTML = '<div style="background-color: rgba(59, 11, 88, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Cada detalle cuenta. Nuestras herramientas para manicura son de la más alta calidad para ofrecerte resultados impecables. Desde limas hasta cortadores, todo lo que necesitas para un servicio de primera.</div>';
panorama.add(infospot6);


//asiento acompanhantes
var infospot7 = new PANOLENS.Infospot(50, );
infospot7.position.set(-84 ,-268 , -500);
infospot7.addHoverText('', -60);
infospot7.element.innerHTML = '<div style="background-color: rgba(59, 11, 88, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Sabemos que no siempre vienes sola. Nuestro asiento cómodo para acompañantes te permite estar cerca de tus seres queridos mientras disfrutas de tu tiempo de relax.</div>';
panorama.add(infospot7);


// puerta
var infospot8 = new PANOLENS.Infospot(50, );
infospot8.position.set(-500 ,-33 , -126);
infospot8.addHoverText('' -60);
infospot8.element.innerHTML = '<div style="background-color: rgba(59, 11, 88, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 320px;">Porque tu comodidad y privacidad son importantes, nuestras puertas garantizan que puedas disfrutar de un espacio íntimo, donde te sientas tranquila y en paz durante tu experiencia de belleza.<br><br><audio controls><source src="ambiente.mp3" type="audio/mpeg"></audio></div>';
panorama.add(infospot8);


// abrigos
var infospot9 = new PANOLENS.Infospot(50, );
infospot9.position.set(-500 ,-183 , -419);
infospot9.addHoverText('', -60);
infospot9.element.innerHTML = '<div style="background-color: rgba(59, 11, 88, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Deja tu abrigo o bolso en nuestro sujetador especialmente diseñado para mantener tus pertenencias seguras y fuera del camino, permitiéndote relajarte y disfrutar de tu sesión.</div>';
panorama.add(infospot9);


//sanitizador
var infospot10 = new PANOLENS.Infospot(50, );
infospot10.position.set(-186 ,-166 , 500);
infospot10.addHoverText('', -60);
infospot10.element.innerHTML = '<div style="background-color:rgba(59, 11, 88, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">La seguridad es nuestra prioridad. Cada herramienta que usamos es debidamente desinfectada con nuestro sanitizador profesional, garantizando un ambiente higiénico y seguro para tu bienestar.</div>';
panorama.add(infospot10);



viewer = new PANOLENS.Viewer({
    //colntainer que muestra la escena princiupal
    container: container,
    //habilita salida en pantalla completa
    output: 'fullscreen',
    autoHideInfospot: false
});
viewer.add(panorama);
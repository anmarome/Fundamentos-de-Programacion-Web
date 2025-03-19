//selecciona el toggle switch 
const toggleSwitch = document.getElementById('modoOscuroToggle');
//seleccioa el icono de modo oscuro
const modoIcon = document.getElementById('modoOscuroIcon');

//agrega u event listener para detectar cambios en el toggle switch
toggleSwitch.addEventListener('change', () => {
    //alterna entre las clases de los iuconos sol/luna
    modoIcon.classList.toggle('fa-sun');
    modoIcon.classList.toggle('fa-moon');

    //alt6erna el modo oscuro en el body
    document.body.classList.toggle('modoOscuroBody');
})


//traducciones en espanhol e ingles
const translations = {
    //objeto de idioma espanhol
    es: {
        optionMenu1: "Inicio",
        optionMenu2: "Nosotros",
        optionMenu3: "Slogan",
        optionMenu4: "Cafés",
        title1: "Café 1820 | El mejor café de Costa Rica",
        title2: "El mejor café de Costa Rica",
        title3: "Nosotros",
        title4: "Visión",
        title5: "Misión",
        title6: "Valores",
        title7: "El mejor café de Costa Rica",
        title8: "Cafés",
        title9: "Molido clasico",
        title10: "Reserva especial",
        title11: "Molido tueste claro",
        title12: "Grano entero clásico",
        title13: "Molido cielo",
        title14: "Café negro",
        title15: "Empleados",
        p1: "Conozca nuestros empleados mediante esta lista",
        p2: "Grupo AgroIndustrial NUMAR S.A. © 2021 Café 1820. Todos los derechos reservados",
    },

    en: {
        optionMenu1: "Home",
        optionMenu2: "About Us",
        optionMenu3: "Slogan",
        optionMenu4: "Coffees",
        title1: "Café 1820 | Costa Rica's best coffee",
        title2: "Costa Rica's best coffee",
        title3: "About Us",
        title4: "Vision",
        title5: "Mission",
        title6: "Values",
        title7: "Costa Rica's best coffee",
        title8: "Coffees",
        title9: "Classic grind",
        title10: "Special reserve",
        title11: "Molido tueste claro",
        title12: "Ground light roast",
        title13: "Ground sky",
        title14: "Black coffee",
        title15: "Employees",
        p1: "Get to know our employees through this list",
        p2: "Grupo AgroIndustrial NUMAR S.A. © 2021 Café 1820. All Rights Reserved",
    }
};

//fucio para cambiar el idioma
function changeLanguage() {
    //covnersion del lenguaje html
    const lang = document.documentElement.lang === 'es' ? 'en' : 'es';
    document.documentElement.lang = lang;

    //cambiar texto de los elementos con data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        //asignaciion atributo data-translate
        const key = element.getAttribute('data-translate');
        //elementops html sean traducidos por las laves lang - key
        element.innerHTML = translations[lang][key];
    });
}
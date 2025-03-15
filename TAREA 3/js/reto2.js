// funcion para obtener el exchange rate del dia/actualizado 
// como se tiene que esperar a que se obtenga el echange rate primero, para luego seguir con lo demas
// la funcion tiene que ser async para utilizar el await command

//esta es para obtener el rate de usd a crc
async function getUSDRate() {
    try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        return data.rates.CRC;
    } catch (error) {
        console.error('Error al obtener el tipo de cambio:', error);
        return null;
    }
}

// esta para crc a usd
async function getCRCRate() {
    try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/CRC');
        const data = await response.json();
        return data.rates.USD;
    } catch (error) {
        console.error('Error al obtener el tipo de cambio:', error);
        return null;
    }
}

// en esta se hace ya la conversion usando la data actualizada obtenida del api 
// para convertir de usd a crc
async function convertUSD() {
    const amount = parseFloat(document.getElementById('usdAmount').value);
    const rate = await getUSDRate();
    if (rate && !isNaN(amount)) {
        const result = amount * rate;
        document.getElementById('usdRate').value = result.toFixed(2); // muestra resultado
    } else {
        Swal.fire({
            title: "Campos incompletos",
            icon: "error",
            iconColor: "#231955",
            text: "Ingrese un monto válido",
            imageWidth: 400,
            imageHeight: 200,
        });
        return;
    }
}

// para convertir de crc a usd
async function convertCRC() {
    const amount = parseFloat(document.getElementById('crcAmount').value);
    const rate = await getCRCRate();
    if (rate && !isNaN(amount)) { //revisa que rate este disponible y que el amount si sea un numero
        const result = amount * rate;
        document.getElementById('crcRate').value = result.toFixed(2); // resultado aqui
    } else {
        Swal.fire({
            title: "Campos incompletos",
            icon: "error",
            iconColor: "#231955",
            text: "Ingrese un monto válido",
            imageWidth: 400,
            imageHeight: 200,
        });
        return;
    }
}

//funciones de limpieza de espacios
function limpiarUSD() {
    document.getElementById('usdAmount').value = '';
    document.getElementById('usdRate').value = '';
}

function limpiarCRC() {
    document.getElementById('crcAmount').value = '';
    document.getElementById('crcRate').value = '';
}
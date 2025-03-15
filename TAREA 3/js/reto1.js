
//funcion que se llama al dar click en el boton de factirar en el html
function facturar() {
    event.preventDefault(); //dice que event esta deprecated pero fue la unica forma de hacer que la pagina no se refrescara

        //declaracion de constantes (uso const porque no se les va a reasignar otro valor despues)
        const cliente = document.getElementById('cliente').value;
        const articulo = document.getElementById('articulo').value;
        const cantidad = parseInt(document.getElementById('cantidad').value);
        const precio = parseFloat(document.getElementById('precio').value);

        // validacion de que todos los campos del form esten llenos, si no, no se crea la factira
        if (!cliente || !articulo || isNaN(cantidad) || isNaN(precio)) {
            Swal.fire({
                title: "Campos incompletos",
                icon: "error",
                iconColor: "#231955",
                text: "Por favor, complete todos los campos antes de facturar.",
                imageWidth: 400,
                imageHeight: 200,
            });
            return;
        }

        // si los espacios estan llenos, entonces el if de arriba no aplica y procede al calculo
        const subtotal = cantidad * precio;
        const iva = subtotal * 0.13;
        const servicio = subtotal * 0.05;
        const total = subtotal + iva + servicio;

        //esta es para obtener la fecha del momento de creacion de la factura
        const now = new Date();
        const formattedDate = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });
        
        // esta es para generar un numero random y asignarlo como no de factura
        const facturaNo = Math.floor(Math.random() * 100) + 1;

        const receiptHTML = `
            <div class="impresion" style=" padding: 20px; width: 300px; font-family: sans-serif;">
                <p>Factura No. ${facturaNo}</p>
                <p>Fecha: ${formattedDate}</p>
                <p>Cliente: ${cliente}</p>
                <hr>
                <table style="width: 100%;">
                    <thead>
                        <tr>
                            <th>Articulo</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${articulo}</td>
                            <td>${cantidad}</td>
                            <td>$${precio.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
                <hr>
                <p style="text-align: right;">Subtotal: $${subtotal.toFixed(2)}</p>
                <p style="text-align: right;">IVA 13%: $${iva.toFixed(2)}</p>
                <p style="text-align: right;">Servicio 5%: $${servicio.toFixed(2)}</p>
                <hr>
                <p style="text-align: right; font-weight: bold;">Total a pagar: $${total.toFixed(2)}</p>
                <div style="text-align: center; margin-top: 20px;">
                    <button onclick="window.print()" class="btn btn-primary">
                    <i class="uil uil-print"></i> Imprimir</button>

                    <button class="btn btn-primary">
                    <i class="uil uil-envelope"></i> Correo</button>
                </div>
            </div>
        `;

        const receiptContainer = document.querySelector('.factura');
        receiptContainer.innerHTML = receiptHTML;
};
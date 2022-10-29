const form = document.querySelector('#formulario');
const precioTicket = 200;
var precioNuevo = 0;
var descuento = 0;
var precioTotal = document.querySelector('#total-to-pay');

const calcularPrecio = (event) => {
    event.preventDefault();
    switch (event.target.Membresia.value){
        case 'estudiante':
            descuento = precioTicket * 0.8;
            precioNuevo = precioTicket - descuento;
            precioTotal.textContent = precioNuevo * event.target.quantity.value;
            break;
        case 'trainee':
            descuento = precioTicket * 0.5;
            precioNuevo = precioTicket - descuento;
            precioTotal.textContent = precioNuevo * event.target.quantity.value;
            break;
        case 'junior':
            descuento = precioTicket * 0.15;
            precioNuevo = precioTicket - descuento;
            precioTotal.textContent = precioNuevo * event.target.quantity.value;
    }
}

form.addEventListener("submit", calcularPrecio);
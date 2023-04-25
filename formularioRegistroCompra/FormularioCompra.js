const form = document.forms["form"];
const TBvalores = document.getElementById("ventaDeProductos").getElementsByTagName("tbody")[0];
const buttonSubmit = document.querySelector(".submit-btn")
const totalValores = document.getElementById("valorTotal")



/* Funcionalidad botton submit */
buttonSubmit.onclick = function (e) {
    e.preventDefault()
    /* Hacemos que no se recarge la pagina al enviar el formulario */

    const producto = form.elements['producto'].value
    const cantidad = form.elements['cantidad'].value
    const nombreProveedor = form.elements['name'].value
    const precio = form.elements['precio'].value
    const subTotal = precio * cantidad


    console.log(nombreProveedor , precio)

    if(producto === ""){
        alert("Escoje un producto")
        window.location.reload() // No es lo mejor pero es lo que se me ocurre :(
    }


    /* Buscaremos una fila tiene ya el producto */
    let filaExistente = null;

    for (i = 0; i < TBvalores.rows.length; i++) {
        const celdaProducto = TBvalores.rows[i].cells[0]; /* Aqui la misma celdas en distintas filas */
        if (celdaProducto.innerHTML === producto) {
            filaExistente = TBvalores.rows[i];
            break;
        }
    }

    if (filaExistente) {
        //si existe una fila, sobresbribir los datos de la fila
        const celdaCantidad = filaExistente.cells[1];
        celdaCantidad.innerHTML = cantidad

        const celdaPrecio = filaExistente.cells[2];
        celdaPrecio.innerHTML = precio

        const celdaSubTotal = filaExistente.cells[3];
        celdaSubTotal.innerHTML = subTotal
        
    }
    else {
        //si no existe la fila, crear una nueva
        const fila = TBvalores.insertRow();

        const celdaProducto = fila.insertCell();
        celdaProducto.innerHTML = producto

        const celdaCantidad = fila.insertCell();
        celdaCantidad.innerHTML = cantidad

        const celdaPrecio = fila.insertCell();
        celdaPrecio.innerHTML = precio

        const celdaSubTotal = fila.insertCell();
        celdaSubTotal.innerHTML = subTotal
    }

    actualizarTotal()
}



function actualizarTotal() {
    let sumaPrecios = 0;
    
    for (let i = 0; i < TBvalores.rows.length; i++) {
      const celdaPrecio = TBvalores.rows[i].cells[3];
      const precio = parseFloat(celdaPrecio.innerHTML);
      sumaPrecios += precio;
    }
    
    totalValores.innerHTML = sumaPrecios;
  }
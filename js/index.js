function MostrarTotalAPagar(){
    let precio = 200;
    let cantidad = document.getElementById("Cantidad");
    let precioSinDescuento = cantidad.valueAsNumber * precio;
    let mostarPrecio = document.getElementsByClassName("montoPagar");;
    let descuento = document.getElementById("Categoria").value;
    console.log(descuento);
    switch (descuento){
        case "1":
            precioSinDescuento *= 0.20;
            break;
        case "2":
            precioSinDescuento *= 0.50    
            break;
         case "3":
            precioSinDescuento *= 0.85;       
    }
    mostarPrecio[0].innerText = precioSinDescuento;

}

let botonResumen = document.getElementById("resumen");
botonResumen.addEventListener("click", MostrarTotalAPagar);
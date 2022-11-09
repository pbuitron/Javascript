//Se declaran las variables para el carrito de compras

let Televisor, Smartphone, Laptop, Mouse, comprar, continuar, decision, producto, totalcompras;
Televisor = 2500;
Smartphone = 1800;
Laptop = 3500;
Mouse = 350;
comprar = true;
continuar = true;
decision = true;
producto = 0;
totalcompras = 0;

// Se declara funcion para iniciar las compras
function inicioDeCompras() {
    producto = Number(prompt(`Marque una de las siguientes opciones:\n1. Televisor - Precio ${Televisor} \n2. Smartphone - Precio ${Smartphone} \n3. Laptop - Precio ${Laptop} \n4. Mouse- Precio ${Mouse}`))

}

// Se declara una función para tomar decisión al momento de realizar la primera compra
function pregunta1raCompra() {
    comprar = decision
    producto = Number(prompt(`Marque una de las siguientes opciones:\n1. Televisor - Precio ${Televisor} \n2. Smartphone - Precio ${Smartphone} \n3. Laptop - Precio ${Laptop} \n4. Mouse- Precio ${Mouse}`))
}
//Se declara una función para calcular el monto total y finalizar la compra
function pregunta2daCompra() {
    comprar = decision
    alert(`El total de su compra es ${totalcompras} Soles. Muchas Gracias.\nVuelva Pronto!`)
}



//Se solicita un numero valido para iniciar con las compras
inicioDeCompras()

while (comprar == true) {
    switch (producto) {
        case 1:
            totalcompras = totalcompras + Televisor
            break;
        case 2:
            totalcompras = totalcompras + Smartphone
            break;
        case 3:
            totalcompras = totalcompras + Laptop
            break;
        case 4:
            totalcompras = totalcompras + Mouse
            break;
        default:
            producto = Number(prompt(
                `Te equivocaste !!! \nMarque una de las siguientes opciones:\n1. Televisor - Precio ${Televisor} \n2. Smartphone - Precio ${Smartphone} \n3. Laptop - Precio ${Laptop} \n4. Mouse- Precio ${Mouse}`))
            continue;
    }

    decision = confirm(`Desea continuar comprando`)
    if (decision == true) {
        pregunta1raCompra()
    } else {
        decision == false
        pregunta2daCompra()

    }
}

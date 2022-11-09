//Se declaran lasa variables para el carrito de compras

let Televisor, Smartphone, Laptop, Mouse, comprar, continuar, decision, producto, totalcompras;
Televisor = 2500;
Smartphone = 1800;
Laptop = 3500;
Mouse = 35;
comprar = true;
continuar = true;
decision = true;
producto = 0;
totalcompras = 0;

function decisionDeCompra () {
    if (decision == true) {
        comprar = decision
        producto = Number(prompt(`Marque una de las siguientes opciones:\n1. Televisor - Precio ${Televisor} \n2. Smartphone - Precio ${Smartphone} \n3. Laptop - Precio ${Laptop} \n4. Mouse- Precio ${Mouse}`))
    } else {
        decision == false
        comprar = decision
        alert(`El total de su compra es ${totalcompras} Soles. Muchas Gracias por su compra\nVuelva Pronto!`)
        
    }
}

//Se solicita un numero valido para iniciar con las compras
producto = Number(prompt(`Marque una de las siguientes opciones:\n1. Televisor - Precio ${Televisor} \n2. Smartphone - Precio ${Smartphone} \n3. Laptop - Precio ${Laptop} \n4. Mouse- Precio ${Mouse}`))

while (comprar === true) {
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
            producto = Number(prompt(`Te equivocaste\nMarque una de las siguientes opciones:\n1. Televisor - Precio ${Televisor} \n2. Smartphone - Precio ${Smartphone} \n3. Laptop - Precio ${Laptop} \n4. Mouse- Precio ${Mouse}`))
            continue;
    }


   /* if (producto == 1) {
         totalcompras = totalcompras + Televisor
     } else if (producto == 2) {
         totalcompras = totalcompras + Smartphone
     } else if (producto == 3) {
         totalcompras = totalcompras + Laptop
     } else if (producto == 4) {
         totalcompras = totalcompras + Mouse
     } else {
         producto = prompt(`Te equivocaste\nMarque una de las siguientes opciones:\n1. Televisor - Precio ${Televisor} \n2. Smartphone - Precio ${Smartphone} \n3. Laptop - Precio ${Laptop} \n4. Mouse- Precio ${Mouse}`)
         continue
     }*/
    decision = confirm(`Desea continuar comprando`)
  decisionDeCompra()
}

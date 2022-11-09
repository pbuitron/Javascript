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
//Se declara una función arrow  para calcular el monto total y finalizar la compra
const pregunta2daCompra = () => {
    comprar = decision
    alert(`El total de su compra es ${totalcompras} Soles. Muchas Gracias.\nVuelva Pronto!`)
}


//===========================================================================================================================
//=                                                                                                                         =
//=                                           INICIO DE LA APLICACION                                                       =
//=                                                                                                                         =
//===========================================================================================================================


//Se solicita un número valido para iniciar con las compras llamando a la función 

inicioDeCompras()

/*Se genera un ciclo que inicia con una varible true, cuando se seleccione una opción válida,
el switch entregará un resultado correspondiente a uno de los cases, de lo contrario entregará como
resultado el valor de default pidiendo el ingreso de un valor válido,   el ciclo dentro del swich comtinuará 
hasta que se ingrese un valor dentro del rango 
*/

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
    /*Una vez realizada la primera compra, se debe tomar una decisión de seguir o finalizar con la compra,
    el resultado se guarda en una variable, si desea continuar comprando el valor de la variable sera true, de lo contrario sera false  */
    decision = confirm(`Desea continuar comprando`)

    /**Una vez tomada la decision, aceptar (true) o cancelar (false) ,
     De ser true, la variable comprar toma el valor de la variable decisión y repite el ciclo hasta que se indique lo contrario con false, el cual entregará el total 
     de las compras.

     Se consideró otra alternativa a la condicional if 
     */
    decision == true ? pregunta1raCompra() : pregunta2daCompra();

    /*if (decision == true) {
        pregunta1raCompra()
    } else {
        decision == false
        pregunta2daCompra()

    }*/
}

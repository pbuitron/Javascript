//Se declaran las variables para el carrito de compras

let comprar, continuar, decision, producto, totalcompras;

comprar = true;
continuar = true;
decision = true;
producto = 0;
totalcompras = 0;

let ArrayProductos = [];
let carrito =[];
class Productos{
    constructor (id,descripcion,marca, categoria,precio,stock){
        this.id=id
        this.descripcion=descripcion
        this.marca=marca
        this.categoria=categoria
        this.precio=precio
        this.stock=stock
    }
}
let producto1 = new Productos (1,`Televisor 45"`,`LG`,`Televisores`,1500,25)
let producto2 = new Productos (2,`Televisor 55"`,`Samsung`,`Televisores`,1800,20)
let producto3 = new Productos (3,`Laptop 14"`,`LG`,`Laptop`,2800,15)
let producto4 = new Productos (4,`Monitor`,`Samsung `,`Centro de computo`,480,250)
let producto5 = new Productos (5,`Desktop Rayzen 5400"`,`Pavilion Gaming`,`Laptop`,6000,5)
let producto6 = new Productos (6,`Desktop Rayzen 4400"`,`Pavilion Gaming`,`Laptop`,4500,55)


ArrayProductos.push(producto1)
ArrayProductos.push(producto2)
ArrayProductos.push(producto3)
ArrayProductos.push(producto4)
ArrayProductos.push(producto5) 
ArrayProductos.push(producto6)


// Se declara funcion para iniciar las compras
function inicioDeCompras() {
    producto = Number(prompt(`Marque una de las siguientes opciones:\n1. ${producto1.descripcion} ${producto1.precio} \n2.  ${producto2.descripcion} ${producto2.precio} \n3.  ${producto3.descripcion} ${producto3.precio} \n4.  ${producto4.descripcion} ${producto4.precio} \n5. ${producto5.descripcion} ${producto5.precio} \n6. ${producto6.descripcion} ${producto6.precio}`))

}

// Se declara una función para tomar decisión al momento de realizar la primera compra
function pregunta1raCompra() {
    comprar = decision
    producto = Number(prompt(`Marque una de las siguientes opciones:\n1. ${producto1.descripcion} ${producto1.precio} \n2.  ${producto2.descripcion} ${producto2.precio} \n3.  ${producto3.descripcion} ${producto3.precio} \n4.  ${producto4.descripcion} ${producto4.precio} \n5. ${producto5.descripcion} ${producto5.precio} \n6. ${producto6.descripcion} ${producto6.precio}`))
}
//Se declara una función arrow  para calcular el monto total y finalizar la compra
const pregunta2daCompra = () => {
    comprar = decision
    alert(`Los productos adquiridos son: \n ${carrito} `)
    alert(`El total de su compra es ${totalcompras} Soles. Muchas Gracias.\nVuelva Pronto!`)
}


// funcion para mostrar todos los articulos por marca

function Filtro (){
let marcaProducto = prompt("Revise los productos que tenemos \nSamsung \nLG \nPavilion Gaming");

ArrayProductos.forEach(function(product){
    if (product.marca == marcaProducto){
        alert("Id Producto: "+ product.id + " - Descripción: "+ product.descripcion + " - Marca: "+ product.marca + " - Categoría: "+ product.categoria + " - Precio: "+ product.precio + " - Stock: "+ product.stock)
    }
});
}





//===========================================================================================================================
//=                                                                                                                         =
//=                                           INICIO DE LA APLICACION                                                       =
//=                                                                                                                         =
//===========================================================================================================================



Filtro()
inicioDeCompras()

while (comprar == true) {
    switch (producto) {
        case 1:
            carrito.push(producto1.descripcion)
            totalcompras =  totalcompras + producto1.precio
            break;
        case 2:
            carrito.push(producto2.descripcion)
            totalcompras = totalcompras + producto2.precio
            break;
        case 3:
            carrito.push(producto3.descripcion)
            totalcompras = totalcompras +producto3.precio
            break;
        case 4:
            carrito.push(producto4.descripcion)
            totalcompras = totalcompras + producto4.precio
            break;
         case 5:
            carrito.push(producto5.descripcion)
            totalcompras = totalcompras + producto5.precio
            break;
        case 6:
            carrito.push(producto6.descripcion)
            totalcompras = totalcompras + producto6.precio
                break;   
        default:
            producto = Number(prompt(
                `Te equivocaste !!! \nMarque una de las siguientes opciones:\n1. ${producto1.descripcion} ${producto1.precio} \n2.  ${producto2.descripcion} ${producto2.precio} \n3.  ${producto3.descripcion} ${producto3.precio} \n4.  ${producto4.descripcion} ${producto4.precio} \n5. ${producto5.descripcion} ${producto5.precio} \n6. ${producto6.descripcion} ${producto6.precio}`))
            continue;
    }
    decision = confirm(`Desea continuar comprando`)
    decision == true ? pregunta1raCompra() : pregunta2daCompra();

}
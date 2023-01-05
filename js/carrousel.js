//Variables
let ArrayEntradas = [];
let carrito = [];
const contenedorCarrito = document.getElementById(`contenedorCarrito`)
const verCarrito = document.getElementById(`verCarrito`)



//Funciones

function carrusel() {
  let carrusel = document.getElementById(`carrusel`)
  carrusel.innerHTML = `
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner" id="carruselDOM">
        <div class="carousel-item active">
            <img src="${evento01.img}" class="d-block w-100" alt=" ${evento01.descripcion}">
        </div>

    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
`
  let contenedorEventos = document.getElementById(`carruselDOM`)
  ArrayEntradas.forEach(eventos => {
    contenedorEventos.innerHTML += `
        <div class="carousel-item" id="event${eventos.item}" ->
        <img src="${eventos.img}" class="d-block w-100" alt="${eventos.descripcion}">
        </div>
        
        `;

  }
  )
}
function cards() {
  // Declarar una variable para almacenar el elemento padre donde se añadirán los elementos generados dinámicamente
  let parentElement = document.getElementById('cards');

  ArrayEntradas.forEach(conciertos => {
    // Crear un elemento div para cada entrada
    let entryElement = document.createElement('div');
    entryElement.classList.add('col');

    // Generar el HTML para la entrada y asignarlo al elemento recién creado
    entryElement.innerHTML = `
    <div class="card">
      <img src="${conciertos.img}" class="card-img-top" alt="${conciertos.descripcion}">
      <div class="card-body">
        <h1 class="cardtexto"><strong>${conciertos.lugarDePresentacion} - ${conciertos.provincia}</strong> </h1>
        <h5 class="card-title text-success"><strong> ${conciertos.descripcion}</strong></h5>
        <p class="card-text">${conciertos.fechaDePresentacion}</p>
        <p class="card-text">${conciertos.categoria}</p>
        <button class="button" id = "btn${conciertos.item}">#Agregar al Carrito</button>
      </div>
    </div>
    `;
    // Añadir el elemento recién creado al elemento padre
    parentElement.appendChild(entryElement);

    // Añadir un manejador de evento al botón dentro del elemento recién creado
    let button = document.getElementById(`btn${conciertos.item}`);
    button.addEventListener('click', () => {
      agregarAlCarrito(conciertos.item);
    });


  })
}
function cambiarSlide() {
  let elementoActual = document.querySelector('.carousel-item.active');
  indiceActual = (indiceActual + 1) % ArrayEntradas.length;
  let siguienteElemento = document.getElementById(`event${ArrayEntradas[indiceActual].item}`);
  elementoActual.classList.remove('active');
  siguienteElemento.classList.add('active');
  setTimeout(cambiarSlide, 3000);
}
function agregarAlCarrito(item) {
  const productoEnCarrito = carrito.find(concierto => concierto.item === item);
  productoEnCarrito
    ? productoEnCarrito.cantidad++
    : carrito.push(ArrayEntradas.find(concierto => concierto.item === item));
  localStorage.setItem("carrito", JSON.stringify(carrito));
  console.log(carrito);
  // calcularTotal();
}

function mostrarCarrito() {

  contenedorCarrito.innerHTML = ""

  carrito.forEach(concierto => {
    const cardcarrito = document.getElementById(`contenedorCarrito`)
    // cardcarrito.classList.add("card", "mb-3");
    cardcarrito.innerHTML += `
      <h2 class="card-header display-6 "><strong> ${concierto.descripcion} </strong></h2>
      <div class="card-body">
          <img src =${concierto.img} class="d-block user-select-none" width="100%" height="200" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style="font-size:1.125rem;text-anchor:middle">

          <h5 class="card-title mt-5"> ${concierto.lugarDePresentacion} </h5>
          <h6 class="card-subtitle text-muted mt-3"> ${concierto.fechaDePresentacion} </h6>
          <div>
              <div class="btn-group contenedorBotones mt-4" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-primary botonCarrito bti" id="menos${concierto.item}">-</button>
                  <span class="contador"> ${concierto.cantidad} </span>
                  <button type="button" class="btn btn-primary botonCarrito btd" id="mas${concierto.item}">+</button>


              </div>
              <br>
              <h5 class="mt-3 "><a class="eliminar" href="">eliminar</a> </h5>
          </div>
      </div>`


    //Eliminar productos del carrito:

    // const boton = document.getElementById(`eliminar${concierto.item}`);
    // boton.addEventListener("click", () => {
    //   eliminarDelCarrito(concierto.item);
    //  })
  })
  // calcularTotal();
}


//Eventos

verCarrito.addEventListener(`click`, () => {
  mostrarCarrito();
})

// Pruebas Lógicas
if (localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
}


//Base de Datos


class Entradas {
  constructor(item, descripcion, lugarDePresentacion, provincia, categoria, fechaDePresentacion, stock, precio, img) {
    this.item = item
    this.descripcion = descripcion
    this.lugarDePresentacion = lugarDePresentacion
    this.provincia = provincia
    this.categoria = categoria
    this.fechaDePresentacion = fechaDePresentacion
    this.stock = stock
    this.precio = precio
    this.img = img
    this.cantidad = 1
  }
}



let evento01 = new Entradas(1, `Camilo en Lima`, `Estadio Nacional`, `Lima`, `Música`, `16/03/2023`, 5000, 450, `https://cdn.teleticket.com.pe/images/eventos/banners2/ics031_lg_1_2_banner.jpg`)
let evento02 = new Entradas(2, `Super Junior en Lima`, `Estadio San Marcos`, `Lima`, `Música`, `11/02/2023`, 3000, 180, `https://cdn.teleticket.com.pe/images/eventos/banners2/ics030_lg_1_2_banner.jpg`)
let evento03 = new Entradas(3, `X FestiRock Nacional Ayacucho 2023`, `Millwa Country Club`, `Ayacucho`, `Música`, `28/01/2023,`, 7000, 680, `https://cdn.teleticket.com.pe/images/eventos/xhl001_re_banner.jpg`)
let evento04 = new Entradas(4, `Super Tono Noventero`, `Discoteca Coco - Lince`, `Lima`, `Música`, `31/12/2023`, 2000, 129, `https://cdn.teleticket.com.pe/images/eventos/pmp002_re_banner.jpg`)
let evento05 = new Entradas(5, `Lucho Quequezana`, `Teatro NOS - San Isidro`, `Lima`, `Familia`, `15/01/2023`, 500, 250, `https://cdn.teleticket.com.pe/images/eventos/banners2/jpg017_lg_1_2_banner.jpg`)
let evento06 = new Entradas(6, `Agua Marina en Club Kenko`, `Club Kenko`, `Lima`, `Música`, `31/12/2022`, 2500, 200, `https://cdn.teleticket.com.pe/images/eventos/neo002_re_banner.jpg`)
let evento07 = new Entradas(7, `Encanto Live en Cajamarca`, `Centro de Convenciones`, `Cajamarca`, `Música`, `26/01/2023`, 250, 45, `https://cdn.teleticket.com.pe/images/eventos/vep004_re_banner.jpg`)
let evento08 = new Entradas(8, `La Mejor Fiesta de Año Nuevo 2023`, `Circulo Militar de Jesus Maria`, `Lima`, `Familia`, `31/12/2022`, 4000, 250, `https://cdn.teleticket.com.pe/images/eventos/banners2/tab001_lg_1_2_banner.jpg`)
let evento09 = new Entradas(9, `Celebramos el Día de la Guitarra`, `Jazz Zone - Miraflores`, `Lima`, `Música`, `17/01/2023`, 450, 180, `https://cdn.teleticket.com.pe/images/eventos/wam030_re_banner.jpg`)
let evento10 = new Entradas(10, `Open Party`, `Hacienda Don Jesus`, `Cuzco`, `Familia`, `31/12/2022`, 900, 299, `https://cdn.teleticket.com.pe/images/eventos/rdv001v2_re_banner.jpg`)

ArrayEntradas.push(evento01)
ArrayEntradas.push(evento02)
ArrayEntradas.push(evento03)
ArrayEntradas.push(evento04)
ArrayEntradas.push(evento05)
ArrayEntradas.push(evento06)
ArrayEntradas.push(evento07)
ArrayEntradas.push(evento08)
ArrayEntradas.push(evento09)
ArrayEntradas.push(evento10)






//Aplicacion de las funciones
console.log(ArrayEntradas)
// carrusel()
// cambiarSlide()
// cards()


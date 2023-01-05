// Importar archivos para carrusel mediante Fetch

const baseDeDatos = "../json/datos.json";
const arrayEntradas = [];

const contenedorCarrito = document.getElementById(`contenedorCarrito`)
const verCarrito = document.getElementById(`verCarrito`)

fetch(baseDeDatos)
    .then((respuesta) => respuesta.json())
    .then((datos) => {
        arrayEntradas.push(datos)
        console.log(arrayEntradas)
        carrusel(datos)
        cards(datos)
        
    })
    .catch(error => console.log(error))


//Funcion para crear un carrusel con los objetos importados por el Fetch
function carrusel(array) {
    let carrusel = document.getElementById(`carrusel`)
    carrusel.innerHTML = `
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner" id="carruselDOM">
          <div class="carousel-item active">
              <img src="${array[0].img}" class="d-block w-100" alt="${array[0].descripcion}">
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
    array.forEach(eventos => {
        contenedorEventos.innerHTML += `
        <div class="carousel-item" id="event${eventos.item}" ->
        <img src="${eventos.img}" class="d-block w-100" alt="${eventos.descripcion}">
        </div>
         `;

    }
    )
}

//Pintamos los Entradas del Array en un 
function cards(array) {
    let parentElement = document.getElementById('cards');
    array.forEach(array => {
        // Crear un elemento div para cada entrada
        let entryElement = document.createElement('div');
        entryElement.classList.add('col');

        // Generar el HTML para la entrada y asignarlo al elemento recién creado
        entryElement.innerHTML = `
    <div class="card">
      <img src="${array.img}" class="card-img-top" alt="${array.descripcion}">
      <div class="card-body">
        <h1 class="cardtexto"><strong>${array.lugarDePresentacion} - ${array.provincia}</strong> </h1>
        <h5 class="card-title text-success"><strong> ${array.descripcion}</strong></h5>
        <p class="card-text">${array.fechaDePresentacion}</p>
        <p class="card-text">${array.categoria}</p>
        <button class="button" id = "btn${array.item}">#Agregar al Carrito</button>
      </div>
    </div>
    `;
        // Añadir el elemento recién creado al elemento padre
        parentElement.appendChild(entryElement);

        // Añadir un manejador de evento al botón dentro del elemento recién creado
        let button = document.getElementById(`btn${array.item}`);
        button.addEventListener('click', () => {
            agregarAlCarrito(array.item);

            Toastify({
                text: "Producto Añadido al Carrito",
                duration: 1000,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                    background: "#09adad",
                    width: "220px",
                    fontSize: "14px",
                    fontFamily: '"Roboto", sans-serif',
                    fontWeight: "300",
                    textAlign: "center",
                    borderRadius: "50px",
                },
            }).showToast();
        })
    })
}


//Eventos

verCarrito.addEventListener(`click`, () => {
    mostrarCarrito();
})

let carrito = [];

// Pruebas Lógicas
if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    mostrarCarrito();

}


function agregarAlCarrito(item) {
    const productoEnCarrito = carrito.find(concierto => concierto.item === item);
    productoEnCarrito
      ? productoEnCarrito.cantidad++
      : carrito.push(arrayEntradas.find(concierto => concierto.item === item));
    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log(carrito);
    // calcularTotal();
  }
// });




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
  
  verCarrito.addEventListener(`click`, () => {
    mostrarCarrito();
  })
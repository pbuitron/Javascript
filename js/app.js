/*Fetch para importar la base de datos de los elementos que se usaran en el carrusel
y en las cards que se imprimirann en el DOM */

let bdata = "../json/datos.json";
let arrayEntradas = [];
let cantidad = { cantidad: 1 }

/* Se importa la base de datos, se fusiona con la variable cantidad.  */
fetch(bdata)
    .then((response) => response.json())
    .then((data) => {
        arrayEntradas = arrayEntradas.concat(data)
        arrayEntradas.forEach((elemento) => {
            elemento = Object.assign(elemento, cantidad)
        })

        console.log(arrayEntradas);
        carrusel()
        cambiarSlide()
        cardsDOM()

    })
    .catch(error => console.error(error))


// Funcion para llamar a un carrusel

function carrusel() {
    let carrusel = document.getElementById(`carrusel`)
    carrusel.innerHTML = `
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner" id="carruselDOM">
          <div class="carousel-item active">
              <img src="${arrayEntradas[0].img}" class="d-block w-100" alt=" ${arrayEntradas[0].descripcion}">
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
    arrayEntradas.forEach(eventos => {
        contenedorEventos.innerHTML +=
            `
          <div class="carousel-item" id="event${eventos.item}" ->
          <img src="${eventos.img}" class="d-block w-100" alt="${eventos.descripcion}">
          </div>
          `;
    }
    )
}

//Se crea una animación para el carrusel:
let indiceActual = 0;
function cambiarSlide() {
    let elementoActual = document.querySelector('.carousel-item.active');
    indiceActual = (indiceActual + 1) % arrayEntradas.length;
    let siguienteElemento = document.getElementById(`event${arrayEntradas[indiceActual].item}`);
    elementoActual.classList.remove('active');
    siguienteElemento.classList.add('active');
    setTimeout(cambiarSlide, 3000);
}

function cardsDOM() {
    let contenedorPadre = document.getElementById(`cards`);
    arrayEntradas.forEach(conciertos => {
        let contenedorCards = document.createElement(`div`);
        contenedorCards.classList.add(`col`);

        contenedorCards.innerHTML += `
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
        contenedorPadre.appendChild(contenedorCards);
        // Añadir un manejador de evento al botón dentro del elemento recién creado
        let button = document.getElementById(`btn${conciertos.item}`);
        button.addEventListener('click', () => {
            agregarAlCarrito(conciertos.item);
            Toastify({
                text: "Producto Añadido",
                duration: 1200,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                    
                    width: "20%",
                    fontSize: "1.1rem",
                    fontFamily: '"Roboto", sans-serif',
                    fontWeight: "500",
                    textAlign: "center",
                    borderRadius: "1.2rem",
                    background: "#004d7a",
                },
            }).showToast();
        });
    })
}

let carrito = []

if(localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    mostrarCarrito(carrito);
}

// funcion para añadir elementos al array carrito.
function agregarAlCarrito(item){
    const productoEnCarrito =  carrito.find(concierto => concierto.item === item);
    if(productoEnCarrito){
        productoEnCarrito.cantidad++;
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }else{
        const producto = arrayEntradas.find(concierto => concierto.item === item);
        producto.cantidad = 1
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    //costoTotal()
    mostrarCarrito(carrito);


};

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
            <h5 class="card-title mt-3"> Precio S/. ${concierto.precio} </h5>
            
            
            <div>
                <div class="btn-group contenedorBotones mt-4" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-primary botonCarrito bti" id="menos${concierto.item}">-</button>
                    <span class="contador"> ${concierto.cantidad} </span>
                    <button type="button" class="btn btn-primary botonCarrito btd" id="mas${concierto.item}">+</button>
                    
        
                </div>
                
                <h5 class="card-title mt-3"> Total S/. ${concierto.cantidad * concierto.precio} </h5>
                
                <br>
                <h5 class="mt-3 "><a class="eliminar" href="">eliminar</a> </h5>
            </div>
        </div>
        `;
        
  
  
      //Eliminar productos del carrito:
  
      // const boton = document.getElementById(`eliminar${concierto.item}`);
      // boton.addEventListener("click", () => {
      //   eliminarDelCarrito(concierto.item);
      //  })
    })
    // calcularTotal();
  }


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
    }
}

let ArrayEntradas = []

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
ArrayEntradas.forEach(eventos=>{
    contenedorEventos.innerHTML += `
        <div class="carousel-item" id="event${eventos.item}" ->
        <img src="${eventos.img}" class="d-block w-100" alt="${eventos.descripcion}">
        </div>
        
        `;
        
      }
    )
}





carrusel()

let cards = document.getElementById(`cards`)
ArrayEntradas.forEach(conciertos =>{
    cards.innerHTML += `
    <div class="col">
    <div class="card">
      <img src="${conciertos.img} " class="card-img-top" alt="${conciertos.descripcion} ">
      <div class="card-body">
      <h1 class="cardTexto"><strong>${conciertos.lugarDePresentacion} - ${conciertos.provincia} </strong> </h1>
        <h5 class="card-title text-success"> <strong> ${conciertos.descripcion}</strong> </h5>
        <p class="card-text"> ${conciertos.fechaDePresentacion}</p>
        <p class="card-text"> ${conciertos.categoria}</p>
        <button class="button" id="btn${conciertos.item}"> #COMPRAR
        </button>
        </div>

    </div>
    `
}

)



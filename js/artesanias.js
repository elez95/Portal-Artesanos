const inputFiltro = document.querySelector('#input-busqueda');
const buscar = document.querySelector('#btn-buscar');
const contenedor = document.querySelector('#productos');

function mostrarProductos(listaArtesanias){   

    contenedor.innerHTML = '';

    listaArtesanias.forEach(producto => {
                contenedor.innerHTML += `
                    <li id="producto" class="card" style="min-width: 30%;">
                        <img class="card-img-top" src="assets/guantes.jpg" alt="Card image">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">Esta es una descripción genérica.</p>
                            <a href="#" class="btn btn-primary">Ver producto</a>
                        </div>
                    </li>
                `
            });
}


function filtrarPorNombre(){
    
    let textoFitro = inputFiltro.value.toLowerCase();
    console.log(textoFitro)
    let listaFiltrada = []
    artesanias.forEach(producto => {
        let nombreProducto = producto.nombre.toLowerCase();
        if(nombreProducto.indexOf(textoFitro) !== -1){
            listaFiltrada.push(producto);
        }
    })
    mostrarProductos(listaFiltrada);

    if(inputFiltro.value.toLowerCase() === ""){
        mostrarTodosLosProductos();
    }
};

function mostrarTodosLosProductos(){

    mostrarProductos(artesanias);
};

buscar.onclick = filtrarPorNombre
filtrarPorNombre();
console.log("LLEGA AL JS")
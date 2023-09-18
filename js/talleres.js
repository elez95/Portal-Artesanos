const inputFiltro = document.querySelector('#input-busqueda');
const buscar = document.querySelector('#btn-buscar');
const contenedor = document.querySelector('#talleres');

function mostrarTalleres(listaTalleres){

    contenedor.innerHTML = '';

    listaTalleres.forEach( (taller, i) => {
                contenedor.innerHTML += `
                    <tr>
                        <th scope="row">${i+1}</th>
                        <td>${taller.nombre}</td>
                        <td>${taller.direccion}</td>
                        <td>${taller.horario}</td>
                        <td><button class="btn btn-outline-secondary" data-toggle="modal" data-target="#mapModal" >VER EN EL MAPA</button></td>
                    </tr>
                `
            });
}

function filtrarPorNombre(){

    let textoFitro = inputFiltro.value.toLowerCase();
    console.log(textoFitro)
    let listaFiltrada = []
    talleres.forEach(taller => {
        let nombreTaller = taller.nombre.toLowerCase();
        if(nombreTaller.indexOf(textoFitro) !== -1){
            listaFiltrada.push(taller);
        }
    })
    mostrarTalleres(listaFiltrada);

    if(inputFiltro.value.toLowerCase() === ""){
        mostrarTodosLosTalleres();
    }
};

function mostrarTodosLosTalleres(){

    mostrarTalleres(talleres);
};

$('#exampleModal').on('shown.bs.modal', function () {
    $('#referencia').trigger('focus')
  })

buscar.onclick = filtrarPorNombre
mostrarTodosLosTalleres();
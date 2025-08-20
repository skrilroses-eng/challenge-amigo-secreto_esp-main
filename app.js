// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let numeroAmigos = [];

function agregarAmigo(){
    // Entrada del usuario
    const amigo = document.getElementById('amigo').value;
    
    if (amigo === ''){
        // Detecta elementos vacíos
        alert('Por favor, ingresa un nombre para agregarlo a la lista.');
    } else {
        //Agrega nombre al final
        numeroAmigos.push(amigo);
        // Limpia la caja
        const limpiarCaja = document.getElementById('amigo');
        limpiarCaja.value = '';
    }
    // Actualizamos la lista
    actualizarListaAmigos();
    // Verificar tamaño de arreglo y contenido
    console.log(numeroAmigos);
}

function actualizarListaAmigos(){
    // extrae el id de la lista <ul>
    const listAmigos = document.getElementById('listaAmigos');
    // limpia la lista 
    listAmigos.innerHTML = '';

    numeroAmigos.forEach(amigo => {
        // crea un <li>
        const li = document.createElement('li');
        // asignar texto del amigo actual
        li.textContent = amigo;
        // agregar <li> como hijo de <ul> en el HTML
        listAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    // Obtiene el <ul> donde se mostrará el resultado
    const resultadoElemento = document.getElementById('resultado');

    // valida que el array de los amigos no esté vacío
    if (numeroAmigos.length === 0) {
        alert("No hay ningún amigo :(");
        return;
    }

    // Genera un índice aleatorio que no supere el rango del array
    const i = Math.floor(Math.random() * numeroAmigos.length);
    
    // Obtiene un amigo con ese índice
    const amigoSorteado = numeroAmigos[i];

    // Muestra el resultado
    resultadoElemento.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}
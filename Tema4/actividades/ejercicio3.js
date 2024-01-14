function sacaNumero(event) {
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let lista = document.getElementsByTagName('ul')[0]; // Obtener la primera lista (si hay varias)

    let item = document.createElement('li');
    item.textContent = numeroAleatorio;

    lista.appendChild(item);
}

window.addEventListener('load', function () {
    document.getElementsByTagName('button')[0].addEventListener('click', sacaNumero);
});

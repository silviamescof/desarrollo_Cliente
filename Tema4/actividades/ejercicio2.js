function cambiaFondo(event) {
    let color = ['red', 'blue', 'pink', 'yellow', 'green', 'orange'];

    if (event.detail === 2) {
        let aleatorio = Math.floor(Math.random() * color.length);
        document.body.style.backgroundColor = color[aleatorio];
    }
}

window.addEventListener('load', function () {
    document.addEventListener('dblclick', cambiaFondo);
});

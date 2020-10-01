function divClose(id) {
    var el = document.getElementById(id);
    el.style.display = (el.style.display == 'none') ? 'block' : 'none';
    window.onload = function () {/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
        divClose(id);/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
    }
}
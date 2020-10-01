function divClose(id) {
    var el = document.getElementById(id);
    el.style.display = (el.style.display == 'none') ? 'block' : 'none';
    window.onload = function () {
    divClose(id);
    }
}
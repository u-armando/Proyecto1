let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//flecha con movimiento en inicio
const scrollIndicator = document.querySelector('.inicio .info .scroll-indicator');

scrollIndicator.addEventListener('click', function() {
window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
});
});

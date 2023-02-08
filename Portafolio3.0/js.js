/*CHANGE MODE*/
var toggle = document.getElementById('toggle');
var body = document.getElementById('body');
var uno = document.getElementById('navPrincipal');
var dos = document.getElementById('toggle');
var tres = document.getElementById('toggle');
var cuatro = document.getElementById('toggle');
toggle.onclick=()=>{
    toggle.classList.toggle('active');
    body.style.color='var(--color5)';
}
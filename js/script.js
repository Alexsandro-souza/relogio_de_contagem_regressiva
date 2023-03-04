const dias = document.getElementById('dias')
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time(){
    let hoje = new Date();
    let d = hoje.getDay();
    let h = hoje.getHours();
    let m = hoje.getMinutes();
    let s = hoje.getSeconds();

    dias.textContent = d;
    horas.textContent = h;
    minutos.textContent = m;
    segundos.textContent = s;

})


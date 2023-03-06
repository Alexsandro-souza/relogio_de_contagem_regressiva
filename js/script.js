const clickStart = document.getElementById('btn-start');  //Caputei o botão no html
const clickPause = document.getElementById('btn-pause');  //Caputei o botão no html
const clickReset = document.getElementById('btn-reset');  //Caputei o botão no html


const horas = document.getElementById('hour');
const minutos = document.getElementById('minute');
const segundos = document.getElementById('second');



// Criei uma função após um evento "Click no botão start"
clickStart.addEventListener('click', () => {
   let duracao = (parseInt(horas.value) * 60 * 60) + (parseInt(minutos.value) * 60) + parseInt(segundos.value);

  visualizarTemporizador = document.getElementById('timer');
  
  timer1(duracao, visualizarTemporizador);
})

// - Não conseguir fazer o botão de pause funcionar
/*Cclick no botão pause
  clickPause.addEventListener('click', () => {
  (interval)
})*/

// - Não conseguir fazer o botão de reset funcionar
/* Cclick no botão reset
clickReset.addEventListener('click', () => {
  horas= "00"
  minutos = "00"
  segundos = "00"
  stop(interval)
  visualizarTemporizador = "00:00:00"
})*/




const timer1 = (duracao, visualizarTemporizador) => {
  let tempo = duracao; // Quantidade de seg calculada na função clicStart
  let horas, minutos, segundos;

  let interval = setInterval(() => {
    horas = Math.floor((tempo / 60) / 60);
    minutos = Math.floor(tempo / 60 - (horas * 60));
    segundos = Math.floor(tempo % 60);

    horas1 = horas < 10 ? '0' + horas : horas;
    minutos1 = minutos < 10 ? '0' + minutos : minutos;
    segundos1 = segundos < 10 ? '0' + segundos : segundos;

    
    visualizarTemporizador.innerHTML = horas1 + ":" + minutos1 + ":" +segundos1;
    tempo -= 1;
    console.log(tempo)

    if(tempo < 1){
      clearInterval(interval);
      visualizarTemporizador.innerHTML = '00:00:00';
          
    }

    
   
  }, 1000);

  
}
    
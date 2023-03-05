const clickStart = document.getElementById('btn-start');  //Caputei o botão no html

// Criei uma função após um evento "Click no botão start"
clickStart.addEventListener('click', () => {
  const horas = document.getElementById('hour');
  const minutos = document.getElementById('minute');
  const segundos = document.getElementById('second');

  let duracao = (parseInt(horas.value) * 60 * 60) + (parseInt(minutos.value) * 60) + parseInt(segundos.value);

  visualizarTemporizador = document.getElementById('temporizador');
  
  timer1(duracao, visualizarTemporizador);
})

//clickPause.addEventListener('click', () => {
  //alert("oi")
//})

//clickReset.addEventListener('click', () => {
  //clearInterval(interval);
  //visualizarTemporizador = "00:00:00"
//})


const timer1 = (duracao, visualizarTemporizador) => {
  let tempo = duracao;
  let horas, minutos, segundos;

  let interval = setInterval(() => {
    horas = Math.floor((tempo / 60) / 60);
    minutos = Math.floor(tempo / 60 - (horas * 60));
    segundos = Math.floor(tempo % 60);

    console.log(timer1);

    horas1 = horas < 10 ? '0' + horas : horas;
    minutos1 = minutos < 10 ? '0' + minutos : minutos;
    segundos1 = segundos < 10 ? '0' + segundos : segundos;

    visualizarTemporizador.innerHTML = horas1+minutos1+segundos1;
    tempo -= 1;

    if(timer < 0){
      visualizarTemporizador.display.innerHTML = 'ACABOU!!!';
      clearInterval(interval);
    }
  }, 1000);
}
    
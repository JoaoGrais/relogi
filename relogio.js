function relogio(){
    const espacoRelogio = document.querySelector(".relogio");
    const horaAgora = new Date();

    const horas = horaAgora.getHours();

    const minutos = horaAgora.getMinutes();

    const segundos = horaAgora.getSeconds();

    const formatoHora = horas.toString().padStart(2, "0");
    const formatoMinutos = minutos.toString().padStart(2, "0");
    const formatoSegundos = segundos.toString().padStart(2, "0");

    espacoRelogio.textContent = `${formatoHora}:${formatoMinutos}:${formatoSegundos}`;

    // const frase = document.querySelector('.frase')
    // dia = new Array ('Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado');

    // mes = new Array ('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');

    // hoje = new Date()

    // frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2, 0)} de ${mes[hoje.getMonth()]} de${hoje.getFullYear()}`


}

setInterval(relogio, 1000)



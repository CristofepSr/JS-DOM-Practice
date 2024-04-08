function jugada(valor){
    var jugadaIa = ['piedra', 'papel', 'tigera'];
    var computer = jugadaIa[Math.floor(Math.random() * jugadaIa.length)];
    let jugador = valor;

    const player = document.getElementById('player');
    const ia = document.getElementById('ia');

    if (jugador == computer){;
        player.innerText = 'Player: Empate'
        ia.innerText = 'IA: Empate';
        document.getElementById('pantalla').value = 'Empate';
    } else if ((jugador == 'piedra' && computer == 'papel') || (jugador == 'papel' && computer == 'piedra') || (jugador == 'tigera' && computer == 'papel')){
        player.innerText = 'Player: Gana';
        ia.innerText = 'IA: Pierde';
        document.getElementById('pantalla').value= 'Ganaste'
    } else{
        player.innerText = 'Player: Perede';
        ia.innerText = 'IA: Gana';
        document.getElementById('pantalla').value = 'Perdiste'
    }
}
//Evento de clique pro body inteiro:
document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase()) //Transformação do event pra letra minúscula e chamando a função playSound.
})

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value; //Localiza o input e armazena o valor dentro dele
    if (song !== "") { //Validação pra ver se tem conteúdo dentro ou não.
        let songArray = song.split('') //Transforma o valor de uma string em um array.
        playComposition(songArray) //Envia o array pra função PlayComposition
    }
})

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if (audioElement) {
        audioElement.currentTime = 0; //Faz com que a reprodução do áudio seja reiniciada, evitando delays.
        audioElement.play();
    }
    if (keyElement) {
        keyElement.classList.add('active')
        setTimeout(() => {
            keyElement.classList.remove('active') //Remove a classe depois de 300 milisegundos.
        }, 300)
    }

}
function playComposition(songArray) {
    let wait = 0; //Variável criada para incremento de delay entre os sons
    for (let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`) //executa a função playSound depois do delay do "wait"
        }, wait);
        wait += 250;
    }
}

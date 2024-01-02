const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 510);

}

partida = () => {

    const loop = setInterval( () => {
        const pipePosition =  pipe.offsetLeft;
        const marioPosition = window.getComputedStyle(mario).bottom.replace('px' , '');
    
        if( pipePosition <= 120 && pipePosition > 0 && marioPosition < 70 ) {
    
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
    
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
            
            mario.src = "./imagens/game-over.png";
            mario.style.width = '110px';
            mario.style.marginLeft = '50px';
         
            clearInterval(loop);
        }
    
    }, 0);
}

document.addEventListener('keydown' , jump);

window.document.onload = partida();
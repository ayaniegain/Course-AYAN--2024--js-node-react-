function handleOpen() {
    let container = document.querySelector('.bomb-container');
    let envelop = document.querySelector('.envelop');

    var audio = new Audio('./bomb-sound.mp3');
    audio.preload = 'auto';

    setTimeout(() => {
        container.style.visibility = 'visible';
        envelop.style.visibility = 'hidden';

        audio.play().catch(error => {
            console.error('Audio playback failed:', error);
        });

    }, 1000);
}

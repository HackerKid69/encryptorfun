function playQuackSound() {
    const quackSounds = ['quack1.mp3', 'quack2.mp3', 'quack3.mp3', 'quack4.mp3', 'quack5.mp3', 'quack6.mp3'];
    const randomQuack = quackSounds[Math.floor(Math.random() * quackSounds.length)];

    const audio = new Audio(randomQuack);
    audio.play();
}

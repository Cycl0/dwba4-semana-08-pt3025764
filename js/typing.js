document.addEventListener('DOMContentLoaded', function () {
    let options = {
        strings: [
            'Questão 01',
            'Questão 02',
            'Questão 03',
            'Questão 04'
        ],
        typeSpeed: 50,
        backSpeed: 25, // backspacing
        backDelay: 2000, // Delay antes do backspace
        startDelay: 1000, // Delay antes starting da animacao
        loop: true, // Loop
        showCursor: true, // Cursor
        cursorChar: '>', // Charactere para o cursor
        contentType: 'string'
    };

    let typed = new Typed('#typed-output', options);
});

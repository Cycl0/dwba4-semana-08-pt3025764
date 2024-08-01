document.addEventListener('DOMContentLoaded', function() {
    const links = [
        '<a href="/dwba4-semana-08-pt3025764/Questao_01.html" target="_blank">Questão 01</a>',
        '<a href="/dwba4-semana-08-pt3025764//Questao_02.html" target="_blank">Questão 02</a>',
        '<a href="/dwba4-semana-08-pt3025764//Questao_03.html" target="_blank">Questão 03</a>',
        '<a href="/dwba4-semana-08-pt3025764/Questao_04.html" target="_blank">Questão 04</a>'
    ];

    const content = links.map(link => `<div class="dropdown-item">${link}</div>`).join('');

    tippy('#typed-output', {
        content: `<div class="custom-dropdown">${content}</div>`,
        allowHTML: true,
        interactive: true,
        trigger: 'click',
        placement: 'right',
        arrow: false,
        theme: 'custom',
        animation: 'scale',
        duration: 200,
        onShow(instance) {
            const dropdown = instance.popper.querySelector('.custom-dropdown');
            dropdown.style.height = '0px';
            setTimeout(() => {
                dropdown.style.height = dropdown.scrollHeight + 'px';
            }, 0);
        },
        onHide(instance) {
            const dropdown = instance.popper.querySelector('.custom-dropdown');
            dropdown.style.height = '0px';
        }
    });
});
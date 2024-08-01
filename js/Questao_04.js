// Classe Aluno
class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = parseFloat(primeiraNota);
        this.segundaNota = parseFloat(segundaNota);
    }

    // Método para obter o nome completo
    nomeCompleto() {
        return `${this.primeiroNome} ${this.segundoNome}`;
    }

    // Método para calcular a média
    media() {
        const PESO_NOTA_1 = 0.6;
        const PESO_NOTA_2 = 0.4;
        return (this.primeiraNota * PESO_NOTA_1) + (this.segundaNota * PESO_NOTA_2);
    }

    // Método para determinar a situação do aluno
    situacao() {
        return this.media() > 6 ? "Aprovado" : "Reprovado";
    }
}

// Array de 5 objetos Aluno
const alunos = [
    new Aluno("Ana", "Silva", 7, 8.5),
    new Aluno("Bruno", "Santos", 5, 6.5),
    new Aluno("Carlos", "Oliveira", 8, 9),
    new Aluno("Daniela", "Costa", 4.5, 5),
    new Aluno("Eduardo", "Martins", 6, 6.8)
];

// Mostrar o Nome completo, Média e Situação do aluno
function mostrarDadosAlunos(alunos) {
    alunos.forEach(aluno => {
        console.log(`Nome Completo: ${aluno.nomeCompleto()}`);
        console.log(`Média: ${aluno.media().toFixed(2)}`);
        console.log(`Situação: ${aluno.situacao()}`);
        console.log('-------------------------');
    });
}

// Mostra os dados de no mínimo 3 alunos
mostrarDadosAlunos(alunos.slice(0, 3));
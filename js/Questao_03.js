// funcao helper para parsing
function parseValue(value, type) {
    switch (type) {
        case 'number':
            return Number(value);
        case 'integer':
            return parseInt(value, 10);
        case 'float':
            return parseFloat(value);
        case 'boolean':
            return value.toLowerCase() === 'true';
        case 'string':
        default:
            return value;
    }
}

// Prompt e armazenamento do input
function promptAndStoreMessage(key, type, messageMap) {
    const message = prompt(`-------- ${key} --------`);
    if (message !== null) {
        messageMap.set(key, parseValue(message, type));
    }
}

// Messagem final, itera e junta todos os pares mensagem/valor
function displayAllMessages(messageMap) {
    let alertMessage = "_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_\n\n";
    messageMap.forEach((value, key) => {
        alertMessage += `-------- ${key} --------\n${value}\n\n`;
    });
    alertMessage += `-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\n\n`;
    alert(alertMessage);
}

// Função principal
function runner() {
  // Constantes
  const PESO_NOTA_1 = 0.6;
  const PESO_NOTA_2 = 0.4;

  //inicializa os maps
  const alunosMapList = [];

  const numAlunos =  parseInt(prompt("Número de alunos: "));

  // Pra cada aluno
  for (let i = 0; i < numAlunos; ++i) {
    const messageMap = new Map();
    alunosMapList.push(messageMap);

    // Prompts e armazenamento dos inputs
    promptAndStoreMessage('NOME DO ALUNO', 'string', messageMap);
    promptAndStoreMessage('NOTA 1 (INTEIRO)', 'integer', messageMap);
    promptAndStoreMessage('NOTA 2 (FLOAT)', 'float', messageMap);

    // Calcula total
    const notaAlunoInt = messageMap.get('NOTA 1 (INTEIRO)');
    const notaAlunoFloat = messageMap.get('NOTA 2 (FLOAT)');
    const total = (notaAlunoInt * PESO_NOTA_1) + (notaAlunoFloat * PESO_NOTA_2);

    // Armazena nota total no map
    messageMap.set('NOTA TOTAL', total.toFixed(2));
  }

  for (let messageMap of alunosMapList) {
    // Mostra mensagem final
    displayAllMessages(messageMap);
  }
}

// Execução
runner();

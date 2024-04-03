// Perguntando a idade
let idadeStr = prompt('Qual a sua idade?');
let idade = parseInt(idadeStr);

// Verificando se é adulto ou idoso
if (!isNaN(idade)) {
    if (idade >= 60) {
        alert ('Aguarde na fila de prioridade');
    } else {
        alert ('Aguarde na fila normal');
    }
} else {
    alert('Por favor, insira um número válido para a idade.');
}
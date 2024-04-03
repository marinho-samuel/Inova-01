// Solicitando o nome das visitas
let nome = prompt('Qual o seu nome?');

// Verificando se o nome foi fornecido
if (nome.trim() !== '') {
    // Imprimindo uma mensagem de boas-vindas com o nome fornecido
    alert(`Olá, ${nome}, seja bem-vindo(a) à nossa empresa.`);
} else {
    // Caso o nome não seja fornecido
    alert('Desculpe, nenhum nome fornecido!');
}
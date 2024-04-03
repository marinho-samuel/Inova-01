// Coletando o ano de nascimento
let anoDeNascimento = parseInt(prompt('Informe o ano de nascimento:'));
let anoAtual = new Date().getFullYear();

// Realizando o cálculo
let idade = anoAtual - anoDeNascimento;

// Retornando a idade da pessoa
alert(`A idade do cliente é de ${idade} anos.`);
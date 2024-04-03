// Recebendo as três notas finais
let n1 = parseFloat(prompt ('Qual a primeira nota?'));
let n2 = parseFloat(prompt ('Qual a segunda nota?'));
let n3 = parseFloat(prompt ('Qual a terceira nota?'));

// Calculando a média
let media = (n1 + n2 + n3) / 3;

// Arredondando a média para duas casas decimais
media = parseFloat(media.toFixed(2)); // Convertendo a string de volta para um número

if (media >= 7 && media <= 10) {
    alert(`Aprovado com média ${media}.`);
} else if (media >= 0 && media < 7){
    alert(`Reprovado com média ${media}.`);
} else {
    alert ('Digite notas válidas');
}
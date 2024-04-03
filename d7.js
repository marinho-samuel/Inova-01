// Solicitando dois números
let n1 = parseFloat(prompt('Digite o primeiro número: '));
let n2 = parseFloat(prompt('Digite o segundo número: '));

// Verificando se os números são válidos
if (isNaN(n1) || isNaN(n2)) {
    alert('Por favor, insira números válidos.');
} else {
    // Verificando se o primeiro número é divisível pelo segundo
    if (Number.isInteger(n1 / n2)) {
        alert('O primeiro número é divisível pelo segundo.');
    } else {
        alert('O primeiro número não é divisível pelo segundo.');
    }
}

/* Essa foi minha primeira tentativa, mas não incluia casos em que o resultado da divisão era um número inteiro quando o resultado era obtido através de números float. Ex: 9.3/3.1 
// Verificando se os números são válidos
if (isNaN(n1) || isNaN(n2)) {
    alert('Por favor, insira números válidos.');
} else {
    // Verificando se o primeiro número é divisível pelo segundo
    if (n1 % n2 === 0) {
        alert('O primeiro número é divisível pelo segundo.');
    } else {
        alert('O primeiro número não é divisível pelo segundo.');
    }
}
*/
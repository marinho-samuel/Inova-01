# Resolução do 1° desafio de lógica de programação - JavaScript

A lógica de programação é uma abordagem para estruturar ideias com raciocínio lógico humano de forma que os computadores possam entender. Simplificando, é como seguir uma receita para fazer um bolo. Assim como você pesquisa uma receita com passo a passo para garantir um bolo delicioso, na programação, os desenvolvedores utilizam "receitas" chamadas algoritmos para garantir que as máquinas entendam exatamente o que precisa ser feito. Em suma, a lógica de programação é a maneira como você escreve instruções para uma máquina, organizando-as de forma coerente para alcançar um objetivo específico. É possível compará-la a uma linguagem comum, em que um conjunto de palavras com significados específicos permite ao computador assimilar cada comando e função para executá-los. Nesse sentido, para melhor assimilar as aulas assistidas na plataforma Alura, abaixo foi proposto o desafio para exercitar os conteúdos estudados.

[]()

## Questões e respostas

1) O Supervisor do Sando lhe solicitou que crie um programa que exiba uma mensagem personalizada para todas as pessoas que visitam a empresa. O programa deve solicitar o nome das visitas e imprimir uma mensagem de boas-vindas, da seguinte forma: “Olá, [nome], seja bem-vindo(a) à nossa empresa”. Caso o nome não seja fornecido, imprima a seguinte mensagem: “Desculpe, nenhum nome fornecido!”
```js
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
```

2) Suponha que você trabalha em um centro de atendimento e foi solicitado um programa que peça ao usuário que informe a sua idade e, em seguida, verificar se ele é um adulto ou idoso, para gerar a prioridade em atendimento. Crie um programa que se a pessoas tiver 60 anos ou mais imprima na tela “Aguarde na fila de prioridade”, caso contrário “Aguarde na fila normal”.

```js
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
```

3) A professora Sandra pretende automatizar o resultado da nota de um aluno de ensino médio e solicitou-lhe que crie um programa que receba três notas finais e que apareça para ela “Aprovado”, se a média estiver entre 7 e 10.  Caso a média for menor que 7 e maior ou igual a 0, o programa deve imprimir na tela “Reprovado”.

```js
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
```

4) Imagine que o seu irmão esteja aprendendo programação e o professor lhe solicitou um algoritmo que imprima os números de 1 a 10. Como seria a implementação desse algoritmo para que ele possa apresentá-lo ao seu professor?

```js
// Imprimindo os números de 1 a 10 
for (let i = 1; i <= 10; i++) {
    console.log(i); 
}
```

5) Suponha que o seu primo tenha interesse em produzir um algoritmo que imprima os números de 20 até 1 em ordem decrescente e pediu ajuda a você. Como você implementaria esse algoritmo?

```js
// Imprimindo os números de 20 a 1 
for (let i = 20; i >= 1; i--) {
    console.log(i); 
}
```

6) O Daniel está aprendendo a programar com seu pai, que é engenheiro de software. Um dia, seu pai pediu que ele criasse um programa simples: receber dois números do usuário e retornar o resultado da multiplicação deles. Para ajudar o Daniel, como seria a implementação desse algoritmo?

```js
// Recebendo dois números do usuário 
let n1 = parseFloat(prompt ('Digite o primeiro número'));
let n2 = parseFloat(prompt ('Digite o segundo número'));

// Retornando o resultado da multiplicação
let multiplicacao = n1 * n2;
alert (`O resultado da multiplicao é ${multiplicacao}`);
```

7) Escreva um programa que solicita dois números e verifica se o primeiro número é divisível por segundo. Assim sendo, é esperada na saída a impressão da seguinte frase: “O primeiro número é divisível por segundo” Caso contrário, o programa deve exibir “O primeiro número não é divisível pelo segundo” .

```js
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
```

8) Um contador pretende automatizar a folha salarial dos seus funcionários para economizar mais tempo. Para isso, solicitou a você um um programa que some todos os salários em uma lista. Logo, implemente um algoritmo que receba do contador uma lista de salários e calcule a soma deles. Posteriormente ao cálculo, o algoritmo deve imprimir o salário total da folha de pagamento.

```js
// Somando todos os salários em uma lista
function somarSalarios(listaDeSalarios) {
    let resultadoDaSoma = 0;
    for (let salario of listaDeSalarios){
        resultadoDaSoma += salario;
    }
    return resultadoDaSoma;
}

// Lista de salários fornecida pelo contador
let listaDeSalarios = [2000, 5000, 10000, 10000, 15000];

// Realizando o cálculo
let resultadoDaSoma = somarSalarios(listaDeSalarios);

// Imprimindo o salário total da folha de pagamento
console.log(`O salário total da folha de pagamento é de ${resultadoDaSoma} reais.`);
```

9) A Clara criou um formulário para recolher as informações pessoais de seu cliente e deseja que a idade apareça na tela assim ele informe o ano de nascimento. Então, ela o solicitou a elaboração de um algoritmo que retorne a idade da pessoa, baseada no ano de nascimento fornecido. Crie um algoritmo que execute essa tarefa.

```js
// Coletando o ano de nascimento
let anoDeNascimento = parseInt(prompt('Informe o ano de nascimento:'));
let anoAtual = new Date().getFullYear();

// Realizando o cálculo
let idade = anoAtual - anoDeNascimento;

// Retornando a idade da pessoa
alert(`A idade do cliente é de ${idade} anos.`);
```

10)  A Alura pretende aumentar o salário dos seus colaboradores e, para isso, propus a você a criação de um algoritmo que acrescente:
·         10%, se o salário for menor ou igual a R$ 2000;
·         5%, se for maior a R$ 5000 e menor que R$ 10000;
·         2%, se for maior  que R$10000 e menor que R$15000.
Após a operação, o algoritmo deve imprimir na tela o valor original antes do aumento e o valor com aumento.

```js
// Criando a função que cálcula o aumento de salário
function aumentoDeSalario(salario) {
    let novoSalario = 0;
    if (salario <= 2000) {
        novoSalario = salario * 1.1;
    }else if (salario > 5000 && salario < 10000){
        novoSalario = salario * 1.05;
    }else if (salario > 10000 && salario < 15000){
        novoSalario = salario * 1.02;
    }else{
        novoSalario = salario;
    } 
    console.log (`O valor original antes do aumento é de ${salario.toFixed(2)} reais.`);
    console.log (`O valor do salário depois do aumento é de ${novoSalario.toFixed(2)} reais.`);
}

//Exemplos
aumentoDeSalario(1500); //Menor que 2000
aumentoDeSalario(2000); //Igual a 2000
aumentoDeSalario(5001); //Maior que 5000
aumentoDeSalario(9999); //Menor que 10000
aumentoDeSalario(10001); //Maior que 10000
aumentoDeSalario(15001); //Maior que 15000
``` 

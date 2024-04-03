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
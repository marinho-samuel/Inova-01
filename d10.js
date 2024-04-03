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
const leia = require("readline-sync");

let somaPrincipal = 0, somaSecundaria = 0;

//Criando matriz
let matrizNumeros = new Array(3);

for (let IL = 0; IL < matrizNumeros.length; IL++){
    matrizNumeros[IL] = Array(3);
}

//Apresentação
console.log("\n ---  Leitor de Matriz  ---");
console.log("\nBom dia! Vamos começar?");

//IL --> Indice linha ; IC --> Indice coluna

//Personalizando matriz
for (let IL = 0; IL < matrizNumeros.length; IL++){
  
    for (let IC = 0; IC < matrizNumeros.length; IC++){
      
      matrizNumeros[IL][IC] = leia.questionInt(`Digite o numero do elemento [${IL}][${IC}]: `, { limitMessage: '\nErro, por favor digite apenas numeros' });
    }
}

//Exibindo matriz
console.log("\nEssa é a matriz completa: \n");
console.table(matrizNumeros);

//Exibindo diagonal principal --> Somando seus valores --> Exibindo soma
console.log("\nEsses são os numero da diagonal principal: ")
for (IL = 0; IL < matrizNumeros.length; IL++) {
    for (IC = 0; IC < matrizNumeros.length; IC++) {
        if (IL == IC) {
            console.log(`${matrizNumeros[IL][IC]}`)
            somaPrincipal += matrizNumeros[IL][IC];
        }
    }
}
console.log(`\nA soma dos valores na diagonal principal é: ${somaPrincipal}`);

//Exibindo diagonal secundaria --> Somando seus valores --> Exibindo soma
console.log("\nEsses são os numero da diagonal secundaria: ")
for (IL = 0; IL < matrizNumeros.length; IL++) {
    for (IC = 0; IC < matrizNumeros.length; IC++) {
        if (IL + IC == matrizNumeros.length - 1) {
            console.log(`${matrizNumeros[IL][IC]}`)
            somaSecundaria += matrizNumeros[IL][IC];
        }
    }
}
console.log(`\nA soma dos valores na diagonal secundaria é: ${somaSecundaria}`);

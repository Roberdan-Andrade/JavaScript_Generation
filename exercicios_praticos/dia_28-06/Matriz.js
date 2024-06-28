const leia = require("readline-sync");

let matrizNumeros = [[1, 2, 3], [4, 5, 6,], [7, 8, 9]];
let somaPrincipal = 0, somaSecundaria = 0;

//Apresentação
console.log("\n ---  Leitor de Matriz  ---");
console.log("\nBom dia! Vamos começar?");

//Criando matriz


//Personalizando matriz


//Exibindo matriz
console.log("\nEssa é a matriz completa: \n");
console.table(matrizNumeros);

//IL --> Indice linha ; IC --> Indice coluna

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

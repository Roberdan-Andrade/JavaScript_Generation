const leia = require("readline-sync");

let numeroDigitado;
let numeros = [2,5,1,3,4,9,7,8,10,6];
let achou = false;

//Apresentação
console.log("\n ---  Leitor de Vetor  ---");
console.log("\nBom dia! Vamos começar? \n");

//Lendo numero digitado
numeroDigitado = leia.questionInt("Qual numero estamos procurando? ", { limitMessage: '\nErro, por favor digite apenas numeros' });

//Checando numero digitado com numeros do vetor --> Retornando posição --> Muda "achou" para "true"
for(i=0; i<numeros.length; i++){
    if(numeroDigitado == numeros[i]){
        console.log(`O numero digitado\(${numeroDigitado}\) esta na possição de index ${i} e é o ${i+1}º numero do vetor`);
        achou = true;
    }
}

//Se não tiver achado, informa usuario
if(!achou){
    console.log(`O numero digitado\(${numeroDigitado}\) não foi encontrado`);
}

//finalização
console.log("\nFim do programa");

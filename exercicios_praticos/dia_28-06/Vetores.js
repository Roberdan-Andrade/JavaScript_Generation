const leia = require("readline-sync");

let numeroDigitado;
let numero;
let numeros = [];
let achou = false;

//Apresentação
console.log("\n ---  Leitor de Vetor  ---");
console.log("\nBom dia! Vamos começar? \n");

// Ler o tamanho do vetor
const tamanhoVetor = leia.questionInt("Quantos numeros tera o vetor? ", { limitMessage: '\nErro, por favor digite apenas numeros' });

// Ler cada número do vetor e confirma se ja não foi posto antes
for (i = 0; i < tamanhoVetor; i++) {
    do {
        numero = leia.questionInt(`Digite o numero na posicao ${i}: `, { limitMessage: '\nErro, por favor digite apenas numeros' });
        if (numeros.includes(numero)) {
            console.log(`Numero ${numero} já foi inserido no vetor. Por favor, insira um numero diferente.`);
        }
    } while (numeros.includes(numero)); // Repete até que o número seja único
    numeros.push(numero);
}

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

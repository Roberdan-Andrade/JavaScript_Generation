const leia = require("readline-sync");

let valor, tipo, polaridade;

//Apresentação
console.log("\n---  Verificar Tipo e \"Polaridade\"  ---");
console.log("\nBom dia! Vamos começar? \n");

//Lendo valor
valor = leia.questionInt("Insira o valor a ser verificado: " ,{limitMessage: '\nErro, por favor digite apenas numeros'});

//Testando tipo
if(valor %2 == 0){
    tipo = "Par"
} else {
    tipo = "Ímpar"
}

//Testando polaridade
if(valor >= 0){
    polaridade = "Positivo"
} else{
    polaridade = "Negativo"
}

//Retorno e finalização
if(tipo == "Par" && polaridade == "Positivo"){
    //+2
    console.log(`O numero ${valor} é ${tipo} e ${polaridade}`)
} else if(tipo == "Par" && polaridade == "Negativo"){
    //-2
    console.log(`O numero ${valor} é ${tipo} e ${polaridade}`)
} else if(tipo == "Ímpar" && polaridade == "Positivo"){
    //+1
    console.log(`O numero ${valor} é ${tipo} e ${polaridade}`)
} else if(tipo == "Ímpar" && polaridade == "Negativo"){
    //-1
    console.log(`O numero ${valor} é ${tipo} e ${polaridade}`)
}

console.log("\nFim do programa");

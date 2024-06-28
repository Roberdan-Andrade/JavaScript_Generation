//Vetor de string
let vetorstring = [
  "Boxer",
  "Pastor Alemão",
  "Pinscher",
  "Husky Siberiano",
  "Corgi"
];

//Exibe tabela
console.table(vetorstring);

//"Exibe tabela"
for (i = 0; i < vetorstring.length; i++) {
  console.log(`Posição [${i}] = ${vetorstring[i]}`)
}



//Função para auxiliar a ordenação dos numeros
function compareAsc(a, b) {
  return a - b;
}

//Vetor de numero
let numeros = [3, 7, 4, 7, 2, 42, 99, 29, 9, 1, 5]

//Exibe tabela
console.table(numeros);

//Ordena numeros
console.table(numeros.sort(compareAsc));

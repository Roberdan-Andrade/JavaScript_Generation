const leia = require("readline-sync");

let codigoProduto, quantidade, valorFinal;
let cliente, confirma;

//Apresentação
console.log("\n   ---  Lojinha  ---");
console.log("\nBem-vindo! Vamos comprar? \n");

//Le nome e apresenta cardapio
cliente = leia.question("Primeiro digite seu nome, ele sera usado na hora da retirada do pedido: ",{limitMessage: '\nErro, por favor digite apenas letras'});

console.log("\nNome registrado, vamos ver o cardapio agora!")

console.log("\n  Codigo --- Produtos --- Preço")
console.log("\n 1 -- Cachorro Quente -- R$ 10.00 ");
console.log(" 2 -- X-Salada        -- R$ 15.00  ");
console.log(" 3 -- X-Bacon         -- R$ 18.00  ");
console.log(" 4 -- Bauru           -- R$ 12.00 ");
console.log(" 5 -- Refrigerante    -- R$ 8.00 ");
console.log(" 6 -- Suco de laranja -- R$ 13.00 ");

//Le codigo e quantidade
codigoProduto = leia.questionInt("\nPor favor, informe o codigo do produto que deseja comprar: " ,{limitMessage: '\nErro, por favor digite um codigo valido!'});
quantidade = leia.questionInt("Qual a quantidade desse produto que voce quer comprar? ",{limitMessage: '\nErro, por favor digite um codigo valido!'});

//Calcula preço --> informa pedido --> confirma pedido --> finaliza
switch(codigoProduto){
    case 1:
        valorFinal = quantidade * 10.00;
        console.log(`\n${cliente}, voce esta comprando ${quantidade} Cachorro Quente(s), no valor total de R$${valorFinal}.00`);
        confirma = leia.question("Voce confirma a compra? responda com \"S\" para sim ou \"N\" para nao \nS/N: ")
        if(confirma.toUpperCase() == "S"){
            console.log("\nCompra confirmada! bom apetite e volte sempre!")
        } else if(confirma.toUpperCase() == "N") {
            console.log("\nCompra negada, esperamos poder atende-lo melhor no futuro, volte sempre!")
        } else {
            console.log("\nCompra negada, tenha certeza de digitar \"S\" ou \"N\"")
        }
        break;
    case 2:
        valorFinal = quantidade * 15.00;
        console.log(`\n${cliente}, voce esta comprando ${quantidade} X-Salada(s), no valor total de R$${valorFinal}.00`);
        confirma = leia.question("Voce confirma a compra? responda com \"S\" para sim ou \"N\" para nao \nS/N: ")
        if(confirma.toUpperCase() == "S"){
            console.log("\nCompra confirmada! bom apetite e volte sempre!")
        } else if(confirma.toUpperCase() == "N") {
            console.log("\nCompra negada, esperamos poder atende-lo melhor no futuro, volte sempre!")
        } else {
            console.log("\nCompra negada, tenha certeza de digitar \"S\" ou \"N\"")
        }
        break;

    case 3:
        valorFinal = quantidade * 18.00;
        console.log(`\n${cliente}, voce esta comprando ${quantidade} X-Bacon(s), no valor total de R$${valorFinal}.00`);
        confirma = leia.question("Voce confirma a compra? responda com \"S\" para sim ou \"N\" para nao \nS/N: ")
        if(confirma.toUpperCase() == "S"){
            console.log("\nCompra confirmada! bom apetite e volte sempre!")
        } else if(confirma.toUpperCase() == "N") {
            console.log("\nCompra negada, esperamos poder atende-lo melhor no futuro, volte sempre!")
        } else {
            console.log("\nCompra negada, tenha certeza de digitar \"S\" ou \"N\"")
        }
        break;

    case 4:
        valorFinal = quantidade * 12.00;
        console.log(`\n${cliente}, voce esta comprando ${quantidade} Bauru(s), no valor total de R$${valorFinal}.00`);
        confirma = leia.question("Voce confirma a compra? responda com \"S\" para sim ou \"N\" para nao \nS/N: ")
        if(confirma.toUpperCase() == "S"){
            console.log("\nCompra confirmada! bom apetite e volte sempre!")
        } else if(confirma.toUpperCase() == "N") {
            console.log("\nCompra negada, esperamos poder atende-lo melhor no futuro, volte sempre!")
        } else {
            console.log("\nCompra negada, tenha certeza de digitar \"S\" ou \"N\"")
        }
        break;

    case 5:
        valorFinal = quantidade * 8.00;
        console.log(`\n${cliente}, voce esta comprando ${quantidade} Refrigerante(s), no valor total de R$${valorFinal}.00`);
        confirma = leia.question("Voce confirma a compra? responda com \"S\" para sim ou \"N\" para nao \nS/N: ")
        if(confirma.toUpperCase() == "S"){
            console.log("\nCompra confirmada! bom apetite e volte sempre!")
        } else if(confirma.toUpperCase() == "N") {
            console.log("\nCompra negada, esperamos poder atende-lo melhor no futuro, volte sempre!")
        } else {
            console.log("\nCompra negada, tenha certeza de digitar \"S\" ou \"N\"")
        }
        break;

    case 6:
        valorFinal = quantidade * 13.00;
        console.log(`\n${cliente}, voce esta comprando ${quantidade} Suco de laranja(s), no valor total de R$${valorFinal}.00`);
        confirma = leia.question("Voce confirma a compra? responda com \"S\" para sim ou \"N\" para nao \nS/N: ")
        if(confirma.toUpperCase() == "S"){
            console.log("\nCompra confirmada! bom apetite e volte sempre!")
        } else if(confirma.toUpperCase() == "N") {
            console.log("\nCompra negada, esperamos poder atende-lo melhor no futuro, volte sempre!")
        } else {
            console.log("\nCompra negada, tenha certeza de digitar \"S\" ou \"N\"")
        }
        break;
    default:
        console.log("\nDigite um codigo de produto valido!");
}

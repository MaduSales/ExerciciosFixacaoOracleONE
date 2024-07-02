// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

let nome = prompt("Qual é seu nome?");
let identidade = prompt("Você usa o pronome ele, ela ou elu?");

if (identidade == "ele"){
    console.log(`Seja bem-vindo ${nome}!`);
} else if (identidade == "ela"){
    console.log(`Seja bem-vinda ${nome}!`);
} else {
    console.log(`Seja bem-vinde ${nome}!`);
}
// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

let idade = prompt('Insira a sua idade');

let maiorMenor = idade >= 18 ? 'Você é maior de idade' : 'Você é menor de idade';

console.log(`${maiorMenor}`);
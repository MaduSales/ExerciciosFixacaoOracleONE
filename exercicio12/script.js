// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

let numero = parseInt(Math.random() * 10) + 1; //O Math.random() gera um número aleatório entre 0 (inclusive) e 1 (exclusivo). Quando você multiplica por 10, o resultado estará entre 0 (inclusive) e 10 (exclusivo). Ao usar o parseInt(), você está arredondando para o inteiro mais próximo, o que pode resultar em números de 0 a 9. Por isso, precisamos somar com 1 para então ter 10 números.

console.log(numero);

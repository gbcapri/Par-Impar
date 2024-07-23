const prompt = require("prompt-sync")();
const modulo = require("./modulo.js");

let num;

do {
    num = prompt("Digite um número: ").trim();
} while (!modulo.verificaNum(num));

let somaAlgarismos = modulo.somaAlgarismos(num);
modulo.verificaPar(somaAlgarismos);

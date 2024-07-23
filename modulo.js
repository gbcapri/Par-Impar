function verificaNum(num) {
    if (isNaN(num)) {
        console.log("ERRO. Valor digitado não é um número.");
        return false;
    }
    return true;
}

function somaAlgarismos(num) {
    num = num.split("");
    let soma = 0;
    for (let c = 0; c < num.length; c++) {
        soma += Number(num[c]);
    }
    return soma;
}

function verificaPar(soma) {
    if (soma % 2 === 0) {
        console.log("O número é par.");
    } else {
        console.log("O número é ímpar.");
    }
}

module.exports = {
    verificaNum,
    somaAlgarismos,
    verificaPar
}
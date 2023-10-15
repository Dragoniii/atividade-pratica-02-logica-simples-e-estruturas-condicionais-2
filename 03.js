//3. Crie um programa que peça um número e verifique se ele é positivo, negativo ou zero.

let numero = parseInt(prompt(`Digite um número.`));

if (isNaN(numero)) {
    alert(`O valor digitado não é um número, tente novamente.`);
} else if (numero === 0) {
    alert(`O valor digitado é zero.`);
} else if (numero < 0) {
    alert(`O valor digitado é negativo.`);
} else if (numero > 0) {
    alert(`O valor digitado é positivo.`);
}
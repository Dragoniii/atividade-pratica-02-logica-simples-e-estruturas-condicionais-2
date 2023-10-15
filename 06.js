//6. Escreva um algoritmo que solicite 2 números e uma operação matemática. O algoritmo deve realizar o cálculo com os 2 números digitados conforme a operação informada.¸

const numero0 = parseInt(prompt(`Digite um número.`));
const numero1 = parseInt(prompt(`Digite um número.`));
const operacao = prompt(`Digite o símbolo de uma operação matemática.`);
let conta = undefined;

switch (operacao) {
  case "*":
    alert(
      `O valor da multiplicação entre ${numero0} e ${numero1} é ${
        numero0 * numero1
      }`
    );
    break;
  case "+":
    alert(
      `O valor da soma entre ${numero0} e ${numero1} é ${
        numero0 + numero1
      }`
    );
    break;
  case "-":
    alert(
      `O valor da subtração entre ${numero0} e ${numero1} é ${
        numero0 - numero1
      }`
    );
    break;
  case "/":
    alert(
      `O valor da divizão entre ${numero0} e ${numero1} é ${
        numero0 / numero1
      }`
    );
    break;
  default:
    alert(`Valor inválido.`);
}

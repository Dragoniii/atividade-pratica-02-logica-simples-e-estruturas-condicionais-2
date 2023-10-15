//2. Crie um programa que peça um número de 1 a 7 e exiba o dia da semana correspondente utilizando a estrutura condicional switch.

let dia = prompt(`Utilize um valor de 1 a 7 para descobrir o dia da semana.`);

switch (dia) {
  case "1":
    alert(`Hoje é domingo.`);
    break;
  case "2":
    alert(`Hoje é segunda-feira.`);
    break;
  case "3":
    alert(`Hoje é terça-feira.`);
    break;
  case "4":
    alert(`Hoje é quarta-feira.`);
    break;
  case "5":
    alert(`Hoje é quinta-feira.`);
    break;
  case "6":
    alert(`Hoje é sexta-feira.`);
    break;
  case "7":
    alert(`Hoje é sábado.`);
    break;
  default:
    alert(`Valor inválido.`);
}

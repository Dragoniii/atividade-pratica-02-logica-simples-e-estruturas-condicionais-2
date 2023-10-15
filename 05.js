//5. Desenvolva um algoritmo que faça o cálculo do índice de massa corporal de uma pessoa. Esse algoritmo deve solicitar ao usuário que digite sua altura, em seguida solicitar que digite seu peso e que lhe exiba o status. O status vai variar da seguinte forma:
//a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser “Você está abaixo da faixa de peso ideal”;
//b. Se o IMC estiver acima de 24,99 o status a ser mostrado será “Você está acima da faixa de peso ideal”;
//c. Se o IMC for igual ou maior que 18,5 e igual ou menor que 24,99, o status a ser mostrado será “Você está dentro da faixa de peso ideal”.

const altura = parseInt(prompt(`Digite sua altura em centimetros.`)) / 100;
const peso = parseInt(prompt(`Digite o seu peso em quilogramas.`));
const imc = peso / (altura * altura);

if (imc < 18.5) {
  alert(`
Seu peso é ${peso}.
Sua altura é ${altura}.
Seu IMC é ${imc.toFixed(2)}.
Você está abaixo da faixa de peso ideal.
`);
} else if (imc >= 25) {
  alert(`
Seu peso é ${peso}.
Sua altura é ${altura}.
Seu IMC é ${imc.toFixed(2)}.
Você está acima da faixa de peso ideal.
`);
} else {
  alert(`
Seu peso é ${peso}.
Sua altura é ${altura}.
Seu IMC é ${imc.toFixed(2)}.
Você está dentro da faixa de peso ideal.
`);
}

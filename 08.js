//Faça um algoritmo que leia a idade e peso de um atleta e imprima a sua categoria, de acordo com a seguinte tabela:
//Idade Peso Categoria
// Até 12 anos - Infantil
// 13 a 16 anos Até 40kg Juvenil leve / Acima de 40kg Juvenil pesado
// 17 a 24 anos Até 45kg Sênior leve / Acima de 45kg até 60kg Sênior médio / Acima de 60kg Sênior pesado
// Acima de 24 anos - Veterano

const idade = parseInt(prompt(`Digite a idade.`));
const peso = parseInt(prompt(`Digite o peso.`));

if (idade <= 12 && peso > 0) {
  alert(`Categoria Infantil.`);
} else if (idade > 12 && idade <= 16 && peso <= 40) {
  alert(`Categoria Juvenil Leve.`);
} else if (idade > 12 && idade <= 16 && peso > 40) {
  alert(`Categoria Juvenil Pesado.`);
} else if (idade > 16 && idade <= 24 && peso <= 45) {
  alert(`Categoria Sênior Leve.`);
} else if (idade > 16 && idade <= 24 && peso > 45 && peso <= 60) {
  alert(`Categoria Sênior Médio.`);
} else if (idade > 16 && idade <= 24 && peso >= 61) {
  alert(`Categoria Sênior Pesado.`);
} else if (idade > 24 && peso > 0) {
  alert(`Categoria Veterano.`);
}

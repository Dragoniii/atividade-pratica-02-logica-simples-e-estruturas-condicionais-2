//4. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro,calcular e escrever o custo final ao consumidor.

let valorDeFabrica = parseInt(prompt(`Digite o valor de fábrica.`));
let valorTotal = valorDeFabrica / (1 - 0.28 - 0.45); 
let valorImposto = valorTotal * 0.45;
let valorDistribuidor = valorTotal * 0.28;

alert(`
Valor de Fábrica = R$${valorDeFabrica}.
Valor Total = R$${valorTotal.toFixed(2)}.
Valor do Imposto = R$${valorImposto.toFixed(2)}.
Valor do Distribuidor = R$${valorDistribuidor.toFixed(2)}.
`);

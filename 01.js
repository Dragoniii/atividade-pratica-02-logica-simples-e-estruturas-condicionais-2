//Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit.

let celsius = undefined;
let fahrenheit = undefined;
let temperatura = prompt(
  `Utilize "C" para temperatura em celsius ou "F" para temperatura em fahrenheit.`
);

temperatura = temperatura.toUpperCase()

if (temperatura === "C") {
  celsius = prompt(`Qual a temperatura em celsius?`);
} else if (temperatura === "F") {
  fahrenheit = prompt(`Qual a temperatura em fahrenheit?`);
} else {
  alert(`Recarregue a página.`);
}

if (temperatura === "F") {
  celsius = ((fahrenheit-32)/1.8);
} else if (temperatura === "C") {
  fahrenheit = ((celsius*1.8)-(-32));
}

celsius = Math.round(celsius);       
fahrenheit = Math.round(fahrenheit);

document.write(`A temperatura em celsius é ${celsius}.`); 
document.write(`<br>`)
document.write(`A temperatura em fahrenheit é ${fahrenheit}.`);
document.write(`<br><br>`)
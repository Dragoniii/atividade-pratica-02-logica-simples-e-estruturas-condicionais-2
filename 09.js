//9. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada km acima da velocidade permitida.

let velocidade = Math.random() * 200;
velocidade = Math.round(velocidade);  

if (velocidade <= 80){
    alert(`A velocidade de ${velocidade}km/h está dentro do limite.`)
} else if (velocidade > 80){
    alert(`A velocidade de ${velocidade}km/h está acima do valor permitido, a multa é de R$${5*(velocidade-80)}.`)
}
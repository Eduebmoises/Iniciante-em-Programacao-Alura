function substituiOtexto(tag, txt){
let oTexto = document.querySelector(tag);
oTexto.innerHTML = txt;

}

//1.Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, 
// em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
// IMC = peso / (altura x altura).
function calculoIMC() {
    let peso = Number(prompt('Insira seu peso (kg):'));
    let altura = Number(prompt('Insira sua altura (m):'));

    if (peso <= 0 || altura <= 0) {
        alert("Peso e altura devem ser valores positivos.");
        return;
    }

    let imc = peso / (altura * altura); // fórmula
    return imc.toFixed(2);
}

function nomeNaTela(tag, txt) {
    let imcFrase = document.querySelector(tag); // seleção do elemento
    if (imcFrase) {
        imcFrase.innerHTML = txt; // texto inserido
    } else {
        console.error("Elemento não encontrado:", tag);
    }
}

// Obtém o IMC e exibe na tela
let imcResultado = calculoIMC();
if (imcResultado) {
    let msgImc = `Seu IMC é ${imcResultado}`;
    nomeNaTela('h2', msgImc);
}

//2.Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function fatorial(n) {
    // Verifica se o número é negativo e gera um erro se for
    if (n < 0) {
        throw new Error("O fatorial não é definido para números negativos.");
    }
    
    // Se n for 0 ou 1, retorna 1
    if (n == 0 || n == 1) {
        return 1;
    }
    // Caso contrário, retorna n multiplicado pelo fatorial de (n - 1)
    return n * fatorial(n - 1);
}
let numero = prompt('digite um número para ser calculado o seu fatorial')
alert (`  o fatorial de ${numero} é ${fatorial(numero)}`);
//3.Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna 
// o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
let conversãoDolarParaReais;

function conversão (){
    //O usuário insere um valor no prompt
    
    let quantidadeDolares = Number(prompt('digite a quantidade de dolares'));
    let dolar = Number(4.80);
    conversãoDolarParaReais = dolar *quantidadeDolares;}
    if (quantidadeDolares > 0){
        alert('h1',`A quantidade de ${quantidadeDolares} dolares em reais é ${conversãoDolarParaReais} reais`); }
    //caso o valor seja maior que 0 dolares é executada a função
    else {conversão();}
    
    
        //Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.


//1.Faça o download de outro projeto clicando 
// neste link e abra no Visual Studio Code.
//ok
//2.Altere o conteúdo da tag h1 com document.querySelector e 
// atribua o seguinte texto: Hora do Desafio.
let titulo1 = document.querySelector('h1');
titulo1.innerHTML = 'Hora do Desafio.';

function  botãoConsole(){
    console.log('clicks no botão');

}function botãoAlert(){
    console.log('eu amo JS');

}function botãoPrompt(){
    let cidade = prompt('fale um nome de uma cidade Brasileira');
    alert (`fui a ${cidade} lembrei de você`);

}function botãoSoma(){
    alert ('vou pedir dois números e então somalos e falar o resultado');
let num1 = Number(prompt('digite o primeiro número'));
let num2 = Number(prompt('digite o primeiro número'));
let soma = num1 + num2;
alert(`o resultado da soma dos dois número digitados é igual a: ${soma}`);
console.log(soma)
}
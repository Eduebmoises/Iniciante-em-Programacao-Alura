//Criar uma função que exibe "Olá, mundo!" no console.
function nomeConsole(){
   return nome = 'Olá, mundo!';
}
console.log(nomeConsole());

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function consoleBoasVindas(){
    let nomepessoa = prompt('digite seu nome');
    return console.log(`Olá, ${nomepessoa}`);
    
 }
 console.log(consoleBoasVindas());

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function dobroDoNumero (){
    let numero = prompt('digite um número!');
    return parseInt (numero *2)
}console.log(dobroDoNumero());

//Criar uma função que recebe três números como parâmetros e retorna a média deles.

function media (){
                    alert('Vamos tirar a média entre tres números');
      let num1 = Number(prompt('digite o primeiro número'));
    let num2 = Number(prompt('digite o segundo número'));
  let num3 = Number(prompt('digite o terceiro número'));
  mediaNumerica = ((num1 + num2 + num3)/3 )
                    mediaNumerica = Number (mediaNumerica)
                    return (mediaNumerica);
} console.log (media());

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

//Criar uma função que recebe um número como parâmetro e retorna o resultado 
// da multiplicação desse número por ele mesmo
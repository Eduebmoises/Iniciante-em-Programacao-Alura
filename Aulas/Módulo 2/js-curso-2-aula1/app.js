// Função que gera um número aleatório entre 1 e 10
function gerarNumeroSecreto() {
    return parseInt(Math.random() * 10 + 1);
}


// Armazena o número secreto gerado
let numeroSecreto = gerarNumeroSecreto();
console.log(numeroSecreto); // Exibe o número secreto no console (para testes)

let palavrasTentativas;
let tentativas =1;

// Função para manipular o texto HTML, alterando o conteúdo de um elemento específico
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag); // Seleciona o elemento pelo nome da tag
    campo.innerHTML = texto; // Insere o novo texto no elemento selecionado
}

// Exibe o título e a mensagem inicial na tela
function exibirMsgmInicial (){
exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

//Chama a Exibição da msgm inicial
exibirMsgmInicial();

// Função que verifica se o número escolhido pelo jogador é o número secreto
function verificarChute() {
    let chute = parseInt(document.querySelector('input').value); // Obtém e converte o valor do input 
    // para número

    // Compara o número digitado pelo usuário com o número secreto
    if (numeroSecreto == chute) {
        exibirTextoNaTela('h1', 'Acertou My friend!'); // Mensagem de acerto
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
    
        exibirTextoNaTela('p', mensagemTentativas);
      
       //botao novo jogo habilitado
       document.getElementById('reiniciar').removeAttribute('disabled');
      
         
    }else{if (numeroSecreto > chute){
         exibirTextoNaTela('p', 'O número secreto é maior');  // Dica: número secreto é maior
         
    }
    else{
        exibirTextoNaTela('p', 'O número secreto é menor'); // Dica: número secreto é menor
    }
    tentativas++; // Incrementa as tentativas somente quando o usuário erra
        LimparTentativas ();
        }
      } 
        
        //Função que limpa o campo das tentativas
        function LimparTentativas(){
            chute = document.querySelector('input');
            chute.value = '';
        }
        // Função que reinicia o jogo.
        function reinciarJogo(){
           
            numeroSecreto = gerarNumeroSecreto();
            exibirMsgmInicial()
            LimparTentativas()
            tentativas= 1;
            document.getElementById('reiniciar').setAttribute('disabled', true);


        }   
        
        

alert('Boas vindas ao jogo do número secreto');
let numeroMax = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMax + 1);
console.log(numeroSecreto);
let chute ;
let tentativas = 1;
//Enquanto o chute não for o número secreto execute:
   while(numeroSecreto != chute) {
           chute = prompt(`digite um número entre 1 e ${numeroMax}`);
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) { 
        break;
    }
        //se for maior ou menor que o número secreto
     else {
        if(numeroSecreto > chute) {alert(`o número secreto é maior que ${chute}`);}
        else{alert(`O número secreto é menor que ${chute}`);}
        //número de tentativas
tentativas++
                }
                }
                // if(tentativas >1){
                //alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
            //}else {alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} na primeira tentativa`);}

           let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
           alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}`);
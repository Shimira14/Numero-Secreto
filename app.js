let listaNumeroSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Numero Secreto !');
    exibirTextoNaTela('p', 'Escolha um numero');
}

mensagemInicial();

function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementos = listaNumeroSorteado.length;

    if (quantidadeDeElementos == numeroLimite) {
        listaNumeroSorteado = [];
    }

    if(listaNumeroSorteado.includes(numeroEscolhido)){
        return gerarNumero();
    } else {
        listaNumeroSorteado.push(numeroEscolhido);
        console.log(listaNumeroSorteado);
        return numeroEscolhido;
    }
}

function verificarBotao() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertouu');
        let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
        let mensagemTentativas = `Voce descobriu com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
    if(chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O numero é menor');
    }else{
    exibirTextoNaTela('p', 'O numero é maior');
    }
    tentativas++;
    limparCampo()
}
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function restart() {
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


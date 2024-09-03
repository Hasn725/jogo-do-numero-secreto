let listaDeNumerosSortiados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function exibirMenssagemInicial() {
    let menssagemComNumerolimite = (`digite um número de 1 a ${numeroLimite}`);
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', menssagemComNumerolimite);
}

exibirMenssagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let menssagemTentativas = `você descobriu o número secreto! com ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('p', menssagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('h1', 'Ainda não');
            exibirTextoNaTela('p', 'O numero secreto é menor, tente novamente');
        } else {
            exibirTextoNaTela('h1', 'Ainda não');
            exibirTextoNaTela('p', 'O numero secreto é maior, tente novamente');
        }
    }
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSortiados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSortiados = [];
    }
    if(listaDeNumerosSortiados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSortiados.push(numeroEscolhido);
        console.log(listaDeNumerosSortiados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMenssagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


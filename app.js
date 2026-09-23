const campoQuantidade = document.getElementById('quantidade');
const campoInicio = document.getElementById('de');
const campoFim = document.getElementById('ate');

var quantidade,inicio, fim;

function sortear() {
    verificarCampos();
}

function reiniciar() {
    // restauração do estado inicial
}

function verificarCampos() {
    const quantidadeTexto = campoQuantidade.value;
    const inicioTexto = campoInicio.value;
    const fimTexto = campoFim.value;

    if (quantidadeTexto === '' || inicioTexto === '' || fimTexto === '') {
        alert('Preencha todos os campos.');
        return;
    }

    quantidade = Number(quantidadeTexto);
    inicio = Number(inicioTexto);
    fim = Number(fimTexto);

    validarCampos();
}

function validarCampos() {
    if (!Number.isInteger(quantidade) || quantidade <= 0) {
        alert('A quantidade deve ser um número inteiro maior que zero.');
        return;
    }

    if (!Number.isInteger(inicio) || !Number.isInteger(fim) ||
        inicio < 1 || fim < 1) {
        alert('O início e o fim devem ser números inteiros maiores que zero.');
        return;
    }

    if (inicio > fim) {
        alert('O valor inicial não pode ser maior que o valor final.');
        return;
    }

    executarSorteio(quantidade);
}

function executarSorteio(quantidade) {
    const sorteados = [];

    for (let i = 0; i < quantidade; i++) {
        const numero = Math.floor(
            Math.random() * (fim - inicio + 1)
        ) + inicio;
        sorteados.push(numero);
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML =
        '<label class="texto__paragrafo">' +
            `Números sorteados: ${sorteados.join(' ')}` +
        '</label>';

    habilitarBotaoReiniciar();
        
}


function habilitarBotaoReiniciar() {
    
    const botaoReiniciar = document.getElementById('btn-reiniciar');

    console.log(botaoReiniciar);
    botaoReiniciar.disabled = false;
    botaoReiniciar.classList.remove('desabilitado');
}
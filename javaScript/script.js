// ==========================================
// FORMULÁRIO DE PAGAMENTO
// ==========================================
const formPagamento = document.getElementById('formPagamento');

if (formPagamento) {
    formPagamento.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede a página de atualizar

        // Captura os valores digitados nos inputs
        const nome           = document.getElementById('nome').value;
        const email          = document.getElementById('email').value;
        const cpf            = document.getElementById('cpf').value;
        const telefone       = document.getElementById('telefone').value;
        const formaPagamento = document.getElementById('formaPagamento').value;

        // Injeta os valores nos spans do Resumo da Compra
        document.getElementById('resNome').textContent      = nome;
        document.getElementById('resEmail').textContent     = email;
        document.getElementById('resCpf').textContent       = cpf;
        document.getElementById('resTelefone').textContent  = telefone;
        document.getElementById('resPagamento').textContent = formaPagamento;

        // Rola a tela até o resumo para o usuário ver
        document.getElementById('confirmacao').scrollIntoView({ behavior: 'smooth' });
    });
}

// Botão final do resumo de pagamento
function enviarCompra() {
    alert('Pedido finalizado com sucesso! Obrigado por comprar na HARDTECH.');
    // Aqui você pode redirecionar o usuário ou limpar o carrinho
}

// ==========================================
// FORMULÁRIO DE CONTATO
// ==========================================
const formContatoElement = document.getElementById('formContato');

if (formContatoElement) {
    formContatoElement.addEventListener('submit', function (e) {
        e.preventDefault(); // Impede a página de recarregar

        // Formata a data para o padrão BR (DD/MM/AAAA)
        const dataNascimentoInput = document.getElementById('dataNascimento').value;
        let dataFormatada = '-';

        if (dataNascimentoInput) {
            // Substitui os traços por barras para evitar bugs de fuso horário
            const dataObjeto = new Date(dataNascimentoInput.replace(/-/g, '/'));
            dataFormatada = new Intl.DateTimeFormat('pt-BR').format(dataObjeto);
        }

        // Atualiza os dados no card de resumo de contato
        document.getElementById('resNome').textContent      = document.getElementById('nome').value;
        document.getElementById('resEmail').textContent     = document.getElementById('email').value;
        document.getElementById('resDataNasc').textContent  = dataFormatada;
        document.getElementById('resMensagem').textContent  = document.getElementById('mensagem').value;

        // Torna o card de confirmação visível com rolagem suave
        const secaoConfirmacao = document.getElementById('confirmacao');
        if (secaoConfirmacao) {
            secaoConfirmacao.style.display = 'block';
            secaoConfirmacao.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Botão final — enviar contato
function enviarContato() {
    const nomeInput  = document.getElementById('nome');
    const nomeCliente = nomeInput ? nomeInput.value : 'Cliente';

    alert(
        `Obrigado pelo contato, ${nomeCliente}!\n\n` +
        `Sua mensagem foi enviada com sucesso.\n` +
        `Nossa equipe responderá em breve no e-mail informado.`
    );

    // Reseta os campos do formulário
    const formContato = document.getElementById('formContato');
    if (formContato) formContato.reset();

    // Oculta a área de confirmação
    const secaoConfirmacao = document.getElementById('confirmacao');
    if (secaoConfirmacao) secaoConfirmacao.style.display = 'none';

    // Redireciona para a Home
    window.location.href = '../index.html';
}
// ==========================================
// CONTATO.JS
// Responsável pelo formulário de contato.
// Carregado APENAS na página contato.html.
// Não depende de utils.js.
// ==========================================

// Captura o elemento do formulário de contato através do ID do HTML
const formContatoElement = document.getElementById('formContato');

// Se o formulário de contato existir na página atual...
if (formContatoElement) {
    
    // Adiciona um escutador para o evento 'submit' (disparado quando o usuário clica no botão de enviar)
    formContatoElement.addEventListener('submit', function (e) {
        
        // Interrompe o comportamento padrão do navegador, que seria recarregar a página inteira limpando os dados
        e.preventDefault();

        // --- Validação básica ---
        // Captura o texto digitado em cada campo. O método '.trim()' limpa espaços em branco vazios deixados no início ou final do texto.
        const nomeVal  = document.getElementById('nome').value.trim();
        const emailVal = document.getElementById('email').value.trim();
        const msgVal   = document.getElementById('mensagem').value.trim();

        // Operador Lógico NOT (!): Se Nome OU E-mail OU Mensagem estiverem vazios, exibe um alerta e trava a execução
        if (!nomeVal || !emailVal || !msgVal) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return; // O 'return' vazio sai da função imediatamente e impede o avanço do código
        }

        // Expressão Regular (RegEx) para validar se a estrutura do e-mail segue o formato regulamentar padrão (usuario@provedor.com)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // O método '.test()' verifica se o valor do e-mail atende aos requisitos estabelecidos pela RegEx anterior
        if (!emailRegex.test(emailVal)) {
            alert('Por favor, informe um e-mail válido.');
            return; // Trava o envio se o formato do e-mail for inválido
        }

        // --- Formata data de nascimento (campo opcional) ---
        // Captura o valor bruto do input do tipo "date" (que por padrão retorna no formato americano "AAAA-MM-DD")
        const dataNascimentoInput = document.getElementById('dataNascimento').value;
        
        // Define um valor inicial padrão (um traço) caso o usuário decida não preencher esse campo opcional
        let dataFormatada = '-';

        // Se o usuário tiver selecionado alguma data no calendário do HTML...
        if (dataNascimentoInput) {
            // O replace(/-/g, '/') substitui os traços da data por barras (transforma "2026-06-16" em "2026/06/16").
            // Isso previne bugs comuns de fuso horário no construtor do objeto nativo 'new Date()' do JavaScript.
            const dataObjeto = new Date(dataNascimentoInput.replace(/-/g, '/'));
            
            // O 'Intl.DateTimeFormat' é uma API nativa do JS que formata objetos de data automaticamente de acordo com as regras de um país (pt-BR = DD/MM/AAAA)
            dataFormatada = new Intl.DateTimeFormat('pt-BR').format(dataObjeto);
        }

        // --- Preenche confirmação ---
        // Transfere e injeta os valores validados diretamente para as tags de texto correspondentes dentro do bloco de resumo/confirmação
        document.getElementById('resNome').textContent     = nomeVal;
        document.getElementById('resEmail').textContent    = emailVal;
        document.getElementById('resDataNasc').textContent = dataFormatada; // Injeta a data convertida para o formato do Brasil
        document.getElementById('resMensagem').textContent = msgVal;

        // Captura a seção do HTML que serve como o card visual de resumo/confirmação
        const secaoConfirmacao = document.getElementById('confirmacao');
        
        // Se essa seção existir na página...
        if (secaoConfirmacao) {
            secaoConfirmacao.style.display = 'block'; // Muda a propriedade CSS de 'none' para 'block', tornando o card visível
            
            // Desloca a tela do usuário para baixo de forma animada e suave (smooth) até que a seção de resumo fique visível
            secaoConfirmacao.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// ------------------------------------------
// FUNÇÃO FINAL — DISPARADA NO BOTÃO DE CONCLUIR
// ------------------------------------------
function enviarContato() {
    // Tenta capturar o campo de input do nome
    const nomeInput   = document.getElementById('nome');
    
    // Operador Ternário composto: Se o elemento existir, pega o valor limpo com trim. Se o valor for vazio, define como 'Cliente'. 
    // Se o elemento nem existir, também define como 'Cliente'. Evita erros de quebra de script (NullPointer).
    const nomeCliente = nomeInput ? nomeInput.value.trim() || 'Cliente' : 'Cliente';

    // Dispara um pop-up de sucesso informando que o envio simulado foi bem-sucedido
    alert(
        `Obrigado pelo contato, ${nomeCliente}!\n\n` +
        `Sua mensagem foi enviada com sucesso.\n` +
        `Nossa equipe responderá em breve no e-mail informado.`
    );

    // Captura o formulário para fazer a limpeza de dados
    const formContato = document.getElementById('formContato');
    
    // O método '.reset()' redefine todos os inputs, caixas de seleção e campos de texto de volta para o estado original em branco
    if (formContato) formContato.reset();

    // Captura o painel de confirmação e esconde ele alterando o CSS para 'none'
    const secaoConfirmacao = document.getElementById('confirmacao');
    if (secaoConfirmacao) secaoConfirmacao.style.display = 'none';

    // Redireciona o navegador do usuário automaticamente para a página principal (Home) index.html
    window.location.href = '../index.html';
}
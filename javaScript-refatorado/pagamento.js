// ==========================================
// PAGAMENTO.JS
// Responsável pela página de checkout.
// Carregado APENAS em pagamento.html.
// Depende de: utils.js (calcularTotalCarrinho, formatarBRL, buscarImagem)
// ==========================================

// ------------------------------------------
// 1. CAPTURA DE PARÂMETROS — URL ou CARRINHO
// ------------------------------------------
// O 'URLSearchParams' analisa a barra de endereço do navegador para ler dados passados após o "?"
const parametros = new URLSearchParams(window.location.search);

// Tenta capturar as informações enviadas caso o usuário clique em um botão de "Comprar Agora" direto
const produtoUrl = parametros.get('produto'); // Captura o nome do produto vindo da URL
const precoUrl   = parametros.get('preco');   // Captura o preço do produto vindo da URL

// Tenta carregar a lista de compras completa guardada no banco local (localStorage) do navegador
const carrinhoSalvo = JSON.parse(localStorage.getItem('hardtech-carrinho') || '[]');

// O operador '!!' converte o resultado em um Booleano real (true ou false)
// 'veioDaUrl' será TRUE se houver simultaneamente um produto e um preço válidos na URL (compra direta)
const veioDaUrl     = !!(produtoUrl && precoUrl);

// ------------------------------------------
// 2. ENVIO DO FORMULÁRIO
// ------------------------------------------
// Captura o elemento HTML correspondente ao formulário de checkout
const formPagamentoElement = document.getElementById('formPagamento');

// Se o formulário de pagamento estiver presente nesta tela...
if (formPagamentoElement) {
    
    // Adiciona o monitoramento do evento 'submit' (quando o usuário tenta finalizar o envio dos dados)
    formPagamentoElement.addEventListener('submit', function (e) {
        
        // Impede o comportamento padrão do navegador, evitando que a página seja recarregada e limpe o formulário
        e.preventDefault();

        // --- Validação básica ---
        // O método '.trim()' remove espaços em branco inúteis digitados acidentalmente no início ou fim do texto
        const nomeVal     = document.getElementById('nome').value.trim();
        const emailVal    = document.getElementById('email').value.trim();
        const cpfVal      = document.getElementById('cpf').value.trim();
        const telefoneVal = document.getElementById('telefone').value.trim();

        // Se qualquer um dos campos obrigatórios estiver vazio (!), interrompe o envio com um alerta
        if (!nomeVal || !emailVal || !cpfVal || !telefoneVal) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return; // O 'return' vazio para a execução da função imediatamente aqui
        }

        // Expressão Regular (RegEx) para validar a estrutura de escrita do e-mail do cliente
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // O método '.test()' verifica se o e-mail digitado segue as regras corretas de formato (exemplo@provedor.com)
        if (!emailRegex.test(emailVal)) {
            alert('Por favor, informe um e-mail válido.');
            return;
        }

        // O replace(/\D/g, '') localiza e remove qualquer caractere que NÃO seja um número decimal (letras, pontos, traços)
        const cpfNumeros = cpfVal.replace(/\D/g, '');
        
        // Garante que o CPF limpo contenha exatamente os 11 dígitos numéricos regulamentares
        if (cpfNumeros.length !== 11) {
            alert('Por favor, informe um CPF válido com 11 dígitos.');
            return;
        }

        // --- Preenche dados do cliente na confirmação ---
        // Após todas as validações darem certo, injeta os textos informados nas tags correspondentes do card de resumo final
        document.getElementById('resNome').textContent      = nomeVal;
        document.getElementById('resEmail').textContent     = emailVal;
        document.getElementById('resCpf').textContent       = cpfVal;
        document.getElementById('resTelefone').textContent  = telefoneVal;
        document.getElementById('resPagamento').textContent = document.getElementById('formaPagamento').value;

        // --- Produto e imagem ---
        // Captura as tags HTML da área de resumo gráfico onde as imagens e detalhes da compra vão aparecer
        const imgElement = document.getElementById('resImgProduto');
        const resProduto = document.getElementById('resProduto');
        const resPreco   = document.getElementById('resPreco');

        // CENÁRIO A: Se o cliente veio da URL (compra imediata de um único produto)
        if (veioDaUrl) {
            // Escreve o nome do produto vindo da barra de endereço
            resProduto.textContent = produtoUrl;
            
            // Converte o preço de texto para decimal e aplica a formatação monetária brasileira padrão
            resPreco.textContent   = 'R$ ' + parseFloat(precoUrl).toLocaleString('pt-BR', { minimumFractionDigits: 2 });

            // Se a tag de imagem existir na tela...
            if (imgElement) {
                // Chama a função utilitária do utils.js passando o nome convertido em minúsculas
                const img = buscarImagem(produtoUrl.toLowerCase());
                imgElement.src = img.src; // Aplica o arquivo da imagem encontrada
                imgElement.alt = img.alt; // Insere o texto alternativo correspondente
            }

        // CENÁRIO B: Se não veio da URL, mas existem itens adicionados na sacola de compras do localStorage
        } else if (carrinhoSalvo.length > 0) {
            // Calcula o valor total de todos os itens do carrinho chamando a função do utils.js
            const total = calcularTotalCarrinho(carrinhoSalvo);

            // Roda um loop por cada item do carrinho usando '.map()' para criar linhas de texto com o nome e valor de cada produto
            // O '.join('')' agrupa essa lista de blocos de tags em um único texto HTML contínuo
            resProduto.innerHTML = carrinhoSalvo.map(item =>
                `<span style="display:block">${item.nome} — R$ ${item.preco}</span>`
            ).join('');
            
            // Formata o preço somado total da sacola em Real brasileiro
            resPreco.textContent = formatarBRL(total);

            // Para exibição de imagem no resumo múltiplo, o site seleciona a imagem do primeiro produto (índice 0) adicionado
            if (imgElement && carrinhoSalvo[0]) {
                const img = buscarImagem(carrinhoSalvo[0].nome.toLowerCase());
                imgElement.src = img.src;
                imgElement.alt = img.alt;
            }

        // CENÁRIO C: Caso de segurança (se o usuário acessar a tela diretamente sem produto na URL e sem carrinho)
        } else {
            resProduto.textContent = 'Nenhum produto';
            resPreco.textContent   = 'R$ 0,00';
        }

        // --- Exibe seção de confirmação ---
        // Captura o container oculto de confirmação (resumo da compra)
        const secaoConfirmacao = document.getElementById('confirmacao');
        if (secaoConfirmacao) {
            secaoConfirmacao.style.display = 'block'; // Altera o CSS de 'none' para 'block' para torná-lo visível
            
            // Faz a tela deslizar de forma suave (smooth) até o card para guiar o olhar do usuário
            secaoConfirmacao.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// ------------------------------------------
// 3. BOTÃO FINAL — CONCLUIR E LIMPAR TUDO
// ------------------------------------------
// Função chamada no clique do botão final de encerramento do pedido
function enviarCompra() {
    
    // Define os nomes dos itens comprados que vão aparecer na caixa de alerta final
    // Se veio da URL, usa o nome do produto individual. Caso contrário, une todos os nomes da sacola separados por vírgula (, )
    const nomeProdutoFinal = veioDaUrl
        ? produtoUrl
        : carrinhoSalvo.map(i => i.nome).join(', ');

    // Define o preço consolidado final que aparecerá no alerta
    const totalFinal = veioDaUrl
        ? 'R$ ' + parseFloat(precoUrl).toLocaleString('pt-BR', { minimumFractionDigits: 2 })
        : formatarBRL(calcularTotalCarrinho(carrinhoSalvo));

    // Exibe um pop-up nativo de sucesso mostrando o resumo impresso da transação
    alert(
        `Compra realizada com sucesso!\n\n` +
        `Produto(s): ${nomeProdutoFinal}\n` +
        `Valor Total: ${totalFinal}`
    );

    // Esvazia totalmente a sacola de compras local do navegador, já que o pedido foi pago e fechado
    localStorage.removeItem('hardtech-carrinho');

    // Reseta todos os campos de texto do formulário, deixando-os em branco novamente
    const formElement = document.getElementById('formPagamento');
    if (formElement) formElement.reset();

    // Oculta novamente o card de confirmação de resumo
    const secaoConfirmacao = document.getElementById('confirmacao');
    if (secaoConfirmacao) secaoConfirmacao.style.display = 'none';

    // Redireciona o navegador do cliente automaticamente de volta para a página inicial (Home) do e-commerce
    window.location.href = '../index.html';
}
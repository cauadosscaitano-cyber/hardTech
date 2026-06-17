// ==========================================
// LAYOUT.JS
// Responsável por: menu hambúrguer, accordion,
// alternância de tema e painel lateral + carrinho.
// Carregado em TODAS as páginas do site.
// Depende de: utils.js (para calcularTotalCarrinho e formatarBRL)
// ==========================================

// ------------------------------------------
// 1. MENU HAMBÚRGUER (mobile/tablet)
// ------------------------------------------
// Captura os elementos HTML do botão hambúrguer, do menu de navegação e da cortina de fundo (overlay)
const hamburgerBtn = document.getElementById('hamburger-btn');
const mainNav      = document.getElementById('main-nav');
const navOverlay   = document.getElementById('nav-overlay');

// Função responsável por abrir a navegação lateral no mobile
function openNav() {
    mainNav.classList.add('nav-open');       // Adiciona a classe CSS que traz o menu para dentro da tela
    navOverlay.classList.add('visible');     // Torna o fundo escurecido visível
    hamburgerBtn.classList.add('open');      // Transforma o ícone do hambúrguer em um "X" (via CSS)
    
    // Configurações de acessibilidade (leitores de tela saberão que o menu expandiu e o fundo está ativo)
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    navOverlay.setAttribute('aria-hidden', 'false');
    
    // Trava a rolagem do corpo da página para o usuário não rolar o fundo enquanto o menu estiver aberto
    document.body.style.overflow = 'hidden';
}

// Função responsável por fechar a navegação lateral
function closeNav() {
    mainNav.classList.remove('nav-open');    // Remove a classe CSS tirando o menu da tela
    navOverlay.classList.remove('visible');  // Esconde o fundo escurecido
    hamburgerBtn.classList.remove('open');   // Transforma o botão "X" de volta em hambúrguer
    
    // Atualiza a acessibilidade informando que o menu foi recolhido
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    navOverlay.setAttribute('aria-hidden', 'true');
    
    // Remove a trava de rolagem da página, voltando ao fluxo normal
    document.body.style.overflow = '';
}

// Se o botão hambúrguer existir na página atual...
if (hamburgerBtn) {
    // Adiciona um evento de clique nele
    hamburgerBtn.addEventListener('click', () => {
        // Verifica se o menu contém a classe 'nav-open' (ou seja, descobre se ele está aberto no momento)
        const isOpen = mainNav.classList.contains('nav-open');
        
        // Operador Ternário: se estiver aberto (isOpen) chama closeNav(), senão chama openNav()
        isOpen ? closeNav() : openNav();
    });
}

// Se a cortina de fundo (overlay) existir, fecha o menu caso o usuário clique fora dele
if (navOverlay) {
    navOverlay.addEventListener('click', closeNav);
}

// Monitora o redimensionamento da janela do navegador
window.addEventListener('resize', () => {
    // Se a largura da tela atingir ou passar de 992px (tamanho desktop), fecha o menu mobile automaticamente
    if (window.innerWidth >= 992) closeNav();
});

// Se o menu de navegação existir...
if (mainNav) {
    // Seleciona todos os links 'a' de dentro dele e roda um loop por cada um deles
    mainNav.querySelectorAll('a').forEach(link => {
        // Quando qualquer link interno for clicado...
        link.addEventListener('click', () => {
            // Se estiver em telas menores que 992px (mobile/tablet), fecha o menu (útil para links de ancoragem)
            if (window.innerWidth < 992) closeNav();
        });
    });
}

// ------------------------------------------
// 2. ACCORDION DE DETAILS (apenas um aberto por vez)
// ------------------------------------------
if (mainNav) {
    const allDetails = mainNav.querySelectorAll('details');

    // ⚠️ CORREÇÃO: Fecha todos os details ao carregar qualquer página
    // Isso resolve o problema do submenu abrir sozinho nas páginas internas
    allDetails.forEach(detail => {
        detail.removeAttribute('open');
    });

    // Agora sim, adiciona o evento toggle para permitir apenas um aberto por vez
    allDetails.forEach(detail => {
        detail.addEventListener('toggle', () => {
            if (detail.open) {
                allDetails.forEach(other => {
                    if (other !== detail) other.removeAttribute('open');
                });
            }
        });
    });
}

// ------------------------------------------
// 3. ALTERNÂNCIA DE TEMA (MODO ESCURO)
// ------------------------------------------
// Captura o botão que troca o tema e busca no banco de dados local do navegador (localStorage) se há um tema salvo
const themeToggle = document.getElementById('theme-toggle');
const temaSalvo   = localStorage.getItem('hardtech-theme');

// Se o usuário já visitou o site antes e o tema salvo for o escuro ('dark')...
if (temaSalvo === 'dark') {
    // Adiciona a classe 'dark-mode' no <body> para o site já carregar todo escurecido
    document.body.classList.add('dark-mode');
}

// Se o botão de alternar tema existir na página atual...
if (themeToggle) {
    // Atualiza a acessibilidade do botão indicando se ele está pressionado (true se estiver em modo escuro, false se claro)
    themeToggle.setAttribute('aria-pressed', document.body.classList.contains('dark-mode'));

    // Adiciona o evento de clique para mudar o tema
    themeToggle.addEventListener('click', () => {
        // .toggle() adiciona a classe se ela não existir, ou remove se já existir. 
        // A variável guarda o resultado (true se adicionou/ativou modo escuro, false se removeu)
        const modoEscuroAtivo = document.body.classList.toggle('dark-mode');
        
        // Atualiza o estado do botão para os leitores de tela
        themeToggle.setAttribute('aria-pressed', modoEscuroAtivo);
        
        // Salva a preferência do usuário no localStorage para lembrar na próxima visita ou troca de página
        localStorage.setItem('hardtech-theme', modoEscuroAtivo ? 'dark' : 'light');
    });
}

// ------------------------------------------
// 4. PAINEL LATERAL + CARRINHO
// Unificado em um único DOMContentLoaded.
// ------------------------------------------
// Garante que o código interno só rode depois que todo o esqueleto HTML da página estiver completamente carregado
document.addEventListener('DOMContentLoaded', function () {

    // --- Painel lateral (abrir / fechar) ---
    // Captura o container do painel lateral, o botão aba (gatilho) e o botão interno de fechar
    const painel    = document.querySelector('.painel-lateral');
    const btnAbrir  = document.querySelector('.btn-aba-toggle');
    const btnFechar = document.querySelector('.btn-fechar-aside');

    // Se o botão de abrir e o painel existirem...
    if (btnAbrir && painel) {
        btnAbrir.addEventListener('click', function () {
            painel.classList.add('aberto');       // Abre o painel deslizando-o para a tela (via CSS)
            btnAbrir.classList.add('oculto');     // Esconde o botão aba temporariamente enquanto aberto
        });
    }

    // Se o botão de fechar e o painel existirem...
    if (btnFechar && painel) {
        btnFechar.addEventListener('click', function () {
            painel.classList.remove('aberto');    // Recolhe o painel para fora da tela
            if (btnAbrir) btnAbrir.classList.remove('oculto'); // Faz o botão aba reaparecer na borda do site
        });
    }

    // --- Carrinho do localStorage ---
    // Captura as tags onde a lista de produtos, o total em dinheiro e a quantidade do título serão exibidos
    const listaCarrinho = document.querySelector('.lista-carrinho-aside');
    const totalAside    = document.querySelector('.total-aside strong');
    const tituloAside   = document.querySelector('.widget-aside h3');

    // Se a tag da lista do carrinho não existir nesta página específica, o script para a execução aqui e não faz nada
    if (!listaCarrinho) return;

    // Busca os itens salvos no localStorage. Se estiver vazio, cria um array de texto vazio '[]'. 
    // O JSON.parse transforma esse texto de volta em um array de objetos reais em JavaScript.
    const carrinho = JSON.parse(localStorage.getItem('hardtech-carrinho') || '[]');

    // Se a tag do título existir, atualiza o texto mostrando dinamicamente a quantidade de itens comprados
    if (tituloAside) {
        tituloAside.textContent = `Seu Carrinho (${carrinho.length})`;
    }

    // Se não houver nenhum produto no carrinho...
    if (carrinho.length === 0) {
        // Insere uma mensagem em HTML avisando que está vazio
        listaCarrinho.innerHTML = '<li style="color:#b8c6d8">Nenhum produto adicionado.</li>';
        // Zera o preço visualizado
        if (totalAside) totalAside.textContent = 'R$ 0,00';
    } else {
        // Caso contrário, usa o método '.map()' para percorrer cada produto do carrinho e criar um bloco de HTML <li> para ele
        // O '.join('')' junta todo esse array de blocos de texto gerados em uma única string contínua
        listaCarrinho.innerHTML = carrinho.map(item => `
            <li>
                <span class="item-nome">${item.nome}</span>
                <span class="item-preco">R$ ${item.preco}</span>
            </li>
        `).join('');

        // Se a tag do valor total existir na lateral...
        if (totalAside) {
            // Calcula a soma (chamando a calcularTotalCarrinho) e formata o número em Real (chamando a formatarBRL)
            // Ambas as funções utilitárias vêm importadas do seu arquivo 'utils.js'
            totalAside.textContent = formatarBRL(calcularTotalCarrinho(carrinho));
        }
    }

    // --- Botão finalizar pedido ---
    // Captura o botão de finalização presente no rodapé do carrinho lateral
    const btnFinalizar = document.querySelector('.btn-finalizar-aside');
    if (btnFinalizar) {
        btnFinalizar.addEventListener('click', function () {
            // Se tentar finalizar com a sacola zerada, barra a ação e mostra um alerta
            if (carrinho.length === 0) {
                alert('Seu carrinho está vazio!');
                return;
            }
            // Se contiver produtos, redireciona o usuário automaticamente para a página de formulário de pagamento
            window.location.href = './paginas/pagamento.html';
        });
    }

});
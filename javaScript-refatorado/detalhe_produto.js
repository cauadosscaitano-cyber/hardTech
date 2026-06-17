// ==========================================================================
// BANCO DE DADOS FICTÍCIO (Simulação de um catálogo de produtos via Objeto)
// ==========================================================================
// Declara uma constante chamada 'bancoProdutos' que armazena múltiplos objetos.
// Cada "chave" (ex: "rtx5070", "ryzen7") representa o identificador único do produto.
const bancoProdutos = {
    "rtx5070": {
        nome: "Placa de Vídeo RTX 5070",
        imagem: "../img/img-promocoes/rtx5070.webp",
        preco: "3.999,90",
        valorUrl: "3999.90", // Valor puro sem formatação, ideal para enviar via parâmetros da URL
        descricaoCurta: "12GB GDDR7 - O amor na velocidade máxima dos quadros.",
        especificacoes: [ // Array (lista) de strings contendo os detalhes técnicos do componente
            "Memória de Vídeo: 12GB GDDR7",
            "Interface de Memória: 192-bit",
            "Suporte a Ray Tracing: Sim (Geração 4)",
            "Conectores: 3x DisplayPort 2.1, 1x HDMI 2.1a",
            "Fonte Recomendada: 650W ou superior"
        ]
    },
    "ryzen7": {
        nome: "Ryzen 7 7800X3D",
        imagem: "../img/img-promocoes/ryzen7800x3d.webp",
        preco: "2.499,90",
        valorUrl: "2499.90",
        descricaoCurta: "O processador líder em games e no coração do seu amor.",
        especificacoes: [
            "Sockets Suportados: AM5",
            "Núcleos / Threads: 8 Cores / 16 Threads",
            "Frequência Base / Turbo: 4.2GHz / 5.0GHz",
            "Cachê Total: 104MB (L2+L3)",
            "Cooler micro: Não"
        ]
    },
    "teclado": {
        nome: "Teclado Mecânico RGB",
        imagem: "../img/img-promocoes/TecladoRGB.webp",
        preco: "349,90",
        valorUrl: "349.90",
        descricaoCurta: "Switches silenciosos e iluminação personalizável.",
        especificacoes: [
            "Tipo de Switch: Mecânico (Silencioso)",
            "Iluminação: RGB Cronos Customizável",
            "Layout: ABNT2",
            "Conectividade: Cabo USB trançado removível",
            "Anti-Ghosting: 100% das teclas"
        ]
    },
    "mouse": {
        nome: "Mouse Gamer Wireless",
        imagem: "../img/img-promocoes/MouseWireless.webp",
        preco: "299,90",
        valorUrl: "299.90",
        descricaoCurta: "Precisão cirúrgica para jogar em dupla sem atrasos.",
        especificacoes: [
            "Conectividade: Wireless 2.4GHz / Bluetooth / Cabeado",
            "Sensor óptico: 26.000 DPI de alta precisão",
            "Bateria: Até 80 horas de autonomia",
            "Peso ultra leve: Design ergonômico",
            "Switches principais: Ópticos de alta durabilidade"
        ]
    },
    "headset": {
        nome: "Headset Gamer 7.1 Wireless",
        imagem: "../img/img-promocoes/HeadsetWireless.webp",
        preco: "599,90",
        valorUrl: "599.90",
        descricaoCurta: "Para ouvir a voz do seu amor (e os passos dos inimigos).",
        especificacoes: [
            "Sistema de som: Surround Virtual 7.1 / Áudio Espacial",
            "Conexão: Sem fio de baixíssima latência (Dongle USB)",
            "Microfone: Removível com cancelamento de ruído",
            "Drivers: 50mm de neodímio",
            "Almofadas: Espuma de memória com tecido respirável"
        ]
    },
    "ssd2tb": {
        nome: "SSD NVMe M.2 2TB",
        imagem: "../img/img-promocoes/SSD2TB.png",
        preco: "799,90",
        valorUrl: "799.90",
        descricaoCurta: "Espaço de sobra para guardar memórias e jogos pesados.",
        especificacoes: [
            "Capacidade: 2000 GB (2TB)",
            "Interface: PCIe Gen 4.0 x4, NVMe",
            "Velocidade de Leitura: Até 7400 MB/s",
            "Velocidade de Gravação: Até 6800 MB/s",
            "Formato: M.2 2280"
        ]
    },
    "monitor": {
        nome: "Monitor Curvo 27\" 144Hz",
        imagem: "../img/img-promocoes/MonitorCurvo.png",
        preco: "1.299,00",
        valorUrl: "1299.00",
        descricaoCurta: "Imersão total e cores vibrantes para o setup do casal.",
        especificacoes: [
            "Tamanho da Tela: 27 Polegadas",
            "Curvatura da Tela: 1500R",
            "Taxa de Atualização: 144Hz",
            "Tempo de Resposta: 1ms (MPRT)",
            "Tecnologia de Sincronia: AMD FreeSync Premium / G-Sync Compatible"
        ]
    },
    "watercooler": {
        nome: "Water Cooler 240mm RGB",
        imagem: "../img/img-promocoes/WaterCooler.png",
        preco: "449,90",
        valorUrl: "449.90",
        descricaoCurta: "Para resfriar o PC quando a gameplay esquentar.",
        especificacoes: [
            "Tamanho do Radiador: 240mm",
            "Ventoinhas: 2x 120mm ARGB inclusas",
            "Compatibilidade Sockets: Intel (LGA1700/1200) e AMD (AM5/AM4)",
            "Bomba: Alta eficiência com base de cobre",
            "Controle de Iluminação: Sincronizável via placa-mãe"
        ]
    },
    "cadeira": {
        nome: "Cadeira Gamer Premium",
        imagem: "../img/img-promocoes/CadeiraGamer.webp",
        preco: "1.199,00",
        valorUrl: "1199.00",
        descricaoCurta: "Conforto absoluto para maratonas de séries ou jogos.",
        especificacoes: [
            "Material de Revestimento: Couro Sintético PU Premium",
            "Mecanismo de Reclinação: Até 180°",
            "Apoio de Braço: Ajustável (3D)",
            "Pistão a Gás: Classe 4 de alta segurança",
            "Acessórios: Almofadas lombar e cervical inclusas"
        ]
    },
    "ram32gb": {
        nome: "Kit RAM 32GB (2x16GB) DDR5",
        imagem: "../img/img-promocoes/ram_32gb_ddr5.png",
        preco: "899,90",
        valorUrl: "899.90",
        descricaoCurta: "Velocidade extrema para processar esse sentimento.",
        especificacoes: [
            "Capacidade Total: 32GB (2 módulos de 16GB)",
            "Frequência de Operação: 6000MHz",
            "Tipo de Memória: DDR5",
            "Dissipador de Calor: Alumínio anodizado com perfil RGB",
            "Suporte: Perfis AMD EXPO / Intel XMP 3.0"
        ]
    },
    "fonte750w": {
        nome: "Fonte 750W 80 Plus Gold",
        imagem: "../img/img-promocoes/Fonte_750w.webp",
        preco: "749,90",
        valorUrl: "749.90",
        descricaoCurta: "Energia estável e de alta eficiência para todo o setup.",
        especificacoes: [
            "Potência Nominal: 750 Watts",
            "Certificação de Eficiência: 80 Plus Gold",
            "Cabeamento: Full Modular (Totalmente destacável)",
            "Proteções Integradas: OVP, UVP, OPP, SCP, OCP, OTP",
            "Ventoinha: 120mm inteligente ultra silenciosa"
        ]
    },
    "gabinete": {
        nome: "Gabinete Aquário Luxury",
        imagem: "../img/img-promocoes/GabineteAquario.png",
        preco: "399,90",
        valorUrl: "399.90",
        descricaoCurta: "Vidro temperado lateral para exibir a beleza do hardware.",
        especificacoes: [
            "Formato Suportado: ATX, Micro-ATX, Mini-ITX",
            "Painéis Laterais: Vidro temperado frontal e lateral (Estilo Aquário)",
            "Gerenciamento de cabos: Amplo espaço na lateral traseira",
            "Suporte para Ventoinhas: Até 9 ventoinhas de 120mm",
            "Filtros de Poeira: Magnéticos no topo e na base"
        ]
    },
    "placamae": {
        nome: "Placa-Mãe B650M Wi-Fi",
        imagem: "../img/img-index/placa_mae_b650.webp",
        preco: "1.149,00",
        valorUrl: "1149.00",
        descricaoCurta: "Pronta para processadores AMD AM5, DDR5 com dissipador reforçado.",
        especificacoes: [
            "Chipset: AMD B650",
            "Suporte de Processadores: AMD Socket AM5 (Série Ryzen 7000, 8000 e 9000)",
            "Slots de Memória: 4x DDR5 DIMM (Até 192GB, suporte a AMD EXPO)",
            "Conectividade Sem Fio: Wi-Fi 6E Integrado + Bluetooth 5.3",
            "Formato: Micro-ATX (Perfeito para gabinetes compactos ou aquário)"
        ]
    },
    "ssd1tb": {
        nome: "SSD NVMe 1TB",
        imagem: "../img/img-index/ssd1tb.webp",
        preco: "499,90",
        valorUrl: "499.90",
        descricaoCurta: "Velocidade extrema de leitura de até 7000 MB/s.",
        especificacoes: [
            "Capacidade: 1000 GB (1TB)",
            "Interface: PCIe Gen 4.0 x4 / NVMe 1.4",
            "Velocidade de Leitura Sequencial: Até 7000 MB/s",
            "Velocidade de Gravação Sequencial: Até 6000 MB/s",
            "Dissipador Incluso: Sim, dissipador de alumínio de perfil baixo"
        ]
    },
    "i714700k": {
        nome: "Intel Core i7-14700K",
        imagem: "../img/index/intel_i7.png",
        preco: "2.699,90",
        valorUrl: "2699.90",
        descricaoCurta: "Alta performance com 20 núcleos e clock dinâmico para multitarefas e streaming.",
        especificacoes: [
            "Soquete: LGA1700",
            "Núcleos / Threads: 20 Cores (8 P-cores + 12 E-cores) / 28 Threads",
            "Frequência Máxima Turbo: Até 5.6 GHz",
            "Gráficos Integrados: Intel UHD Graphics 770",
            "Cachê Inteligente Intel: 33MB"
        ]
    },
    "rx7800xt": {
        nome: "Radeon RX 7800 XT 16GB",
        imagem: "../img/img-index/rx7800xt.png",
        preco: "3.499,00",
        valorUrl: "3499.00",
        descricaoCurta: "Arquitetura RDNA 3 com 16GB de memória, ideal para rodar tudo no Ultra em 1440p.",
        especificacoes: [
            "Memória de Vídeo: 16GB GDDR6",
            "Interface de Memória: 256-bit",
            "Arquitetura: AMD RDNA 3",
            "Tecnologias Suportadas: Ray Tracing, AMD FidelityFX Super Resolution (FSR 3)",
            "Conectividade: DisplayPort 2.1 e HDMI 2.1"
        ]
    },
    "aircooler": {
        nome: "Air Cooler Dual Tower",
        imagem: "../img/img-index/aircooler_tower.webp",
        preco: "289,90",
        valorUrl: "289.90",
        descricaoCurta: "Refrigeração a ar de alto desempenho com dissipador duplo e ventoinhas silenciosas.",
        especificacoes: [
            "Tipo de Refrigeração: Air Cooler Dual Tower (Torre Dupla)",
            "Ventoinhas: 2x 120mm PWM de alta pressão estática",
            "Dissipador: Aletas de alumínio com 6 heatpipes de cobre de contato direto",
            "Nível de Ruído: Máximo de 26.8 dBA (Operação silenciosa)",
            "Compatibilidade: Intel (LGA1700/1200/115X) e AMD (AM5/AM4)"
        ]
    }
};

// ----------------------------------------------------------------=========
// LÓGICA DE CAPTURA DO PRODUTO VIA QUERY STRINGS (Parâmetros da URL)
// ----------------------------------------------------------------=========
// Instancia o objeto para ler a URL atual da janela (ex: detalhe.html?id=rtx5070)
const parametros = new URLSearchParams(window.location.search);
// Extrai apenas o valor associado à palavra 'id' (no exemplo acima, trará "rtx5070")
const produtoId = parametros.get("id");

// Captura a div ou elemento HTML onde toda a estrutura do produto será renderizada
const container = document.getElementById("containerProduto");

// 2. Verificar se o id foi informado e se ele realmente existe dentro do nosso catálogo 'bancoProdutos'
if (produtoId && bancoProdutos[produtoId]) {
    // Cria um atalho chamado 'prod' apontando direto para as informações do produto selecionado
    const prod = bancoProdutos[produtoId];

    // Cria uma variável string vazia que servirá para acumular as tags de lista (<li>) das especificações
    let listaSpecsHtml = "";
    
    // Roda uma função de loop por cada elemento dentro do array 'especificacoes' do produto
    prod.especificacoes.forEach(function(spec) {
        // Concatena (junta) uma nova tag li contendo o texto da especificação atual à variável acumuladora
        listaSpecsHtml += `<li>${spec}</li>`;
    });

    // 3. Injetar a estrutura da vitrine no container do HTML usando Template Literals (crases)
    container.innerHTML = `
    <article class="produto-detalhe-wrapper">
        <figure class="produto-imagem-lateral">
            <img src="${prod.imagem}" alt="${prod.nome}">
        </figure>
        <section class="produto-info-lateral">
            <h2>${prod.nome}</h2>
            <p class="descricao-interna">${prod.descricaoCurta}</p>
            
            <aside class="preco-container-interno">
                <span class="label-preco">Preço à vista no Pix:</span>
                <strong class="preco-valor-interno">R$ ${prod.preco}</strong>
                <span class="sub-preco">Ou em até 10x sem juros no cartão</span>
            </aside>

            <button id="btn-adicionar-carrinho" class="btn-adicionar-carrinho">
                🛒 Adicionar ao Carrinho
            </button>

            <a href="./pagamento.html?produto=${encodeURIComponent(prod.nome)}&preco=${prod.valorUrl}" class="btn-comprar-interno">
                Comprar Agora
            </a>
        </section>
    </article>

    <section class="produto-ficha-tecnica">
        <h3>Ficha Técnica / Especificações</h3>
        <ul>
            ${listaSpecsHtml}
        </ul>
    </section>
`;
    
    // Altera dinamicamente o texto impresso na aba lá de cima do navegador do usuário
    document.title = `HardTech - ${prod.nome}`;

    // Captura o botão de adicionar ao carrinho recém-criado dentro do innerHTML acima
    const btnCarrinho = document.getElementById('btn-adicionar-carrinho');

    // Se o botão foi renderizado com sucesso...
    if (btnCarrinho) {
        // Adiciona o monitoramento de clique para gerenciar o localStorage
        btnCarrinho.addEventListener('click', function () {
            // Busca o carrinho salvo ou cria um array vazio em texto caso não exista nenhum produto salvo ainda
            const carrinho = JSON.parse(localStorage.getItem('hardtech-carrinho') || '[]');
            
            // O método '.some()' varre a lista e retorna TRUE se encontrar pelo menos um item que possua o mesmo ID
            const jaExiste = carrinho.some(item => item.id === produtoId);

            // Se o produto já foi adicionado antes, muda o texto do botão, altera a cor para azul escuro e para a execução
            if (jaExiste) {
                btnCarrinho.textContent = '✓ Já está no carrinho!';
                btnCarrinho.style.background = '#17345d';
                return; 
            }

            // Se for um item inédito, insere um novo objeto contendo ID, Nome e Preço no final do array do carrinho
            carrinho.push({
                id:    produtoId,
                nome:  prod.nome,
                preco: prod.preco
            });

            // Converte o array modificado em uma string de texto corrido JSON e salva de volta no localStorage
            localStorage.setItem('hardtech-carrinho', JSON.stringify(carrinho));

            // Atualiza o feedback visual do botão para indicar sucesso (muda o texto e a cor para verde)
            btnCarrinho.textContent = '✓ Adicionado ao Carrinho!';
            btnCarrinho.style.background = '#1a6e3c';
            
            // Desativa o botão para impedir que o usuário clique repetidamente no mesmo item
            btnCarrinho.disabled = true;
        });
    }

} else {
    // TRATAMENTO DE ERRO: Caso o ID digitado na URL não exista ou esteja em branco...
    // Injeta um layout de erro usando tags semânticas (article, header, footer) para acessibilidade e SEO
    // O 'aria-live="polite"' avisa imediatamente leitores de tela de que houve uma mudança de conteúdo de erro ali
    container.innerHTML = `
        <article class="erro-produto" aria-live="polite">
            <header>
                <h2>Ops! Produto não encontrado.</h2>
            </header>
            <p>O produto que você está procurando não existe ou foi removido do nosso catálogo.</p>
            <footer>
                <a href="../index.html" class="btn-comprar-interno" style="display:inline-block; margin-top:20px; text-decoration:none;">Voltar para a Home</a>
            </footer>
        </article>
    `;
}
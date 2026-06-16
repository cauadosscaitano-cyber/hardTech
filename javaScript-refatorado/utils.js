// ==========================================
// UTILS.JS — Funções utilitárias compartilhadas
// Inclua este arquivo ANTES de qualquer outro
// script nas páginas que precisarem dele.
// ==========================================

// ------------------------------------------
// Calcula o total de um array de itens do carrinho
// Cada item deve ter a propriedade `preco` no formato "1.299,90"
// ------------------------------------------
// Declara uma função chamada 'calcularTotalCarrinho' que recebe uma lista (array) de produtos 'itens'
function calcularTotalCarrinho(itens) {
    
    // O método 'reduce' percorre o array para transformar a lista em um único valor final (a soma total)
    // 'soma' é o acumulador (guarda o total atual), 'item' é o produto atual que o loop está lendo
    return itens.reduce((soma, item) => {
        
        // item.preco.replace(/\./g, '') -> Localiza e remove todos os pontos (ex: "1.299,90" vira "1299,90")
        // .replace(',', '.') -> Substitui a vírgula por ponto para o JavaScript entender (vira "1299.90")
        // 'parseFloat' -> Converte esse texto limpo em um número decimal real/computável
        const valor = parseFloat(item.preco.replace(/\./g, '').replace(',', '.'));
        
        // 'isNaN(valor)' -> Verifica se a conversão falhou por algum motivo e gerou um "Not a Number" (Não é um Número)
        // Se falhou (?), adiciona 0 à soma. Se deu certo (:), adiciona o valor real do produto
        return soma + (isNaN(valor) ? 0 : valor);
        
    }, 0); // Este número '0' é o valor inicial da variável 'soma' no começo do cálculo
}

// ------------------------------------------
// Formata um número para moeda BRL
// Ex: 1299.9 → "R$ 1.299,90"
// ------------------------------------------
// Declara uma função que recebe um número puro ('valor') para formatá-lo como dinheiro brasileiro
function formatarBRL(valor) {
    
    // O método 'toLocaleString' converte o número para o padrão de escrita de uma região específica
    // 'pt-BR' -> Define o idioma como Português do Brasil
    // style: 'currency' -> Diz que o formato visual deve ser o de uma moeda corrente
    // currency: 'BRL' -> Define o Real Brasileiro como o tipo de moeda (colocando o "R$")
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// ------------------------------------------
// Retorna { src, alt } de imagem com base
// em palavras-chave do nome do produto (em minúsculas)
// ------------------------------------------
// Declara uma função que recebe um texto ('nomeNormalizado') para descobrir qual imagem corresponde ao produto
function buscarImagem(nomeNormalizado) {
    
    // O método '.includes()' verifica se uma palavra específica existe dentro do texto do nome do produto.
    // Se encontrar a palavra-chave, a função para imediatamente ali e retorna (devolve) um objeto contendo:
    // 'src' (o caminho onde o arquivo de imagem está salvo) e 'alt' (o texto alternativo de descrição da imagem).

    if (nomeNormalizado.includes('5070'))                                         return { src: '../img/img-promocoes/rtx5070.webp',           alt: 'RTX 5070' };
    
    if (nomeNormalizado.includes('7800xt') || nomeNormalizado.includes('radeon')) return { src: '../img/img-index/rx7800xt.png',               alt: 'RX 7800 XT' };
    
    if (nomeNormalizado.includes('7800x3d') || nomeNormalizado.includes('ryzen')) return { src: '../img/img-promocoes/ryzen7800x3d.webp',      alt: 'Ryzen 7 7800X3D' };
    
    if (nomeNormalizado.includes('i7') || nomeNormalizado.includes('14700k') || nomeNormalizado.includes('intel')) return { src: '../img/img-index/intel_i7.png', alt: 'Intel i7' };
    
    if (nomeNormalizado.includes('2tb'))                                          return { src: '../img/img-promocoes/SSD2TB.png',              alt: 'SSD 2TB' };
    
    if (nomeNormalizado.includes('nvme') || nomeNormalizado.includes('ssd'))      return { src: '../img/img-index/ssd1tb.webp',                alt: 'SSD NVMe' };
    
    if (nomeNormalizado.includes('b650') || nomeNormalizado.includes('placa-mãe')) return { src: '../img/img-index/placa_mae_b650.webp',      alt: 'Placa-Mãe B650M' };
    
    if (nomeNormalizado.includes('water') || nomeNormalizado.includes('cooler 240mm')) return { src: '../img/img-promocoes/WaterCooler.png',  alt: 'Water Cooler' };
    
    if (nomeNormalizado.includes('air') || nomeNormalizado.includes('tower'))     return { src: '../img/img-index/aircooler_tower.webp',       alt: 'Air Cooler' };
    
    if (nomeNormalizado.includes('32gb'))                                         return { src: '../img/img-promocoes/ram_32gb_ddr5.png',        alt: 'RAM 32GB' };
    
    if (nomeNormalizado.includes('16gb') || nomeNormalizado.includes('memória'))  return { src: '../img/img-index/ram_16gb_single.webp',       alt: 'RAM 16GB' };
    
    if (nomeNormalizado.includes('teclado'))                                      return { src: '../img/img-promocoes/TecladoRGB.webp',          alt: 'Teclado RGB' };
    
    if (nomeNormalizado.includes('mouse'))                                        return { src: '../img/img-promocoes/MouseWireless.webp',      alt: 'Mouse Gamer' };
    
    if (nomeNormalizado.includes('headset'))                                      return { src: '../img/img-promocoes/HeadsetWireless.webp',    alt: 'Headset' };
    
    if (nomeNormalizado.includes('monitor'))                                      return { src: '../img/img-promocoes/MonitorCurvo.png',          alt: 'Monitor' };
    
    if (nomeNormalizado.includes('cadeira'))                                      return { src: '../img/img-promocoes/CadeiraGamer.webp',         alt: 'Cadeira Gamer' };
    
    if (nomeNormalizado.includes('gabinete'))                                     return { src: '../img/img-promocoes/GabineteAquario.png',      alt: 'Gabinete' };

    if (nomeNormalizado.includes('750w') || nomeNormalizado.includes('fonte'))    return { src: '../img/img-promocoes/Fonte_750w.webp',          alt: 'Fonte 750W' };

    return { src: '../img/hardtech_logo_v1_2-Photoroom.png', alt: 'Produto HardTech' };
}
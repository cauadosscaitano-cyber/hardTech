// ==========================================
// 1. CAPTURA DE PARÂMETROS DA URL (PRODUTO E PREÇO)
// ==========================================
const parametros = new URLSearchParams(window.location.search);
const produto = parametros.get("produto") || "Produto não informado";
const preco = parametros.get("preco") || "0,00";

// Se existirem elementos para mostrar o produto no topo da tela, injeta neles
const nomeProduto = document.getElementById("nomeProduto");
const precoProduto = document.getElementById("precoProduto");

if (nomeProduto) nomeProduto.textContent = produto;
if (precoProduto) precoProduto.textContent = preco;


// ==========================================
// 2. ENVIO DO FORMULÁRIO AND MONTAGEM DO RESUMO
// ==========================================
const formPagamentoElement = document.getElementById("formPagamento");

if (formPagamentoElement) {
    formPagamentoElement.addEventListener("submit", function (e) {
        e.preventDefault(); // Impede a página de recarregar e sumir com os dados

        // 1. Atualiza as informações de texto no card de confirmação semântico
        document.getElementById("resProduto").textContent = produto;
        document.getElementById("resPreco").textContent = "R$ " + preco;
        
        document.getElementById("resNome").textContent = document.getElementById("nome").value;
        document.getElementById("resEmail").textContent = document.getElementById("email").value;
        document.getElementById("resCpf").textContent = document.getElementById("cpf").value;
        document.getElementById("resTelefone").textContent = document.getElementById("telefone").value;
        document.getElementById("resPagamento").textContent = document.getElementById("formaPagamento").value;

        // 2. Mágica da Imagem baseada no nome do produto recebido pela URL
        const imgElement = document.getElementById("resImgProduto");
        
        if (imgElement) {
            const nomeNormalizado = produto.toLowerCase();

            if (nomeNormalizado.includes("5070")) {
                imgElement.src = "../img/img-promocoes/rtx5070.webp"; 
                imgElement.alt = "Placa de Vídeo RTX 5070";
            } else if (nomeNormalizado.includes("7800xt") || nomeNormalizado.includes("radeon")) {
                imgElement.src = "../img/img-index/rx7800xt.png";
                imgElement.alt = "Placa de Vídeo Radeon RX 7800 XT";
            } else if (nomeNormalizado.includes("7800x3d") || nomeNormalizado.includes("ryzen")) {
                imgElement.src = "../img/img-promocoes/ryzen7800x3d.webp";
                imgElement.alt = "Processador Ryzen 7";
            } else if (nomeNormalizado.includes("i7") || nomeNormalizado.includes("14700k") || nomeNormalizado.includes("intel")) {
                imgElement.src = "../img/img-index/intel_i7.png";
                imgElement.alt = "Processador Intel Core i7";
            } else if (nomeNormalizado.includes("2tb")) { 
                imgElement.src = "../img/img-promocoes/SSD2TB.png";
                imgElement.alt = "SSD NVMe 2TB";
            } else if (nomeNormalizado.includes("nvme") || nomeNormalizado.includes("ssd")) {
                imgElement.src = "../img/img-index/ssd1tb.webp";
                imgElement.alt = "SSD NVMe 1TB";
            } else if (nomeNormalizado.includes("b650") || nomeNormalizado.includes("placa-mãe")) {
                imgElement.src = "../img/img-index/placa_mae_b650.webp";
                imgElement.alt = "Placa-Mãe B650M";
            } else if (nomeNormalizado.includes("water") || nomeNormalizado.includes("cooler 240mm")) {
                imgElement.src = "../img/img-promocoes/WaterCooler.png";
                imgElement.alt = "Water Cooler RGB 240mm";
            } else if (nomeNormalizado.includes("air") || nomeNormalizado.includes("tower")) {
                imgElement.src = "../img/img-index/aircooler_tower.webp";
                imgElement.alt = "Air Cooler Dual Tower";
            } else if (nomeNormalizado.includes("32gb")) {
                imgElement.src = "../img/img-promocoes/ram_32gb_ddr5.png";
                imgElement.alt = "Kit Memória RAM 32GB";
            } else if (nomeNormalizado.includes("16gb") || nomeNormalizado.includes("memória")) {
                imgElement.src = "../img/img-index/ram_16gb_single.webp";
                imgElement.alt = "Memória RAM 16GB";
            } else if (nomeNormalizado.includes("teclado")) {
                imgElement.src = "../img/img-promocoes/TecladoRGB.webp";
                imgElement.alt = "Teclado Mecânico RGB";
            } else if (nomeNormalizado.includes("mouse")) {
                imgElement.src = "../img/img-promocoes/MouseWireless.webp";
                imgElement.alt = "Mouse Gamer Wireless";
            } else if (nomeNormalizado.includes("headset")) {
                imgElement.src = "../img/img-promocoes/HeadsetWireless.webp";
                imgElement.alt = "Headset Gamer 7.1 Wireless";
            } else if (nomeNormalizado.includes("monitor")) {
                imgElement.src = "../img/img-promocoes/MonitorCurvo.png";
                imgElement.alt = "Monitor Curvo 27";
            } else if (nomeNormalizado.includes("cadeira")) {
                imgElement.src = "../img/img-promocoes/CadeiraGamer.webp";
                imgElement.alt = "Cadeira Gamer Premium";
            } else if (nomeNormalizado.includes("gabinete")) {
                imgElement.src = "../img/img-promocoes/GabineteAquario.png";
                imgElement.alt = "Gabinete Aquário Luxury";
            } else if (nomeNormalizado.includes("750w") || nomeNormalizado.includes("fonte")) {
                imgElement.src = "../img/img-promocoes/Fonte_750w.webp"; 
                imgElement.alt = "Fonte 750W 80 Plus";
            } else {
                imgElement.src = "../img/hardtech_logo_v1_2-Photoroom.png";
                imgElement.alt = "Produto HardTech";
            }
        }

        // 3. Exibe a seção de confirmação e faz a rolagem suave
        const secaoConfirmacao = document.getElementById("confirmacao");
        if (secaoConfirmacao) {
            secaoConfirmacao.style.display = "block";
            secaoConfirmacao.scrollIntoView({ behavior: "smooth" });
        }
    });
}

// ==========================================
// 3. BOTÃO FINAL - CONCLUIR E LIMPAR TUDO
// ==========================================
function enviarCompra() {
    alert(
        `Compra realizada com sucesso!\n\n` +
        `Produto: ${produto}\n` +
        `Valor: R$ ${preco}`
    );

    const formElement = document.getElementById("formPagamento");
    if (formElement) formElement.reset();
    
    const secaoConfirmacao = document.getElementById("confirmacao");
    if (secaoConfirmacao) secaoConfirmacao.style.display = "none";

    // Retorna para a página principal
    window.location.href = "../index.html";
}
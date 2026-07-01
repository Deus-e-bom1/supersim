const baseLinks = {
    up1: "https://www.pagamentos-seguro.link/checkout/5c143e1e-7ec4-4ab1-a1e6-e17263bd5eea", // IOF
    up2: "https://www.pagamentos-seguro.link/checkout/285d31b9-203a-4566-ba85-761ebd0ac71a", // Taxa de verificação de IOF
    up3: "https://www.pagamentos-seguro.link/checkout/59834d16-1711-47b4-ba34-97c5df782b62", // Seguro Prestamista "tarifa de cadastro"
    up4: "https://www.pagamentos-seguro.link/checkout/1e1920b4-f1e4-46c0-8d60-5b4442d36494", // NFe
    up5: "https://www.pagamentos-seguro.link/checkout/b3b8810e-ca3c-4b64-91ea-333b34f96667", // Ativar conta
    up6: "https://www.pagamentos-seguro.link/checkout/b1ef9c0f-2540-4497-9790-e6cccc009378", // Taxa de registro do contrato
    up7: "https://www.pagamentos-seguro.link/checkout/8b0cf684-a1ef-4b07-8df8-9942c4f7974a", // Parabéns, 20k adicional
    up8: "https://www.pagamentos-seguro.link/checkout/06a0f412-1490-403e-905b-884acf6fabac", // Erro no pagamento - 14,06
    up9: "https://www.pagamentos-seguro.link/checkout/238cb13e-f206-490c-b37f-b580840d5c93", // APP - 11,99
    up10:"https://www.pagamentos-seguro.link/checkout/c30cdb82-87d8-4f26-b809-b6a53d4e1234", // Taxa de Abertura TAC - 16,92
    up11:"https://www.pagamentos-seguro.link/checkout/0cf9261c-91f3-4abe-bfa2-1b1bd1606a62", // Taxa de Consultoria Financeira - 19,53
    up12:"https://pay.paguefinal.space/c/b0169469-cebc-43af-8ef4-076055e8b716" // Taxa de Processamento Administrativo - 31,92

};

function redirect(key) {
    try {
        if (!baseLinks[key]) {
            throw new Error(`Link para ${key} não encontrado!`);
        }

        const url = new URL(baseLinks[key]);
        url.search = new URLSearchParams(window.location.search).toString();

        window.location.href = url.href;
        
    } catch (error) {
        console.error('Erro no redirecionamento:', error);
        alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
    }
}

// Adiciona duas entradas no histórico para capturar a navegação para trás
history.pushState({}, '', location.href);
history.pushState({}, '', location.href);


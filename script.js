document.addEventListener("DOMContentLoaded", () => {
    const productGrid = document.querySelector(".product-grid");

    // Dados dos produtos
    const products = [
        {
            id: 1,
            name: "Organizador de Gavetas Ajustável",
            description: "Mantenha suas gavetas impecáveis com este organizador versátil e prático.",
            price: "R$ 49,90",
            image: "images/organizador-gavetas.jpg",
            link: "https://www.mercadolivre.com.br/?utm_source=kydrasite&utm_medium=referral&utm_campaign=organizador-gavetas"
        },
        {
            id: 2,
            name: "Copo Térmico Kydra - 500ml",
            description: "Mantenha sua bebida quente ou fria por horas com estilo e praticidade.",
            price: "R$ 89,90",
            image: "images/copo-termico.jpg",
            link: "https://www.mercadolivre.com.br/?utm_source=kydrasite&utm_medium=referral&utm_campaign=copo-termico"
        },
        {
            id: 3,
            name: "Coleira Pet Anti-Puxão Kydra",
            description: "Passeios mais agradáveis e seguros para você e seu melhor amigo.",
            price: "R$ 69,90",
            image: "images/coleira-pet.jpg",
            link: "https://www.mercadolivre.com.br/?utm_source=kydrasite&utm_medium=referral&utm_campaign=coleira-pet"
        },
        {
            id: 4,
            name: "Kit Utensílios de Cozinha Silicone",
            description: "Prepare suas refeições com praticidade e sem arranhar suas panelas.",
            price: "R$ 129,90",
            image: "images/utensilios-cozinha.jpg",
            link: "https://www.mercadolivre.com.br/?utm_source=kydrasite&utm_medium=referral&utm_campaign=kit-utensilios"
        },
        {
            id: 5,
            name: "Lancheira Térmica Infantil",
            description: "Ideal para manter o lanche das crianças fresco e saboroso por mais tempo.",
            price: "R$ 79,90",
            image: "images/lancheira-termica-infantil.jpg",
            link: "https://www.mercadolivre.com.br/?utm_source=kydrasite&utm_medium=referral&utm_campaign=lancheira-termica-infantil"
        },
        {
            id: 6,
            name: "Kit Organizador de Geladeira",
            description: "Mantenha sua geladeira organizada e seus alimentos frescos com este kit prático.",
            price: "R$ 99,90",
            image: "images/kit-organizacao-geladeira.jpg",
            link: "https://www.mercadolivre.com.br/?utm_source=kydrasite&utm_medium=referral&utm_campaign=kit-organizacao-geladeira"
        },
        {
            id: 7,
            name: "Potes Herméticos Empilháveis",
            description: "Organize sua despensa com estes potes herméticos que conservam seus alimentos por mais tempo.",
            price: "R$ 119,90",
            image: "images/potes-hermeticos.jpg",
            link: "https://www.mercadolivre.com.br/?utm_source=kydrasite&utm_medium=referral&utm_campaign=potes-hermeticos"
        },
        {
            id: 8,
            name: "Comedouro Elevado para Pets",
            description: "Proporcione uma alimentação mais confortável e saudável para seu pet com este comedouro elevado.",
            price: "R$ 89,90",
            image: "images/comedouro-elevado-pet.jpg",
            link: "https://www.mercadolivre.com.br/?utm_source=kydrasite&utm_medium=referral&utm_campaign=comedouro-elevado-pet"
        },
        {
            id: 9,
            name: "Divisórias de Gaveta Ajustáveis",
            description: "Mantenha suas gavetas sempre organizadas com estas divisórias ajustáveis e fáceis de instalar.",
            price: "R$ 39,90",
            image: "images/divisorias-gaveta.jpg",
            link: "https://www.mercadolivre.com.br/?utm_source=kydrasite&utm_medium=referral&utm_campaign=divisorias-gaveta"
        },
        {
            id: 10,
            name: "Cabides Slim Aveludados",
            description: "Otimize o espaço do seu guarda-roupa e evite que suas roupas escorreguem com estes cabides slim.",
            price: "R$ 59,90",
            image: "images/cabides-slim.jpg",
            link: "https://www.mercadolivre.com.br/?utm_source=kydrasite&utm_medium=referral&utm_campaign=cabides-slim"
        }
    ];

    function renderProducts() {
        if (productGrid) {
            productGrid.innerHTML = "";
            products.forEach(product => {
                const productCard = document.createElement("div");
                productCard.classList.add("product-card");
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p class="price">${product.price}</p>
                    <a href="${product.link}" target="_blank" class="buy-btn">Comprar no Mercado Livre</a>
                `;
                productGrid.appendChild(productCard);
            });
        }
    }

    renderProducts();

    // Smooth scrolling para links de navegação
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

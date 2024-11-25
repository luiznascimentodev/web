document.addEventListener("DOMContentLoaded", function () {
    // Formulário de envio
    const form = document.querySelector("form"); // Seleciona o formulário
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Previne o envio do formulário

            const nome = document.getElementById("nome").value; // Obtém o valor do campo "nome"
            const email = document.getElementById("email").value; // Obtém o valor do campo "email"
            const mensagem = document.getElementById("mensagem").value; // Obtém o valor do campo "mensagem"

            // Exibe os dados no formato de alerta
            alert(`Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);
        });
    }

    // Menu Hamburguer
    const hamburguer = document.querySelector('.hamburguer');
    const menus = document.querySelector('.menus');

    if (hamburguer && menus) {
        hamburguer.addEventListener('click', () => {
            menus.classList.toggle('active'); // Alterna a visibilidade de todos os menus
        });
    }

    // Expandir/colapsar posts de blog
    const expandButtons = document.querySelectorAll('.expand-btn');

    expandButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const blogPost = event.target.closest('.blog-post');
            
            // Alterna a classe 'active' para expandir ou recolher o conteúdo
            blogPost.classList.toggle('active');
            
            // Troca o texto do botão
            if (blogPost.classList.contains('active')) {
                event.target.textContent = 'Saiba menos';
            } else {
                event.target.textContent = 'Saiba mais';
            }
        });
    });

    // Efeitos de hover no ícone do WhatsApp
    const whatsappIcon = document.getElementById("whatsapp-icon");
    if (whatsappIcon) {
        whatsappIcon.addEventListener("mouseover", () => {
            whatsappIcon.style.transform = "scale(1.1)";
        });

        whatsappIcon.addEventListener("mouseout", () => {
            whatsappIcon.style.transform = "scale(1)";
        });
    }

    // Verificar termos antes de enviar formulário de contato
    const contatoForm = document.getElementById("contato-form");
    if (contatoForm) {
        contatoForm.addEventListener("submit", function (event) {
            const termosCheckbox = document.getElementById("termos");
            
            // Verifica se a checkbox está marcada
            if (!termosCheckbox.checked) {
                alert("Você precisa aceitar os termos de uso para enviar o formulário.");
                event.preventDefault(); // Impede o envio do formulário
            }
        });
    }

    // Troca de fundo nos cards
    const changeBGButton = document.getElementById('changeBG');
    if (changeBGButton) {
        changeBGButton.addEventListener('click', function () {
            console.log('Botão clicado');
            let cards = document.querySelectorAll('.card');
            cards.forEach(function (card) {
                if (card.style.backgroundColor === 'lightblue') {
                    card.style.backgroundColor = ''; // Reseta o fundo
                } else {
                    card.style.backgroundColor = 'lightblue'; // Altera para lightgray
                }
            });
        });
    }
});

// Captura o formulário e botão de cálculo
const calcularBtn = document.getElementById("calcular-btn");
const resultadoDiv = document.getElementById("resultado-custo");

// Adiciona evento de clique ao botão de cálculo
calcularBtn.addEventListener("click", () => {
    const distanciaInput = document.getElementById("distancia");
    const distancia = parseFloat(distanciaInput.value);

    if (isNaN(distancia) || distancia <= 0) {
        resultadoDiv.textContent = "Por favor, insira uma distância válida!";
        resultadoDiv.style.color = "red";
        return;
    }

    // Calcula o custo da visita técnica
    const custo = distancia * 1; // R$1 por KM
    resultadoDiv.textContent = `O custo estimado para a visita técnica é: R$ ${custo.toFixed(2)}`;
    resultadoDiv.style.color = "#333";
});



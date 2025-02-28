// Inicialize a LightGallery
document.addEventListener('DOMContentLoaded', () => {
    const gallery = lightGallery(document.getElementById('animated-thumbnails'), {
        selector: '.gallery-item',
        speed: 500,
        thumbnail: true,
        animateThumb: true,
        zoomFromOrigin: false,
        allowMediaOverlap: true,
        toggleThumb: true,
        controls: true,
        plugins: [lgThumbnail, lgShare, lgZoom],
        sharePluginStrings: {
            toggleFacebook: 'Compartilhar no Facebook',
            toggleTwitter: 'Compartilhar no Twitter',
            togglePinterest: 'Compartilhar no Pinterest',
            toggleWhatsapp: 'Compartilhar no WhatsApp',
            copy: 'Copiar link',
            close: 'Fechar'
        },
        zoom: true, // Ativa o zoom
        scale: 2, // Nível de zoom máximo
        actualSize: false, // Desativa o botão de tamanho real
        subHtmlSelectorRelative: true, // Faz a legenda ser relativa ao item da galeria
        showThumbByDefault: false, // Oculta as miniaturas por padrão
        //appendSubHtmlTo: '.lg-item', // Anexa a legenda ao item da galeria
        mode: 'lg-fade', // Efeito de transição
        download: false, // Desativa o botão de download
        counter: true, // Mostra o contador de imagens
        closable: true, // Permite fechar a galeria clicando fora
        escKey: true, // Permite fechar a galeria com a tecla ESC
        keyPress: true, // Permite navegação com teclado
        swipeThreshold: 50, // Sensibilidade do gesto de swipe
        enableDrag: true, // Permite arrastar a imagem
        enableSwipe: true // Permite navegar com gestos de swipe

    });

    gallery.init();
});


const phoneNumber = "5567981316882";

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const primaryNav = document.querySelector(".primary-navigation");

    menuToggle.addEventListener("click", function () {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", !isExpanded);
        primaryNav.classList.toggle("is-active");
    });
});


function detectOS() {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;

    if (/Android|iPhone|iPad|iPod|Windows/.test(userAgent)) {
        return "mobileOrWindows";
    }
    return "other";
}

function updateWhatsAppLink() {
    const whatsappLink = document.getElementById("whatsapp");
    const message = "Olá! 👋 Estou interessado(a) no *kit pegue e monte* e gostaria de mais informações. 🛠️✨ Poderia me ajudar?";
    const encodedMessage = encodeURIComponent(message);
    const baseURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    const webURL = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    if (detectOS() === "mobileOrWindows") {
        whatsappLink.href = baseURL;
    } else {
        whatsappLink.href = webURL;
    }
}

// Executa a função ao carregar a página
window.onload = updateWhatsAppLink;


function sendWhatsAppMessage() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const fone = document.getElementById('fone').value;
    const mensagem = document.getElementById('mensagem').value;
    const whatsappMessage = `*Nome:* ${nome}%0A*Email:* ${email}%0A*Telefone:* ${fone}%0A*Mensagem:* ${mensagem}`;
    const app = detectOS() === "mobileOrWindows" ? 'api' : 'web';
    const whatsappUrl = `https://${app}.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
}


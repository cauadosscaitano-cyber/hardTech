// ==========================================
// 1. MENU HAMBÚRGUER (mobile/tablet)
// ==========================================
const hamburgerBtn = document.getElementById('hamburger-btn');
const mainNav      = document.getElementById('main-nav');
const navOverlay   = document.getElementById('nav-overlay');

function openNav() {
    mainNav.classList.add('nav-open');
    navOverlay.classList.add('visible');
    hamburgerBtn.classList.add('open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    navOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // impede scroll do body enquanto o menu está aberto
}

function closeNav() {
    mainNav.classList.remove('nav-open');
    navOverlay.classList.remove('visible');
    hamburgerBtn.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    navOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
        const isOpen = mainNav.classList.contains('nav-open');
        isOpen ? closeNav() : openNav();
    });
}

if (navOverlay) {
    navOverlay.addEventListener('click', closeNav);
}

// Fecha o nav ao redimensionar para desktop
window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) closeNav();
});

// Fecha ao clicar em um link do menu (mobile UX)
if (mainNav) {
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) closeNav();
        });
    });
}

// ==========================================
// 2. ACCORDION DE DETAILS (apenas um aberto por vez)
// ==========================================
// Garante que ao abrir um <details>, todos os outros fecham
if (mainNav) {
    const allDetails = mainNav.querySelectorAll('details');

    allDetails.forEach(detail => {
        detail.addEventListener('toggle', () => {
            // Se este details acabou de abrir, fecha todos os outros
            if (detail.open) {
                allDetails.forEach(other => {
                    if (other !== detail) {
                        other.removeAttribute('open');
                    }
                });
            }
        });
    });
}

// ==========================================
// 3. ALTERNÂNCIA DE TEMA (MODO ESCURO)
// ==========================================
const themeToggle = document.getElementById('theme-toggle');
const temaSalvo   = localStorage.getItem('hardtech-theme');

if (temaSalvo === 'dark') {
    document.body.classList.add('dark-mode');
}

if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', document.body.classList.contains('dark-mode'));

    themeToggle.addEventListener('click', () => {
        const modoEscuroAtivo = document.body.classList.toggle('dark-mode');
        themeToggle.setAttribute('aria-pressed', modoEscuroAtivo);
        localStorage.setItem('hardtech-theme', modoEscuroAtivo ? 'dark' : 'light');
    });
}
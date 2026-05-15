export function initNav() {
    const hamburgerBtn = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('show');
        });
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && e.target !== hamburgerBtn) {
                navMenu.classList.remove('show');
            }
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            navMenu?.classList.remove('show');
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

export function initNav() {
    const hamburgerBtn = document.getElementById('hamburger-menu');
    const dropdownMenu = document.getElementById('dropdown-menu');
    if (hamburgerBtn && dropdownMenu) {
        hamburgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownMenu.classList.toggle('show');
        });
        document.addEventListener('click', (e) => {
            if (!dropdownMenu.contains(e.target) && e.target !== hamburgerBtn) {
                dropdownMenu.classList.remove('show');
            }
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            dropdownMenu?.classList.remove('show');
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

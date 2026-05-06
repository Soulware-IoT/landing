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
}

export function initActuators() {
    const items = document.querySelectorAll('.actuator-item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            if (!item.classList.contains('animating')) {
                item.classList.add('animating');
                setTimeout(() => {
                    item.classList.remove('animating');
                }, 1500); // 1.5s animation duration
            }
        });
    });
}

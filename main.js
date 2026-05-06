import { initHeroDashboard } from './hero/script.js';
import { initNav } from './nav/script.js';
import { applyTranslations, toggleLanguage } from './i18n/script.js';

document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initHeroDashboard();
    applyTranslations();

    const langBtns = document.querySelectorAll('.lang-toggle');
    langBtns.forEach(btn => toggleLanguage(btn));
});

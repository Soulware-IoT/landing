import { initHeroDashboard } from './hero/script.js';
import { initNav } from './nav/script.js';
import { setLanguage, getLanguage, applyTranslations } from './i18n/script.js';

document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initHeroDashboard();
    applyTranslations();

    // Add a floating button to showcase the translation functionality
    const langBtn = document.createElement('button');
    langBtn.textContent = '🌐 EN / ES';
    langBtn.style.cssText = 'position: absolute; top: 20px; right: 20px; padding: 8px 16px; border-radius: 4px; background: white; border: 1px solid #ccc; cursor: pointer; z-index: 1000; font-family: sans-serif;';

    langBtn.addEventListener('click', () => {
        const newLang = getLanguage() === 'en' ? 'es' : 'en';
        setLanguage(newLang);
    });

    document.body.appendChild(langBtn);
});

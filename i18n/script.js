import { translations } from './dict.js';

let currentLanguage = 'es';

export function setLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        applyTranslations();
    } else {
        console.warn(`Language ${lang} is not supported.`);
    }
}

export function getLanguage() {
    return currentLanguage;
}

export function applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

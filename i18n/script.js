import { translations } from './dict.js';

let currentLanguage = 'en';

function setLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        applyTranslations();
    } else {
        console.warn(`Language ${lang} is not supported.`);
    }
}

function getTranslationFor(key) {
    return translations[currentLanguage][key];
}

function existsTranslationFor(key) {
    return translations[currentLanguage] && getTranslationFor(key);
}

export function applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (existsTranslationFor(key)) {
            element.textContent = getTranslationFor(key);
        }
    });
}

export function toggleLanguage(button) {
    button.addEventListener('click', () => {
        const newLang = currentLanguage === 'en' ? 'es' : 'en';
        setLanguage(newLang);
    });
}

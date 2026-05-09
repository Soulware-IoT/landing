import { translations } from './dict.js';

let currentLanguage = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        localStorage.setItem('lang', lang);
        applyTranslations();
    } else {
        console.warn(`Language ${lang} is not supported.`);
    }
}

function getTranslationFor(key) {
    return translations[currentLanguage]?.[key];
}

export function applyTranslations() {
    document.documentElement.lang = currentLanguage;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const val = getTranslationFor(el.getAttribute('data-i18n'));
        if (val != null) el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const val = getTranslationFor(el.getAttribute('data-i18n-html'));
        if (val != null) el.innerHTML = val;
    });
}

export function toggleLanguage(button) {
    button.addEventListener('click', () => {
        setLanguage(currentLanguage === 'en' ? 'es' : 'en');
    });
}

const translations = {
    en: {
        'hero.title': 'Preventing Catastrophes Before They Start.',
        'hero.description': 'Cocina360 streamlines your operations through digitalized internal controls and an integrated IoT network built for proactive risk management and rapid incident response.',
        'hero.btn.primary': 'Get Started',
        'hero.btn.secondary': 'View Demo',
        'status.title': 'System Status',
        'status.ambient_temp.label': 'Ambient Temp',
        'status.air_quality.label': 'Air Quality (CO)',
        'status.heat_anomaly.label': 'Heat Anomaly',
        'status.heat_anomaly.value': 'Grill Station',
        'status.badge.optimal': 'OPTIMAL',
        'status.badge.review': 'REVIEW'
    },
    es: {
        'hero.title': 'Detén los incendios antes de que comiencen.',
        'hero.description': 'Cocina360 empodera tu emprendimiento mediante herramientas de digitalización de procesos de control interno y un sistema integrado de dispositivos inteligentes para prevenir y responder ante incidentes críticos.',
        'hero.btn.primary': 'Comenzar',
        'hero.btn.secondary': 'Ver Demo',
        'status.title': 'Estado del Sistema',
        'status.ambient_temp.label': 'Temp. Ambiente',
        'status.air_quality.label': 'Calidad del Aire (CO)',
        'status.heat_anomaly.label': 'Anomalía Térmica',
        'status.heat_anomaly.value': 'Estación de Parrilla',
        'status.badge.optimal': 'ÓPTIMO',
        'status.badge.review': 'REVISAR'
    }
};

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

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './i18n/en.json';
import es from './i18n/es.json';
import pt from './i18n/pt.json';

i18n.use(initReactI18next).init({
  lng: 'pt_BR',
  fallbackLng: 'pt_BR',
  debug: false,
  resources: {
    pt_BR: pt,
    en_US: en,
    es,
  },
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

// Regras de pluralização para pt_BR
i18n.services.pluralResolver.addRule('pt_BR', {
  numbers: [1, 2],
  plurals: (n) => Number(n > 1),
});

i18n.services.pluralResolver.addRule('en_US', {
  numbers: [1, 2],
  plurals: (n) => Number(n > 1),
});

export default i18n;

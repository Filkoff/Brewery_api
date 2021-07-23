import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          title: "Breweries list",
          button1: "Search",
          button2: "Show information",
          button3: "Close",
          city: "City",
          type: "Type",
          nothingFound: "Nothing was found",
          loading: "Loading",
        },
      },
      ru: {
        translation: {
          title: "Список пивоварен",
          button1: "Поиск",
          button2: "Показать информацию",
          button3: "Закрыть",
          city: "Город",
          type: "Тип",
          nothingFound: "Ничего не найдено",
          loading: "Загрузка",
        },
      },
    },
  });

export default i18n;

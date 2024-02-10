/* eslint-disable no-dupe-keys */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { arStrings } from "@/app/localization/ar";
import { enStrings } from "@/app/localization/en";
const storedLang = "en"; //localStorage.getItem("language");
const resources = {
  en: {
    translation: enStrings,
  },
  ar: {
    translation: arStrings,
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: storedLang || "en",
  fallbackLng: "en",
  returnObjects: true,
});
export default i18n;

import { Global } from "iconsax-react";
import { useTranslation } from "react-i18next";

const LangSwitch = () => {
  const { i18n } = useTranslation();
  const hanleChangeLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };

  return (
    <div
      className="flex flex-row items-center gap-2 text-white cursor-pointer hover:opacity-[.8]"
      onClick={hanleChangeLang}
    >
      <span>{i18n.language === "en" ? "اللغة العربية" : "English"}</span>
      <Global size={24} />
    </div>
  );
};

export default LangSwitch;

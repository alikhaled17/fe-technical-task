/* eslint-disable @typescript-eslint/no-explicit-any */
import logo from "@/assets/images/Sarmad Logo Header.svg";
import { useTranslation } from "react-i18next";
import LangSwitch from "../atoms/LangSwitch";

const Navigation = () => {
  const { t } = useTranslation();
  const staticData: any = t("home_static_data");

  return (
    <nav className="container mx-auto px-[20px] md:px-2">
      <div className="flex gap-4 flex-col md:flex-row items-center justify-center md:justify-between py-1 md:py-4 flex-wrap ">
        <img className="w-[150px]" src={logo} alt="Sarmad Logo Header" />
        <h2 className="text-center text-white text-md lg:text-xl font-bold">
          {staticData.header}
        </h2>
        <LangSwitch />
      </div>
    </nav>
  );
};

export default Navigation;

import Navigation from "@/app/components/shared/Navigation";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { i18n } = useTranslation();
  return (
    <div
      className="bg-main-blue h-screen overflow-x-hidden"
      style={{
        direction: i18n.language === "en" ? "ltr" : "rtl",
      }}
    >
      <Navigation />
      <main className="container mx-auto px-[20px] md:px-2">{children}</main>
    </div>
  );
};

export default MainLayout;

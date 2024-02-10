/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from "react-i18next";

type LongTextProps = {
  text: string;
  length?: number;
};
const LongText = ({ text, length = 20 }: LongTextProps) => {
  const { t } = useTranslation();
  const staticData: any = t("global_static_data");
  const [showFullText, setShowFullText] = useState(false);

  if (showFullText)
    return (
      <>
        {text}
        <small
          className="underline underline-offset-2 mx-1 cursor-pointer smoothy text-gray opacity-[0.8] hover:opacity-1"
          onClick={() => setShowFullText(false)}
        >
          {staticData.see_less}
        </small>
      </>
    );
  return (
    <>
      {text.length > length ? (
        <>
          {text.slice(0, length)}
          <small
            className="underline underline-offset-2 mx-1 cursor-pointer smoothy text-gray opacity-[0.8] hover:opacity-1"
            onClick={() => setShowFullText(true)}
          >
            {staticData.see_more}
          </small>
        </>
      ) : (
        text
      )}{" "}
    </>
  );
};

export default LongText;

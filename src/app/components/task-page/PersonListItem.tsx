/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from "react-i18next";
import Person, { PersonDescription } from "@/app/interfaces/Person";
import LongText from "../atoms/LongText";
type PersonListItemProps = {
  item: Person;
};

const PersonListItem = ({ item }: PersonListItemProps) => {
  const { t } = useTranslation();
  const staticData: any = t("home_static_data.search_results");
  const cardLabels = staticData.person_card_lables;

  const handleShowDiscreptions = (Discreptions: PersonDescription[]) => {
    const result: string[] = [];
    Discreptions.map((discreption: PersonDescription) => {
      Object.values(discreption).map((d) => d && result.push(d as string));
    });
    return result.join(",");
  };

  return (
    <div className="w-full p-4 px-6 bg-white rounded-md overflow-hidden shadow-lg h-full border border-light-green border-spacing-2 z-[2] hover:scale-[0.99] smoothy">
      <div className="flex flex-row flex-wrap gap-1 text-sm">
        <span className="text-main-blue font-semibold">
          {cardLabels.name}:{" "}
        </span>
        <span className="font-bold text-main-black">{item.name}</span>
      </div>
      <div className="flex flex-row flex-wrap gap-1 text-sm">
        <span className="text-main-blue font-semibold">
          {cardLabels.descriptions}:
        </span>
        <span className="font-bold text-main-black">
          {item.descriptions.length ? (
            handleShowDiscreptions(item.descriptions)
          ) : (
            <span className="text-[#00000060] italic">
              {cardLabels.unknown}
            </span>
          )}
        </span>
      </div>
      <div className="flex flex-row flex-wrap gap-1 text-sm">
        <span className="text-main-blue font-semibold">{cardLabels.nat}: </span>
        <span className="font-bold text-main-black">{item.nat}</span>
      </div>
      <div className="flex flex-row flex-wrap gap-1 text-sm">
        <span className="text-main-blue font-semibold">
          {cardLabels.places_of_birth}:
        </span>
        <span className="font-bold text-main-black">
          {item.places_of_birth.length ? (
            <LongText text={item.places_of_birth.join(",")} />
          ) : (
            <span className="text-[#00000060] italic">
              {cardLabels.unknown}
            </span>
          )}
        </span>
      </div>
      <div className="flex flex-row flex-wrap gap-1 text-sm">
        <span className="text-main-blue font-semibold">
          {cardLabels.score}:{" "}
        </span>
        <span className="font-bold text-main-black">{item.score}</span>
      </div>
    </div>
  );
};

export default PersonListItem;

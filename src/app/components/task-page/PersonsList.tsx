/* eslint-disable @typescript-eslint/no-explicit-any */
import Person from "../interfaces/Person";
import { ViewType } from "../interfaces/global";
import PersonListItem from "./PersonListItem";

type PersonsListProps = {
  list: Person[];
  viewStyle: ViewType;
};

const PersonsList = ({ list, viewStyle }: PersonsListProps) => {
  return (
    <div
      className={` ${
        viewStyle === "grid"
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
          : "flex flex-col gap-3"
      }`}
    >
      {list.map((item) => {
        return (
          <div
            key={item.entity_uuid}
            className={viewStyle === "grid" ? "col-span-1" : " w-full h-full"}
          >
            <PersonListItem item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default PersonsList;

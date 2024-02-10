/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BoxSearch,
  Category,
  ChartCircle,
  Dropbox,
  HambergerMenu,
  InfoCircle,
} from "iconsax-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { EmptyResultProps, ViewType } from "@/app/interfaces/global";
import { RootState } from "@/app/store";
import PersonsList from "./PersonsList";
import EmptyResult from "./EmptyResult";

const SearchResults = () => {
  const { results, isLoading, userAction, hasError } = useSelector(
    (state: RootState) => state.searchResults
  );
  const [viewStyle, setViewStyle] = useState<ViewType>("row");
  const { t } = useTranslation();
  const staticData: any = t("home_static_data.search_results");

  const handleEmptyResult = (): EmptyResultProps => {
    if (!userAction) {
      return {
        msg: staticData.search_feadback.noResults,
        color: "text-white",
        Icon: Dropbox,
      };
    } else if (isLoading && !hasError) {
      return {
        msg: staticData.search_feadback.loading,
        color: "text-light-green",
        Icon: ChartCircle,
        IconClasses: "animate-spin",
      };
    } else if (hasError && !isLoading) {
      return {
        msg: staticData.search_feadback.error,
        color: "text-yellow",
        Icon: InfoCircle,
      };
    } else {
      return {
        msg: staticData.search_feadback.noData,
        color: "text-white",
        Icon: BoxSearch,
      };
    }
  };

  return (
    <>
      {results.length ? (
        <>
          <div className="text-white flex flex-row items-center justify-between py-4 mb-4 border-b border-gray-500">
            <div>
              {staticData.result_count}
              <span className="font-bold">{results.length}</span>
            </div>
            <div className="flex flex-row gap-2 invisible md:visible">
              {viewStyle === "grid" ? (
                <HambergerMenu
                  className="cursor-pointer"
                  onClick={() => setViewStyle("row")}
                />
              ) : (
                <Category
                  className="cursor-pointer"
                  onClick={() => setViewStyle("grid")}
                />
              )}
            </div>
          </div>
          {<PersonsList viewStyle={viewStyle} list={results} />}
        </>
      ) : (
        <EmptyResult {...handleEmptyResult()} />
      )}
    </>
  );
};

export default SearchResults;

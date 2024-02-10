/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import { SearchNormal } from "iconsax-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  SearchRequest,
  userTakesAction,
} from "@/app/store/searchResultsReducer";
import { RootState } from "@/app/store";

// const Api =
//   "https://develop.sarmad.sa/api/v1/integration/focal/screen/individual";

const Search = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: RootState) => state.searchResults);
  const { t } = useTranslation();
  const staticData: any = t("home_static_data.search_form");
  const { first_name, middle_name, last_name, nationality } = staticData.inputs;

  const [debouncingTimer, setDebouncingTimer] = useState(
    setTimeout(() => {}, 0)
  );

  const formik = useFormik({
    initialValues: {
      fname: "",
      mname: "",
      lname: "",
      nat: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      dispatch(SearchRequest(values));
      dispatch(userTakesAction());
      setSubmitting(true);
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    formik.setFieldValue(name, value.trim());
    if (value.trim() === formik.values[name].trim()) return;
    if (debouncingTimer) clearTimeout(debouncingTimer);
    setDebouncingTimer(
      setTimeout(async () => {
        formik.handleSubmit();
      }, 750)
    );
  };

  const checkAtLeastOneName = () => {
    return (
      formik.values.fname !== "" ||
      formik.values.mname !== "" ||
      formik.values.lname !== ""
    );
  };

  return (
    <div>
      <form
        aria-disabled
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-4 gap-3"
      >
        <div className="col-span-4 md:col-span-2 lg:col-span-1">
          <input
            onChange={handleInputChange}
            onBlur={formik.handleBlur}
            value={formik.values.fname}
            placeholder={first_name.placeholder}
            type="text"
            id="fname"
            name="fname"
            className="global-input"
          />
        </div>
        <div className="col-span-4 md:col-span-2 lg:col-span-1">
          <input
            onChange={handleInputChange}
            onBlur={formik.handleBlur}
            value={formik.values.mname}
            placeholder={middle_name.placeholder}
            type="text"
            id="mname"
            name="mname"
            className="global-input"
          />
        </div>
        <div className="col-span-4 md:col-span-2 lg:col-span-1">
          <input
            onChange={handleInputChange}
            onBlur={formik.handleBlur}
            value={formik.values.lname}
            placeholder={last_name.placeholder}
            type="text"
            id="lname"
            name="lname"
            className="global-input"
          />
        </div>

        <div className="col-span-4 md:col-span-2 lg:col-span-1 relative group">
          <select
            className="global-input"
            id="nat"
            name="nat"
            onChange={handleInputChange}
            onBlur={formik.handleBlur}
            value={formik.values.nat}
            disabled={!checkAtLeastOneName()}
          >
            <option value="" disabled>
              {nationality.placeholder}
            </option>
            {staticData.exampleOFCountriesList.map((country) => (
              <option key={country.value} value={country.value}>
                {country.name}
              </option>
            ))}
          </select>
          {!checkAtLeastOneName() && (
            <small className="w-auto bg-blue-500 text-white text-center  rounded opacity-[0.5] transition-opacity duration-300  group-hover:opacity-100">
              {nationality.info}
            </small>
          )}
        </div>

        <div className="col-span-4">
          <button
            className="global-btn"
            disabled={isLoading || !checkAtLeastOneName()}
          >
            <span className="flex flex-row gap-2 items-center justify-center">
              {staticData.submit_btn.name} <SearchNormal />{" "}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;

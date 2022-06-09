/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useContext } from "react";
import { SearchContext } from "../../context";
import SearchIcon from "../SearchIcon";
import "./style.scss";

const DEBOUNCE_DELAY = 350;

const SearchInput = () => {
  const inputRef = useRef(null);

  const [state, _, { handleOnChange, handleOnFetch }] =
    useContext(SearchContext);
  const { searchString } = state;

  useEffect(() => {
    if (searchString) {
      const delayDebounceFn = setTimeout(() => {
        handleOnFetch();
      }, DEBOUNCE_DELAY);
      return () => clearTimeout(delayDebounceFn);
    }
  }, [searchString]);

  return (
    <div className="typeahead-search">
      <div className="typeahead-search__icon">
        <SearchIcon />
      </div>
      <input
        ref={inputRef}
        className="typeahead-search__input"
        type="text"
        value={searchString}
        onChange={(event) => handleOnChange(event)}
        placeholder="Type for search..."
      />
    </div>
  );
};

export default SearchInput;

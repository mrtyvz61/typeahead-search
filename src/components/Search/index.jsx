import React, { useRef, useContext } from "react";
import { SearchContext, SEARCH_ACTION_TYPES } from "../../context";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import SearchResults from "../SearchResult";
import SearchInput from "../SearchInput";
import "./style.scss";

const Search = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, dispatch] = useContext(SearchContext);

  const wrapperRef = useRef(null);

  const handleOnClickOutOfSearch = () => {
    if (wrapperRef.current) {
      dispatch({ type: SEARCH_ACTION_TYPES.RESET_STATE });
    }
  };

  useOutsideClick(wrapperRef, handleOnClickOutOfSearch);

  return (
    <div className="search-wrapper" ref={wrapperRef}>
      <SearchInput />
      <SearchResults />
    </div>
  );
};

export default Search;

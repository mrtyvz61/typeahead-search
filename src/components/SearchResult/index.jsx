/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { SearchContext } from "../../context";
import { isArrayNotEmpty } from "../../utils";
import Item from "./SearchItem";
import Message from "./SearchNoResults";
import "./style.scss";

const Results = () => {
  const [state, _] = useContext(SearchContext);
  const { searchString, searchResult } = state;

  const SearchResults = () => {
    if (!isArrayNotEmpty(searchResult) && !searchString.length > 0) {
      return null;
    }

    if (!searchString) {
      return <Message text="Try to search for something..." />;
    }

    return (
      <ul className="search-result-container__results">
        {isArrayNotEmpty(searchResult) &&
          searchResult.map((item, index) => <Item key={index} item={item} />)}
      </ul>
    );
  };

  return (
    <div className="search-result-container">
      <SearchResults />
    </div>
  );
};

export default Results;

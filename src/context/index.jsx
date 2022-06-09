import React, { createContext, useReducer } from "react";

// ACTION TYPES
export const SEARCH_ACTION_TYPES = Object.freeze({
  SET_SEARCH_STRING: "SET_SEARCH_STRING",
  SET_SEARCH_RESULT: "SET_SEARCH_RESULT",
  RESET_STATE: "RESET_STATE",
});

// INITIAL STATE
const initialState = {
  searchString: "",
  searchResult: [],
};

export const SearchContext = createContext();

// REDUCER
const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ACTION_TYPES.SET_SEARCH_STRING:
      return { ...state, searchString: action.payload };
    case SEARCH_ACTION_TYPES.SET_SEARCH_RESULT:
      return { ...state, searchResult: action.payload };
    case SEARCH_ACTION_TYPES.RESET_STATE:
      return { ...initialState };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

// CONTEXT PROVIDER
export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, initialState);

  const callApi = async (query) => {
    try {
      let response = await fetch(
        `https://62a067cf202ceef7086ce492.mockapi.io/users?firstName=${query}`
      );
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChange = (event) => {
    const { value } = event.target;
    dispatch({ type: SEARCH_ACTION_TYPES.SET_SEARCH_STRING, payload: value });
  };

  const handleOnFetch = async () => {
    let queryString = state?.searchString;
    if (queryString.length) {
      let response = await callApi(queryString);
      if (response)
        dispatch({
          type: SEARCH_ACTION_TYPES.SET_SEARCH_RESULT,
          payload: response,
        });
    }
  };

  return (
    <SearchContext.Provider
      value={[
        state,
        dispatch,
        {
          handleOnChange,
          handleOnFetch,
        },
      ]}
    >
      {children}
    </SearchContext.Provider>
  );
};

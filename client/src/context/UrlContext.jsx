import { createContext, useReducer } from "react";

export const UrlContext = createContext();

const initialState = {
  Urls: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_URL":
      return { Urls: action.payload };

    default:
      return state;
  }
}

export function UrlProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UrlContext.Provider value={{ state, dispatch }}>
      {children}
    </UrlContext.Provider>
  );
}

import { createContext, useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
  token: localStorage.getItem("token"),
};

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", action.payload);
      return { token: action.payload };

    case "LOGOUT":
      localStorage.removeItem("token");
      return { token: null };

    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

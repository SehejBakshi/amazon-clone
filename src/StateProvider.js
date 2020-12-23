import React, { createContext, useContext, useReducer } from "react";

// Prepared the dataLayer
export const StateContext = createContext();

// Wrap the app and provide dataLayer to every component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the dataLayer
export const useStateValue = () => useContext(StateContext);

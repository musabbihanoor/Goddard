import React, { createContext, useReducer } from "react";
import NodeReducer from "./appReducer";

// const InitialState = [{ data: { id: "null" } }];
const InitialState = null;
export const AppContext = createContext(InitialState);

export const AppContextProvider = ({ children }) => {
  let [state, dispatch] = useReducer(NodeReducer, InitialState);

  function addNodeData(nodeObj) {
    // console.log(nodeObj);
    dispatch({
      type: "ADD NODE DATA",
      payload: {
        data: nodeObj,
        id: nodeObj.id,
      },
    });
  }

  return (
    <AppContext.Provider
      value={{
        nodeData: state,
        addNodeData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

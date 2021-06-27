const NodeReducer = (state, action) => {
  switch (action.type) {
    case "ADD NODE DATA": {
      //   return [action.payload, ...state];
      return [action.payload];
    }
    // case "DELETE TRANSACTION": {
    //   console.log(action.payload);
    //   let newState = [...state];
    //   newState.splice(action.payload.id, 1);
    //   return newState;
    // }
    default:
      return state;
  }
};

export default NodeReducer;

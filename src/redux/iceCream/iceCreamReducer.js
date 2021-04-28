import { BUY_ICE_CREAM } from "./iceCreamType";
// define initial state
const initialState = {
  numOfIceCream: 10,
};

// reducer
const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return { ...state, numOfIceCream: state.numOfIceCream - 1 };
    default:
      return state;
  }
};

export default iceCreamReducer;

// import action Type
import { BUY_CAKE } from "./cakeType";

// actionCreator
export const buyCake = (number = 1) => {
  // action
  return {
    type: BUY_CAKE,
    payload: number, 
  };
};

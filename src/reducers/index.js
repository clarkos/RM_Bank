//import { TRANSFER,
//    DEPOSIT, 
//    WITHDRAW, 
//    PAYMENT, 
import{   MOVEMENT } from "../actions/index";

const initialState = {
  detail: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVEMENT:
      return {
        ...state,
        // detail: [...state.movement, action.payload]
        detail: [...state.detail, action.payload],
      };
    }

/*     case WITHDRAW:
      return {
        ...state,
        movement: [...state.movement, action.payload],
      };

    case TRANSFER:
      return {
        ...state,
        movement: [...state.movement, action.payload],
      };

    case PAYMENT:
      return {
        ...state,
        movement: [...state.movement, action.payload],
      };

    default:
      return { ...state };
  } */
};

export default rootReducer;

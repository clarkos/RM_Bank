import { DEPOSIT, WITHDRAW, PAYMENT, TRANSFER, ALERT } from '../actions/index';

const initialState = {
  movement: [],
  detail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
      case DEPOSIT:
          return{
              ...state,
              houses: action.payload
          };

      case WITHDRAW:
          return{
              ...state,
              house: action.payload
          };

      case TRANSFER:
          return{
              ...state,
              houses: [...state.houses, action.payload]
      };

      case PAYMENT:
          return{
              ...state,
              houses: state.houses.filter((e)=> e.id !== action.payload)
      };

      case ALERT:
          return{
              ...state,
              houses: state.houses.filter((e)=> e.id !== action.payload)
      };
      default: return { ...state };
  }
};

export default rootReducer;
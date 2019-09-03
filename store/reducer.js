import * as actionTypes from './action-types';

export const reduxInitialState = {
  typeOne: 1,
  typeTwo: 2,
  typeThree: 3,
};

const reducer = (state = reduxInitialState, action) => {
  switch (action.type) {
  case actionTypes.ACTION_TYPE_ONE:
    return {
      ...state,
      typeOne: state.typeOne + action.val,
    };
  case actionTypes.ACTION_TYPE_TWO:
    return {
      ...state,
      typeTwo: state.typeTwo - action.val,
    };
  case actionTypes.ACTION_TYPE_THREE:
    return {
      ...state,
      typeThree: state.typeThree + action.val,
    };
  default:
    return state;
  }
};

export default reducer;

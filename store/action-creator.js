import * as actionTypes from './action-types';

const actionCreatorOne = (val) => {
  return {
    type: actionTypes.ACTION_TYPE_ONE,
    val,
  };
};

const actionCreatorTwo = (val) => {
  return {
    type: actionTypes.ACTION_TYPE_TWO,
    val,
  };
};

const actionCreatorThree = (val) => {
  return {
    type: actionTypes.ACTION_TYPE_THREE,
    val,
  };
};

const asyncUpdateActionThree = async (num) => {
  return async (dispatch) => {
    const p1 = new Promise((resolve) => {
      setTimeout(() => {
        dispatch(actionCreatorThree(num));
        resolve();
      }, 1000);
    });
    await p1;
  };
};

export default {
  actionCreatorOne,
  actionCreatorTwo,
  asyncUpdateActionThree,
};

import React from 'react';
import { connect } from 'react-redux';
import actionCreators from '../store/action-creator';

const Count = ({
  typeThree,
}) => {
  return (
    <>
      这是组件从store中获取的数据
      { typeThree }
    </>
  );
};

Count.getInitialProps = async (ctx) => {
  const { reduxStore } = ctx;
  await reduxStore.dispatch(
    await actionCreators.asyncUpdateActionThree(1),
  );
};

const mapStateToProps = (state) => ({
  typeThree: state.typeThree,
});

export default connect(mapStateToProps, null)(Count);

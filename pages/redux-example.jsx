import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import actionCreators from '../store/action-creator';

const Detail = ({
  typeOne,
  typeTwo,
  typeThree,
  handleChangeTypeOne,
}) => {
  return (
    <div>
      这是模拟使用redux同步前后端数据页面
      <p>{typeOne}</p>
      <p>{ typeTwo }</p>
      <p>{ typeThree }</p>
      <button
        onClick={handleChangeTypeOne}
        type="button"
      >
        点击更改第一个数值
      </button>
      <hr />
      <Link href="/">
        <a>点击跳转回首页</a>
      </Link>
      <a href="/">点击a跳转回首页</a>
    </div>
  );
};

Detail.getInitialProps = async (ctx) => {
  const { reduxStore } = ctx;
  // 触发一个异步的action可以看到页面是等待异步函数处理完成之后再出现
  await reduxStore.dispatch(
    await actionCreators.asyncUpdateActionThree(105),
  );

  return {};
};

const mapStateToProps = (state) => ({
  typeOne: state.typeOne,
  typeTwo: state.typeTwo,
  typeThree: state.typeThree,
});

const mapActionsToProps = (dispatch) => ({
  handleChangeTypeOne: () => {
    dispatch(actionCreators.actionCreatorOne(2));
  },
});

export default connect(mapStateToProps, mapActionsToProps)(Detail);

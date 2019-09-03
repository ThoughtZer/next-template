import React from 'react';
import Link from 'next/link';
// import {
//   Title as MyTitle,
//   EventButton,
// } from '../styled-components/styled-example';
import css from '../style/demo.less';

const StyledComponent = () => {
  return (
    <div>
      <span className={css.example}>标题</span>
      <Link href="/">
        <button type="button">
          点击按钮尝试跳转首页
        </button>
      </Link>
    </div>
  );
};

export default StyledComponent;

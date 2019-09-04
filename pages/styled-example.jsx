import React from 'react';
import Link from 'next/link';
import {
  Title as MyTitle,
  EventButton,
  MyHeader,
} from '../styled-components/styled-example';

const StyledComponent = () => {
  return (
    <div>
      <span>标题</span>
      <EventButton>
        <MyTitle>这是标题按钮</MyTitle>
      </EventButton>
      <MyHeader imgSrc="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
      <MyHeader />
      <Link href="/">
        <button type="button">
          点击按钮尝试跳转首页
        </button>
      </Link>
    </div>
  );
};

export default StyledComponent;

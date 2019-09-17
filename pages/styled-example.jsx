import React from 'react';
import Link from 'next/link';
import {
  Title as MyTitle,
  EventButton,
} from '../styled-components/styled-example';

const StyledComponent = () => {
  return (
    <div>
      <MyTitle>标题</MyTitle>
      <Link href="/">
        <EventButton type="button">
          点击按钮尝试跳转首页
        </EventButton>
      </Link>
    </div>
  );
};

export default StyledComponent;

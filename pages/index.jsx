import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Count from '../components/count';
// 如果需要动态导入组件
// import dynamic from 'next/dynamic';
// const Count = dynamic(import('../components/count'));

const Home = () => {
  const [isShow, setShow] = useState(false);

  function handleMouseEnter() {
    setShow((show) => !show);
  }

  return (
    <div>
      <Head>
        <title>这是首页标题</title>
      </Head>
      <Count />
      <div className="css.title">这个是开发的内容</div>
      <Link href="/redux-example?id=123" prefetch={false}>
        <a>去 redux-example</a>
      </Link>
      <span className="fengexian" onMouseEnter={handleMouseEnter}> 鼠标放置显示下面内容 </span>
      {
        isShow ? (
          <Link href="/styled-example?id=123">
            <a>去 styled-example</a>
          </Link>
        ) : ''
      }
    </div>
  );
};

export default Home;
